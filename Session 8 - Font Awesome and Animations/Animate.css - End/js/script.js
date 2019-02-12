window.onload = function() {
  currentYear();
};

function currentYear(){
  const date = new Date();
  const autoDate = document.querySelector('#autoDate');
  autoDate.textContent = date.getFullYear();
};

const navBrand = document.querySelector('.navbar-brand');
navBrand.addEventListener('mouseenter', addBounce);
navBrand.addEventListener('animationend', removeBounce);

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(navLink => navLink.addEventListener('mouseenter', addBounce));
navLinks.forEach(navLink => navLink.addEventListener('animationend', removeBounce));

$('#babbagePopUp').on('show.bs.modal', function () {
  const modal = document.querySelector('.modal-content');
  modal.classList.add('animated','tada');
  console.log('Modal Open');
});

function addBounce(e){
  this.classList.add('animated','bounce');
};

function removeBounce(e){
  this.classList.remove('animated','bounce');
};
