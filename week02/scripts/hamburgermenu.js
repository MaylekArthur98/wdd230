const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const navA = document.getElementById("active")
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

