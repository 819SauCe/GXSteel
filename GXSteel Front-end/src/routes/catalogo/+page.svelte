<script>
    import { onMount } from "svelte";
    import ProductCard from "../../components/Product_card.svelte";

    let produtos = [];
    $: precos = produtos.map(p => p.preco || 0);
    $: minPossible = Math.min(...precos);
    $: maxPossible = Math.max(...precos);
    $: precoMin = minPossible;
    $: precoMax = maxPossible;

    let precoMin = minPossible;
    let precoMax = maxPossible;
    let estrelasMin = "";
    let ordenar = "";
    let cartegory = [];
    let filtrosSelecionados = [];

    function toggleFiltro(f) {
        if (filtrosSelecionados.includes(f)) {
            filtrosSelecionados = filtrosSelecionados.filter(item => item !== f);
        } else {
            filtrosSelecionados = [...filtrosSelecionados, f];
        }
    }

    function ordenarProdutos(lista) {
        if (ordenar === "curtidos") return [...lista].sort((a, b) => (b.liked || 0) - (a.liked || 0));
        if (ordenar === "maisVendidos") return [...lista].sort((a, b) => (b.sells || 0) - (a.sells || 0));
        if (ordenar === "menosVendidos") return [...lista].sort((a, b) => (a.sells || 0) - (b.sells || 0));
        return lista;
    }

    $: produtosFiltrados = ordenarProdutos(
        produtos.filter(p => {
            const estrelasOK = !estrelasMin || p.stars >= +estrelasMin;
            const precoOK = p.preco >= precoMin && p.preco <= precoMax;
            const filtroOK = filtrosSelecionados.length === 0 || filtrosSelecionados.every(f => p.filtro.toLowerCase().includes(f));
            return estrelasOK && precoOK && filtroOK;
        })
    );

    onMount(async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/products?page=1&limit=20`);
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

        cartegory = [...new Set(produtos.map(p => p.category))];
    });
</script>

<h1>Nossos produtos</h1>
<hr />

<main>
    <aside class="filtro">
        <h2>Filtros</h2>

        <div class="campo">
            {#each cartegory as f}
                <div style="display: flex; gap: 1rem;">
                    <input type="checkbox" id={f} value={f} checked={filtrosSelecionados.includes(f)} on:change={() => toggleFiltro(f)}/>
                    <label for={f}>{f}</label>
                </div>
            {/each}
        </div>

        <div class="campo">
            <label>Preço: R$ {precoMin} – R$ {precoMax}</label>
            <input type="range" min={minPossible} max={maxPossible} bind:value={precoMin} />
            <input type="range" min={minPossible} max={maxPossible} bind:value={precoMax} />
        </div>

        <div class="campo">
            <label>Estrelas mínimas</label>
            <select bind:value={estrelasMin}>
                <option value="">Todas</option>
                {#each [1, 2, 3, 4, 5] as n}
                    <option value={n}>{n} estrela{n > 1 ? "s" : ""}</option>
                {/each}
            </select>
        </div>

        <div class="campo">
            <label>Ordenar por</label>
            <select bind:value={ordenar}>
                <option value="">--</option>
                <option value="curtidos">Mais curtidos</option>
                <option value="maisVendidos">Mais vendidos</option>
                <option value="menosVendidos">Menos vendidos</option>
            </select>
        </div>
    </aside>

    <div class="vitrine">
        {#each produtosFiltrados as product}
            <ProductCard {product} />
        {/each}
        {#if produtosFiltrados.length === 0}
            <div class="preloader">
                <svg class="cart" role="img" aria-label="Shopping cart line animation" viewBox="0 0 128 128" width="128px" height="128px" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="8">
                        <g class="cart__track" stroke="hsla(0,10%,10%,0.1)">
                            <polyline points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80" />
                            <circle cx="43" cy="111" r="13" />
                            <circle cx="102" cy="111" r="13" />
                        </g>
                        <g class="cart__lines" stroke="currentColor">
                            <polyline class="cart__top" points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80" stroke-dasharray="338 338" stroke-dashoffset="-338" />
                            <g class="cart__wheel1" transform="rotate(-90,43,111)">
                                <circle class="cart__wheel-stroke" cx="43" cy="111" r="13" stroke-dasharray="81.68 81.68" stroke-dashoffset="81.68" />
                            </g>
                            <g class="cart__wheel2" transform="rotate(90,102,111)">
                                <circle class="cart__wheel-stroke" cx="102" cy="111" r="13" stroke-dasharray="81.68 81.68" stroke-dashoffset="81.68" />
                            </g>
                        </g>
                    </g>
                </svg>
                <div class="preloader__text">
                    <p class="preloader__msg">Espere um momento</p>
                    <p class="preloader__msg preloader__msg--last">Estamos vendo algo para vc</p>
                </div>
            </div>
        {/if}
    </div>
</main>

<style>
    h1 {
        text-align: center;
        margin-top: 2rem;
        font-size: 2.5rem;
    }

    hr {
        width: 60%;
        margin: 1rem auto 2rem;
        border-color: #ccc;
    }

    main {
        display: flex;
        align-items: stretch;
        justify-content: flex-start;
        padding: 0 2rem 4rem;
        gap: 2rem;
    }

    .filtro {
        position: sticky;
        top: 2rem;
        width: 20rem;
        height: auto;
        flex-shrink: 0;
        background: #fafafa;
        padding: 1.5rem;
        border-radius: 0.8rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }

    .filtro h2 {
        margin-top: 0;
        margin-bottom: 1rem;
        font-size: 1.4rem;
    }

    .campo {
        margin-bottom: 1.2rem;
    }

    .campo label {
        display: block;
        margin-bottom: 0.4rem;
        font-weight: 500;
    }

    input[type="range"] {
        -webkit-appearance: none;
        width: 100%;
        height: 8px;
        background: #ddd;
        border-radius: 4px;
        outline: none;
    }

    input[type="range"]::-webkit-slider-runnable-track {
        height: 8px;
        background: #fc5a0a;
        border-radius: 4px;
    }

    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 20px;
        width: 20px;
        background: #fc5a0a;
        border-radius: 50%;
        cursor: pointer;
        margin-top: -6px;
    }

    input[type="range"]::-moz-range-track {
        background: #fc5a0a;
        height: 8px;
        border-radius: 4px;
    }

    .campo select {
        width: 100%;
        padding: 0.4rem;
        border-radius: 0.4rem;
        border: 1px solid #ccc;
    }

    .vitrine {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: center;
        max-width: 1200px;
    }
    .preloader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    }

    .preloader svg.cart {
        width: 150px;
        height: 150px;
        color: #fc5a0a;
    }

    .preloader__text {
        margin-top: 20px;
        text-align: center;
    }

    .preloader__msg {
        font-size: 1.25rem;
        color: #333;
    }

    .preloader__msg--last {
        animation-direction: reverse;
        animation-delay: 14s;
        visibility: hidden;
    }

    .cart {
        display: block;
        margin: 0 auto 1.5em auto;
        width: 8em;
        height: 8em;
    }

    .cart__lines,
    .cart__top,
    .cart__wheel1,
    .cart__wheel2,
    .cart__wheel-stroke {
        animation: cartLines 2s ease-in-out infinite;
    }

    .cart__lines {
        stroke: stroke: #fc5a0a;
    }

    .cart__top {
        animation-name: cartTop;
    }

    .cart__wheel1 {
        animation-name: cartWheel1;
        transform: rotate(-0.25turn);
        transform-origin: 43px 111px;
    }

    .cart__wheel2 {
        animation-name: cartWheel2;
        transform: rotate(0.25turn);
        transform-origin: 102px 111px;
    }

    .cart__wheel-stroke {
        animation-name: cartWheelStroke
    }

    .cart__track {
        stroke: hsla(var(--hue),10%,10%,0.1);
        transition: stroke var(--trans-dur);
    }

/* Dark theme */
@media (prefers-color-scheme: dark) {
	:root {
		--bg: hsl(var(--hue),10%,10%);
		--fg: hsl(var(--hue),10%,90%);
	}
	.cart__track {
		stroke: hsla(var(--hue),10%,90%,0.1);
	}
}

/* Animations */
@keyframes msg {
	from {
		opacity: 1;
		visibility: visible;
	}
	99.9% {
		opacity: 0;
		visibility: visible;
	}
	to {
		opacity: 0;
		visibility: hidden;
	}
}
@keyframes cartLines {
	from,
	to {
		opacity: 0;
	}
	8%,
	92% {
		opacity: 1;
	}
}
@keyframes cartTop {
	from {
		stroke-dashoffset: -338;
	}
	50% {
		stroke-dashoffset: 0;
	}
	to {
		stroke-dashoffset: 338;
	}
}
@keyframes cartWheel1 {
	from {
		transform: rotate(-0.25turn);
	}
	to {
		transform: rotate(2.75turn);
	}
}
@keyframes cartWheel2 {
	from {
		transform: rotate(0.25turn);
	}
	to {
		transform: rotate(3.25turn);
	}
}
@keyframes cartWheelStroke {
	from,
	to {
		stroke-dashoffset: 81.68;
	}
	50% {
		stroke-dashoffset: 40.84;
	}
}
</style>
