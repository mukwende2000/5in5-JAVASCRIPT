const quote = document.querySelector('.quote')
const author = document.querySelector('.author')

async function getData () {
    const res = await fetch('http://api.quotable.io/random?minLength=100&maxLength=140');
    const data = await res.json()
    quote.textContent = data.content;
    author.textContent = data.author;
}
window.addEventListener('DOMContentLoaded', getData)
window.addEventListener('click', getData);