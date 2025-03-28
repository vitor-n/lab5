<svelte:head>
    <title>My Projects</title>
</svelte:head>

<h1>
Projects
</h1>

<script>
    import { onMount } from "svelte";
    import { base } from "$app/paths";


    let projects = [];

    onMount(async () => {
        const response = await fetch(`${base}/projects.json`);
        projects = await response.json();
    });
</script>

<div class="projects">
    {#each projects as project}
        <article>
            <img src={base}{project.image} alt="">
            <h5>{project.title}</h5>
            <p>{project.description}</p>
        </article>
    {/each}
</div>


<style>
.projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
    /* grid-template-rows: masonry; */
    margin: 1cm 0 1cm 0;
    grid-gap: 10px;
}

article {
    margin: 10px;
}

article img {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 15px;
}

article h5 {
    margin: 10px;
    text-align: center;
    position: relative;
}

article p {
    position: relative;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease;
    padding: 0 10px;
}

article:hover p {
    position: relative;
    max-height: 15rem;
    opacity: 1;
}

article:hover img {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
}
</style>