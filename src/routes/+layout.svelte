
<script>
import { base } from "$app/paths";
import { page } from "$app/stores";

let pages = [
    {url: "/", title: "Home"},
    {url: "/projects", title: "Projects"},
    {url: "/resume", title: "Resume"},
    {url: "/contact", title: "Contact"},
    {url: "https://github.com/vitor-n", title: "GitHub"},
];

let localStorage = globalThis.localStorage ?? {};
let colorScheme = localStorage.colorScheme ?? "light dark";

let root = globalThis?.document?.documentElement;
$: root?.style.setProperty("color-scheme", colorScheme);
$: root?.setAttribute("color-scheme", colorScheme);
$: localStorage.colorScheme = colorScheme;

function toggleTheme() {
    colorScheme = colorScheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("color-scheme", colorScheme);
}
    
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
</div>

<svelte:head>
    <link rel="preload" as="image" href={`${base}/imgs/dark-theme-icon.png`}>
    <link rel="preload" as="image" href={`${base}/imgs/light-theme-icon.png`}>
</svelte:head>

<button on:click={toggleTheme} class="color-scheme">
    {#if colorScheme === "dark"}
        <img src={`${base}/imgs/dark-theme-icon.png`} height="18rem" alt="Dark Mode">
    {:else}
        <img src={`${base}/imgs/light-theme-icon.png`} height="20rem" alt="Light Mode">
    {/if}
</button>


<slot/>

<style>
    .color-scheme {
        background: none;
        border: none;
        position: fixed;
        top: 3rem;
        right: 3rem;
    }
    .color-scheme:hover {
        cursor: pointer;
    }

    nav {
        display: flex;
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