const title = document.getElementById('post-title');
const body = document.getElementById('post-body');
const id = document.getElementById('post-id');
const back = document.getElementById('back');

const post = JSON.parse(localStorage.getItem('post'));
title.innerHTML = post.title;
body.innerHTML = post.body;
id.innerHTML = `Post ${post.id}`;

back.addEventListener('click', () => {
  window.location.href = './index.html';
}
);