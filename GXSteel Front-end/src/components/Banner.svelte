<script>
  import { onMount } from 'svelte';
  import Loading from '@components/Loading.svelte'

  let carregado = false;

  onMount(() => {
    const img = document.querySelector('.carousel-item.active img');
    if (img.complete) {
      carregado = true;
    } else {
      img.addEventListener('load', () => carregado = true);
    }
  });
</script>
{#if !carregado}
  <Loading />
{/if}

<div id="carouselExample" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="1000">
  <div class="carousel-inner">
    <div class="carousel-item active position-relative">
      <img src="/HP1.s1.jpg" class="d-block w-100" alt="banner 1">
      <div class="carousel-caption d-flex flex-column justify-content-center align-items-center text-center w-100 h-100 position-absolute top-0 start-0">
        <h2 class="text-uppercase fw-bold" style="font-size: 1.2rem;">O MELHOR DO AÇO</h2>
        <h1 class="fw-bold" style="font-size: 2.5rem; max-width: 50rem;">Excelência em soluções de aço, com mais de 10 milhões de toneladas entregues por ano e presença em mais de 50 países.</h1>
        <div class="mt-3">
          <button on:click={() => (window.location.href = "/catalogo")} class="btn btn-light fw-bold px-4 me-3" style="border-radius: 0%; width: 10rem; height: 4rem;">PEDIR AGORA</button>
          <button on:click={() => (window.location.href = "/contato")} class="btn btn-warning fw-bold px-4" style="background-color: var(--button-background); border: none; color: white; border-radius: 0%; width: 10rem; height: 4rem;">FALE CONOSCO</button>
        </div>
      </div>
    </div>

    <div class="carousel-item position-relative">
      <img src="/HP1.s2.jpg" class="d-block w-100" alt="banner 2">
      <div class="carousel-caption d-flex flex-column justify-content-center align-items-center text-center w-100 h-100 position-absolute top-0 start-0">
        <h2 class="text-uppercase fw-bold" style="font-size: 1.2rem;">O MELHOR DO AÇO</h2>
        <h1 class="fw-bold" style="font-size: 3rem; max-width: 40rem;">Aço de alto desempenho para quem busca qualidade e confiança em aplicações industriais de alto nível.</h1>
        <div class="mt-3">
          <button on:click={() => (window.location.href = "/catalogo")} class="btn btn-light fw-bold px-4 me-3" style="border-radius: 0%; width: 10rem; height: 4rem;">PEDIR AGORA</button>
          <button on:click={() => (window.location.href = "/contato")} class="btn btn-warning fw-bold px-4" style="background-color: var(--button-background); border: none; color: white; border-radius: 0%; width: 10rem; height: 4rem;">FALE CONOSCO</button>
        </div>
      </div>
    </div>
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" aria-label="true">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" aria-label="true">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
  </button>
</div>

<style>
.carousel-control-prev, .carousel-control-next {
  background-color: var(--button-background);
  color: var(--color-white);
  width: 3rem;
  height: 3rem;
  top: 50%;
  border-radius: 50%;
}

.carousel-inner {
  position: relative;
  height: 100vh;
}

.carousel-item {
  height: 100%;
}

.carousel-item img {
  filter: brightness(45%);
  height: 100vh;
  object-fit: cover;
  width: 100%;
}

.carousel-caption {
  color: white;
  padding: 2rem;
}
</style>
