const pollTitle = document.querySelector('.poll__title');
const pollAnswersActive = document.querySelector('.poll__answers');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.send();

xhr.onload = () => {
   let title = xhr.response.data.title;
   let answers = xhr.response.data.answers;
  
   pollTitle.textContent = title;
   for (let i = 0; i < answers.length; i++){
        pollAnswersActive.innerHTML +=
            `<button class="poll__answer">
            ${answers[i]}
          </button>`        
    }
    const btn = document.querySelectorAll('.poll__answer')
    btn.forEach(e => {
        e.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!');
        })
    }) 
}