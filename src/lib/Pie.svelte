<script>
    import * as d3 from 'd3';

    export let data = [];
    export let selectedIndex = -1;

    let arcGenerator = d3.arc().innerRadius(40).outerRadius(50);
    

    let colors = d3.scaleOrdinal(d3.schemeTableau10);

    let sliceGenerator = d3.pie().value(d => d.value);
    // let arcData = sliceGenerator(data);
    // let arcs = arcData.map(d => arcGenerator(d));
    let arcData;
    let arcs;

        $: {
            // Reactively calculate arcData and arcs the same way we did before with sliceGenerator and arcGenerator
            arcData = sliceGenerator(data);
            arcs = arcData.map(d => arcGenerator(d));
        }
</script>

<div class="container">
    <svg viewBox="-50 -50 100 100">
        {#each arcs as arc, index}
            <path
                d={arc} fill={ colors(index) }
                class:selected={selectedIndex === index}
                on:click={e => selectedIndex = selectedIndex === index ? -1 : index}
            />
        {/each}
    </svg>
    
    <ul class="legend">
        {#each data as d, index}
            <li style="--color: { colors(index) }">
                <span class="swatch"></span>
                {d.label} <em>({d.value})</em>
            </li>
        {/each}
    </ul>  
</div>

<style>
    svg {
        max-width: 20em;
        margin-block: 2em;

        /* Do not clip shapes outside the viewBox */
        overflow: visible;
    }
    svg:has(path:hover) path:not(:hover) {
        opacity: 50%;
    }
    path {
        cursor: pointer;
        transition: 300ms;
    }
    svg:has(.selected) path:not(.selected) {
        opacity: 50%;
    }

    .selected { 
        --color: oklch(60% 45% 0) !important;
        
        &:is(path) {
            fill: var(--color) !important;
        }
        
        &:is(li) {
            color: var(--color);
        }
    }

    ul:has(.selected) li:not(.selected) {
        color: gray;
    }

    path:hover {
        opacity: 100% !important;
    }

    .container {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .legend {
        /* border: 1px solid white; */
        border-radius: 12px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(8em, 1fr));
        margin: 10px;
        padding: 10px;
        /* flex: 1; */
    }
    .legend li {
        display: flex;
        align-items: center;
        gap: 0.5em;
    }
    .swatch {
        display: inline-block;
        border-radius: 20%;
        width: 1em;
        height: 1em;
        background-color: var(--color);
    }
</style>