var textArea = document.getElementById("textarea");
var fontValue = document.querySelectorAll(".font-value");
var lineHeight = document.getElementById("line-height-btn");
var leftAlign = document.getElementById('left-align');
var centerAlign = document.getElementById('center-align');
var rightAlign = document.getElementById('right-align');

var fontDown = document.querySelector(".size-minus");
var fontUp = document.querySelector(".size-plus");

var darkModeButton = document.querySelector("#darkmode-button");
let checkbox = document.querySelector('input[name=theme]');


// Font Size
// var select = document.getElementById("selection");
// select.addEventListener("change", function() {
//     textArea.style.fontSize = `${this.value}px`;
// });

fontUp.addEventListener("click", () => console.log(textArea.style.fontSize));

// Line Height
lineHeight.addEventListener("click", () => {
  var lineHeightValue = prompt("Enter the line height");
  console.log(lineHeightValue);
  textArea.style.lineHeight = `${lineHeightValue}rem`
});

// Text Align Listeners
leftAlign.addEventListener('click', () => textArea.style.textAlign = 'left')
centerAlign.addEventListener('click', () => textArea.style.textAlign = 'center')
rightAlign.addEventListener('click', () => textArea.style.textAlign = 'right')



/////////////////////////  This is for the dark mode ////////////////////////////

// This is for transition

let trans = () => {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
      document.documentElement.classList.remove('transition')
  }, 300)
}

// Button click action

darkModeButton.addEventListener('click', () =>{
  if(checkbox.checked){
      checkbox.checked = false;
      localStorage.setItem("checkbox", 'false');

      document.documentElement.setAttribute('data-theme', 'light');
      trans();
  } else {
      checkbox.checked = true;
      localStorage.setItem("checkbox", true);
      
      document.documentElement.setAttribute('data-theme', 'dark');
      trans();
  }
})

// Checking if the user already has theme selected in the localstorage

function checkLocalStorage() {
  if(localStorage.getItem('checkbox') == null){
      //pass
  } else {
      let checked = JSON.parse(localStorage.getItem('checkbox'));
      if(checked == true){
          document.documentElement.setAttribute('data-theme', 'dark');
          checkbox.checked = true;
      }
  }
}

checkLocalStorage();

//////////////////////////// Upto here dark mode ///////////////////////////