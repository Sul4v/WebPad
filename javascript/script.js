var textArea = document.getElementById("textarea");
var fontValue = document.querySelectorAll(".font-value");
var lineHeight = document.getElementById("line-height-btn");
var leftAlign = document.getElementById('left-align');
var centerAlign = document.getElementById('center-align');
var rightAlign = document.getElementById('right-align');
// var divs = document.querySelectorAll('div');

// Font Size
var select = document.getElementById("selection");
select.addEventListener("change", function() {
    textArea.style.fontSize = `${this.value}px`;
});

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