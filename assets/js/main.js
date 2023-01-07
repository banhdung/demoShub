/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))







/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPorfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,


    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 2,
        }
    }

});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
    if (this.scrollY = 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== SHOW SCROLL UP ====================*/
// Bug
// function scrollUp() {
//     const scrollUp = document.getElementById('scroll-up');
//     if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
// }
// window.addEventListener('scroll', scrollUp)




/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'
// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getcurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getcurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localstorage.setItem('selected-theme', getcurrentTheme())
    localstorage.setItem('selected-icon', getcurrentIcon())
})


// -----------------------------
// const themeBtn = document.querySelectorAll('.theme-btn');


// for (let i = 0; i < themeBtn.length; i++) {

//   themeBtn[i].addEventListener('click', function () {

//     // toggle `light-theme` & `dark-theme` class from `body`
//     // when clicked `theme-btn`
//     document.body.classList.toggle('light-theme');
//     document.body.classList.toggle('dark-theme');

//     for (let i = 0; i < themeBtn.length; i++) {

//       // When the `theme-btn` is clicked,
//       // it toggles classes between `light` & `dark` for all `theme-btn`.
//       themeBtn[i].classList.toggle('light');
//       themeBtn[i].classList.toggle('dark');

//     }

//   })

// }


// EMAIL JS
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactMessage = document.getElementById('contact-message'),
    contactMess = document.getElementById('contact-mess')


const sendEmail = (e) => {
    e.preventDefault()
    
    // Check if the field has a value
    if (contactName.value === '' || contactEmail.value === '' || contactMessage.value === '') {
        //Add remove color
        // contactMess.classList.remove('color-blue')
        contactMess.classList.add('color-red')
    //    console.log('1')
        //Show message
        contactMess.textContent = 'Input fields ❌'
    } else {
      
      
        emailjs.sendForm('service_o9muxqb', 'template_ionjs2n','#contact-form','J8D9lWSkT2WCHBCus')
        .then(()=>{
            //show mess and color
            contactMess.classList.add('color-blue')
            contactMess.textContent = 'Message sent ✔'
           
            // console.log('2')
            //remove mess after 5 s
            setTimeout(() =>{
                contactMess.textContent=''
            },5000)

        },(error)=>{
            alert('some thing wrong',error)
        })
    }   

    contactName.value =''
    contactEmail.value =''
    contactMessage.value =''

}
contactForm.addEventListener('submit', sendEmail)


// ============================Login
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


