const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const container= document.getElementById('container');

for(let i = 0; i < posts.length; i++){
    const everyPosts= posts[i];
    console.log(posts[i]);

    const post= document.createElement("div");
    post.classList.add('post');
    container.append(post);

    const postHeader=document.createElement("div")
    postHeader.classList.add('post__header')
    post.append(postHeader);

    const meta= document.createElement("div");
    meta.classList.add("post-meta");
    postHeader.append(meta);

    const metaIcon= document.createElement("div");
    metaIcon.classList.add("post-meta__icon");
    meta.append(metaIcon);

    const imgMetaIcon= document.createElement("img");
    imgMetaIcon.classList.add("profile-pic");
    imgMetaIcon.src= posts[i].media;
    metaIcon.append(imgMetaIcon);

    const metaData= document.createElement("div");
    metaData.classList.add("post-meta__data");
    meta.append(metaData);

    const metaAuthor = document.createElement("div");
    metaAuthor.classList.add("post-meta__author");
    metaAuthor.innerHTML= posts[i].author.name;
    metaData.append(metaAuthor);

    const metaTime= document.createElement("div");
    metaTime.classList.add("post-meta__time");
    metaTime.innerHTML=posts[i].created
    metaData.append(metaTime);

    const text= document.createElement("div");
    text.classList.add("post__text");
    text.innerHTML=posts[i].content;
    post.append(text);

    const imgContainerPosts=document.createElement("div");
    imgContainerPosts.classList.add("post__image");
    post.append(imgContainerPosts);

    const imgPosts= document.createElement("img");
    if( imgPosts.src= posts[i].author.image === null){
        imgPosts.src= "https://via.placeholder.com/300"
    }else{
        imgPosts.src= posts[i].author.image;
    }
    post.append(imgPosts);

    const footer= document.createElement("div");
    footer.classList.add("post__footer");
    post.append(footer);

    const likes= document.createElement("div");
    likes.classList.add("likes js-likes")
    footer.append(likes);

    const likesCta= document.createElement("div");
    likesCta.classList.add("likes__cta");
    likes.append(likesCta);

    const btn= document.createElement("a");
    btn.classList.add("like-button  js-like-button");
    btn.setAttribute("href", "#");
    btn.setAttribute("data-postid", "post[i].id" );
    likesCta.append(btn);

    const btnIcon= document.createElement("i");
    btnIcon.classList.add("like-button__icon fas fa-thumbs-up");
    btn.setAttribute("aria-hidden", "true")
    btn.append(btnIcon);

}