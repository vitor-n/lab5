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
    <h1>Olá! Me chamo Vitor,</h1>
    <p>
      Sou técnico em Automação Industrial pelo IFMG campus Ouro Preto e atualmente estou no 5º período do bacharelado em Ciência de Dados e Inteligência Artificial pela FGV - EMAp, onde sou bolsista pelo programa <a href="https://cdmc.fgv.br/selecao-de-talentos" target="_blank" rel="noopener noreferrer" style="color: inherit;">Seleção de Talentos</a> promovido pelo Centro para o Desenvolvimento da Matemática e Ciências – CDMC. Tenho grande interesse em Machine Learning, Visualização de Dados e Estatística.
    </p>
  </div>
</div>


<!-- {#await fetch("https://api.github.com/users/vitor-n")}
  <p>Loading...</p>
{:then response}
  {#if response.ok}

    {#await response.json()}
      <p>Decoding...</p>
      {:then data} 
      <section>
        <h2>My Github Stats</h2>
        <dl>
          <dt>Followers</dt>
          <dd>{data.followers}</dd>
          <dt>Following</dt>
          <dd>{data.following}</dd>
          <dt>Public Repos</dt>
          <dd>{data.public_repos}</dd>
        </dl>
      </section>
      {:catch error}
      <p class="error">Something went wrong: {error.message}</p>
    {/await}

  {/if}
{/await} -->
  