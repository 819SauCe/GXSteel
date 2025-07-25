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
            <p>Nenhum produto encontrado.</p>
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

    .campo input[type="range"] {
        width: 100%;
        margin: 0.2rem 0;
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
</style>
