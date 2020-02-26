function burgerMenu(selector) {
  let burger_menu = $(selector);
  let button = burger_menu.find('.button_menu');
let punckt = burger_menu.find('.punkt_menu');
let overlay = burger_menu.find('.menu_overlay');

button.on('click', (e) => {
  e.preventDefault();
  toggleMenu();
  

  });

  punckt.on('click', () => toggleMenu());
  overlay.on('click', () =>  toggleMenu());



function toggleMenu (){
  burger_menu.toggleClass('menu_active');
  if (burger_menu.hasClass('menu_active')){
    $('body').css('overflow', 'hidden' );
    
  } else {
    $('body').css('overflow', 'visible');

  }
}


}

  

 burgerMenu('.burger_menu');