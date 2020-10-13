function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // will select the audio tag
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // .key will select the class key
	if(!audio) return; // return nothing
	audio.currentTime = 0; // rewind audio time to 0
	audio.play(); // play the audio (promise)
	key.classList.add('playing'); // add classname 'playing'
}

function removeTransition(e) {
	if(e.propertyName !== 'transform') return; // skip if not transform
	this.classList.remove('playing'); // removes classname 'playing'
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);