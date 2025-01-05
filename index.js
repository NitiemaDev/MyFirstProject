const showBtn = document.querySelector('button');

function afficheMessage() {
    const div = document.querySelector('div');
    div.style.display = 'block';
}

showBtn.addEventListener('click', () => afficheMessage());
