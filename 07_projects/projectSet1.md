# Projects related to DOM

## Project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=13-jokes%2Fstyle.css,1-colorChanger%2Findex.html)


# Project1

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

