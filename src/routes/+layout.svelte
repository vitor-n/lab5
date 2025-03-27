
<script>
import { base } from "$app/paths";
import { page } from "$app/stores"; 
import { onMount } from "svelte";

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
$: localStorage.colorScheme = colorScheme;

</script>

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

<label class="color-scheme">
    Theme:
    <select bind:value={ colorScheme }>
        <option value="light dark"> Automatic </option>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
    </select>
</label>


<slot/>

<style>
    .color-scheme {
        position: absolute;
        top: 2rem;
        right: 2rem;
    }
    nav {
        display: flex;
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: black;
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
        border-bottom-color: black;
    }

    nav a:hover {
        background-color: var(--color-accent-bg);
        border-bottom-color: var(--color-accent);
        border-bottom-style: solid;
        border-bottom-width: 3px;
        font-weight: bold;
        color: white;
    }
</style>