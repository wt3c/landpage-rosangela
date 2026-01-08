/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'), navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
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

/*==================== ACCORDION FAQ ====================*/
const faqItems = document.querySelectorAll('.faq__item')

faqItems.forEach((item) => {
    const faqHeader = item.querySelector('.faq__header')

    faqHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.faq-open')

        toggleItem(item)

        if (openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const faqContent = item.querySelector('.faq__content')

    if (item.classList.contains('faq-open')) {
        faqContent.removeAttribute('style')
        item.classList.remove('faq-open')
    } else {
        faqContent.style.height = faqContent.scrollHeight + 'px'
        item.classList.add('faq-open')
    }
}

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58
        const sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 460) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*==================== SCROLL REVEAL ANIMATION ====================*/
// Simple Intersection Observer for fade-in animations
const observerOptions = {
    root: null, rootMargin: '0px', threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add 'fade-in' class to elements you want to animate in CSS
// For this project, we'll just add a simple CSS rule for sections to fade in
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// Modify the observer callback to handle the inline styles we just added
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    fadeObserver.observe(section);
});
