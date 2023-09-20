const editor = document.querySelector('#editor');
editor.addEventListener('input', () => {
    localStorage.editor = editor.value;
})
window.addEventListener('DOMContentLoaded', () => {
    editor.value = localStorage.getItem('editor');
})