import { G as store_get, Q as ensure_array_like, E as attr, T as attr_class, N as escape_html, S as stringify, J as unsubscribe_stores, D as pop, z as push } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let produto = [];
  let reviews = [];
  let mainImage = "";
  let thumbnails = [];
  let quantity = 1;
  let q_ratings = 0;
  let rating = 0;
  let comment = "";
  store_get($$store_subs ??= {}, "$page", page).params.id;
  const each_array = ensure_array_like(thumbnails);
  const each_array_1 = ensure_array_like(Array(5));
  $$payload.out += `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"/> <div class="container mt-5"><div class="row"><div class="col-md-6 mb-4"><img${attr("src", mainImage)} alt="Product" class="img-fluid rounded mb-3 product-image svelte-q5d10x"/> <div class="d-flex justify-content-between"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let thumb = each_array[$$index];
    $$payload.out += `<button type="button" class="thumbnail-wrapper svelte-q5d10x" style="background-color: transparent;" tabindex="0"><img${attr("src", thumb)} alt="Thumbnail"${attr_class(`thumbnail rounded ${stringify(mainImage === thumb ? "active" : "")}`, "svelte-q5d10x")}/></button>`;
  }
  $$payload.out += `<!--]--></div></div> <div class="col-md-6"><h2 class="mb-3">${escape_html(produto.name)}</h2> <p class="text-muted mb-4">SKU: ${escape_html(produto._id)}</p> <div class="mb-3"><span class="h4 me-2">$${escape_html(produto.price)}</span> <span class="text-muted"><s>$${escape_html(produto.old_price)}</s></span></div> <div class="mb-3"><i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-half text-warning"></i> <span class="ms-2">4.5 (${escape_html(q_ratings)} reviews)</span></div> <p class="mb-4">${escape_html(produto.description)}</p> <div class="mb-4"><label for="quantity" class="form-label">Quantidade:</label> <input type="number" class="form-control" id="quantity"${attr("value", quantity)} min="1" style="width: 80px"/></div> <button class="btn btn-primary btn-lg mb-3 me-2 svelte-q5d10x">Peça agora!</button> <button class="btn btn-outline-secondary btn-lg mb-3 svelte-q5d10x"><i${attr_class(`bi ${"bi-heart"}`, "svelte-q5d10x")}></i> ${escape_html(" Adicionar aos Favoritos")}</button> <div class="mt-4"><h5>Principais Características:</h5> <ul><li>Alta resistência e durabilidade</li> <li>Versatilidade para múltiplas aplicações</li> <li>Qualidade certificada</li> <li>Entrega rápida e confiável</li></ul></div></div></div></div> <section class="container py-5"><h2 class="mb-4">Avaliações</h2> <div class="mb-3"><i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-half text-warning"></i> <span class="ms-2">4.5 (${escape_html(q_ratings)} reviews)</span></div> <div class="card shadow-sm mb-4"><div class="card-body"><h5 class="card-title">Escreva uma avaliação</h5> <form><div class="mb-3"><label for="rating" class="form-label">Avaliação</label> <div class="mb-3 d-flex align-items-center"><!--[-->`;
  for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
    each_array_1[i];
    $$payload.out += `<i${attr_class("bi fs-4 me-1", void 0, {
      "bi-star-fill": i < rating,
      "bi-star": i >= rating,
      "text-warning": i < rating,
      "text-muted": i >= rating
    })} style="cursor: pointer;"></i>`;
  }
  $$payload.out += `<!--]--> <span class="ms-2">${escape_html(rating)} estrela(s)</span></div></div> <div class="mb-3"><label for="comment" class="form-label">Comentário</label> <textarea class="form-control" id="comment" rows="3">`;
  const $$body = escape_html(comment);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea></div> <button type="submit" class="btn btn-primary svelte-q5d10x">Enviar Avaliação</button></form></div></div> `;
  if (reviews.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array_2 = ensure_array_like(reviews);
    $$payload.out += `<!--[-->`;
    for (let $$index_3 = 0, $$length = each_array_2.length; $$index_3 < $$length; $$index_3++) {
      let review = each_array_2[$$index_3];
      const each_array_3 = ensure_array_like(Array(5));
      $$payload.out += `<div class="card mb-3 shadow-sm"><div class="card-body d-flex align-items-start"><img${attr("src", review.img)} alt="Avatar" class="rounded-circle me-3" style="width: 50px; height: 50px; object-fit: cover;"/> <div><h6 class="mb-1">${escape_html(review.name)}</h6> <div class="mb-2"><!--[-->`;
      for (let i = 0, $$length2 = each_array_3.length; i < $$length2; i++) {
        each_array_3[i];
        $$payload.out += `<i${attr_class(`bi ${stringify(i < review.rating ? "bi-star-fill text-warning" : "bi-star text-muted")}`)}></i>`;
      }
      $$payload.out += `<!--]--></div> <p class="mb-1">${escape_html(review.comment)}</p> <small class="text-muted">${escape_html(new Date(review.createdAt).toLocaleDateString())}</small></div></div></div>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></section>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
