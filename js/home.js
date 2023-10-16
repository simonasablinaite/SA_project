//  Header start 
const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');

// Hamburgerio mygtuko paspaudimo efektas:
hamburgerEl.addEventListener('click', () => {
   navEl.classList.toggle('nav-open');
   hamburgerEl.classList.toggle('hamburger-open');
});

// paspaudus nuorodą - dingsta menu
navEl.addEventListener('click', () => {
   navEl.classList.remove('nav-open');
   hamburgerEl.classList.remove('hamburger-open');
});
//  Header end 

//  Hero start 
const changingPhrasesEl = document.querySelector('#typing-text');
const phrases = ['sausų grūdų laikymu', 'drėgnų grūdų laikymu', 'drėgnos produkcijos džiovinimu'];

let currentIndex = 0;

function changePhrases() {
   changingPhrasesEl.innerHTML = phrases[currentIndex];
   currentIndex = (currentIndex + 1) % phrases.length;
};

setInterval(changePhrases, 2000);

changePhrases();
//  Hero end 

//  About-us start 
//  About-us end 

//  Services start 
//  Services end 

//  Sponsores start 
//  Sponsores end 

//  Gallery start 
//  Gallery end 

//  FAQ start 
const accordionHeaderEl = document.getElementsByClassName('accordion-header');

function accordion() {
   for (let i = 0; i < accordionHeaderEl.length; i++) {
      accordionHeaderEl[i].addEventListener('click', () => {
         accordionHeaderEl[i].classList.toggle('active');
      })
   }
}

accordion();
//  FAQ end 

//  Contacts start 
//  Contacts end 

//  Footer start 
//  Footer end 