const sendBtn = document.getElementById('send-btn');
const postInput = document.getElementById('post-input');
const output = document.getElementById('output');

const baseUrl = 'https://oluyinka-abubakar-api.herokuapp.com';
// const baseUrl = 'http://localhost:3000';

const getPostById = async (event) => {
  event.preventDefault();
  const postId = postInput.value;
  const url = `${baseUrl}/posts/${postId}`;

  if (postId === '') {
    output.innerHTML = `
    <div class="text text-danger">
      <strong>Error!</strong> Post ID cannot be empty.
    </div>
    `;
    return;
  }
  const response = await fetch(url, {
    method: 'GET',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
  if (response.error) {
    output.innerHTML = `
    <div class="text text-danger">
      <strong>Error!</strong> ${response.message}
    </div>
    `;
    return;
  } else {
    setTimeout(() => {
      localStorage.setItem('post', JSON.stringify(response));
      window.location.href = './result.html';
    }, 2000);
    output.innerHTML = `
    <div class="spinner-border text-dark" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    `;
  }
};

sendBtn.addEventListener('click', getPostById);
