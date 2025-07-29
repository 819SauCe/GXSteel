import { V as head, E as attr, D as pop, z as push } from "../../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  let Username = "";
  let password = "";
  let checked = false;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Login | Plataforma de Vendas de Aço de Alta Qualidade</title>`;
    $$payload2.out += `<meta name="description" content="Acesse a plataforma de pedidos para compra de aço com procedência garantida, suporte técnico e entrega em todo o Brasil."/>`;
  });
  $$payload.out += `<main class="svelte-9tc9c6"><div class="subheader svelte-9tc9c6"><h1 class="svelte-9tc9c6"><strong>Área de Acesso – Distribuidor Oficial de Aço NISCO</strong></h1> <p class="svelte-9tc9c6">Conecte-se e aproveite as melhores condições para adquirir aço de alta qualidade, com entrega rápida e garantia de procedência.</p></div> <div class="login-container svelte-9tc9c6"><div class="form-container svelte-9tc9c6"><h1><strong>Login</strong></h1> <p>Solicite aço com rastreabilidade e suporte técnico direto.</p> <p>Novo cliente? <a href="/cadastro">Criar uma conta</a></p> <div class="input-group svelte-9tc9c6"><label for="username" class="svelte-9tc9c6">Username</label> <input${attr("value", Username)} type="text" placeholder="Username" class="svelte-9tc9c6"/></div> <div class="input-group svelte-9tc9c6"><label for="password" class="svelte-9tc9c6">Password</label> <input${attr("value", password)} type="password" placeholder="Password" class="svelte-9tc9c6"/></div> <button type="submit" class="svelte-9tc9c6">CONECTE-SE</button> <div class="continue-login svelte-9tc9c6"><input${attr("checked", checked, true)} type="checkbox"/> <span>Mantenha-me conectado</span></div> <div class="forgot-links svelte-9tc9c6"><a href="/recuperarusuario" class="svelte-9tc9c6">Esqueceu seu usuário?</a> <a href="/recuperarsenha" class="svelte-9tc9c6">Esqueceu sua senha?</a></div></div></div></main>`;
  pop();
}
export {
  _page as default
};
