let displaySmall = "";
let displayInput = "";

const smallWindow = document.querySelector('.window-display.small');
const largeWindow = document.querySelector('.window-display.large');
const value = document.getElementsByClassName('btn');




Array.from(value).forEach(element => {
     element.addEventListener('click', getValue)
   });

   function getValue(){
     console.log('hello');
   }
