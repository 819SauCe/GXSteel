import { Q as ensure_array_like, E as attr, N as escape_html, S as stringify, T as attr_class, K as bind_props, D as pop, z as push, U as clsx } from "../../../chunks/index.js";
/* empty css                  */
import { L as Loading } from "../../../chunks/Loading.js";
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
  const each_array = ensure_array_like(produtosFiltrados);
  $$payload.out += `<h1 class="svelte-h9vanf">Nossos produtos</h1> <hr class="svelte-h9vanf"/> <main class="svelte-h9vanf"><div class="vitrine svelte-h9vanf"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let product = each_array[$$index];
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
