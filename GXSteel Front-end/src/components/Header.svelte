<script>
  let cartCount = 0;
  const href_localização =
    "https://www.google.com/maps/place/Global+Trade+Technology/@-21.2543382,-48.3494831,17.62z/data=!4m15!1m8!3m7!1s0x94b96bafbe32aaf1:0x8efff532725a23b0!2sAv.+Dr.+Jos%C3%A9+Ant%C3%B4nio+Miziara+-+Distrito+Industrial+Jos%C3%A9+Aparecido+Tom%C3%A9,+Jaboticabal+-+SP,+14874-002!3b1!8m2!3d-21.2496554!4d-48.3500263!16s%2Fg%2F11krjt26pt!3m5!1s0x94b9414f0f5a80ef:0x606b957e361182cc!8m2!3d-21.2552398!4d-48.3477987!16s%2Fg%2F11hbk996bn?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D";
  const href_email = "mailto:vendas@globaltradebr.com.br";
</script>

<header>
  <div class="super-header">
    <div class="left-info">
      <a href={href_email} class="email-link" target="_blank">
        <svg
          class="email-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z"
          />
        </svg>
        vendas@globaltradebr.com.br
      </a>
      <a href={href_localização} class="gps-link" target="_blank">
        <svg
          class="gps-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"
          />
        </svg>
        Jaboticabal – Cep: 14874002
      </a>
    </div>
    <nav class="social-nav">
      <a
        href="https://www.facebook.com/globaltradebr/?locale=pt_BR"
        target="_blank"
        aria-label="true"
      >
        <svg class="social-icon" viewBox="0 0 24 24">
          <path
            d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.77c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.62.77-1.62 1.56v1.88h2.77l-.44 2.89h-2.33V21.9C18.34 21.13 22 17 22 12z"
          />
        </svg>
      </a>

      <a href="#" aria-label="true">
        <svg
          class="social-icon"
          viewBox="0 0 256 256"
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
        >
          <path
            d="M204.8 75.52c-25.6 0-46.72-20.48-46.72-46.72H113.6v153.6c0 13.44-10.88 24.32-24.32 24.32s-24.32-10.88-24.32-24.32 10.88-24.32 24.32-24.32c2.56 0 5.12 0 7.68 0v-43.52c-2.56 0-5.12 0-7.68 0-37.12 0-67.84 30.72-67.84 67.84s30.72 67.84 67.84 67.84 67.84-30.72 67.84-67.84V100.64c13.44 9.6 30.72 14.08 48.64 14.08V75.52z"
          />
        </svg>
      </a>

      <a
        href="https://www.linkedin.com/company/globaltradetechnology"
        target="_blank"
        aria-label="true"
        ><svg class="social-icon" viewBox="0 0 24 24">
          <path
            d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3zM9 9h3.8v1.6h.05c.53-1 1.83-2.1 3.77-2.1 4 0 4.74 2.63 4.74 6.06V21h-4v-5.4c0-1.29-.02-2.96-1.8-2.96-1.8 0-2.07 1.4-2.07 2.86V21H9z"
          />
        </svg>
      </a>

      <a href="#" aria-label="true">
        <svg
          class="social-icon"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.75-.88a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26z"
          />
        </svg>
      </a>
    </nav>
  </div>

  <div class="header-main">
    <a href="/" style="margin-left: 12rem;">
      <img class="logo-img" src="/Logo-XSteel.png" alt="Logo" />
    </a>
    <div class="contact-box">
      <a href="tel:1640424000" class="contact-item">
        <div class="icon-circle">
          <svg class="icon" viewBox="0 0 24 24"
            ><path
              d="M6.6 10.8c1.2 2.3 3.3 4.4 5.6 5.6l1.9-1.9c.2-.2.5-.3.7-.2 1 .3 2.1.5 3.2.5.4 0 .6.2.6.6v3.1c0 .4-.2.6-.6.6C9.5 19 5 14.5 5 7.6c0-.4.2-.6.6-.6H9.1c.4 0 .6.2.6.6 0 1.1.2 2.2.5 3.2.1.2 0 .5-.2.7L6.6 10.8z"
              fill="orange"
            /></svg
          >
        </div>
        <div class="info-text">
          Nos Ligue<br /><strong>(16) 4042-4000</strong>
        </div>
      </a>
      <a href={href_localização} class="contact-item" target="_blank">
        <div class="icon-circle">
          <svg class="icon" viewBox="0 0 24 24"
            ><path
              d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"
              fill="orange"
            /></svg
          >
        </div>
        <div class="info-text">
          Nosso endereço<br />Av. Doutor José Antônio Miziara, 221,<br />
          Distrito Industrial José Aparecido Tomé,<br />
          <strong>Jaboticabal – Cep: 14874002</strong>
        </div>
      </a>

      <button on:click={() => (window.location.href = "/contato")} id="padrao_button" class="cotacao-btn">Obter Cotação</button>
    </div>
  </div>

  <hr style="margin-left: 12rem; margin-right: 12rem; height: 1px;" />

  <div class="menu-wrapper">
    <div class="menu-links">
      <div class="dropdown">
        <a href="/" role="button" tabindex="0" on:mousedown|preventDefault on:click={() => (window.location.href = "/")} class="btn btn-secondary dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size: 0.9rem;">
          <strong>HOME</strong>
        </a>

        <!--
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="font-size: 0.9rem;">
          <a class="dropdown-item" href="catalogo">CATALOGO</a>
        </div>
        -->
      </div>

      <div class="dropdown">
        <a href="/catalogo" role="button" tabindex="0" on:mousedown|preventDefault on:click={() => (window.location.href = "/catalogo")} class="btn btn-secondary dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size: 0.9rem;">
          <strong>CATALOGO</strong>
        </a>
        <!--
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="font-size: 0.9rem;">
          <a class="dropdown-item" href="/sobre">SOBRE NÓS</a>
          <a class="dropdown-item" href="/login">LOGIN</a>
          <a class="dropdown-item" href="#">REGISTRO</a>
        </div>
        -->
      </div>

      <!--
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-size: 0.9rem;">
          <strong>LOJA</strong>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="font-size: 0.9rem;">
          <a class="dropdown-item" href="catalogo">LOJA</a>
          <a class="dropdown-item" href="#">LISTA DE DESEJOS</a>
          <a class="dropdown-item" href="#">CARRINHO</a>
        </div>
      </div>
      -->

      <a class="btn btn-secondary dropdown-toggle" href="contato">
        <strong>FALE CONOSCO</strong>
      </a>
    </div>

    <!--
    <div>
      <button class="search-button" aria-label="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 24 24">
          <path d="M10 2a8 8 0 105.293 14.293l5.707 5.707 1.414-1.414-5.707-5.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z"/>
        </svg>
      </button>

      <button class="search-button" aria-label="true">
        <svg fill="#000000" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
          <path d="M14,18a1,1,0,0,0,1-1V15a1,1,0,0,0-2,0v2A1,1,0,0,0,14,18Zm-4,0a1,1,0,0,0,1-1V15a1,1,0,0,0-2,0v2A1,1,0,0,0,10,18ZM19,6H17.62L15.89,2.55a1,1,0,1,0-1.78.9L15.38,6H8.62L9.89,3.45a1,1,0,0,0-1.78-.9L6.38,6H5a3,3,0,0,0-.92,5.84l.74,7.46a3,3,0,0,0,3,2.7h8.38a3,3,0,0,0,3-2.7l.74-7.46A3,3,0,0,0,19,6ZM17.19,19.1a1,1,0,0,1-1,.9H7.81a1,1,0,0,1-1-.9L6.1,12H17.9ZM19,10H5A1,1,0,0,1,5,8H19a1,1,0,0,1,0,2Z"/>
          </svg>
      </button>

      <button class="search-button" aria-label="true">
        <svg fill="#000000" width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
          <path d="M27 193.6c-8.2-8.2-12.2-18.6-12.2-31.2s4-23 12.2-31.2S45.6 119 58.2 119h912.4c12.6 0 23 4 31.2 12.2s12.2 18.6 12.2 31.2-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2zm974.8 285.2c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 522.6 14.8 510s4-23 12.2-31.2 18.6-12.2 31.2-12.2h912.4c12.6 0 23 4 31.2 12.2zm0 347.4c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 870 14.8 857.4s4-23 12.2-31.2S45.6 814 58.2 814h912.4c12.6 0 23 4.2 31.2 12.2z"/>
        </svg>
      </button>
    </div>
    -->
  </div>

