const nextOne = document.querySelector('.next-1');
const nextTwo = document.querySelector('.next-2');
const nextThree = document.querySelector('.next-3');
const returnOne = document.querySelector('.return-1');
const returnTwo = document.querySelector('.return-2');
const returnThree = document.querySelector('.return-3');
const progressBar = document.querySelector('.progress-indicator');
const formSteps = document.querySelectorAll('.form-step');
let activeStep = 1; // Initialize activeStep to 1 (representing the first step)
let visiblePage = document.querySelector('.form-page-visible'); // Reference to the initially visible page

const navigatePage = (direction, index) => {
  const hiddenPages = document.querySelectorAll('.form-page-hide');
  const nextPage = hiddenPages[index];

  if (nextPage) {
    updateProgressBar(index + 2); // Corrected to index + 1
    activeStep = index + 1;

    visiblePage.classList.add('form-page-hide');
    nextPage.classList.remove('form-page-hide');
    nextPage.classList.add('form-page-visible');

    visiblePage = nextPage;
  }
};

const navigateBack = () => {
  const hiddenPages = document.querySelectorAll('.form-page-hide');
  const previousIndex = activeStep - 1;
  if (previousIndex >= 0) {
    navigatePage('return', previousIndex);
    activeStep = previousIndex;
    updateProgressBar(activeStep + 1);
  }
};

const updateProgressBar = (step) => {
  const stepWidth = 100 / formSteps.length;
  const progressWidth = stepWidth * step;
  progressBar.style.width = `${progressWidth}%`;

  // Update the active class for form steps
  formSteps.forEach((stepEl, index) => {
    if (index === step - 1) {
      stepEl.classList.add('active');
    } else {
      stepEl.classList.remove('active');
    }
  });
};

nextOne.addEventListener('click', () => {
  navigatePage('next', 0);
});

nextTwo.addEventListener('click', () => {
  navigatePage('next', 1);
});

nextThree.addEventListener('click', () => {
  navigatePage('next', 2);
});

returnOne.addEventListener('click', () => {
  navigateBack();
});

returnTwo.addEventListener('click', () => {
  navigateBack();
});

returnThree.addEventListener('click', (event) => {
  navigateBack();
});

// Initialize progress bar on page load
updateProgressBar(1); // Assuming the first step is active by default
