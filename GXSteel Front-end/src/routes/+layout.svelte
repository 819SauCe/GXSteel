<script>
    export const prerender = true;
    import "../style/all.css"
    import { page } from '$app/stores';
    import Header from "../components/Header.svelte";
    import Banner from "../components/Banner.svelte";   
    import Footer from "../components/Footer.svelte";
</script>


<Header />
{#if $page.url.pathname == "/"}
<Banner />
{/if}
<slot />
<Footer />