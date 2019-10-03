function like(postid){
    let post = document.getElementById(postid);
    console.log(post.style.color);
    post.style.color = post.style.color === "rgb(218, 223, 234)" ? "rgb(255, 0, 0)" : "rgb(218, 223, 234)";
    console.log(post.style.color);
}
let postCount = 1;
function addNewPost(){
    let post = document.createElement('div');
    postCount++;
    let postid = "post" + postCount;
    post.classList.add('card', 'col-lg-6', 'col-md-8', 'col-sm-10' );
    post.innerHTML = 
        `
            <div class="card-body">
                <h5 class="card-title">${document.getElementById('title').value}</h5>
                <img src="${document.getElementById('image').value}" class="card-img-top card-img"  alt="image not found">
                <p class="card-text">${document.getElementById('description').value}</p>
                <div class="d-flex justify-content-between">
                    <i class="fas fa-heart cursor-pointer" id=postid onclick="like('postid')" onload="setColor(post1)" style="color:rgb(218, 223, 234);"></i>
                    <p class="card-text"><small class="text-muted">Just Now</small></p>
                </div>
            </div>
    `;
    document.getElementById('posts').appendChild(post);
}