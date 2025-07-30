import { Q as ensure_array_like, E as attr, N as escape_html, K as bind_props, D as pop, z as push, F as head, R as spread_props } from "../../chunks/index.js";
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
  $$payload.out += `<!--]--></div> <h5 class="fw-bold">${escape_html(titulo)}</h5> <p class="text-muted mb-2 descricao-limitada svelte-obz7ui">${escape_html(descricao)}</p> <div class="d-flex align-items-center justify-content-between"><button class="btn btn-orange text-white fw-bold svelte-obz7ui">Pedir agora</button></div></div>`;
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
  const each_array_1 = ensure_array_like(blog.slice(0, 3));
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Aço de Alta Qualidade | Soluções Industriais, Produtos e Engenharia – GXSteel</title>`;
    $$payload2.out += `<meta name="description" content="GXSteel - Soluções Industriais, Produtos e Engenharia - Acesso aos melhores produtos de aço de alta qualidade."/>`;
  });
  $$payload.out += `<main><section class="sobre-nos-section"><div class="sobre-nos-container"><div class="sobre-nos-imagem"><img src="./570x420.jpg" alt="rolos de aço"/> <div class="container-experiencia"><p class="anos-numero"><strong>25</strong></p> <p>ANOS DE EXPERIÊNCIA</p></div> <img class="njkads" src="./275x200.jpg" alt="linha de produção"/></div> <div class="sobre-nos-texto"><p class="subtitulo">Sobre nós</p> <h1 class="titulo">Melhor aço,<br/><span class="destaque">SEM RISCOS</span></h1> <h4 class="descricao-curta">Uma força global na produção e engenharia de aço.</h4> <p class="descricao">Com expertise reconhecida, buscamos atender e superar as expectativas dos clientes em soluções metálicas industriais e ornamentais.</p> <button class="cotacao-btn">Veja mais</button></div></div></section> <section class="ceo-section"><div class="ceo-content" style="margin-top: 3rem;"><div class="ceo-texto"><p class="ceo-intro">Liderança estratégica</p> <h2 class="ceo-titulo">Conheça nosso CEO</h2> <p class="ceo-descricao">À frente da nossa operação, <strong>Roberto Bertolossi</strong> conduz a equipe com foco em inovação, excelência logística e atendimento técnico de alto padrão. Sua gestão impulsiona a entrega de soluções em aço com rastreabilidade, desempenho e compromisso total com o cliente.</p></div> <img src="roberto.png" alt="Roberto Bertolossi - CEO" class="ceo-foto"/></div></section> <section class="contact-button-and-img"><div class="container-contrate"><img src="./145x180.png" alt="bobina de aço"/> <h4>Qualidade Certificada, Resultado Garantido</h4> <button id="padrao_button" class="contrate-button" aria-label="true">Compre agora</button></div></section> <section><div id="div-background" class="divisoria-data"><img id="img-background" class="img-background-class" src="./HP1.-bg.jpg" alt="backround-img"/> <div class="dados"><div style="width: 100%;"><p class="text1">${escape_html(vendas_mes)}+</p> <p class="text" style="color: white; font-weight: 600;">Vendas Completas por Mês</p></div> <div style="width: 100%;"><p class="text1">${escape_html(experiencia)}+</p> <p class="text" style="color: white; font-weight: 600;">Anos de experiência prática</p></div> <div style="width: 100%;"><p class="text1">${escape_html(membros)}</p> <p class="text" style="color: white; font-weight: 600;">Membros da equipe incríveis</p></div></div></div></section> `;
  if (produtos.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(produtos.slice(0, 4));
    $$payload.out += `<section><div id="title-main"><p style="margin-top: 3rem;">Nossos produtos</p> <h2 style="margin-left: 12rem;">Produtos em Destaque</h2></div> <div id="vitrine-padrão" class="vitrine"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let produto = each_array[$$index];
      Produto_container($$payload, spread_props([produto]));
    }
    $$payload.out += `<!--]--></div> `;
    if (produtos.length > 4) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<button class="veja-mais" id="padrao_button" style="margin-bottom: 3rem;">Veja mais</button>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></section>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <section class="instagram-acos-section"><div class="instagram-col"><img src="./tubos.jpg" alt="Bobinas de aço"/> <h2>Aço<br/>Produção</h2></div> <div class="instagram-col"><img src="./bobinas.jpg" alt="Tubos de aço"/> <h2>Siga nossa loja<br/>No Instagram</h2></div></section> <section class="apresentacao-blog"><p class="fkdaj">Nosso blog</p> <h2 class="dargbjh">Leia nosso blog</h2> <div class="blog-container"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let item = each_array_1[$$index_1];
    Blog_container($$payload, spread_props([item]));
  }
  $$payload.out += `<!--]--></div></section> `;
  Wpp_up($$payload);
  $$payload.out += `<!----></main>`;
  pop();
}
export {
  _page as default
};
