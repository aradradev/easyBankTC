// My hamburger menu
const hamburger = document.getElementById('hamburger');
const navBar = document.querySelector('.navbar');
const closeBtn = document.getElementById('close-btn');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navBar.classList.toggle('active');
  closeBtn.classList.toggle('active');
});
closeBtn.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navBar.classList.remove('active');
  closeBtn.classList.remove('active');
});

// Create an array of Objects to store information for each row
const rows = [
  {
    imageSrc: 'images/photo1.jpeg',
    name: 'Abdul Jalloh',
    title: 'Software Engineer',
    description: 'Abdourahmane Jalloh is a Software Engineer and CEO at TidCoin, a money numeric company that is leading the future revolution in financial technology.',
  },
  {
    imageSrc: 'images/photo3.jpeg',
    name: 'Victor Yaradouno',
    title: 'Software Engineer and Professor in English',
    description: 'Victor is a highly skilled software engineer and professor in English. He recently developed Speak Weezard for Easy Easy CEO at Passport224, an innovative software that simplifies speech for individuals with language difficulties.',
  },
  {
    imageSrc: 'images/speaker_03.svg',
    name: 'SohYeong Noh',
    title: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    imageSrc: 'images/speaker_04.svg',
    name: 'Julia Leda',
    title: "President of Young Pirates of Europe', 'Executive Director of the Wikimedia Foundation'",
    description: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },
  {
    imageSrc: 'images/speaker_05.svg',
    name: 'Lila tretikov',
    title: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    description: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
  },
  {
    imageSrc: 'images/speaker_06.svg',
    name: 'Ryan Merkley',
    title: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },
];

// Select the section with class "featured"
const section = document.createElement('section');
section.classList.add('featured');
// Create a head title
const heading = document.createElement('h2');
heading.innerText = 'Featured Investors';
section.appendChild(heading);

// Create the div for rows
const rowsDiv = document.createElement('div');
rowsDiv.classList.add('rows');

const showMoreBtn = document.createElement('button');
showMoreBtn.innerText = 'Show More';
showMoreBtn.id = 'show-more-btn';
showMoreBtn.addEventListener('click', () => {
  const otherRows = document.querySelectorAll('.row:not(:nth-child(-n+2)');

  otherRows.forEach((row) => {
    row.classList.toggle('hidden');
  });
});

// Loop through the rows array and create HTML for each row
rows.forEach((row, index) => {
  // Create row div

  const rowDiv = document.createElement('div');
  rowDiv.classList.add('row');

  // Create image element
  const img = document.createElement('img');
  img.setAttribute('src', row.imageSrc);

  // Create desc div
  const descDiv = document.createElement('div');
  descDiv.classList.add('desc');

  // Create name element
  const name = document.createElement('h3');
  name.innerText = row.name;

  // Create title element
  const title = document.createElement('p');
  const titleSpan = document.createElement('span');
  titleSpan.classList.add('span');
  titleSpan.innerText = row.title;
  title.appendChild(titleSpan);

  // create description element
  const description = document.createElement('p');
  description.innerText = row.description;

  // append element to row div
  descDiv.appendChild(name);
  descDiv.appendChild(title);
  descDiv.appendChild(description);
  rowDiv.appendChild(img);
  rowDiv.appendChild(descDiv);

  // append rowDiv to rowsDiv
  rowsDiv.appendChild(rowDiv);
  section.appendChild(rowsDiv);
  section.appendChild(showMoreBtn);

  if (index > 1) {
    rowDiv.classList.add('hidden');
    rowsDiv.appendChild(rowDiv);
  }
});

// append rowsDiv to featured

// Append section to main container
const main = document.querySelector('main');
main.appendChild(section);

// change the h1 text in the About section every 5 seconds

document.addEventListener('DOMContentLoaded', () => {
  const aboutTitle = document.getElementById('about-title');

  const aboutText = ['Discover the benefits of EasyBank and TidCoin', 'Experience a new level of online banking', 'Join EasyBank today and start saving money', 'Next generation digital banking'];

  let index1 = 0;

  let timeoutRef;

  function changeTitle() {
    aboutTitle.textContent = aboutText[index1];
    index1 += 1;

    if (index1 === aboutText.length) {
      index1 = 0;
    }

    timeoutRef = setTimeout(changeTitle, 5000);
  }

  timeoutRef = setTimeout(changeTitle, 5000);

  window.addEventListener('unload', () => {
    clearTimeout(timeoutRef);
  });
});

// Popup form start here

const popupForm = document.getElementById('popup-form');
const openButton = document.querySelector('.button');
const closeButton = document.querySelector('.close-button');

function closePopup() {
  popupForm.style.display = 'none';
}

openButton.addEventListener('click', () => {
  popupForm.style.display = 'block';
});

closeButton.addEventListener('click', (e) => {
  e.preventDefault();
  closePopup();
});
