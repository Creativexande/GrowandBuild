const menuMobile = document.querySelector('.mobile-menu');

const menuShow = () => {
  menuMobile.classList.toggle("open");
  
  if (menuMobile.classList.contains('open')) {
    document.querySelector('.icon').src = 'img/x.svg';
  } else {
    document.querySelector('.icon').src = 'img/iconmenu.svg';
  }
};