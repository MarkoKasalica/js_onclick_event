let button = document.querySelector('button');
let section = document.querySelector('section');

section.style.display = 'none';

button.onclick = () => {
	section.style.display = 'block';
};
