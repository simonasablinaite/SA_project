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
export default class countUp {
   constructor(el) {
      this.el = el;
      this.setVars();
      this.init();
   }

   setVars() {
      this.number = this.el.querySelectorAll("[data-countup-number]");
      this.observerOptions = { root: null, rootMargin: "0px 0px", threshold: 0 };
      this.observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            const end = parseFloat(
               entry.target.dataset.countupNumber.replace(/,/g, "")
            );
            const decimals = this.countDecimals(end);
            if (entry.isIntersecting) {
               this.iterateValue(entry.target, end, decimals);
            }
         });
      }, this.observerOptions);
   }

   init() {
      if (this.number.length > 0) {
         this.number.forEach((el) => {
            this.observer.observe(el);
         });
      }
   }

   iterateValue(el, end, decimals) {
      const start = 0;
      const duration = 2500;
      let startTimestamp = null;

      const step = (timestamp) => {
         if (!startTimestamp) startTimestamp = timestamp;
         const elapsedPercent = (timestamp - startTimestamp) / duration;
         const easedProgress = Math.min(this.easeOutQuint(elapsedPercent), 1);
         let interimNumber = Math.abs(easedProgress * (end - start) + start);
         el.innerHTML = this.formatNumber(interimNumber, decimals);
         if (easedProgress < 1) {
            window.requestAnimationFrame(step);
         }
      };

      // requestAnimationFrame returns DOMHighResTimeStamp as a callback (used as timestamp)
      window.requestAnimationFrame(step);
   }

   easeOutQuad(x) {
      return 1 - Math.pow(1 - x, 3);
   }

   easeOutQuint(x) {
      return 1 - Math.pow(1 - x, 5);
   }

   countDecimals(val) {
      if (Math.floor(val) === val) return 0;
      return val.toString().split(".")[1].length || 0;
   }

   formatNumber(val, decimals) {
      return val.toLocaleString("en-US", {
         minimumFractionDigits: decimals,
         maximumFractionDigits: decimals
      });
   }
}

const dataModules = [...document.querySelectorAll('[data-module="countup"]')];

dataModules.forEach((element) => {
   element.dataset.module.split(" ").forEach(function () {
      new countUp(element);
   });
});
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