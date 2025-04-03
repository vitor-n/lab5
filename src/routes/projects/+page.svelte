<svelte:head>
    <title>My Projects</title>
</svelte:head>

<script>
    import { base } from "$app/paths";
    import projects from "$lib/projects.json";
    import Pie from '$lib/Pie.svelte';
    import * as d3 from 'd3';

    let selectedYearIndex = -1;
    let selectedYear;
    $: selectedYear = selectedYearIndex > -1 ? pieData[selectedYearIndex].label : null;

    let query = "";
    $: filteredProjects = projects.filter(project => {
        let values = Object.values(project).join("\n").toLowerCase();
        return values.includes(query.toLowerCase());
    });
    $: filteredByYear = selectedYear ? filteredProjects.filter(project => project.year === selectedYear) : filteredProjects;


    let pieData;

    $: {
        // Initialize to an empty object every time this runs
        pieData = {};
        
        // Calculate rolledData and pieData based on filteredProjects here
        let rolledData = d3.rollups(filteredProjects, v => v.length, d => d.year);

        // We don't need 'let' anymore since we already defined pieData
        pieData = rolledData.map(([year, count]) => {
            return { value: count, label: year };
        });
    }
</script>

<h1>
Projects
</h1>

<Pie data={pieData} bind:selectedIndex={selectedYearIndex} />
<input type="search" bind:value={query} aria-label="Search projects" placeholder="🔍 Search projects..." />

<div class="projects">
    {#each filteredByYear as project}
        <article>
            <img src={base}{project.image} alt="">
            <h5>{project.title}</h5>
            <p>
                {project.year}
                
                {project.description}
            </p>
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