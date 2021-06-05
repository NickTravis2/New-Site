//Changing Nav Bar//



// const navOptions = {
//     rootMargin: "-100px 0px 0px 0px",
    
// };




// const navObserver = new IntersectionObserver(function(
//     entries, 
//     navObserver
// ) {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//             nav.classList.add("nav-scrolled");
//         } else {
//             nav.classList.remove("nav-scrolled");
//         }
//     });
// }, 
// navOptions);

// navObserver.observe(header);


const header = document.querySelector("header");
const nav = document.querySelector("nav");

const translate = document.querySelectorAll(".translate");
const main_title = document.querySelector(".main-title");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const content_right = document.querySelector(".content-right");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");
const [red, green, blue, alpha] = [0,0,0,0.5];


let header_height = header.offsetHeight;
let section_height = section.offsetHeight;


//
// header_height = 850px
// sectiom_height = 937px

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();


    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    // added *2 to opacity scroll
    opacity.forEach(element => {
        element.style.opacity = (scroll / (sectionY.top + (section_height) / 1.2)) * 2;
    })

    main_title.style.opacity = - scroll / (header_height / 3) + 1;
    shadow.style.height = `${scroll * 0.75 + 300}px`;

    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;

    content_right.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    border.style.width = `${scroll / (sectionY.top + (section_height) / 2) * 40}%`;

    const y = 1 + window.pageYOffset / 15;
    const [r,g,b,a] = [red/y, green/y, blue/y, alpha/y].map(Math.round);
    nav.style.background = `rgba(${r},${g},${b},${a})`;

    // nav.style.background
})


// const link = document.querySelector('a');

// link.addEventListener('click', event => {
//     document.querySelector('#aboutContainer').scrollIntoView({
//         behavior: "smooth"
//     })
// })
    

// document.querySelector('#aboutContainer').scrollIntoView({
//     behavior: "smooth"
// });