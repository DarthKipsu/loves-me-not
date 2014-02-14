function createPetals(amount) {
	var angle = 2 * Math.PI / amount;
	var flower = document.getElementById('flower');
	for (i=0; i<amount; i++) {
		var image = new Image();
		image.src = 'images/petal.png';
		image.id = 'petal' + i;
		image.classList.add('petals');
		image.style.transform = 'rotate(' + ( angle * ( i + 1 )) + 'rad)'
		flower.appendChild(image);
	};
};