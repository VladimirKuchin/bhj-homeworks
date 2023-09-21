const form = document.querySelector('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (el) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.upload.onprogress = function (event) {
        let total = event.total;
        let loaded = event.loaded;
        progress.value = loaded / total;
    };
    const formData = new FormData(form);
    xhr.send(formData);
    el.preventDefault();
});