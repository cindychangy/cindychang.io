const bioBody = document.querySelector('.bio');
const bioLink = document.querySelector('.bio-link');

const closePopup = () => {
  bioBody.classList.toggle('close');
}

const removeClose = () => {
  if (bioBody.classList.contains('close')) {
    bioBody.classList.toggle('close');
  }
}

bioLink.addEventListener('click', removeClose);
bioBody.addEventListener('click', closePopup);