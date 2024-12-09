
//! typed.JS !//
  var typed = new Typed('#element', {
    strings: ['Developer', 'Designer', 'Larry Daniels' ],
    typeSpeed: 40,
    backSpeed: 40,
    loop:true,
  });
  //! typed.JS !//
 
  //! Aos Animation !//
  AOS.init();
  //! Aos Animation !//
  
  
  //! change navbar on scroll!//
  
function changeBg(){
  var navbar = document.getElementById('navbar-example');
  var scrollValue = window.scrollY;
  if(scrollValue < 600){
    navbar.classList.remove('bgcolor');
  }
  else {
    navbar.classList.add('bgcolor');
  }
}
 
window.addEventListener('scroll', changeBg);

  //! change navbar on scroll!//
 
