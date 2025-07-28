require('dotenv').config();
const axios = require('axios');
const { spawn } = require('child_process');

const BASE_URL = `http://localhost:${process.env.PORT || 3000}`;

const routes = [
  { method: 'GET', url: '/api/products' },
  { method: 'GET', url: '/api/catch_all_products' },
  { method: 'GET', url: '/api/protected' },
  { method: 'POST', url: '/api/login', data: { username: 'x', password: 'x' } },
];

const http = axios.create({
  baseURL: BASE_URL,
  validateStatus: () => true,
  timeout: 5000,
});

function waitForServer(timeout = 20000, intervalMs = 500) {
  return new Promise((resolve, reject) => {
    const start = Date.now();

    const check = async () => {
      try {
        const res = await http.get('/api/products');
        if (res.status < 500) {
          return resolve();
        }
      } catch (_) {
        // Aguarda nova tentativa
      }

      if (Date.now() - start > timeout) {
        return reject(new Error('Servidor não respondeu a tempo'));
      }

      setTimeout(check, intervalMs);
    };

    check();
  });
}

(async () => {
  const server = spawn('node', ['app.js'], {
    env: { ...process.env },
    stdio: ['ignore', 'inherit', 'inherit'],
  });

  try {
    await waitForServer();
    console.log('\nIniciando testes de rotas:\n');

    for (const route of routes) {
      try {
        const response = await http.request({
          method: route.method,
          url: route.url,
          data: route.data || {},
        });
        console.log(`[${route.method}] ${route.url} -> ${response.status}`);
      } catch (error) {
        console.log(`[${route.method}] ${route.url} -> ERRO: ${error.message}`);
      }
    }

    console.log('\nTestes concluídos.');
  } catch (error) {
    console.error(`Erro ao iniciar servidor: ${error.message}`);
    process.exit(1);
  } finally {
    server.kill('SIGTERM');
  }
})();
