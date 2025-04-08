<svelte:head>
  <title>Portfolio</title>
</svelte:head>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 50px 0;
  }

  h1 {
    font-size: 2rem;
  }

  #coal_mine {
    max-height: 350px;
    max-width: 350px;
    margin-right: 30px;
    border-radius: 100%;
    flex: 1;
  }
  .text {
    flex: 1;
  }

</style>

<div class="container">
  <img src="./imgs/mm.jpg" alt="It's a coal mine!" id="coal_mine">
  <div class="text">
    <h1>Olá! Me chamo Vitor <span style="font-size: 1.5ch;">👋</span></h1>
    <p>
      Sou técnico em Automação Industrial pelo IFMG campus Ouro Preto e atualmente estou no 5º período do bacharelado em Ciência de Dados e Inteligência Artificial pela FGV - EMAp, onde sou bolsista pelo programa <a href="https://cdmc.fgv.br/selecao-de-talentos" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration-style: dashed;">Seleção de Talentos</a> promovido pelo Centro para o Desenvolvimento da Matemática e Ciências – CDMC. Tenho grande interesse em Machine Learning, Visualização de Dados, Programação e Estatística.
    </p>
  </div>
</div>

<script>
import { onMount } from "svelte";

let githubData = null;
let loading = true;
let error = null;

onMount(async () => {
    try {
        const response = await fetch("https://api.github.com/users/vitor-n");
        githubData = await response.json();
    } catch (err) {
        error = err;
    }
    loading = false;
});
</script>

{#if loading}
    <p>Loading...</p>
{:else if error}
    <p class="error">Something went wrong: {error.message}</p>
{:else}
    <section>
        <h2>My GitHub Stats</h2>
        <dl>
            <dt>Followers</dt>
            <dd>{githubData.followers}</dd>
            <dt>Following</dt>
            <dd>{githubData.following}</dd>
            <dt>Public Repositories</dt>
            <dd>{githubData.public_repos}</dd>
        </dl>
    </section>
{/if}

  