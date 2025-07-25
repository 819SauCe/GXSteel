<script>
    import "../style/all.css";

    let name = "";
    let email = "";
    let message = "";

    function enviarMensagem() {
        const res = fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                access_key: "060c3586-2787-4377-ac71-dd631f3a1136",
                name,
                email,
                message
            })
        }).then((res) => {
        res.json().then((data) => {
        console.log(data);
        })
        })
    }
</script>

<form on:submit|preventDefault={enviarMensagem} style="width: 730px; height: 585px; margin: auto; background-color: white; padding: 3rem;">
    <div style="display: flex; justify-content: center; gap: 10px;">
    <h1 style="text-align: center;"><strong>Envie-nos uma</strong></h1><h1 style="color: var(--background-orange);"><strong>mensagem</strong></h1>
    </div>
  <p style="text-align: center;">Deixe-nos qualquer mensagem e entraremos em contato com você</p>

  <div style="position: relative; margin-bottom: 20px;">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="gray" stroke-width="2" viewBox="0 0 24 24" style="position: absolute; top: 50%; right: 10px; transform: translateY(-50%); pointer-events: none;">
      <circle cx="12" cy="8" r="4"/>
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6"/>
    </svg>
    <input type="text" bind:value={name} placeholder="Nome completo" style="width: 100%; padding: 10px 40px 10px 10px;" />
  </div>

  <div style="position: relative; margin-bottom: 20px;">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="gray" stroke-width="2" viewBox="0 0 24 24" style="position: absolute; top: 50%; right: 10px; transform: translateY(-50%); pointer-events: none;">
      <path d="M4 4h16v16H4z"/>
      <path d="M22,6 L12,13 L2,6"/>
    </svg>
    <input type="email" bind:value={email} placeholder="E-mail" style="width: 100%; padding: 10px 40px 10px 10px;" />
  </div>

  <div style="position: relative; margin-bottom: 20px;">
    <textarea placeholder="Mensagem" bind:value={message} style="width: 100%; padding: 10px 40px 10px 10px; height: 100px;"></textarea>
  </div>

  <button id="padrao_button" type="submit" style="padding: 10px 20px; width: 100%;">Enviar</button>
</form>

<style>
  form {
    padding: 0;
    margin: 0;
  }
</style>