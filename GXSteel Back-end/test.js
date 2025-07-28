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

function waitForServer(timeout = 10000) {
  return new Promise((resolve) => {
    const start = Date.now();
    const interval = setInterval(async () => {
      try {
        await axios.get(BASE_URL + '/api/products');
        clearInterval(interval);
        resolve();
      } catch (e) {
        if (Date.now() - start > timeout) {
          clearInterval(interval);
          console.error('Servidor não respondeu a tempo');
          process.exit(1);
        }
      }
    }, 500);
  });
}

(async () => {
  const server = spawn('node', ['app.js'], {
    env: { ...process.env },
    stdio: ['ignore', 'inherit', 'inherit'],
  });

  await waitForServer();

  console.log('\n🔍 Testando rotas:\n');

  for (const route of routes) {
    try {
      const response = await axios({
        method: route.method,
        url: BASE_URL + route.url,
        data: route.data || {},
        validateStatus: () => true,
      });
      console.log(`[${route.method}] ${route.url} → ${response.status}`);
    } catch (e) {
      console.log(`[${route.method}] ${route.url} → ERRO`);
    }
  }

  server.kill();
  console.log('\n✅ Testes finalizados.');
})();
