# Projects related to DOM

## Project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=13-jokes%2Fstyle.css,1-colorChanger%2Findex.html)


## Project1

```javascript
const buttons = document.querySelectorAll('.button')
const docBody= document.querySelector('body')

buttons.forEach(function (button){
  console.log(button);
  button.addEventListener('click' , function (e){
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      docBody.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      docBody.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      docBody.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      docBody.style.backgroundColor = e.target.id
    }

  })
})

```

## Project 2
```javascript
const form = document.querySelector('form');
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;

  }
});


```

# Project 3
```javascript
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

// setInterval - The setInterval() method calls a function at specified intervals (in milliseconds).The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
// 1 second = 1000 milliseconds

setInterval(function(){
  let date = new Date();
  // cosole.log(date.toLocaleTimeString());  displays result in console 
  clock.innerHTML = date.toLocaleTimeString();
},1000)  //at every 1s the time will increase

```


# Project 4
```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
```

# Project 6
```javascript
//generates a  random color every second when start is click and stops generating when stop is pressed
const randomColor = function(){
  const hex = '0123456789ABCDEF'
  let color = '#'
  for(let i = 0; i<6; i++){
    color += hex[Math.floor(Math.random()*16)];
  }
  return color;
};
let intervalId;
const startChangingColor = function(){
  if(!intervalId){
    intervalId = setInterval(changeColor,1000);
  }
  
  function changeColor(){
  document.body.style.backgroundColor = randomColor();
}
};

const stopChangingColor = function(){
  clearInterval(intervalId);
  intervalId = null
}

document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor)
```

