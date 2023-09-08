
let count = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
const off = document.querySelector('.left');
const on = document.querySelector('.right');


document.querySelector('#value').innerHTML = count;
document.querySelector('.decrease').innerHTML = '👈';
document.querySelector('.increase').innerHTML = '👉';


btns.forEach(function(btn){
btn.addEventListener('click', function(e){
const styles = e.currentTarget.classList;
if(styles.contains('decrease')){
count--;
} else if(styles.contains('increase')){
  count++;
}
value.textContent = count;
});
});


//dark mode

off.addEventListener('click', function(){
  let element = document.body;
  element.className = 'light__mode'
});

on.addEventListener('click', function(){
  let element = document.body;
  element.className = 'dark__mode'
});
