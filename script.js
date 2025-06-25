function adaptPage() {
  const windowWidth = window.innerWidth;

  const zoomLevel = windowWidth / 14.5;

  const mainElement = document.getElementById("bodyContainer");

  if (mainElement) {
    mainElement.style.zoom = zoomLevel + "%";
  }
}

window.addEventListener("load", adaptPage);

window.addEventListener("resize", adaptPage);

const firstBreedCards = document.querySelector(".price__breed-cards.--1");
const secondBreedCards = document.querySelector(".price__breed-cards.--2");
const thirdBreedCards = document.querySelector(".price__breed-cards.--3");
const fourthBreedCards = document.querySelector(".price__breed-cards.--4");

function toggleActiveClass(clickedElement) {
  const sizeBreedElements = document.querySelectorAll(".price__size-breed");

  sizeBreedElements.forEach((element) => {
    element.classList.remove("active");
  });
  clickedElement.classList.add("active");
}

function openSmallBreeds() {
  firstBreedCards.style.display = "flex";
  secondBreedCards.style.display = "none";
  thirdBreedCards.style.display = "none";
  fourthBreedCards.style.display = "none";
}

function openMediumBreeds() {
  firstBreedCards.style.display = "none";
  secondBreedCards.style.display = "flex";
  thirdBreedCards.style.display = "none";
  fourthBreedCards.style.display = "none";
}

function openBigBreeds() {
  firstBreedCards.style.display = "none";
  secondBreedCards.style.display = "none";
  thirdBreedCards.style.display = "flex";
  fourthBreedCards.style.display = "none";
}

function openCatBreeds() {
  firstBreedCards.style.display = "none";
  secondBreedCards.style.display = "none";
  thirdBreedCards.style.display = "none";
  fourthBreedCards.style.display = "flex";
}

function scrollToWhyAreWe() {
  const section = document.getElementById("whyAreWe");
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = sectionPosition - 70;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

function scrollToServices() {
  const section = document.getElementById("services");
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = sectionPosition - 50;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

function scrollToFeedbackForm() {
  const section = document.getElementById("feedbackButton");
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = sectionPosition - 250;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

function scrollToPortfolio() {
  const section = document.getElementById("portfolio");
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = sectionPosition - 50;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

const feedbackFormOverlay = document.getElementById('feedbackFormOverlay');
const closeFeedbackForm = document.getElementById('closeFeedbackForm');
const feedbackForm = document.getElementById('feedbackForm');
const body = document.body;

function activeForm() {
  feedbackFormOverlay.style.display = 'block';
  feedbackForm.style.display = 'block';
  body.classList.add('no-scroll');
};

closeFeedbackForm.addEventListener('click', () => {
  feedbackFormOverlay.style.display = 'none';
  feedbackForm.style.display = 'none';
  body.classList.remove('no-scroll');
});

feedbackFormOverlay.addEventListener('click', () => {
  feedbackFormOverlay.style.display = 'none';
  feedbackForm.style.display = 'none';
  body.classList.remove('no-scroll');
});

const firstFramefeedbackForm = document.getElementById('firstFramefeedbackForm');
const secondFramefeedbackForm = document.getElementById('secondFramefeedbackForm');
const thirdFramefeedbackForm = document.getElementById('thirdFramefeedbackForm');

const inputs = document.querySelectorAll('.feedback-form__input');
const inputOne = document.getElementById('inputOne');
const inputTwo = document.getElementById('inputTwo');

const checkBox = document.getElementById('checkMarkContainer');

document.getElementById('InputButton').addEventListener('click', function(event) {
  event.preventDefault();
  let allFilled = true;

  inputs.forEach(function(input) {
    if (input.value.trim() === '') {
        allFilled = false;
        input.classList.add('error');
    } else {
        input.classList.remove('error');
    }
  });

  if (!checkBox.checked) {
    allFilled = false;
    checkBox.classList.add('error');
  } else {
    checkBox.classList.remove('error');
  }

  if (allFilled) {
    inputs.forEach(function(input) {
      input.value = '';
    });
    checkBox.checked = false;

    const commentInput = document.querySelector('.feedback-form__input--comment');
    if (commentInput) {
      commentInput.value = '';
    }

    firstFramefeedbackForm.style.display = 'none';
    secondFramefeedbackForm.style.display = 'flex';
    
    function showSuccessfulSending() {
      secondFramefeedbackForm.style.display = 'none';
      thirdFramefeedbackForm.style.display = 'flex';
    }

    setTimeout(showSuccessfulSending, 1800);
  }
});

closeFeedbackForm.addEventListener('click', () => {
  firstFramefeedbackForm.style.display = 'flex';
  secondFramefeedbackForm.style.display = 'none';
  thirdFramefeedbackForm.style.display = 'none';

  inputs.forEach(function(input) {
    input.value = '';
  });

  const commentInput = document.querySelector('.feedback-form__input--comment');
  if (commentInput) {
    commentInput.value = '';
  }

  const checkBox = document.getElementById('checkMarkContainer');
  if (checkBox) {
    checkBox.checked = false;
  }

  inputOne.classList.remove('error');
  inputTwo.classList.remove('error');
  checkBox.classList.remove('error');
});

feedbackFormOverlay.addEventListener('click', () => {
  firstFramefeedbackForm.style.display = 'flex';
  secondFramefeedbackForm.style.display = 'none';
  thirdFramefeedbackForm.style.display = 'none';

  inputs.forEach(function(input) {
    input.value = '';
  });

  const commentInput = document.querySelector('.feedback-form__input--comment');
  if (commentInput) {
    commentInput.value = '';
  }

  const checkBox = document.getElementById('checkMarkContainer');
  if (checkBox) {
    checkBox.checked = false;
  }

  inputOne.classList.remove('error');
  inputTwo.classList.remove('error');
  checkBox.classList.remove('error');
});