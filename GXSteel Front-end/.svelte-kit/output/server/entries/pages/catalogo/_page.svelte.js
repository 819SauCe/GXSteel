import { P as ensure_array_like, E as attr, M as escape_html, R as stringify, S as attr_class, J as bind_props, D as pop, z as push, T as clsx, U as maybe_selected } from "../../../chunks/index.js";
/* empty css                  */
function Product_card($$payload, $$props) {
  push();
  let product = $$props["product"];
  const each_array = ensure_array_like(Array(Number(product.stars)).fill(0));
  $$payload.out += `<div class="card card-fixed m-3 svelte-ru78kc"><a${attr("href", `/produto/${stringify(product.id)}`)}><img${attr("src", product.imagem[0])} class="card-img-top svelte-ru78kc"${attr("alt", product.titulo)}/></a> <div class="card-body svelte-ru78kc"><a${attr("href", `/produto/${stringify(product.id)}`)}><h5 class="card-title svelte-ru78kc">${escape_html(product.titulo)}</h5></a> <p class="card-text svelte-ru78kc" style="font-size: 0.95rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${escape_html(product.descricao)}</p> <p class="card-text mb-1 svelte-ru78kc"><span class="text-danger fw-bold svelte-ru78kc">R$ ${escape_html(product.preco)}</span> `;
  if (product.precoOriginal) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<span class="text-muted text-decoration-line-through ms-2">R$ ${escape_html(product.precoOriginal)}</span>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></p> <p class="mb-2 d-flex align-items-center"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    each_array[i];
    $$payload.out += `<i class="bi bi-star-fill text-warning me-1 svelte-ru78kc"></i>`;
  }
  $$payload.out += `<!--]--> <span class="text-muted ms-1">(${escape_html(product.stars)})</span></p> <div class="d-flex justify-content-between align-items-center"><a${attr("href", `/produto/${stringify(product.id)}`)} class="btn btn-primary svelte-ru78kc">Comprar</a> <div class="d-flex align-items-center"><button class="like-btn svelte-ru78kc" aria-label="true"><i${attr_class(clsx("bi bi-heart"))}></i></button> <span class="text-muted ms-2">(${escape_html(product.liked)})</span></div></div></div></div>`;
  bind_props($$props, { product });
  pop();
}
function _page($$payload, $$props) {
  push();
  let precos, minPossible, maxPossible, produtosFiltrados;
  let produtos = [];
  let precoMin = minPossible;
  let precoMax = maxPossible;
  let estrelasMin = "";
  let ordenar = "";
  let cartegory = [];
  let filtrosSelecionados = [];
  function ordenarProdutos(lista) {
    return lista;
  }
  precos = produtos.map((p) => p.preco || 0);
  minPossible = Math.min(...precos);
  maxPossible = Math.max(...precos);
  precoMin = minPossible;
  precoMax = maxPossible;
  produtosFiltrados = ordenarProdutos(produtos.filter((p) => {
    const precoOK = p.preco >= precoMin && p.preco <= precoMax;
    const filtroOK = filtrosSelecionados.length === 0 || filtrosSelecionados.every((f) => p.filtro.toLowerCase().includes(f));
    return precoOK && filtroOK;
  }));
  const each_array = ensure_array_like(cartegory);
  const each_array_1 = ensure_array_like([1, 2, 3, 4, 5]);
  const each_array_2 = ensure_array_like(produtosFiltrados);
  $$payload.out += `<h1 class="svelte-wknuyz">Nossos produtos</h1> <hr class="svelte-wknuyz"/> <main class="svelte-wknuyz"><aside class="filtro svelte-wknuyz"><h2 class="svelte-wknuyz">Filtros</h2> <div class="campo svelte-wknuyz"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let f = each_array[$$index];
    $$payload.out += `<div style="display: flex; gap: 1rem;" class="svelte-wknuyz"><input type="checkbox"${attr("id", f)}${attr("value", f)}${attr("checked", filtrosSelecionados.includes(f), true)} class="svelte-wknuyz"/> <label${attr("for", f)} class="svelte-wknuyz">${escape_html(f)}</label></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="campo svelte-wknuyz"><label class="svelte-wknuyz">Preço: R$ ${escape_html(precoMin)} – R$ ${escape_html(precoMax)}</label> <input type="range"${attr("min", minPossible)}${attr("max", maxPossible)}${attr("value", precoMin)} class="svelte-wknuyz"/> <input type="range"${attr("min", minPossible)}${attr("max", maxPossible)}${attr("value", precoMax)} class="svelte-wknuyz"/></div> <div class="campo svelte-wknuyz"><label class="svelte-wknuyz">Estrelas mínimas</label> <select class="svelte-wknuyz">`;
  $$payload.select_value = estrelasMin;
  $$payload.out += `<option value=""${maybe_selected($$payload, "")} class="svelte-wknuyz">Todas</option><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let n = each_array_1[$$index_1];
    $$payload.out += `<option${attr("value", n)}${maybe_selected($$payload, n)} class="svelte-wknuyz">${escape_html(n)} estrela${escape_html(n > 1 ? "s" : "")}</option>`;
  }
  $$payload.out += `<!--]-->`;
  $$payload.select_value = void 0;
  $$payload.out += `</select></div> <div class="campo svelte-wknuyz"><label class="svelte-wknuyz">Ordenar por</label> <select class="svelte-wknuyz">`;
  $$payload.select_value = ordenar;
  $$payload.out += `<option value=""${maybe_selected($$payload, "")} class="svelte-wknuyz">--</option><option value="curtidos"${maybe_selected($$payload, "curtidos")} class="svelte-wknuyz">Mais curtidos</option><option value="maisVendidos"${maybe_selected($$payload, "maisVendidos")} class="svelte-wknuyz">Mais vendidos</option><option value="menosVendidos"${maybe_selected($$payload, "menosVendidos")} class="svelte-wknuyz">Menos vendidos</option>`;
  $$payload.select_value = void 0;
  $$payload.out += `</select></div></aside> <div class="vitrine svelte-wknuyz"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let product = each_array_2[$$index_2];
    Product_card($$payload, { product });
  }
  $$payload.out += `<!--]--> `;
  if (produtosFiltrados.length === 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="preloader svelte-wknuyz"><svg class="cart svelte-wknuyz" role="img" aria-label="Shopping cart line animation" viewBox="0 0 128 128" width="128px" height="128px" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" class="svelte-wknuyz"><g class="cart__track svelte-wknuyz" stroke="hsla(0,10%,10%,0.1)"><polyline points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80" class="svelte-wknuyz"></polyline><circle cx="43" cy="111" r="13" class="svelte-wknuyz"></circle><circle cx="102" cy="111" r="13" class="svelte-wknuyz"></circle></g><g class="cart__lines svelte-wknuyz" stroke="currentColor"><polyline class="cart__top svelte-wknuyz" points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80" stroke-dasharray="338 338" stroke-dashoffset="-338"></polyline><g class="cart__wheel1 svelte-wknuyz" transform="rotate(-90,43,111)"><circle class="cart__wheel-stroke svelte-wknuyz" cx="43" cy="111" r="13" stroke-dasharray="81.68 81.68" stroke-dashoffset="81.68"></circle></g><g class="cart__wheel2 svelte-wknuyz" transform="rotate(90,102,111)"><circle class="cart__wheel-stroke svelte-wknuyz" cx="102" cy="111" r="13" stroke-dasharray="81.68 81.68" stroke-dashoffset="81.68"></circle></g></g></g></svg> <div class="preloader__text svelte-wknuyz"><p class="preloader__msg svelte-wknuyz">Espere um momento</p> <p class="preloader__msg preloader__msg--last svelte-wknuyz">Estamos vendo algo para vc</p></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></main>`;
  pop();
}
export {
  _page as default
};
