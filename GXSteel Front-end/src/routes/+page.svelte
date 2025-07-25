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

  const equipeOriginal = [
    { nome: "BELLA MIKE", cargo: "THE MANAGER", foto: "/253x253-0.jpg" },
    { nome: "HESSY KOWA", cargo: "THE STAINLESSAÇO ER", foto: "/253x253-1.jpg"},
    { nome: "MICHEL BON", cargo: "THE WORKER", foto: "/253x253-2.jpg" },
    { nome: "JHON SMITH", cargo: "THE WORKER", foto: "/253x253-3.jpg" },
    { nome: "LUE ABELL", cargo: "THE CEO", foto: "/253x253.jpg" },
  ];

  let produtos = [];

  let blog = [
    { id: 1, day: 7, month: 5, year: 2025, title: "Dicas para o melhor design de Structre de aço", desc: "Com nosso conhecimento e experiência, é nosso objetivo atender às necessidades de nossos clientes, indo além de suas expectativas.", img:"/350x200.jpg"},
    { id: 2, day: 8, month: 5, year: 2025, title: "Dicas para o melhor design de Structre de aço", desc: "Com nosso conhecimento e experiência, é nosso objetivo atender às necessidades de nossos clientes, indo além de suas expectativas.", img:"/350x200.jpg"},
    { id: 3, day: 9, month: 5, year: 2025, title: "Dicas para o melhor design de Structre de aço", desc: "Com nosso conhecimento e experiência, é nosso objetivo atender às necessidades de nossos clientes, indo além de suas expectativas.", img:"/350x200.jpg"}
  ]

  let equipe = [...equipeOriginal, ...equipeOriginal];

  function avancarItem() {
    itemContainer.scrollBy({ left: 250, behavior: "smooth" });
    setTimeout(() => {
      if (itemContainer.scrollLeft >= itemContainer.scrollWidth / 2) {
        itemContainer.scrollLeft = 0;
      }
    }, 500);
  }

  function voltarItem() {
    if (itemContainer.scrollLeft === 0) {
      itemContainer.scrollLeft = itemContainer.scrollWidth / 2;
    }
    itemContainer.scrollBy({ left: -250, behavior: "smooth" });
  }

  function redirectToCatalog() {
    location.href = "/catalogo"
  }

  onMount(() => {
    if (itemContainer.scrollLeft === 0) {
      itemContainer.scrollLeft = 0;
    }

    const interval = setInterval(async () => {
        if (vendas_mes > 0) vendas_mes--;
        if (experiencia > 0) experiencia--;
        if (membros > 3) membros--;
        await tick();

        if (vendas_mes <= 0 && experiencia <= 0 && membros <= 3) {
            clearInterval(interval);
        }
        });
  });

    onMount(async () => {
      const res = await fetch('http://localhost:3000/api/products?page=1&limit=20&isActive=true');
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
        imagem: p.image || '',
        category: p.category
      }));
    });
</script>

<!--Imagem dos anos de experiencia-->
<main style="display: flex; gap: 1rem; margin-top: 5rem; justify-content: center;">
  <div style="position: relative; width: fit-content;">
    <img src="/570x420.jpg" alt="rolos" />
    <div class="container-experiencia">
      <p style="font-size: 58px;"><strong>{anos_experiencia}</strong></p>
      <p>ANOS DE EXPERIÊNCIA</p>
    </div>
    <img class="njkads" src="/275x200.jpg" alt="njkads" />
  </div>
  <div style="display: flex; flex-direction:column;gap:0px;">
    <p style="color: var(--button-background);">Sobre nós</p>
    <h1 style="font-size: 46px; font-weight: 700; line-height: 1;">
      AÇO MELHOR,
    </h1>
    <h1
      style="color: var(--button-background); font-size: 46px; font-weight: 700; line-height: 1;"
    >
      SEM RISCOS
    </h1>
    <h4 style="font-size: 24px;margin-top: 25px;">
      Uma força global na produção e<br /> engenharia de aço.
    </h4>
    <p>
      Com nosso conhecimento e experiência, nosso objetivo é atender às<br />
      necessidades dos clientes, superando expectativas. A Global Trade BR<br />
      é a escolha certa para soluções em aço de alta qualidade e ideias<br />
      inovadoras em metalurgia e estruturas ornamentais. Saiba mais
    </p>
    <button class="cotacao-btn">Veja mais</button>
  </div>
