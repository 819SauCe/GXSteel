<script>
    import "../style/all.css";
    export let product;
    let liked = false;
    const whatsappNumber = "551640424000";
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
</script>

<style>
    .card-fixed {
        width: 20rem;
        border-radius: 1.5rem;
        overflow: hidden;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        transition: transform 0.3s, box-shadow 0.3s;
        background-color: #fff;
    }

    .card-fixed:hover {
        transform: translateY(-6px);
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.18);
    }

    .card-img-top {
        height: 200px;
        object-fit: cover;
    }

    .card-body {
        padding: 1.4rem;
    }

    .card-title {
        font-size: 1.3rem;
        font-weight: 700;
        color: var(--button-background);
    }

    .card-text {
        margin-bottom: 0.6rem;
        color: #555;
    }

    .like-btn {
        background: none;
        border: none;
        font-size: 1.5rem;
        color: var(--button-background);
        transition: transform 0.2s;
    }

    .like-btn:hover {
        transform: scale(1.2);
    }

    .btn-primary {
        border-radius: 0.75rem;
        padding: 0.5rem 1.2rem;
        background-color: var(--button-background);
        border: none;
        color: #fff;
        font-weight: 600;
        transition: background 0.3s;
    }

    .btn-primary:hover {
        background-color: #cf711f;
    }

    .text-danger {
        color: var(--button-background) !important;
    }

    .text-warning {
        color: var(--button-background) !important;
    }
</style>

<div class="card card-fixed m-3">
    <a href="/produto/{product.id}">
        <img src={product.imagem[0]} class="card-img-top" alt={product.titulo} />
    </a>
    <div class="card-body">
        <a href="/produto/{product.id}">
            <h5 class="card-title">{product.titulo}</h5>
        </a>
        <p class="card-text" style="font-size: 0.95rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
            {product.descricao}
        </p>
        <p class="card-text mb-1">
            <span class="text-danger fw-bold">R$ {product.preco}</span>
            {#if product.precoOriginal}
                <span class="text-muted text-decoration-line-through ms-2">R$ {product.precoOriginal}</span>
            {/if}
        </p>
        <p class="mb-2 d-flex align-items-center">
            {#each Array(Number(product.stars)).fill(0) as _, i}
                <i class="bi bi-star-fill text-warning me-1"></i>
            {/each}
            <span class="text-muted ms-1">({product.stars})</span>
        </p>
        <div class="d-flex justify-content-between align-items-center">
            <a href="/produto/{product.id}" class="btn btn-primary">Comprar</a>
            <div class="d-flex align-items-center">
                <button class="like-btn" on:click={() => liked = !liked} aria-label="true">
                    <i class={liked ? "bi bi-heart-fill" : "bi bi-heart"}></i>
                </button>
                <span class="text-muted ms-2">({product.liked})</span>
            </div>
        </div>
    </div>
</div>
