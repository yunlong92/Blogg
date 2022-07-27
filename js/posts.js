let main = document.getElementById('main-container');

blogPosts();
async function blogPosts() {
    let response = await fetch('http://localhost:5000/posts')
    let data = await response.json();
    console.log(data);
    console.log(response);

    for (let post of data) {
        let datePost = new Date(post.date);
        let formatedDate = `${datePost.getFullYear()}-${datePost.getMonth() + 1}-${datePost.getDate()} ${datePost.getHours()}:${datePost.getMinutes()}`


        let content = post.content;
        if (post.content.length > 100) {
            content = post.content.substring(0, 100);
            content += '.... ';
            content += `<a href="post.html?id=${post._id}"> Read more</a>`;
        }

        main.innerHTML += `
          <h1> ${post.title}</h1>
          <p>${post.author} ⬥ ${formatedDate}</p>         
          <p>Tags: ${post.tags.join(', ')}</p>
          <hr>
          <p>           
          ${content}           
          </p>
          <hr>
          `;

    }
}