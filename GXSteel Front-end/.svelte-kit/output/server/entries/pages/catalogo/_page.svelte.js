import { Q as ensure_array_like, E as attr, N as escape_html, S as stringify, T as attr_class, K as bind_props, D as pop, z as push, U as clsx, V as maybe_selected } from "../../../chunks/index.js";
/* empty css                  */
import { L as Loading } from "../../../chunks/loading.js";
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
  $$payload.out += `<h1 class="svelte-xskvp">Nossos produtos</h1> <hr class="svelte-xskvp"/> <main class="svelte-xskvp"><aside class="filtro svelte-xskvp"><h2 class="svelte-xskvp">Filtros</h2> <div class="campo svelte-xskvp"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let f = each_array[$$index];
    $$payload.out += `<div style="display: flex; gap: 1rem;"><input type="checkbox"${attr("id", f)}${attr("value", f)}${attr("checked", filtrosSelecionados.includes(f), true)}/> <label${attr("for", f)} class="svelte-xskvp">${escape_html(f)}</label></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="campo svelte-xskvp"><label for="preco" class="svelte-xskvp">Preço: R$ ${escape_html(precoMin)} – R$ ${escape_html(precoMax)}</label> <input type="range"${attr("min", minPossible)}${attr("max", maxPossible)}${attr("value", precoMin)} class="svelte-xskvp"/> <input type="range"${attr("min", minPossible)}${attr("max", maxPossible)}${attr("value", precoMax)} class="svelte-xskvp"/></div> <div class="campo svelte-xskvp"><label for="estrelas" class="svelte-xskvp">Mínimo de avaliações</label> <select class="svelte-xskvp">`;
  $$payload.select_value = estrelasMin;
  $$payload.out += `<option value=""${maybe_selected($$payload, "")}>Todas</option><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let n = each_array_1[$$index_1];
    $$payload.out += `<option${attr("value", n)}${maybe_selected($$payload, n)}>${escape_html(n)} estrela${escape_html(n > 1 ? "s" : "")}</option>`;
  }
  $$payload.out += `<!--]-->`;
  $$payload.select_value = void 0;
  $$payload.out += `</select></div> <div class="campo svelte-xskvp"><label for="ordenar" class="svelte-xskvp">Ordenar por</label> <select class="svelte-xskvp">`;
  $$payload.select_value = ordenar;
  $$payload.out += `<option value=""${maybe_selected($$payload, "")}>--</option><option value="curtidos"${maybe_selected($$payload, "curtidos")}>Mais curtidos</option><option value="maisVendidos"${maybe_selected($$payload, "maisVendidos")}>Mais vendidos</option><option value="menosVendidos"${maybe_selected($$payload, "menosVendidos")}>Menos vendidos</option>`;
  $$payload.select_value = void 0;
  $$payload.out += `</select></div></aside> <div class="vitrine svelte-xskvp"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let product = each_array_2[$$index_2];
    Product_card($$payload, { product });
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[-->";
    Loading($$payload);
  }
  $$payload.out += `<!--]--></div></main>`;
  pop();
}
export {
  _page as default
};
