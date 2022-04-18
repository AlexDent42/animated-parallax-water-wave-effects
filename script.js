let wave1 = document.querySelector('#wave1');
let wave2 = document.querySelector('#wave2');
let wave3 = document.querySelector('#wave3');
let wave4 = document.querySelector('#wave4');


window.addEventListener('scroll', ()=> {
    let value = window.scrollY;

    wave1.style.backgroundPositionX = 400 + value * 4 + 'px';
    wave2.style.backgroundPositionX = 300 + value * -4 + 'px';
    wave3.style.backgroundPositionX = 200 + value * 2 + 'px';
    wave4.style.backgroundPositionX = 100 + value * -2 + 'px';
})