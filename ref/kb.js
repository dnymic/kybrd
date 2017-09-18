
(function() {
   'use strict';
   var i,c;
function init(){ 
/* get all the input elements within the div whose id is "keyboard */
   i=document.getElementById('keyboard').getElementsByTagName('input'); 
/* loop through all the elements */   
for(c=0;c<i.length;c++) {
/* find all the the input type="button" elements */
if(i[c].type==='button') { 
 /* add an onclick handler to each of them  and set the function to call */
   i[c].addEventListener('onclick',makeClickHandler(c));
   }
  }

/* this is the type="reset" input */
document.getElementById('clear').onclick=function() {
/* remove all the characters from the input type="text" element */
   document.getElementById('text').value='';
  }
 }

function makeClickHandler(c) {
   i[c].onclick=function() {
/* find the non-text button  which has an id */
if(i[c].id==='back') {
/* remove last character from the input the type="text" element using regular expression */
   document.getElementById('text').value=
   document.getElementById('text').value.replace(/.$/,'');
 }
/* find the text buttons */
else {
/* add characters to the input type="text" element */
   document.getElementById('text').value+=this.value.toLowerCase();
   }
  };
 }

   window.addEventListener?
   window.addEventListener('load',init,false):
   window.attachEvent('onload',init);
})();
