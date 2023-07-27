const nextOne = document.querySelector('.next-1');
const nextTwo = document.querySelector('.next-2');
const nextThree = document.querySelector('.next-3');
const returnOne = document.querySelector('.return-1');
const returnTwo = document.querySelector('.return-2');
const returnThree = document.querySelector('.return-3');
let hiddenPages = document.querySelectorAll('.form-page-hide');
let visiblePage = document.querySelector('.form-page-visible');

nextOne.addEventListener('click', () => {
  hiddenPages.forEach((page, index) => {
    if (index === 0) {
      visiblePage.classList.add('form-page-hide');
      page.classList.remove('form-page-hide');
      page.classList.add('form-page-visible');
      visiblePage = page;
      hiddenPages = document.querySelectorAll('.form-page-hide');

      return;
    }
  });
});

nextTwo.addEventListener('click', () => {
  hiddenPages.forEach((page, index) => {
    if (index === 1) {
      visiblePage.classList.add('form-page-hide');
      page.classList.remove('form-page-hide');
      page.classList.add('form-page-visible');
      visiblePage = page;
      hiddenPages = document.querySelectorAll('.form-page-hide');
      return;
    }
  });
});

nextThree.addEventListener('click', () => {
  hiddenPages.forEach((page, index) => {
    if (index === 2) {
      visiblePage.classList.add('form-page-hide');
      page.classList.remove('form-page-hide');
      page.classList.add('form-page-visible');
      visiblePage = page;
      hiddenPages = document.querySelectorAll('.form-page-hide');
      return;
    }
  });
});

returnOne.addEventListener('click', () => {
  hiddenPages.forEach((page, index) => {
    if (index === 0) {
      visiblePage.classList.add('form-page-hide');
      page.classList.remove('form-page-hide');
      page.classList.add('form-page-visible');
      visiblePage = page;
      hiddenPages = document.querySelectorAll('.form-page-hide');
      return;
    }
  });
});

returnTwo.addEventListener('click', () => {
  hiddenPages.forEach((page, index) => {
    if (index === 1) {
      visiblePage.classList.add('form-page-hide');
      page.classList.remove('form-page-hide');
      page.classList.add('form-page-visible');
      visiblePage = page;
      hiddenPages = document.querySelectorAll('.form-page-hide');
      return;
    }
  });
});

returnThree.addEventListener('click', () => {
  hiddenPages.forEach((page, index) => {
    if (index === 2) {
      visiblePage.classList.add('form-page-hide');
      page.classList.remove('form-page-hide');
      page.classList.add('form-page-visible');
      visiblePage = page;
      hiddenPages = document.querySelectorAll('.form-page-hide');
      return;
    }
  });
});
