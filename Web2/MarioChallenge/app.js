function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const init = () => {
    // Set the coin score
    let score = 0
    let scoreDisplay = document.querySelector('#score-span')
    scoreDisplay.textContent = score
    //get the avatar
    const avatar = document.querySelector("#avatar")
    //get the coin
    const coin = document.querySelector("#coin")

    moveCoin();
    window.addEventListener('keyup', function(e){
        if(e.key === 'ArrowDown' || e.key === 'Down'){
            moveVertical(avatar, 50);
        } else if(e.key === 'ArrowUp' || e.key === 'Up'){
            moveVertical(avatar, -50);
        } else if(e.key === 'ArrowLeft' || e.key === 'Left'){
            moveHorizontal(avatar, -50);
        } else if(e.key === 'ArrowRight' || e.key === 'Right'){
            moveHorizontal(avatar, 50);
        }

        if(isTouching(avatar,coin)) {
            score++
            scoreDisplay.textContent = score
            moveCoin()
        };
    });
}

const moveVertical = (element, amount) => {
    const stepsAudio = document.querySelector('#stepsAudio')
    stepsAudio.play()
    const currTop = extractPos(element.style.top);
    element.style.top = `${currTop + amount}px`;
}

const moveHorizontal = (element, amount) => {
    const stepsAudio = document.querySelector('#stepsAudio')
    stepsAudio.play()
    const currLeft = extractPos(element.style.left);
    element.style.left = `${currLeft + amount}px`;
}

const extractPos = (position) => {
    if(!position) return 100;
    return parseInt(position.slice(0, -2))
}

const moveCoin = (score, scoreDisplay) => {
    const coinAudio = document.querySelector('#coinAudio')
    coinAudio.play()
    const x = Math.floor(Math.random() * window.innerWidth/1.5)
    const y = Math.floor(Math.random() * (window.innerHeight/1.5))

    coin.style.top = `${y}px`;
    coin.style.left = `${x}px`;
}

init();
