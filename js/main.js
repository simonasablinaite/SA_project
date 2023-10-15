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
//  FAQ end 

//  Contacts start 
//  Contacts end 

//  Footer start 
//  Footer end 