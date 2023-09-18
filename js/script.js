

//Creazione pulsanti e valore counter 


let div = document.createElement('div');
div.className = 'container';
document.body.append(div);

let buttonDecrease = document.createElement('button');
buttonDecrease.className = 'btn decrease';
buttonDecrease.innerHTML = '👈';
div.append(buttonDecrease);

let textValue = document.createElement('h1');
textValue.id = 'value';
textValue.innerHTML = '0';
div.append(textValue);

let buttonIncrease = document.createElement('button');
buttonIncrease.className = 'btn increase';
buttonIncrease.innerHTML = '👉';
div.append(buttonIncrease);


//counter
let count = 0;
const btns = [buttonDecrease, buttonIncrease];

btns.forEach(function(btn){
btn.addEventListener('click', function(e){
const styles = e.currentTarget.classList;
if(styles.contains('decrease')){
count--;
} else if(styles.contains('increase')){
  count++;
}
textValue.textContent = count;
});
});


//dark mode
const off = document.querySelector('.left');
const on = document.querySelector('.right');

off.addEventListener('click', function(){
  let element = document.body;
  element.className = 'light__mode'
});

on.addEventListener('click', function(){
  let element = document.body;
  element.className = 'dark__mode'
});
