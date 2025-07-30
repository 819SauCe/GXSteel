import { G as store_get, Q as ensure_array_like, E as attr, T as attr_class, N as escape_html, J as unsubscribe_stores, D as pop, z as push, S as stringify } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let produto = [];
  let mainImage = "";
  let thumbnails = [];
  let q_ratings = 0;
  store_get($$store_subs ??= {}, "$page", page).params.id;
  const each_array = ensure_array_like(thumbnails);
  $$payload.out += `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"/> <div class="container mt-5"><div class="row"><div class="col-md-6 mb-4"><img${attr("src", mainImage)} alt="Product" class="img-fluid rounded mb-3 product-image svelte-q5d10x"/> <div class="d-flex justify-content-between"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let thumb = each_array[$$index];
    $$payload.out += `<button type="button" class="thumbnail-wrapper svelte-q5d10x" style="background-color: transparent;" tabindex="0"><img${attr("src", thumb)} alt="Thumbnail"${attr_class(`thumbnail rounded ${stringify(mainImage === thumb ? "active" : "")}`, "svelte-q5d10x")}/></button>`;
  }
  $$payload.out += `<!--]--></div></div> <div class="col-md-6"><h2 class="mb-3">${escape_html(produto.name)}</h2> <p class="text-muted mb-4">SKU: ${escape_html(produto._id)}</p> <div class="mb-3"><i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-half text-warning"></i> <span class="ms-2">4.5 (${escape_html(q_ratings)} reviews)</span></div> <p class="mb-4">${escape_html(produto.description)}</p> <button class="btn btn-primary btn-lg mb-3 me-2 svelte-q5d10x">Peça agora!</button> <button class="btn btn-outline-secondary btn-lg mb-3 svelte-q5d10x"><i${attr_class(`bi ${"bi-heart"}`, "svelte-q5d10x")}></i> ${escape_html(" Adicionar aos Favoritos")}</button> <div class="mt-4"><h5>Principais Características:</h5> <ul><li>Alta resistência e durabilidade</li> <li>Versatilidade para múltiplas aplicações</li> <li>Qualidade certificada</li> <li>Entrega rápida e confiável</li></ul></div></div></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