</main>

<!--Nosso time-->
<main style="margin-top: 10rem;">
    <div style="display: flex;">
        <div>
            <p style="color: var(--button-background); margin-left: 12rem;">Conheça nosso time</p>
            <h1 style="margin-left: 12rem;">NOSSA EQUIPE</h1>
        </div>

        <!--botões de avançar e voltar-->
        <div class="btn-prox-ant">
            <button class="botao-carrossel" on:click={voltarItem} aria-label="true">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button class="botao-carrossel" on:click={avancarItem} aria-label="true">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
        </div>
    </div>

  <div class="equipe">
    <div class="carrossel-viewport" bind:this={itemContainer}>
      <div class="carrossel-container">
        {#each equipe as pessoa}
          <div class="carrossel-item">
            <img src={pessoa.foto} alt={pessoa.nome} />
            <div>
              <p>{pessoa.nome}</p>
              <p>{pessoa.cargo}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</main>

<!--Contratação botão-->
<main class="contact-button-and-img">
    <div class="container-contrate">
        <img src="/145x180.png" alt="bobina de aço">
        <h4>NOSSO AÇO É O MELHOR</h4>
        <button id="padrao_button" class="contrate-button" aria-label="true">Contrate agora</button>
    </div>
</main>

<!--Divisoria com dados-->
<main>
    <div id="div-background" class="divisoria-data">
        <img id="img-background" class="img-background-class" src="/HP1.-bg.jpg" alt="backround-img">
        <div class="dados">
            <div style="width: 100%;">
                <p style="color: var(--background-orange); font-size: 2rem; font-weight: 600;">{vendas_mes}+</p>
                <p style="color: white; font-size: 1.3rem; font-weight: 600;">Vendas Completas por Mês</p>
            </div>

            <div style="width: 100%;">
                <p style="color: var(--background-orange); font-size: 2rem; font-weight: 600;">{experiencia}+</p>
                <p style="color: white; font-size: 1.3rem; font-weight: 600;">Anos de experiência prática</p>
            </div>

            <div style="width: 100%;">
                <p style="color: var(--background-orange); font-size: 2rem; font-weight: 600;">{membros}</p>
                <p style="color: white; font-size: 1.3rem; font-weight: 600;">Membros da equipe incríveis</p>
            </div>
        </div>
    </div>
</main>

{#if produtos.length > 0}
<main>
    <div id="title-main">
        <p>Nossos produtos</p>
        <h1>Produtos em Destaque</h1>
    </div>

    <div id="vitrine-padrão" class="vitrine">
        {#each produtos.slice(0, 4) as produto (produto.id)}
            <ProdutoContainer {...produto} />
        {/each}
    </div>
    {#if produtos.length > 4}
        <button class="veja-mais" on:click={redirectToCatalog} id="padrao_button">Veja mais</button>
    {/if}
</main>
{/if}

<main class="background-imgs-siga">
    <div class="img-esquerda">
        <h2>Aço<br>Produção</h2>
        <img class="img-fundo" src="/660x348.jpg" alt="bobinas" style="left: 0;">
    </div>

    <div class="img-direita">
        <h2>Siga nossa loja<br>No Instagram</h2>
        <img class="img-fundo" src="/660x348-0.jpg" alt="tubos" style="right: 0;">
    </div>
</main>

<main class="apresentacao-blog">
  <p class="fkdaj">Nosso blog</p>
  <h1 class="dargbjh">Leia nosso blog</h1>

  <div class="blog-container">
    {#each blog.slice(0, 3) as item (item.id)}
      <BlogContainer {...item} />
    {/each}
  </div>
</main>

<WppUp />