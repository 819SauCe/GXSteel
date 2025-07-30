<script>
    import "../style/all.css";
    export let id;
    export let preco;
    export let precoOriginal;
    export let titulo;
    export let descricao;
    export let imagem;
    export let stars;

    function redirect() {
      location.href = `/produto/${id}`
    }

</script>

<div class="card p-3 shadow-sm" style="max-width: 600px;">
  <div class="d-flex align-items-center mb-2">
    <img src={imagem[0]} alt="produto" style="width: 80px; height: auto;" class="me-3">
    {#each Array(Number(stars)) as _}
      <div class="text-warning fs-5" style="display: flex;">★</div>
    {/each}
  </div>
  <h5 class="fw-bold">{titulo}</h5>
  <p class="text-muted mb-2 descricao-limitada">{descricao}</p>
  <div class="d-flex align-items-center justify-content-between">

    <!--
    <div>
      <span class="fw-bold text-danger fs-5">R${preco}</span>
      <span class="text-decoration-line-through text-muted ms-2">R${precoOriginal}</span>
    </div>
    -->

    <button on:click={redirect} class="btn btn-orange text-white fw-bold">Pedir agora</button>
  </div>
</div>

<style>
  .btn-orange {
    background-color: #ff5b00;
  }

  .descricao-limitada {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>
