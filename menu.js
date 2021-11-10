/*  eslint linebreak-style: ["error", "windows"]    */
/*  eslint linebreak-style: ["error", "unix"]    */

const hamburgerItem = document.querySelector('.hamburger-item');
const closeItem = document.querySelector('.close-item');
const hamburgerMenu = document.querySelector('.navigation');
const menuItem = document.querySelectorAll('.menu-item');

closeItem.addEventListener('click', () => {
  hamburgerMenu.classList.remove('hamburger-menu');
  hamburgerMenu.classList.add('hidden-on-small');
});

hamburgerItem.addEventListener('click', () => {
  hamburgerMenu.classList.remove('hidden-on-small');
  hamburgerMenu.classList.add('hamburger-menu');
});

menuItem.forEach(
  (menuItem) => {
    menuItem.addEventListener('click', () => {
      hamburgerMenu.classList.remove('hamburger-menu');
      hamburgerMenu.classList.add('hidden-on-small');
    });
  },
);

// Popup window JS
const popupBtns = document.querySelectorAll('.popup-btn');
const closePopup = document.getElementById('close-popup');
const popupContainer = document.querySelector('.popup-container');
const popup = document.querySelector('.popup');
const popupDescription = document.querySelector('.description');
const popupTitle = document.getElementById('popup-title');
const popupText = document.getElementById('popup-text');
const technologiesList = document.querySelector('.popup-skills');
// const popupImage = document.querySelector('.popup-image');
const popupDetails = document.querySelector('.popup-details');
const liveUrl = document.getElementById('live-url');
const sourceUrl = document.getElementById('source-url');

const projects = [{
  name: 'Tonic',
  details: ['CANOPY', '•', 'Back End Dev', '•', '2015'],
  smallDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  bigDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  imageUrl: 'img/popup_big.png',
  technologies: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
  linkLive: 'https://hombre2014.github.io/My-portfolio/',
  linkSource: 'https://github.com/Hombre2014/My-portfolio',
},
{
  name: 'Multi-Post Stories',
  details: ['FACEBOOK', '•', 'Back End Dev', '•', '2015'],
  smallDescription: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  bigDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  imageUrl: 'img/popup_big.png',
  technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
  linkLive: 'https://hombre2014.github.io/My-portfolio/',
  linkSource: 'https://github.com/Hombre2014/My-portfolio',
},
{
  name: 'Facebook 360',
  details: ['FACEBOOK', '•', 'Back End Dev', '•', '2015'],
  smallDescription: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
  bigDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  imageUrl: 'img/popup_big.png',
  technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
  linkLive: 'https://hombre2014.github.io/My-portfolio/',
  linkSource: 'https://github.com/Hombre2014/My-portfolio',
},
{
  name: 'Uber navigation',
  details: ['Uber', '•', 'Lead developer', '•', '2018'],
  smallDescription: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
  bigDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  imageUrl: 'img/popup_big.png',
  technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
  linkLive: 'https://hombre2014.github.io/My-portfolio/',
  linkSource: 'https://github.com/Hombre2014/My-portfolio',
}];
popupBtns.forEach((projectButton) => {
  projectButton.addEventListener('click', () => {
    const projectNumber = projectButton.value;
    popupTitle.innerText = projects[projectNumber - 1].name;
    technologiesList.innerHTML = '';
    popupDetails.innerHTML = '';
    for (let i = 0; i < projects[projectNumber - 1].technologies.length; i += 1) {
      const tech = document.createElement('li');
      tech.innerText = projects[projectNumber - 1].technologies[i];
      technologiesList.appendChild(tech);
      tech.classList.add('popup-skill');
    }
    popupText.innerText = projects[projectNumber - 1].bigDescription;

    const imageTag = document.createElement('img');
    imageTag.classList.add('popup-image');
    imageTag.setAttribute('alt', 'Project image');
    imageTag.setAttribute('src', projects[projectNumber - 1].imageUrl);
    popup.childNodes.forEach((node) => {
      if (node.nodeName === 'IMG') node.remove();
    });
    popup.insertBefore(imageTag, popupDescription);

    popupContainer.style.display = 'flex';
    for (let i = 0; i < projects[projectNumber - 1].details.length; i += 1) {
      const det = document.createElement('span');
      if (i > 0) {
        const str = '';
        det.innerText = str + projects[projectNumber - 1].details[i];
        det.classList.add('grey-color');
      } else {
        det.innerText = projects[projectNumber - 1].details[i];
      }
      det.classList.add('item');
      popupDetails.appendChild(det);
    }
    liveUrl.href = projects[projectNumber - 1].linkLive;
    sourceUrl.href = projects[projectNumber - 1].linkSource;
  });
});

closePopup.addEventListener('click', () => {
  popupContainer.style.display = 'none';
});
// End popup window

// Form validation JS

const contactForm = document.getElementById('contact-form');
const email = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');

function emailValidation() {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email.value));
}

function emailLowerCheck() {
  const arr = email.value.split('');
  let result = true;
  arr.forEach((x) => {
    // eslint-disable-next-line max-len
    if (!((x.charCodeAt() >= 97 && x.charCodeAt() <= 122) || x.charCodeAt() === 64 || x.charCodeAt() === 46)) {
      result = false;
    }
  });
  return result;
}

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value.trim() === '') {
    errorMessage.style.display = 'block';
    errorMessage.innerText = 'Email is required!';
    e.stopPropagation();
  } else if (emailValidation() === false) {
    errorMessage.style.display = 'block';
    errorMessage.innerText = 'Please enter your email.';
  } else if (emailLowerCheck() === false) {
    errorMessage.style.display = 'block';
    errorMessage.innerText = 'Please write your email in Lower case.';
  } else e.submit();
});
