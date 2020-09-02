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

// const allNavs = document.querySelectorAll('nav a');
// console.log(allNavs);

const link = document.querySelector('nav a:nth-of-type(1)');
const link2 = link.nextElementSibling;
const link3 = link2.nextElementSibling;
const link4 = link3.nextElementSibling;
const link5 = link4.nextElementSibling;
const link6 = link5.nextElementSibling;




link.textContent = siteContent["nav"]["nav-item-1"];
link2.textContent = siteContent["nav"]["nav-item-2"];
link3.textContent = siteContent["nav"]["nav-item-3"];
link4.textContent = siteContent["nav"]["nav-item-4"];
link5.textContent = siteContent["nav"]["nav-item-5"];
link6.textContent = siteContent["nav"]["nav-item-6"];

const h1Text = document.querySelector('.cta-text h1');
h1Text.textContent = siteContent["cta"]["h1"];
// console.log(h1Text);
const buttonText = document.querySelector('.cta-text button');
buttonText.textContent = siteContent["cta"]["button"];
const headingImg = document.querySelector('.cta img');
headingImg.setAttribute('src', siteContent["cta"]["img-src"]);

const featuresSection = document.querySelector('.text-content:nth-of-type(1)')
// console.log(featuresSection);
const featuresTitle = featuresSection.querySelector('h4');
// console.log(featuresTitle);
featuresTitle.textContent = siteContent["main-content"]["features-h4"];
const featuresText = featuresSection.querySelector('p');
featuresText.textContent = siteContent["main-content"]["features-content"];


const aboutSection = document.querySelector('.text-content:nth-of-type(2)')
// console.log(aboutSection);
const aboutTitle = aboutSection.querySelector('h4');
// console.log(aboutTitle);
aboutTitle.textContent = siteContent["main-content"]["about-h4"];
const aboutText = aboutSection.querySelector('p');
aboutText.textContent = siteContent["main-content"]["about-content"];


const middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const servicesSection = document.querySelector('.bottom-content .text-content:nth-of-type(1)')
// console.log(servicesSection);

const servicesTitle = servicesSection.querySelector('h4');
servicesTitle.textContent = siteContent["main-content"]["services-h4"];
const servicesText = servicesSection.querySelector('p');
servicesText.textContent = siteContent["main-content"]["services-content"];


const productSection = document.querySelector('.bottom-content .text-content:nth-of-type(2)');
// console.log(productSection);

productTitle = productSection.querySelector('h4');
productTitle.textContent = siteContent["main-content"]["product-h4"];
const productText = productSection.querySelector('p');
productText.textContent = siteContent["main-content"]["product-content"];


const visionSection = document.querySelector('.bottom-content .text-content:nth-of-type(3)');
// console.log(visionSection);

const visionTitle = visionSection.querySelector('h4');
visionTitle.textContent = siteContent["main-content"]["vision-h4"];
const visionText = visionSection.querySelector('p');
visionText.textContent = siteContent["main-content"]["vision-content"];


const contactSection = document.querySelector('.contact');

contactTitle = contactSection.querySelector('h4');
contactTitle.textContent = siteContent["contact"]["contact-h4"];

contactP1 = contactSection.querySelector('p:nth-of-type(1)');
// console.log(contactP1);

contactP1.textContent = siteContent["contact"]["address"];

contactP2 = contactSection.querySelector('p:nth-of-type(2)');
// console.log(contactP2);
contactP2.textContent = siteContent["contact"]["phone"];

contactP3 = contactSection.querySelector('p:nth-of-type(3)');
contactP3.textContent = siteContent["contact"]["email"];

const footerText = document.querySelector('footer p');
footerText.textContent = siteContent["footer"]["copyright"];

// link.style.color = "green";
// link2.style.color = "green";
// link3.style.color = "green";
// link4.style.color = "green";
// link5.style.color = "green";
// link6.style.color = "green";
const links = document.querySelectorAll('nav a');
links.forEach((link) => {
  link.style.color = "green";
})

navBar = document.querySelector('nav');

const link7 = document.createElement('a');
link7.textContent = 'FAQ';
link7.style.color = "green";
navBar.appendChild(link7);

const home = document.createElement('a');
home.textContent = 'Home';
home.style.color = "black";
home.style.fontWeight = 'bold';
navBar.prepend(home);