<script>
    import "../style/all.css";
    const whatsappNumber = "551640424000";
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>

<a class="icon wpp" href={whatsappLink} target="_blank">
    <i class="fab fa-whatsapp"></i>
</a>

<div class="icon up" on:click={scrollToTop}>
    <i class="fas fa-arrow-up"></i>
</div>

<style>
    .icon {
        position: fixed;
        bottom: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        font-size: 24px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .wpp {
        right: 20px;
        background-color: #25d366;
    }
    .up {
        right: 80px;
        background-color: var(--button-background);
    }
</style>
