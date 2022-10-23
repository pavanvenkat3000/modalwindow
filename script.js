'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBttn = document.querySelector('.close-modal');
const openModalBttn = document.querySelectorAll('.show-modal');

const closemodal = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

const openmodal = function () {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};

for (let i = 0; i < openModalBttn.length; i++) {
  openModalBttn[i].addEventListener('click', function () {
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
  });
}

closeModalBttn.addEventListener('click', closemodal);
overlay.addEventListener('click', closemodal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closemodal();
    }
  }
});
