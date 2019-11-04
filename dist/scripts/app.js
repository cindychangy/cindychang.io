"use strict";

var bioBody = document.querySelector('.bio');
var bioLink = document.querySelector('.bio-link');

var closePopup = function closePopup() {
  bioBody.classList.toggle('close');
};

var removeClose = function removeClose() {
  if (bioBody.classList.contains('close')) {
    bioBody.classList.toggle('close');
  }
};

bioLink.addEventListener('click', removeClose);
bioBody.addEventListener('click', closePopup);
