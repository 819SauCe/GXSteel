<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';

    let produto = [];
    let reviews = [];
    let mainImage = '';
    let thumbnails = [];
    let quantity = 1;
    let q_ratings = 0;
    let ratings = {};
    let stars = 0;
    let rating = 0;
    let comment = '';
    $: id = $page.params.id

    function changeImage(src) {
      mainImage = src;
    }

    function directToWpp() {
        window.open(`https://api.whatsapp.com/send?phone=+551640424000&text=Olá, gostaria de saber mais sobre o produto: ${produto.name}`, '_blank');
    }

    onMount(async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/product/${id}`);
        const data = await res.json();
        produto = data;
        mainImage = Array.isArray(data.image) ? data.image[0] : '';
        ratings = data.ratings;
        q_ratings = Object.keys(ratings).length;
        thumbnails = Array.isArray(data.image) ? [...data.image] : [];
        reviews = Array.isArray(data.comments) ? [...data.comments] : [];
    });
</script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"/>

<div class="container mt-5">
	<div class="row">
		<div class="col-md-6 mb-4">
			<img src={mainImage} alt="Product" class="img-fluid rounded mb-3 product-image" />
			<div class="d-flex justify-content-between">
				{#each thumbnails as thumb}
					<button type="button" class="thumbnail-wrapper" style="background-color: transparent;" on:click={() => changeImage(thumb)} on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && changeImage(thumb)} tabindex="0">
                    <img src={thumb} alt="Thumbnail" class="thumbnail rounded {mainImage === thumb ? 'active' : ''}"/>
                    </button>
				{/each}
			</div>
		</div>

		<div class="col-md-6">
			<h2 class="mb-3">{produto.name}</h2>
			<p class="text-muted mb-4">SKU: {produto._id}</p>
			<div class="mb-3">
				<span class="h4 me-2">${produto.price}</span>
				<span class="text-muted"><s>${produto.old_price}</s></span>
			</div>
			<div class="mb-3">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-half text-warning"></i>
                <span class="ms-2">4.5 ({q_ratings} reviews)</span>
            </div>
			<p class="mb-4">{produto.description}</p>
			<div class="mb-4">
				<label for="quantity" class="form-label">Quantidade:</label>
				<input
					type="number"
					class="form-control"
					id="quantity"
					bind:value={quantity}
					min="1"
					style="width: 80px"
				/>
			</div>
			<button on:click={directToWpp} class="btn btn-primary btn-lg mb-3 me-2">
        <!--<i class="bi bi-cart-plus"></i>-->
				 Peça agora!
			</button>
			<button class="btn btn-outline-secondary btn-lg mb-3">
				<i class="bi bi-heart"></i> Add to Wishlist
			</button>
			<div class="mt-4">
				<h5>Principais Características:</h5>
                <ul>
                <li>Alta resistência e durabilidade</li>
                <li>Versatilidade para múltiplas aplicações</li>
                <li>Qualidade certificada</li>
                <li>Entrega rápida e confiável</li>
                </ul>
			</div>
		</div>
	</div>
</div>

<section class="container py-5">
  <h2 class="mb-4">Avaliações</h2>

  <div class="mb-3">
  <i class="bi bi-star-fill text-warning"></i>
  <i class="bi bi-star-fill text-warning"></i>
  <i class="bi bi-star-fill text-warning"></i>
  <i class="bi bi-star-fill text-warning"></i>
  <i class="bi bi-star-half text-warning"></i>
  <span class="ms-2">4.5 ({q_ratings} reviews)</span>
</div>


  <div class="card shadow-sm mb-4">
    <div class="card-body">
      <h5 class="card-title">Escreva uma avaliação</h5>
      <form on:submit={submitReview}>
        <div class="mb-3">
          <label for="rating" class="form-label">Avaliação</label>
          <div class="mb-3 d-flex align-items-center">
            {#each Array(5) as _, i}
                <i
                class="bi fs-4 me-1"
                class:bi-star-fill={i < rating}
                class:bi-star={i >= rating}
                class:text-warning={i < rating}
                class:text-muted={i >= rating}
                on:click={() => rating = i + 1}
                style="cursor: pointer;"
                ></i>
            {/each}
            <span class="ms-2">{rating} estrela(s)</span>
            </div>
        </div>
        <div class="mb-3">
          <label for="comment" class="form-label">Comentário</label>
          <textarea
            class="form-control"
            id="comment"
            rows="3"
            bind:value={comment}
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Enviar Avaliação</button>
      </form>
    </div>
  </div>

  {#if reviews.length > 0}
    {#each reviews as review}
      <div class="card mb-3 shadow-sm">
        <div class="card-body d-flex align-items-start">
          <img
            src={review.img}
            alt="Avatar"
            class="rounded-circle me-3"
            style="width: 50px; height: 50px; object-fit: cover;"
          />
          <div>
            <h6 class="mb-1">{review.name}</h6>
            <div class="mb-2">
              {#each Array(5) as _, i}
                <i
                  class="bi {i < review.rating ? 'bi-star-fill text-warning' : 'bi-star text-muted'}"
                ></i>
              {/each}
            </div>
            <p class="mb-1">{review.comment}</p>
            <small class="text-muted">{new Date(review.createdAt).toLocaleDateString()}</small>
          </div>
        </div>
      </div>
    {/each}
  {/if}
</section>


<style>
    .product-image {
            height: 400px;
            object-fit: cover;
        }
        .thumbnail {
            width: 80px;
            height: 80px;
            object-fit: cover;
            cursor: pointer;
            opacity: 0.6;
            transition: opacity 0.3s ease;
        }
        .thumbnail:hover, .thumbnail.active {
            opacity: 1;
        }

        button {
            background-color: #fc5a0a;
            color: white;
            border: none;
        }
        button:hover {
            background-color: #d94800;
            color: white;
        }
</style>