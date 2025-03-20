<svelte:head>
  <title>Contact me</title>
</svelte:head>

<h1> Vitor do Nascimento </h1>
<h2> Contact Me </h2>

<form action="mailto:vitor.nascimento@proton.me">
    <label for="email">Email: <input type="email" name="email" id="email" placeholder="Your email"></label>
    <label for="subject">Subject: <input name="subject" id="subject" placeholder="Subject"></label>
    <label for="body">Body: <textarea name="body"></textarea></label>
    <button>Submit</button>
</form>