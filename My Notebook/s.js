// script.js
document.querySelector('.search-bar button').addEventListener('click', function() {
    const query = document.querySelector('.search-bar input').value;
    window.location.href = `https://www.google.com/search?q=${query}`;
});


    

