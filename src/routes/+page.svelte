
<svelte:head>
  <title>Portfolio</title>
</svelte:head>

<h1> Vitor do Nascimento </h1>
<img src="./imgs/mm.jpg" alt="It's a coal mine!" height="400px" id="coal_mine">
<p> Hey! My name is Vitor, i'm a Data Science undergrad!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium tenetur corrupti nesciunt repellat itaque voluptate molestias cupiditate rerum culpa eligendi, officia ut. Eius voluptas temporibus laboriosam quas enim quae eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veritatis quia autem vitae perferendis reprehenderit odio? Dignissimos consectetur aut quia cumque ipsum? Id et nemo exercitationem laborum! Laborum, eum voluptates?
</p>

{#await fetch("https://api.github.com/users/vitor-n")}
  <p>Loading...</p>
{:then response}
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
  {:catch error}
    <p class="error">Something went wrong: {error.message}</p>
{/await}
