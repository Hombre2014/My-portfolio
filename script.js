/*  eslint linebreak-style: ["error", "unix"]    */

// Hamburger menu open close
const hamburgerItem = document.querySelector('.hamburger-item');
const closeItem = document.querySelector('.close-item');
const hamburgerMenu = document.querySelector('.navigation');
const menuItem = document.querySelectorAll('.menu-item');

function openCloseMenu() {
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
}

// Popup window JS
const popupBtns = document.querySelectorAll('.popup-btn');
const closePopup = document.getElementById('close-popup');
const popupContainer = document.querySelector('.popup-container');
const popup = document.querySelector('.popup');
const popupDescription = document.querySelector('.description');
const popupTitle = document.getElementById('popup-title');
const popupText = document.getElementById('popup-text');
const technologiesList = document.querySelector('.popup-skills');
const popupDetails = document.querySelector('.popup-details');
const liveUrl = document.getElementById('live-url');
const sourceUrl = document.getElementById('source-url');
const projects = [{
  name: 'React Global Summit',
  details: ['Microverse', '•', 'Front-end', '•', '2021'],
  smallDescription: 'This is my first capstone project for HTML/CSS module at Microverse. It also includes some JavaScript DOM manipulation.',
  bigDescription: 'This si my first Capstone project at Microverse, after finishing the HTML/CSS module. In this site we had to create a web conference page, where you can show the program, key speakers and to have an about page. The key speakers section had to be dynamically generated using JavaScript. The site is fully-responsive design and it is viewable and operating on all kind of screen sizes. The design, styles, fonts and colors had to follow these design guidelines: https://www.behance.net/gallery/29845175/CC-Global-Summit-2015',
  imageUrl: 'img/Conf_page_2.jpg',
  technologies: ['HTML5', 'CSS3', 'JavaScript'],
  linkLive: 'https://chamkoriyski.me/Conference-page/',
  linkSource: 'https://github.com/Hombre2014/Conference-page',
},
{
  name: "Space Travelers' Hub",
  details: ['Microverse', '•', 'Front-end', '•', '2022'],
  smallDescription: 'Small App using real live data from the SpaceX API.',
  bigDescription: 'This was a group React/Redux project. The task was to build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions. It uses the real API from SpaceX web site for available types of rockets and missions. Once the rocket and/or mission is booked, the user can see the list of them under My profile section.',
  imageUrl: 'img/Space_2.jpg',
  technologies: ['JavaScript', 'React', 'CSS3', 'Redux'],
  linkLive: 'https://startreck.netlify.app/',
  linkSource: 'https://github.com/Hombre2014/Space-Travelers',
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

function popUpProject() {
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
}

// Form validation
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
    if (
      !(
        (x.charCodeAt() >= 97 && x.charCodeAt() <= 122)
        || x.charCodeAt() === 64
        || x.charCodeAt() === 46
      )
    ) {
      result = false;
    }
  });
  return result;
}

function formValidation() {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (email.value.trim() === '') {
      errorMessage.style.display = 'block';
      errorMessage.innerText = 'Email is required!';
    } else if (emailValidation() === false) {
      errorMessage.style.display = 'block';
      errorMessage.innerText = 'This is not a valid email.';
    } else if (emailLowerCheck() === false) {
      errorMessage.style.display = 'block';
      errorMessage.innerText = 'Please write your email in lower case.';
      errorMessage.scrollIntoView(true);
    } else {
      errorMessage.style.display = 'none';
      contactForm.submit();
    }
  });
}

// Local Storage

function setInputsToLocalStorage() {
  const nameContact = document.getElementById('name');
  const messageContact = document.getElementById('msg');
  const emailContact = document.getElementById('email');
  const localStorageArr = {
    name: nameContact.value,
    email: emailContact.value,
    message: messageContact.value,
  };
  localStorage.setItem('contactForm', JSON.stringify(localStorageArr));
}

const nameContact = document.getElementById('name');
const messageContact = document.getElementById('msg');
const arrInputs = [nameContact, email, messageContact];

arrInputs.forEach((input) => {
  input.addEventListener('keyup', () => {
    setInputsToLocalStorage();
  });
});

function setInput() {
  const nameContact = document.getElementById('name');
  const messageContact = document.getElementById('msg');
  const emailContact = document.getElementById('email');
  const localStorageArr = JSON.parse(localStorage.getItem('contactForm'));
  if (localStorage.getItem('contactForm')) {
    nameContact.value = localStorageArr.name;
    messageContact.value = localStorageArr.message;
    emailContact.value = localStorageArr.email;
  }
}

function main() {
  openCloseMenu();
  popUpProject();
  formValidation();
  setInput();
}

window.onload = main();
