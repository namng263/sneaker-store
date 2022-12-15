let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

function changeBg() {
    
    const img = [
        'url("./images/mul/home.png")',
        'url("./images/mul/home-1.png")',
        'url("./images/mul/home-2.jpeg")'
    ]

    const section = document.querySelector('section');
    const bg = img[Math.floor(Math.random() * img.length)];
    section.style.background = bg + 'no-repeat';
    section.style.backgroundSize = 'cover';

}
setInterval(changeBg, 2000);

let confirmBox = document.querySelector('.confirm-box')
document.querySelector('.add').onclick = () => {
    confirmBox.classList.add('open-box')
    confirmBox.classList.remove('no-display')
}

document.querySelector('.confirm-ok').onclick = () => {
    confirmBox.classList.remove('open-box');
    confirmBox.classList.add('no-display');
}

document.querySelector('.confirm-cancel').onclick = () => {
    confirmBox.classList.remove('open-box');
    confirmBox.classList.add('no-display');
}

function resetActive(element, elementClass, i) {
    for (let i = 0; i < element.length; i++) {
        element[i].classList.remove(elementClass + '-selected')
    }
    element[i].classList.add(elementClass + '-selected')
}

const confirmSize = document.querySelectorAll('.sizes > li')
for (let i = 0; i < confirmSize.length; i++) {
    confirmSize[i].addEventListener('click', (e) => {
        resetActive(confirmSize, 'size', i)
    })
}

const confirmColor = document.querySelectorAll('.colors > li')
for (let i = 0; i < confirmColor.length; i++) {
    confirmColor[i].addEventListener('click', (e) => {
        resetActive(confirmColor, 'color', i)
    })
}
