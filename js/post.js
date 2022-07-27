pageDetails();
let main = document.getElementById('main-container');

async function pageDetails() {
    let queryString = location.search; 
    let urlParams = new URLSearchParams(queryString);
    let id = urlParams.get('id');

    let response = await fetch('http://localhost:5000/posts/' + id);
    let post = await response.json();

    let datePost = new Date(post.date);
    let formatedDate = `${datePost.getFullYear()}-${datePost.getMonth() + 1}-${datePost.getDate()} ${datePost.getHours()}:${datePost.getMinutes()}`


    main.innerHTML += `
    <h1> ${post.title}</h1>
    <p>${post.author} ⬥ ${formatedDate}</p>
    <p>Tags: ${post.tags.join(', ')}</p>
    <p> ${post.content}</p>
    <p><a href="index.html">Back</a> </p>
    <hr>`;


}