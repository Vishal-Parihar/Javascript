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

