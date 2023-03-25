
function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data));
}


function displayPost(posts){
    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        
     const postDiv = document.createElement('div');
     postDiv.classList.add('post');
     postDiv.innerHTML = `
     <h4>User-Id :${post.userId} </h4>
     <h5> post-title :${post.title} </h5>
     <p>post description :${post.body} </p>
     `;
     postContainer.appendChild(postDiv);
        
        
    }
}

loadPost();
