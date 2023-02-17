const showText = document.querySelector('.successShow');
console.log(showText);

const successTimeout = setTimeout(showSuccess, 10000);

function showSuccess() {
	showText.style.opacity = '100';
}
