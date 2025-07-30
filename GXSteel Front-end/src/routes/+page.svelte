<script>
  import { onMount } from "svelte";
  import { tick } from "svelte";
  import ProdutoContainer from '../components/Produto_container.svelte';
  import "../style/principal_page.css";
  import BlogContainer from "../components/Blog_container.svelte";
  import WppUp from "../components/Wpp-up.svelte";
  
  let itemContainer;
  let anos_experiencia = 25
  let vendas_mes = 100;
  let experiencia = 100;
  let membros = 100;
  let produtos = [];

  let blog = [
    { id: 1, day: 7, month: 5, year: 2025, title: "Dicas para o melhor design de Structre de aço", desc: "Com nosso conhecimento e experiência, é nosso objetivo atender às necessidades de nossos clientes, indo além de suas expectativas.", img:"./350x200.jpg"},
    { id: 2, day: 8, month: 5, year: 2025, title: "Dicas para o melhor design de Structre de aço", desc: "Com nosso conhecimento e experiência, é nosso objetivo atender às necessidades de nossos clientes, indo além de suas expectativas.", img:"./350x200.jpg"},
    { id: 3, day: 9, month: 5, year: 2025, title: "Dicas para o melhor design de Structre de aço", desc: "Com nosso conhecimento e experiência, é nosso objetivo atender às necessidades de nossos clientes, indo além de suas expectativas.", img:"./350x200.jpg"}
  ]

  function redirectToAbout() {
    location.href = "/sobre"
  }

  function redirectToCatalog() {
    location.href = "/catalogo"
  }

  onMount(async () => {
    if (itemContainer && itemContainer.scrollLeft === 0) {
      itemContainer.scrollLeft = 0;
    }

    const interval = setInterval(async () => {
      if (vendas_mes > 0) vendas_mes--;
      if (experiencia > 0) experiencia--;
      if (membros > 3) membros--;
      await tick();
      if (vendas_mes <= 0 && experiencia <= 0 && membros <= 3) clearInterval(interval);
    });

    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/products?page=1&limit=20&isActive=true`);
    const data = await res.json();
    produtos = data.map(p => ({
      id: p._id,
      preco: p.price,
      precoOriginal: p.old_price,
      titulo: p.name,
      descricao: p.description,
      stars: p.ratings?.length || 0,
      liked: p.liked || 0,
      sells: p.sells || 0,
      filtro: p.category || '',
      imagem: Array.isArray(p.image) ? p.image : [],
      category: p.category
    }));
  });
</script>

<svelte:head>
  <title>Aço de Alta Qualidade | Soluções Industriais, Produtos e Engenharia – GXSteel</title>
  <meta name="description" content="GXSteel - Soluções Industriais, Produtos e Engenharia - Acesso aos melhores produtos de aço de alta qualidade." />
</svelte:head>

<main>
  <section class="sobre-nos-section">
    <div class="sobre-nos-container">
      <div class="sobre-nos-imagem">
        <img src="./570x420.jpg" alt="rolos de aço" />
        <div class="container-experiencia">
          <p class="anos-numero"><strong>{anos_experiencia}</strong></p>
          <p>ANOS DE EXPERIÊNCIA</p>
        </div>
        <img class="njkads" src="./275x200.jpg" alt="linha de produção" />
      </div>
      <div class="sobre-nos-texto">
        <p class="subtitulo">Sobre nós</p>
        <h1 class="titulo">Melhor aço,<br><span class="destaque">SEM RISCOS</span></h1>
        <h4 class="descricao-curta">Uma força global na produção e engenharia de aço.</h4>
        <p class="descricao">
          Com expertise reconhecida, buscamos atender e superar as expectativas dos clientes em soluções metálicas industriais e ornamentais.
        </p>
        <button on:click={redirectToAbout} class="cotacao-btn">Veja mais</button>
      </div>
    </div>
  </section>

  <section class="ceo-section">
    <div class="ceo-content" style="margin-top: 3rem;">
      <div class="ceo-texto">
        <p class="ceo-intro">Liderança estratégica</p>
        <h2 class="ceo-titulo">Conheça nosso CEO</h2>
        <p class="ceo-descricao">
          À frente da nossa operação, <strong>Roberto Bertolossi</strong> conduz a equipe com foco em inovação, excelência logística e atendimento técnico de alto padrão. Sua gestão impulsiona a entrega de soluções em aço com rastreabilidade, desempenho e compromisso total com o cliente.
        </p>
      </div>
      <img src="roberto.png" alt="Roberto Bertolossi - CEO" class="ceo-foto" />
    </div>
  </section>

  <section class="contact-button-and-img">
      <div class="container-contrate">
          <img src="./145x180.png" alt="bobina de aço">
          <h4>Qualidade Certificada, Resultado Garantido</h4>
          <button on:click={redirectToCatalog} id="padrao_button" class="contrate-button" aria-label="true">Compre agora</button>
      </div>
  </section>

  <section>
      <div id="div-background" class="divisoria-data">
          <img id="img-background" class="img-background-class" src="./HP1.-bg.jpg" alt="backround-img">
          <div class="dados">
              <div style="width: 100%;">
                  <p class="text1">{vendas_mes}+</p>
                  <p class="text" style="color: white; font-weight: 600;">Vendas Completas por Mês</p>
              </div>

              <div style="width: 100%;">
                  <p class="text1">{experiencia}+</p>
                  <p class="text" style="color: white; font-weight: 600;">Anos de experiência prática</p>
              </div>

              <div style="width: 100%;">
                  <p class="text1">{membros}</p>
                  <p class="text" style="color: white; font-weight: 600;">Membros da equipe incríveis</p>
              </div>
          </div>
      </div>
  </section>

  {#if produtos.length > 0}
  <section>
      <div id="title-main">
          <p style="margin-top: 3rem;">Nossos produtos</p>
          <h2 style="margin-left: 12rem;">Produtos em Destaque</h2>
      </div>

      <div id="vitrine-padrão" class="vitrine">
          {#each produtos.slice(0, 4) as produto (produto.id)}
              <ProdutoContainer {...produto} />
          {/each}
      </div>
      {#if produtos.length > 4}
          <button class="veja-mais" on:click={redirectToCatalog} id="padrao_button" style="margin-bottom: 3rem;">Veja mais</button>
      {/if}
  </section>
  {/if}

  <section class="instagram-acos-section">
    <div class="instagram-col">
      <img src="./tubos.jpg" alt="Bobinas de aço" />
      <h2>Aço<br>Produção</h2>
    </div>

    <div class="instagram-col">
      <img src="./bobinas.jpg" alt="Tubos de aço" />
      <h2>Siga nossa loja<br>No Instagram</h2>
    </div>
  </section>

  <section class="apresentacao-blog">
    <p class="fkdaj">Nosso blog</p>
    <h2 class="dargbjh">Leia nosso blog</h2>

    <div class="blog-container">
      {#each blog.slice(0, 3) as item (item.id)}
        <BlogContainer {...item} />
      {/each}
    </div>
  </section>

  <WppUp />
</main>