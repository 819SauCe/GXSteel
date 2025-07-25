<script>
  import "../style/all.css";
  export let day;
  export let month;
  export let year;
  export let title;
  export let desc;
  export let img;

  const meses = [
    "JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO",
    "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"
  ];
</script>

<div class="blog-card">
  <div class="blog-header">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ff5b00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
    <p>{day} DE {meses[month - 1]} DE {year}</p>
    <div class="icons">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ff5b00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ff5b00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
        <circle cx="18" cy="5" r="3"/>
        <circle cx="6" cy="12" r="3"/>
        <circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    </div>
  </div>

  <hr>

  <h1>{title}</h1>
  <p>{desc}</p>
  <img src={img} alt="blog-img" class="blog-img"/>
</div>

<style>
  .blog-card {
    width: 25rem;
    padding: 1.5rem;
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    position: relative;
  }

  .blog-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: #555;
  }

  .icons {
    margin-left: auto;
    display: flex;
    gap: 0.5rem;
  }

  svg {
    width: 1rem;
    height: 1rem;
    stroke: #ff5b00;
  }

  h1 {
    font-size: 1.2rem;
    font-weight: bold;
    color: #222;
  }

  p {
    font-size: 0.95rem;
    color: #555;
  }

  .blog-img {
    width: 100%;
    height: auto;
    border-radius: 0.3rem;
    object-fit: cover;
  }
</style>
