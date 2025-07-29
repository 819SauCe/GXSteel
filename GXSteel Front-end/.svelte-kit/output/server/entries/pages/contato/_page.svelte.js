import "clsx";
import { E as attr, M as escape_html, D as pop, z as push } from "../../../chunks/index.js";
/* empty css                  */
function Form($$payload, $$props) {
  push();
  let name = "";
  let email = "";
  let message = "";
  $$payload.out += `<form style="width: 730px; height: 585px; margin: auto; background-color: white; padding: 3rem;" class="svelte-10wed60"><div style="display: flex; justify-content: center; gap: 10px;"><h1 style="text-align: center;"><strong>Envie-nos uma</strong></h1><h1 style="color: var(--background-orange);"><strong>mensagem</strong></h1></div> <p style="text-align: center;">Deixe-nos qualquer mensagem e entraremos em contato com você</p> <div style="position: relative; margin-bottom: 20px;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="gray" stroke-width="2" viewBox="0 0 24 24" style="position: absolute; top: 50%; right: 10px; transform: translateY(-50%); pointer-events: none;"><circle cx="12" cy="8" r="4"></circle><path d="M4 20c0-4 4-6 8-6s8 2 8 6"></path></svg> <input type="text"${attr("value", name)} placeholder="Nome completo" style="width: 100%; padding: 10px 40px 10px 10px;"/></div> <div style="position: relative; margin-bottom: 20px;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="gray" stroke-width="2" viewBox="0 0 24 24" style="position: absolute; top: 50%; right: 10px; transform: translateY(-50%); pointer-events: none;"><path d="M4 4h16v16H4z"></path><path d="M22,6 L12,13 L2,6"></path></svg> <input type="email"${attr("value", email)} placeholder="E-mail" style="width: 100%; padding: 10px 40px 10px 10px;"/></div> <div style="position: relative; margin-bottom: 20px;"><textarea placeholder="Mensagem" style="width: 100%; padding: 10px 40px 10px 10px; height: 100px;">`;
  const $$body = escape_html(message);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea></div> <button id="padrao_button" type="submit" style="padding: 10px 20px; width: 100%;">Enviar</button></form>`;
  pop();
}
function _page($$payload) {
  $$payload.out += `<main><div class="subheader"><h1><strong>Fale conosco</strong></h1> <p>Líder global em fornecimento de aço e soluções industriais com<br/> excelência em engenharia, inovação e qualidade certificada.</p></div> <div class="container">`;
  Form($$payload);
  $$payload.out += `<!----></div></main>`;
}
export {
  _page as default
};
