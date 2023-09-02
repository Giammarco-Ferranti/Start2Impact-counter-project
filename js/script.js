
let count = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

document.querySelector('#value').innerHTML = count;
document.querySelector('.decrease').innerHTML = '-';
document.querySelector('.increase').innerHTML = '+';


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