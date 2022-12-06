const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const myAudio = document.getElementById("audio");






function toggle() {
	if (!myAudio.paused && !myAudio.ended) {
		myAudio.pause();
	}
	else {
		myAudio.play();
	}
}

