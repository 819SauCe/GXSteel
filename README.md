# GXSteel — Webstore Demo

Este é um projeto demonstrativo baseado na estrutura do sistema comercial da empresa onde atuo como desenvolvedor da empresa global-trade. Todo o código e conteúdo aqui presente são públicos, sem dados sensíveis ou internos.

## 🧱 Tecnologias Utilizadas

- 📦 **Backend:** Node.js + Express + MongoDB  
- 🎨 **Frontend:** sveltekit + Bootstrap, licenciado.
- 🚀 **Deploy:** Vercel (versão demo)

---

## 🌐 Demonstração

- 🧪 [Versão pública de demonstração (Vercel)](https://docummentation-gxsteel.vercel.app)
- 🛒 [Loja oficial em produção]([https://gxsteel.com.br)]

---

## ⚙️ Funcionalidades

- Autenticação com JWT
- Cadastro e login de usuários
- Inserção, listagem e edição de produtos
- Middleware para proteção de rotas
- Paginação e filtros
- Backend documentado com Swagger

---

## 📁 Organização do Repositório

GXSteel/
├── GXSteel Back-end/ # API Node.js (Express, MongoDB)
├── documentation/ # Documentação Swagger (deployado na Vercel)
└── .github/workflows/ # Testes automatizados via GitHub Actions


---

## 🛠️ Executar Localmente

```bash
cd "GXSteel Back-end"
npm install
npm start
```

Crie um arquivo .env com as seguintes variáveis:
```bash
PORT=3000
JWT_SECRET=sua_chave_secreta
MONGODB_URI=sua_uri
CORS_ORIGIN=http://localhost:3000
```

## 📄 Licença

Este projeto é demonstrativo e não contém dados sensíveis.
O template visual da interface é licenciado.
Todos os dados exibidos são mockados para fins de simulação.

