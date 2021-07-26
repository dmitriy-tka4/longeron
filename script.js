'use strict'

console.log('Это очень важная строчка, без неё скрипт работать не будет! Наверное.. Не удалять!!');

// about

let aboutMore = document.querySelector('.about-more');
let aboutHidden = document.querySelector('about-hidden2');

aboutMore.addEventListener('click', () => {
  aboutHidden.classList.remove('about-hidden');
  aboutMore.closest('p').classList.add('about-hidden');
});

// ьщвфд

let orderButton = document.querySelector('.order-button');
let overlay = document.querySelector('.overlay');
let closeButton = document.querySelector('.close-button');

orderButton.addEventListener('click', () => {
  overlay.classList.remove('hidden');
});

closeButton.addEventListener('click', () => {
  overlay.classList.add('hidden');
});

// swiper

const swiper = new Swiper('.swiper-container', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
