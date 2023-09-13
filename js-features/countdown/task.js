const timeСountdown = function() {
  timer.textContent --;
  
  if(timer.textContent <= 0){
    clearInterval(timerId);
    alert('Вы победили в конкурсе!');
  }
}

let timerId = setInterval(timeСountdown, 1000);