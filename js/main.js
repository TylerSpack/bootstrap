function like(postid){
    let post = document.getElementById(postid);
    console.log(post);
    post.style.color = post.style.color === "rgb(218, 223, 234)" ? "rgb(255, 0, 0)" : "rgb(218, 223, 234)";
    console.log(post);
}

function addNewPost(){
    let post = document.createElement('div');
    post.classList.add('d-flex', 'flex-column', 'align-items-center', 'posts' );
    post.innerHTML = 
        `
        <div class="card col-lg-6 col-md-8 col-sm-10">

            <div class="card-body">
                <h5 class="card-title">${document.getElementById('title')}</h5>
                <img src="${document.getElementById('image')}" class="card-img-top card-img"  alt="sunset">
                <p class="card-text">${document.getElementById('description')}</p>
                <div class="d-flex justify-content-between">
                    <i class="fas fa-heart cursor-pointer" id="post1" onclick="like('post1')" onload="setColor(post1)"></i>
                    <p class="card-text"><small class="text-muted">Just Now</small></p>
                </div>

            </div>
        </div>
    `;
    document.getElementById('posts').appendChild(post);
}