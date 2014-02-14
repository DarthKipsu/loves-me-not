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
		image.addEventListener('dragstart', dragPetal);
		image.addEventListener('dragend', dragendPetal);
	};
	flower.style.display = 'block';
	document.body.addEventListener('drop', dropPetal);
  petalCount = amount;
};

var dragCount = 0;

function dragPetal(event) {
	dragCount += 1;
	event.dataTransfer.effectAllowed = 'copy';
	if (dragCount % 2 == 0) {
    if (dragCount == petalCount) {
      he_loves_me_not_end(); 
    } else {
      he_loves_me_not();
    }
		console.log('loves me not')
	} else {
		he_loves_me();
		console.log('loves me')
	};
};

function dragendPetal() {
	this.style.display = 'none';
};

function dropPetal(event) {
	event.preventDefault();
	return false;
}
