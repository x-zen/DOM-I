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
navAnchors[1].textContent = 'Services';
navAnchors[2].textContent = 'Product';
navAnchors[3].textContent = 'Vision';
navAnchors[4].textContent = 'Features';
navAnchors[4].textContent = 'About';
navAnchors[5].textContent = 'Contact';

//selects header 1 in cta-img
const headText = document.querySelector('h1');
//update h1 textCo
headText.textContent = 'DOM IS AWESOME';
