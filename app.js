 'use strict'
 
document.addEventListener('DOMContentLoaded', function() {

   var dropdown = document.querySelector('.for-dropdown');    

   dropdown.addEventListener('mouseover', function() {
    
     document.querySelector('.dropdown').style.display = 'block';

   dropdown.addEventListener('mouseout', function() {
    
     document.querySelector('.dropdown').style.display = 'none';

   });

   });

   var buttons = document.querySelectorAll('.read-more');
   
    function showHide() {
   
   var textArea = this.previousElementSibling;
   
     if (textArea.style.display === 'none' || textArea.style.display === '') {

        textArea.style.display = 'block';
        this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';

    } else {

        textArea.style.display = 'none';
        this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
      }

    }
  
    for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', showHide);
  }
  
  buttons[0].addEventListener('click', showHide);

  var navbarborder = document.querySelector('nav');
  
  window.addEventListener('scroll', function () {
    navbarborder.style.borderBottom = '1px solid #7f7f7f';

  });

  var buttonUp  = document.querySelector('footer .btn');
    buttonUp.addEventListener('click',  function(){
    window.scroll(0,0)});

  var items = document.querySelectorAll('.org');
    console.log(items);
  var dots = document.querySelectorAll('.dot');
    console.log(dots);

    dots[0].addEventListener('click', function(){

  for (var i = 0; i<dots.length; i++) {
    dots[i].classList.remove('active');
    items[i].classList.remove('visible');
  }
  this.classList.add('active');
  items[0].classList.add('visible');
    });
});