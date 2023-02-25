const quotes = [
  'Life is 10% what happens to us and 90% how we react to it.',
  'Success is not final, failure is not fatal: it is the courage to continue that counts.',
  "You miss 100% of the shots you don't take.",
  'Be the change that you wish to see in the world.',
  'Life is like a box of chocolates, you never know what you',
];
const quoteBox = document.getElementById('quote-box');
const quote = document.getElementById('quote');
const redButton = document.getElementById('red');
const greenButton = document.getElementById('green');
const blueButton = document.getElementById('blue');
const purpleButton = document.getElementById('purple');
//const text = document.getElementById('text');

window.onload = function () {
  const quoteContainer = document.getElementById('quote');

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  quoteContainer.innerHTML = getRandomQuote();
};
// buttons.addEventListener('click', function () {
//   text.style.color = 'red';
// });

function changeColor(red, green, blue) {
  quoteBox.style.backgroundColor = red;
  quoteBox.style.borderColor = green;
  quote.style.color = blue;
  ///text.style.color = 'color';
}
// buttons.addEventListener('click', function () {
//   quotes.style.color = 'color';
// });

redButton.addEventListener('click', function () {
  changeColor('red');
  //changeColor((quoteBox.style.backgroundColor = green));
  //quoteBox.style.backgroundColor = color;
  //quotes.style.color = yellow;
});

greenButton.addEventListener('click', function () {
  changeColor('green');
});
blueButton.addEventListener('click', function () {
  changeColor('blue');
});
purpleButton.addEventListener('click', function () {
  changeColor('purple');
});
//

const quoteContainer = document.getElementById('quote');
const changeFontButton = document.getElementById('buttons');

changeFontButton.addEventListener('click', function () {
  if (quoteContainer.style.fontFamily === 'Impact') {
    quoteContainer.style.fontFamily = 'Times New Roman';
  } else {
    quoteContainer.style.fontFamily = 'Impact';
  }
});
