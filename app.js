const popup = document.querySelector('.popup');
const close_btn = document.querySelector('.close-btn');

window.addEventListener('load',() => {
    setTimeout(() => { 
   popup.style.display = 'block';
    }, 1000)
})



close_btn.addEventListener('click', () => {
    popup.style.display = 'none';
})