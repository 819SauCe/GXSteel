import { E as attr, D as pop, z as push } from "../../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  let Username = "";
  let password = "";
  let checked = false;
  $$payload.out += `<main class="svelte-ba1r7d"><div class="subheader svelte-ba1r7d"><h1 class="svelte-ba1r7d"><strong>Login</strong></h1> <p class="svelte-ba1r7d">Melhor site para a compra do seu aço</p></div> <div class="login-container svelte-ba1r7d"><div class="form-container svelte-ba1r7d"><h1><strong>Login</strong></h1> <p>Melhor site para a compra do seu aço</p> <p>Novo cliente? <a href="/cadastro">Criar uma conta</a></p> <div class="input-group svelte-ba1r7d"><label class="svelte-ba1r7d">Username</label> <input${attr("value", Username)} type="text" placeholder="Username" class="svelte-ba1r7d"/></div> <div class="input-group svelte-ba1r7d"><label class="svelte-ba1r7d">Password</label> <input${attr("value", password)} type="password" placeholder="Password" class="svelte-ba1r7d"/></div> <button type="submit" class="svelte-ba1r7d">CONECTE-SE</button> <div class="continue-login svelte-ba1r7d"><input${attr("checked", checked, true)} type="checkbox"/> <span>Mantenha-me conectado</span></div> <div class="forgot-links svelte-ba1r7d"><a href="#" class="svelte-ba1r7d">Esqueceu o nome de usuário?</a> <a href="#" class="svelte-ba1r7d">Esqueceu sua senha?</a></div></div></div></main>`;
  pop();
}
export {
  _page as default
};
