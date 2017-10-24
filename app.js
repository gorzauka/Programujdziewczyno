 'use strict'
 
  document.addEventListener('DOMContentLoaded', function() {

   var dropdown = document.querySelector('.for-dropdown');    

   dropdown.addEventListener('mouseover', function() {
    
     document.querySelector('.dropdown').style.display = 'block';

  });

   dropdown.addEventListener('mouseout', function() {
    
     document.querySelector('.dropdown').style.display = 'none';

  });

});
