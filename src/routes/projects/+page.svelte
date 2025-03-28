<svelte:head>
    <title>My Projects</title>
</svelte:head>

<div class="projects">
    <article>
        <img src=".././imgs/mm-balloon.jpg" alt="">
        <h5>Lorem ipsum dolor sit.</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt reiciendis possimus dicta doloremque amet sunt aspernatur deserunt sequi! Est hic nesciunt libero natus modi earum maiores aut cum incidunt.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt reiciendis possimus dicta doloremque amet sunt aspernatur deserunt sequi! Est hic nesciunt libero natus modi earum maiores aut cum incidunt.</p>
    </article>
    <article>
        <img src=".././imgs/mm-balloon.jpg" alt="">
        <h5>Voluptatibus sint eos consequuntur.</h5>
        <p>Quasi et culpa suscipit, alias quaerat fuga natus eos nulla cupiditate cumque eum voluptatem repellendus dignissimos aut fugiat harum ducimus quibusdam corporis, molestiae expedita ullam hic. Debitis in fugiat nam?</p>
    </article>
    <article>
        <img src=".././imgs/mm-balloon.jpg" alt="">
        <h5>Ab, tenetur aperiam! Id?</h5>
        <p>Cupiditate quibusdam repellat excepturi facilis aperiam, illum alias architecto aspernatur culpa in a mollitia non laboriosam, odio veritatis totam eum et tenetur quidem nemo inventore. Eos sint quia similique? Similique?</p>
    </article>
    <article>
        <img src=".././imgs/mm-balloon.jpg" alt="">
        <h5>Omnis perferendis doloribus qui!</h5>
        <p>Blanditiis eos perferendis, cupiditate accusantium vero adipisci itaque, animi eius voluptatum dolore sapiente ipsum omnis vel in cum nesciunt repellendus a error! Vero ducimus amet fugiat praesentium. Vero, asperiores numquam.</p>
    </article>
    <article>
        <img src=".././imgs/mm-balloon.jpg" alt="">
        <h5>Omnis totam assumenda maiores!</h5>
        <p>Error ullam laboriosam nostrum eos soluta mollitia reprehenderit nulla eaque, cumque et voluptates, voluptatibus adipisci, quod eligendi dolorem asperiores tempore laborum laudantium cupiditate provident cum! Possimus ex similique odio autem?</p>
    </article>
    <article>
        <img src=".././imgs/mm-balloon.jpg" alt="">
        <h5>Qui consequuntur dolore quis?</h5>
        <p>Tempore, culpa consequatur voluptatem quam, repellat inventore alias nam ut incidunt obcaecati qui neque eaque illum nostrum totam ipsa quae quaerat sint quis reiciendis omnis natus placeat quibusdam? Ut, assumenda.</p>
    </article>
    <article>
        <img src=".././imgs/mm-balloon.jpg" alt="">
        <h5>Qui consequuntur dolore quis?</h5>
        <p>Tempore, culpa consequatur voluptatem quam, repellat inventore alias nam ut incidunt obcaecati qui neque eaque illum nostrum totam ipsa quae quaerat sint quis reiciendis omnis natus placeat quibusdam? Ut, assumenda.</p>
    </article>
</div>

<style>
.projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20em, 1fr)); /* Aumentando o valor mínimo de 15em para 20em */
    min-width: 20em;  /* Ajuste o valor mínimo */
    max-width: 1fr;
}

article {
    margin: 10px;
    display: grid;
    grid-template-rows: auto auto 1fr;
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
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, opacity 0.3s ease;
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