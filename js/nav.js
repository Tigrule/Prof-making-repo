let burger = window.document.getElementById('burger');
let navigation = window.document.getElementById('nav');
let loup = window.document.getElementById('loup');
let search = window.document.getElementById('search')


burger.addEventListener('click', function() {
    navigation.classList.toggle('d-none');
    burger.classList.toggle('redfill');
})
loup.addEventListener('click', function() {
    search.classList.toggle('d-none');
    loup.classList.toggle('redfill');
})