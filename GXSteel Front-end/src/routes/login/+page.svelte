<script>
    import { onMount } from "svelte";

    let Username = "";
    let password = "";
    let checked = false;

    // Definindo a função login fora de onMount para ser acessível pelo clique
    async function login() {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    username: Username,
                    password: password,
                    Keep_me_logged_in: checked
                })
            });

            const data = await res.json();
            
            if (res.ok) {
                console.log('Login realizado com sucesso:', data);
            } else {
                console.log('Erro no login:', data.message);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }

    // onMount não precisa ser usado para login, apenas para outras tarefas como carregamento de dados, etc.
    onMount(() => {
        // Aqui você pode usar onMount para outras lógicas iniciais, se necessário
    });
</script>

<main>
    <div class="subheader">
        <h1><strong>Sign in</strong></h1>
        <p>Melhor site para a compra do seu aço</p>
    </div>

    <div class="login-container">
        <div class="form-container">
            <h1><strong>Sign in</strong></h1>
            <p>Tema da indústria siderúrgica.</p>
            <p>Novo cliente? <a href="/cadastro">Criar uma conta</a></p>

            <div class="input-group">
                <label>Username</label>
                <input bind:value={Username} type="text" placeholder="Username">
            </div>

            <div class="input-group">
                <label>Password</label>
                <input bind:value={password} type="password" placeholder="Password">
            </div>

            <button on:click={login} type="submit">CONECTE-SE</button>

            <div class="continue-login">
                <input bind:checked={checked} type="checkbox">
                <span>Mantenha-me conectado</span>
            </div>

            <div class="forgot-links">
                <a href="#">Esqueceu o nome de usuário?</a>
                <a href="#">Esqueceu sua senha?</a>
            </div>
        </div>
    </div>
</main>

<style>
    main {
        margin: 0;
        padding: 0;
        background-color: white;
    }

    .subheader {
        width: 100%;
        height: 25rem;
        padding: 8.5rem 0rem 5rem 10rem;
        background-image: url('/subheader.jpg');
        background-blend-mode: darken;
        background-color: rgba(0, 0, 0, 0.55);
    }

    .subheader h1 {
        color: white;
        font-size: 4rem;
        margin-bottom: 1rem;
    }

    .subheader p {
        color: orange;
    }

    .login-container {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 2rem;
        background-image: url('/660x348-0.jpg');
        background-repeat: no-repeat;
        background-position: right;
        background-size: 80%;
    }

    .form-container {
        display: flex;
        flex-direction: column;
        width: 400px;
        padding: 2rem;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border: 1px solid #ccc;
        margin-left: 5rem;
    }

    .input-group {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .input-group label {
        font-size: 1rem;
        font-weight: bold;
    }

    .input-group input {
        padding: 0.8rem;
        margin-top: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    button {
        background-color: #ff6f00;
        color: white;
        font-size: 1.25rem;
        padding: 1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        width: 100%;
        font-weight: bold;
        margin-top: 1rem;
    }

    button:hover {
        background-color: #e65c00;
    }

    .continue-login {
        display: flex;
        align-items: center;
    }

    .forgot-links {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .forgot-links a {
        text-decoration: none;
        color: #007bff;
    }

    .forgot-links a:hover {
        text-decoration: underline;
    }
</style>
