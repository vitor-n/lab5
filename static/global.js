// console.log("IT’S ALIVE!");

// function $$ (selector, context = document) {
//     return Array.from(context.querySelectorAll(selector));
// }

// let navLinks = $$('nav a');

// let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);

// currentLink?.classList.add('curren');

let pages = [
    {url: "./", title: "Home"},
    {url: "projects", title: "Projects"},
    {url: "resume", title: "Resume"},
    {url: "contact", title: "Contact"},
    {url: "https://github.com/vitor-n", title: "GitHub"},

    // add the rest of your pages here
];

let nav = document.createElement('nav');
document.body.prepend(nav);

const ARE_WE_HOME = document.documentElement.classList.contains("home");

for (let p of pages) {
    let url = p.url;
    let title = p.title;
    // if (!ARE_WE_HOME && !url.startsWith("http")) {
    //     url = "../" + url;
    // }
    // nav.insertAdjacentHTML("beforeend", `<a href="${ url }">${ title }</a>` );

    let a = document.createElement("a");
    a.href = url;
    a.textContent = title;
    nav.append(a);

    a.classList.toggle("current", a.host === location.host && a.pathname === location.pathname);
    
    if (a.host !== location.host) {
        a.target = "_blank";
    }
}