</header>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease-out;
  }
  a:hover {
    color: var(--hover-a);
  }
  .super-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 2rem;
    background: var(--background-black);
    color: var(--color-white);
    flex-wrap: wrap;
  }
  .left-info {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
    margin-left: 12rem;
  }
  .email-link,
  .gps-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .email-icon,
  .gps-icon {
    width: 1.2rem;
    height: 1.2rem;
    flex-shrink: 0;
  }
  .social-nav {
    display: flex;
    gap: 1.5rem;
    margin-right: 12rem;
  }
  .social-icon {
    width: 1.2rem;
    height: 1.2rem;
    fill: currentColor;
  }
  .header-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .logo-img {
    width: 10rem;
    height: auto;
  }
  .contact-box {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }
  .contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: inherit;
  }
  .icon-circle {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: 1px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon {
    width: 2rem;
    height: 2rem;
  }
  .info-text {
    font-size: 1.1rem;
  }
  .info-text strong {
    font-weight: 700;
  }
  .cotacao-btn {
    width: 9rem;
    height: 4rem;
    margin-right: 12rem;
    margin-top: 1.5rem;
  }
  .dropdown:hover .dropdown-menu {
    display: block;
    margin-top: 0;
  }

  .btn {
    background-color: transparent;
    border: none;
    color: black;
  }

  .dropdown-toggle::after {
    display: none !important;
  }

  .dropdown-item {
    padding: 1rem;
  }

  .dropdown-toggle:focus,
  .dropdown-toggle:active {
    background-color: transparent !important;
    box-shadow: none !important;
    color: black;
  }

  .dropdown-toggle:hover {
    color: var(--hover-a);
  }

  .search-button {
    width: 2.9rem;
    height: 2.9rem;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: background-color ease-in-out 0.3s;
  }

  .search-button:hover {
    background-color: var(--button-background);
  }

  .search-button svg {
    transition: fill 0.3s ease;
  }
  .search-button:hover svg {
    fill: white;
  }

.menu-wrapper {
  width: 100%;
  padding: 1rem 0;
}

.menu-links {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin-left: 12rem;
}

@media (max-width: 900px) {
  .menu-links {
    gap: 1rem;
  }
}

@media (max-width: 600px) {
  .menu-links {
    flex-direction: column;
    gap: 0.5rem;
    align-items: stretch;
    margin-left: -1rem;
  }
}

  @media (max-width: 768px) {
    .super-header,
    .header-main,
    .contact-box {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      margin: 0;
    }

    .left-info,
    .social-nav {
      margin: 0;
      justify-content: flex-start;
    }

    .logo-img {
      width: 6rem;
      margin: 0;
    }

    .info-text {
      font-size: 0.9rem;
    }

    .icon,
    .icon-circle,
    .social-icon,
    .email-icon,
    .gps-icon {
      width: 1.2rem;
      height: 1.2rem;
    }

    .cotacao-btn {
      width: 100%;
      height: 2.5rem;
      font-size: 0.8rem;
      margin: 0;
    }

    .dropdown {
      width: 100%;
    }

    .dropdown-toggle,
    .dropdown-menu,
    .dropdown-item {
      width: 100%;
      font-size: 0.8rem !important;
    }

    .search-button {
      width: 2.2rem;
      height: 2.2rem;
    }

    hr,
    .header-main > div:last-child,
    .header-main > div:first-child {
      margin: 0 !important;
      gap: 1rem !important;
    }

    .header-main > div:last-child {
      width: 100%;
      justify-content: space-between;
    }
  }
</style>
