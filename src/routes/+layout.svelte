
<script>
import { base } from "$app/paths";
import { page } from "$app/stores";

let localStorage = globalThis.localStorage ?? {};
let colorScheme = localStorage.colorScheme ?? "dark";

let root = globalThis?.document?.documentElement;
$: root?.setAttribute("color-scheme", colorScheme);
$: localStorage.colorScheme = colorScheme;

const toggleTheme = () => colorScheme = colorScheme === "light" ? "dark" : "light";

let pages = [
    {url: "/", title: "Home"},
    {url: "/projects", title: "Projects"},
    {url: "/resume", title: "Resume"},
    {url: "/contact", title: "Contact"},
    {url: "/meta", title: "Meta"},
    {url: "https://github.com/vitor-n", title: "GitHub"},
];

</script>

<div id="navbar">
    <nav>
        {#each pages as p}
            <a 
            href= { p.url.startsWith("http")? p.url: `${base}${p.url}`}
            class:current={$page.route.id === p.url}
            target={p.url.startsWith("http") ? "_blank" : undefined}
            >
            {p.title}
        </a>
        {/each}
    </nav>
    <button class="translate-button">
        {#if colorScheme === "dark"}
            <img src={`${base}/imgs/light-translate-icon.png`} height="20rem" alt="Light Mode">
        {:else}
            <img src={`${base}/imgs/dark-translate-icon.png`} height="20rem" alt="Dark Mode">
        {/if}
    </button>
    <button on:click={toggleTheme} class="color-scheme">
        {#if colorScheme === "dark"}
            <img src={`${base}/imgs/light-theme-icon.png`} height="20rem" alt="Light Mode">
        {:else}
            <img src={`${base}/imgs/dark-theme-icon.png`} height="18rem" alt="Dark Mode">
        {/if}
    </button>
</div>

<!-- <svelte:head>
    <link rel="preload" as="image" href={`${base}/imgs/dark-theme-icon.png`}>
    <link rel="preload" as="image" href={`${base}/imgs/light-theme-icon.png`}>
    <link rel="preload" as="image" href={`${base}/imgs/dark-translate-icon.png`}>
    <link rel="preload" as="image" href={`${base}/imgs/light-translate-icon.png`}>
</svelte:head> -->

<slot/>

<style>
    .color-scheme, .translate-button {
        position: absolute;
        top: 0;
        bottom: 0;
        background: none;
        border: none;
    }
    .color-scheme:hover, .translate-button {
        cursor: pointer;
    }
    .color-scheme {
        right: -5ch;
    }
    .translate-button {
        right: -15ch;
    }

    #navbar {
        position: sticky;
        display: flex;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        margin-bottom: 1cm;
        padding: .5cm 0;
        background-color: var(--background-color);
    }

    nav {
        display: flex;
        flex-wrap: wrap ;
        margin: auto;
        width: 90%;
    }

    nav a {
        flex: 1;
        text-decoration: none;
        color: inherit;
        text-align: center;
        padding: 0.5em;
    }

    nav .current{
        border-bottom-width: 3px;
        border-bottom-style: solid;
    }

    nav a:hover {
        border-bottom-style: solid;
        border-bottom-width: 3px;
        font-weight: bold;
    }
</style>