'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * search bar toggle
 */

// const searchBar = document.querySelector("[data-search-bar]");
// const searchTogglers = document.querySelectorAll("[data-search-toggler]");
// const overlay = document.querySelector("[data-overlay]");

// const toggleSearchBar = function () {
//   searchBar.classList.toggle("active");
//   overlay.classList.toggle("active");
//   document.body.classList.toggle("active");
// }

// addEventOnElem(searchTogglers, "click", toggleSearchBar);

// handle the scroll bar
const header = document.getElementById('header');

//function to handle scroll
function handlescroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

//add event listener
window.addEventListener('scroll', handlescroll);


const toggleCheckbox = document.querySelector('.toggle-checkbox');
toggleCheckbox.addEventListener('change', function() {
  if (this.checked) {
      document.body.classList.add('body');
  } else {
      document.body.classList.remove('body');
  }
})

document.addEventListener('DOMContentLoaded', function() {
  const options = {
      strings: ['We also provide adequate support for you solar setup.', 'We agive you at reduced price.', 'Na oluwa deh run am'],
      typeSpeed: 150,
      backSpeed: 50,
      backDelay: 3000,
      loop: true
  };

  const multiTextElement = document.querySelector('.multi-text');
  let currentTextIndex = 0;
  let currentText = '';
  let isDeleting = false;

  function type() {
      const fullText = options.strings[currentTextIndex];
      if (isDeleting) {
          currentText = fullText.substring(0, currentText.length - 1);
      } else {
          currentText = fullText.substring(0, currentText.length + 1);
      }
      multiTextElement.textContent = currentText;
      let typeSpeed = options.typeSpeed;
      if(isDeleting) {
          typeSpeed /= 2;
      }
      if (!isDeleting && currentText === fullText) {
          typeSpeed = options.backDelay;
          isDeleting = true;
      } else if (isDeleting && currentText === '') {
          isDeleting = false;
          currentTextIndex = (currentTextIndex + 1) % options.strings.length;
      }
      setTimeout(type, typeSpeed);
  }
  type();
});

const searchtoggle = document.querySelector('.searchclick');
const searchicon = document.querySelector('.search-btn');

searchicon.addEventListener('click', function() {
    if (searchtoggle.style.display === 'none') {
        searchtoggle.style.display = 'block';
    } else {
        searchtoggle.style.display = 'none';
    }
    
})
