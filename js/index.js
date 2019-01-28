const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


/*---***--- Code by Zen ---***---*/

//Task 2 - selectors

/*1*/const imgLog = document.getElementById('logo-img');

/*2*/const imgCta = document.getElementById('cta-img');

/*3*/const imgMid = document.getElementById('middle-img');

//Task 2 - img updates

/*1*/imgLog.setAttribute('src', 'img/logo.png');

/*2*/imgCta.setAttribute('src', 'img/header-img.png');

/*3*/imgMid.setAttribute('src', 'img/mid-page-accent.jpg');


/*---***--- Task 4 ---***---*/


//selects all a tags into an array
const navAnchors = document.querySelectorAll('a');
//update nav anchor names
navAnchors[0].textContent = 'Services';
navAnchors[1].textContent = 'Product';
navAnchors[2].textContent = 'Vision';
navAnchors[3].textContent = 'Features';
navAnchors[4].textContent = 'About';
navAnchors[5].textContent = 'Contact';

//selects header 1 in cta-img
const headText = document.querySelector('h1');
//update h1 textCo
headText.textContent = 'DOM IS AWESOME';


const btn = document.querySelector('button');
btn.textContent = "Get Started";

const txtCont = document.querySelectorAll('.text-content h4');
txtCont[0].textContent = 'Features';
txtCont[1].textContent = 'about';
txtCont[2].textContent = 'Services';
txtCont[3].textContent = 'Product';
txtCont[4].textContent = 'Vision';

const pCont = document.querySelectorAll('.text-content p');
pCont[0].textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
pCont[1].textContent = 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
pCont[2].textContent = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
pCont[3].textContent = 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
pCont[4].textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const contact = document.querySelector('.contact h4');
contact.textContent = "contact";

const contP = document.querySelectorAll('.contact p');
contP[0].textContent = '123 Way 456 Street<br>Somewhere, USA';
contP[1].textContent = '1 (800) 888-8888';
contP[2].textContent = 'sales@greatidea.io';

const foot = document.querySelector('footer p');
foot.textContent = 'Copyright Great Idea! 2018'

//Task 4

const main = document.querySelectorAll('a');
for (var i = 0; i < main.length; i++) {
   main[i].style.color = 'green';
}
