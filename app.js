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
        this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"><span>';

    } else {

        textArea.style.display = 'none';
        this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"><span>';
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

  var items = document.querySelectorAll('.slider li');
    console.log(items);
  var dots = document.querySelectorAll('.dot');
    console.log(dots);



      

for (var i = 0; i < dots.length; i++) {
  (function(index) {
  dots[i].addEventListener('click', function(){

  for (var j = 0; j < items.length; j++) {
  dots[j].classList.remove('active');
  items[j].classList.remove('visible');
};
dots[index].classList.add('active');
items[index].classList.add('visible');

    });  
  })(i);
  
}

var addTaskBtn = document.querySelector('.add-task-btn')
  console.log(addTaskBtn);

var addTaskInp = document.querySelector('.form-control')
  console.log(addTaskInp);

var taskList = document.querySelector('.list-group')
  console.log(taskList);

 function addTask() {
         taskList.appendChild(newTask);
    };

    addTaskBtn.addEventListener('click', addTask);

var newTask = document.createElement('li');
console.log(addTaskInp.innerHtml);

});