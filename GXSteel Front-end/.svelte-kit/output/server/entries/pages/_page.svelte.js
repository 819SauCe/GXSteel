import { P as ensure_array_like, E as attr, M as escape_html, J as bind_props, D as pop, z as push, Q as spread_props } from "../../chunks/index.js";
/* empty css               */
function Produto_container($$payload, $$props) {
  push();
  let id = $$props["id"];
  let preco = $$props["preco"];
  let precoOriginal = $$props["precoOriginal"];
  let titulo = $$props["titulo"];
  let descricao = $$props["descricao"];
  let imagem = $$props["imagem"];
  let stars = $$props["stars"];
  const each_array = ensure_array_like(Array(Number(stars)));
  $$payload.out += `<div class="card p-3 shadow-sm" style="max-width: 600px;"><div class="d-flex align-items-center mb-2"><img${attr("src", imagem[0])} alt="produto" style="width: 80px; height: auto;" class="me-3"/> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    each_array[$$index];
    $$payload.out += `<div class="text-warning fs-5" style="display: flex;">★</div>`;
  }
  $$payload.out += `<!--]--></div> <h5 class="fw-bold">${escape_html(titulo)}</h5> <p class="text-muted mb-2 descricao-limitada svelte-obz7ui">${escape_html(descricao)}</p> <div class="d-flex align-items-center justify-content-between"><div><span class="fw-bold text-danger fs-5">R$${escape_html(preco)}</span> <span class="text-decoration-line-through text-muted ms-2">R$${escape_html(precoOriginal)}</span></div> <button class="btn btn-orange text-white fw-bold svelte-obz7ui">Adicionar Ao Carrinho</button></div></div>`;
  bind_props($$props, {
    id,
    preco,
    precoOriginal,
    titulo,
    descricao,
    imagem,
    stars
  });
  pop();
}
function Blog_container($$payload, $$props) {
  let day = $$props["day"];
  let month = $$props["month"];
  let year = $$props["year"];
  let title = $$props["title"];
  let desc = $$props["desc"];
  let img = $$props["img"];
  const meses = [
    "JANEIRO",
    "FEVEREIRO",
    "MARÇO",
    "ABRIL",
    "MAIO",
    "JUNHO",
    "JULHO",
    "AGOSTO",
    "SETEMBRO",
    "OUTUBRO",
    "NOVEMBRO",
    "DEZEMBRO"
  ];
  $$payload.out += `<div class="blog-card svelte-1bx53wh"><div class="blog-header svelte-1bx53wh"><svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ff5b00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" class="svelte-1bx53wh"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> <p class="svelte-1bx53wh">${escape_html(day)} DE ${escape_html(meses[month - 1])} DE ${escape_html(year)}</p> <div class="icons svelte-1bx53wh"><svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ff5b00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" class="svelte-1bx53wh"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ff5b00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" class="svelte-1bx53wh"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></div></div> <hr/> <h1 class="svelte-1bx53wh">${escape_html(title)}</h1> <p class="svelte-1bx53wh">${escape_html(desc)}</p> <img${attr("src", img)} alt="blog-img" class="blog-img svelte-1bx53wh"/></div>`;
  bind_props($$props, { day, month, year, title, desc, img });
}
function Wpp_up($$payload) {
  const whatsappNumber = "551640424000";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  $$payload.out += `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/> <a class="icon wpp svelte-znagvy"${attr("href", whatsappLink)} target="_blank"><i class="fab fa-whatsapp"></i></a> <div class="icon up svelte-znagvy"><i class="fas fa-arrow-up"></i></div>`;
}
function _page($$payload, $$props) {
  push();
  let vendas_mes = 100;
  let experiencia = 100;
  let membros = 100;
  const equipeOriginal = [
    {
      nome: "BELLA MIKE",
      cargo: "THE MANAGER",
      foto: "./253x253-0.jpg"
    },
    {
      nome: "HESSY KOWA",
      cargo: "THE STAINLESSAÇO ER",
      foto: "./253x253-1.jpg"
    },
    {
      nome: "MICHEL BON",
      cargo: "THE WORKER",
      foto: "./253x253-2.jpg"
    },
    {
      nome: "JHON SMITH",
      cargo: "THE WORKER",
      foto: "./253x253-3.jpg"
    },
    {
      nome: "LUE ABELL",
      cargo: "THE CEO",
      foto: "./253x253.jpg"
    }
  ];
  let produtos = [];
  let blog = [
    {
      id: 1,
      day: 7,
      month: 5,
      year: 2025,
      title: "Dicas para o melhor design de Structre de aço",
      desc: "Com nosso conhecimento e experiência, é nosso objetivo atender às necessidades de nossos clientes, indo além de suas expectativas.",
      img: "./350x200.jpg"
    },
    {
      id: 2,
      day: 8,
      month: 5,
      year: 2025,
      title: "Dicas para o melhor design de Structre de aço",
      desc: "Com nosso conhecimento e experiência, é nosso objetivo atender às necessidades de nossos clientes, indo além de suas expectativas.",
      img: "./350x200.jpg"
    },
    {
      id: 3,
      day: 9,
      month: 5,
      year: 2025,
      title: "Dicas para o melhor design de Structre de aço",
      desc: "Com nosso conhecimento e experiência, é nosso objetivo atender às necessidades de nossos clientes, indo além de suas expectativas.",
      img: "./350x200.jpg"
    }
  ];
  let equipe = [...equipeOriginal, ...equipeOriginal];
  const each_array = ensure_array_like(equipe);
  const each_array_2 = ensure_array_like(blog.slice(0, 3));
  $$payload.out += `<main style="display: flex; gap: 1rem; margin-top: 5rem; justify-content: center;"><div style="position: relative; width: fit-content;"><img src="./570x420.jpg" alt="rolos"/> <div class="container-experiencia"><p style="font-size: 58px;"><strong>25</strong></p> <p>ANOS DE EXPERIÊNCIA</p></div> <img class="njkads" src="./275x200.jpg" alt="njkads"/></div> <div style="display: flex; flex-direction:column;gap:0px;"><p style="color: var(--button-background);">Sobre nós</p> <h1 style="font-size: 46px; font-weight: 700; line-height: 1;">Melhor aço,</h1> <h1 style="color: var(--button-background); font-size: 46px; font-weight: 700; line-height: 1;">SEM RISCOS</h1> <h4 style="font-size: 24px;margin-top: 25px;">Uma força global na produção e<br/> engenharia de aço.</h4> <p>Com expertise reconhecida, buscamos atender e superar as<br/> expectativas dos clientes em soluções metálicas industriais e<br/> ornamentais.</p> <button class="cotacao-btn">Veja mais</button></div></main> <main style="margin-top: 10rem;"><div style="display: flex;"><div><p style="color: var(--button-background); margin-left: 12rem;">Conheça nosso time</p> <h1 style="margin-left: 12rem;">NOSSA EQUIPE</h1></div> <div class="btn-prox-ant"><button class="botao-carrossel" aria-label="true"><span class="carousel-control-prev-icon" aria-hidden="true"></span></button> <button class="botao-carrossel" aria-label="true"><span class="carousel-control-next-icon" aria-hidden="true"></span></button></div></div> <div class="equipe"><div class="carrossel-viewport"><div class="carrossel-container"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let pessoa = each_array[$$index];
    $$payload.out += `<div class="carrossel-item"><img${attr("src", pessoa.foto)}${attr("alt", pessoa.nome)}/> <div><p>${escape_html(pessoa.nome)}</p> <p>${escape_html(pessoa.cargo)}</p></div></div>`;
  }
  $$payload.out += `<!--]--></div></div></div></main> <main class="contact-button-and-img"><div class="container-contrate"><img src="./145x180.png" alt="bobina de aço"/> <h4>NOSSO AÇO É O MELHOR</h4> <button id="padrao_button" class="contrate-button" aria-label="true">Contrate agora</button></div></main> <main><div id="div-background" class="divisoria-data"><img id="img-background" class="img-background-class" src="./HP1.-bg.jpg" alt="backround-img"/> <div class="dados"><div style="width: 100%;"><p style="color: var(--background-orange); font-size: 2rem; font-weight: 600;">${escape_html(vendas_mes)}+</p> <p style="color: white; font-size: 1.3rem; font-weight: 600;">Vendas Completas por Mês</p></div> <div style="width: 100%;"><p style="color: var(--background-orange); font-size: 2rem; font-weight: 600;">${escape_html(experiencia)}+</p> <p style="color: white; font-size: 1.3rem; font-weight: 600;">Anos de experiência prática</p></div> <div style="width: 100%;"><p style="color: var(--background-orange); font-size: 2rem; font-weight: 600;">${escape_html(membros)}</p> <p style="color: white; font-size: 1.3rem; font-weight: 600;">Membros da equipe incríveis</p></div></div></div></main> `;
  if (produtos.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array_1 = ensure_array_like(produtos.slice(0, 4));
    $$payload.out += `<main><div id="title-main"><p>Nossos produtos</p> <h1>Produtos em Destaque</h1></div> <div id="vitrine-padrão" class="vitrine"><!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let produto = each_array_1[$$index_1];
      Produto_container($$payload, spread_props([produto]));
    }
    $$payload.out += `<!--]--></div> `;
    if (produtos.length > 4) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<button class="veja-mais" id="padrao_button">Veja mais</button>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></main>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <main class="background-imgs-siga"><div class="img-esquerda"><h2>Aço<br/>Produção</h2> <img class="img-fundo" src="./660x348.jpg" alt="bobinas" style="left: 0;"/></div> <div class="img-direita"><h2>Siga nossa loja<br/>No Instagram</h2> <img class="img-fundo" src="./660x348-0.jpg" alt="tubos" style="right: 0;"/></div></main> <main class="apresentacao-blog"><p class="fkdaj">Nosso blog</p> <h1 class="dargbjh">Leia nosso blog</h1> <div class="blog-container"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let item = each_array_2[$$index_2];
    Blog_container($$payload, spread_props([item]));
  }
  $$payload.out += `<!--]--></div></main> `;
  Wpp_up($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
