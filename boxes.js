let box = document.querySelector('.box2'); // nav tab OR nav box
let btn1 = document.querySelector('#btn1'); // menu button
let btn2 = document.querySelector('#btn2'); // close button
let imgs = document.querySelectorAll('.image'); // all images

let left = document.querySelector('.leftBtn'); left.innerText = '<~ Left'; // left button
let right = document.querySelector('.rightBtn'); right.innerText = 'Right ~>'; // right button

let scroll = document.querySelector('.img-box'); // container of all images
let radio = document.querySelectorAll('.radio-btns'); // all round dots 

// button Event to open nav tab
btn1.addEventListener('click', () => {
    btn1.style.display = 'none';
    btn2.style.display = 'block';
    box.style.transform = 'translateX(0px)';
    box.style.opacity = '1';
    box.style.height = '100vh';
});
// button Event to close nav tab
btn2.addEventListener('click', () => {
    btn1.style.display = 'block';
    btn2.style.display = 'none';
    box.style.transform = 'translateX(-200px)';
    box.style.opacity = '0.4';
    box.style.height = '100px';
});
/*
let wid = btns[0].getBoundingClientRect().width;
scroll.scrollBy(wid, 0);
opAnime
*/

let j = 0; // indext of current image
radio[0].style.background = 'var(--gc1)';

right.addEventListener('click', () => {
    let wid = imgs[0].getBoundingClientRect().width; // width of image
    scroll.scrollBy(wid, 0); // scroll image to right by its width
    imgs.forEach((e) => {
        e.classList.add('opanime1'); // add class of animation to image
    })
    setTimeout(() => {
        imgs.forEach((e) => {
            e.classList.remove('opanime1'); // remove class of animation from image
        })
    }, 200);
    if (j <= 4) { j++ }
    i = j;
    let current = radio[i];
    radio.forEach((e) => {
        if (e != current) {
            e.style.background = 'white';
        }
        else {
            e.style.background = 'var(--gc1)';
        }
    })
});

left.addEventListener('click', () => {
    let wid = imgs[0].getBoundingClientRect().width; // width of image
    scroll.scrollBy(-wid, 0); // scroll image to left by its width
    imgs.forEach((e) => {
        e.classList.add('opanime1'); // add class of animation to image
    })
    setTimeout(() => {
        imgs.forEach((e) => {
            e.classList.remove('opanime1'); // remove class of animation from image
        })
    }, 200);
    if (j >= 1) { j-- }
    i = j;
    let current = radio[i];
    radio.forEach((e) => {
        if (e != current) {
            e.style.background = 'white';
        }
        else {
            e.style.background = 'var(--gc1)';
        }
    })
});
/*
const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        console.log(entry);
    })
},
{
    threshold: 0.5,
}
)
observer.observe(imgs[5]);*/
const closeTab = [
    document.querySelector('.main-box'),
    document.querySelector('.check-boxes'),
    document.querySelector('.btns3')
]
// button click event to hide nav tab
closeTab.forEach(e => {
    e.addEventListener('click', () => {
        btn1.style.display = 'block';
        btn2.style.display = 'none';
        box.style.transform = 'translateX(-200px)';
        box.style.opacity = '0.4';
        box.style.height = '100px';
    })
})