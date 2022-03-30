// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// build out functions

function togglePlay() {
    // if(video.paused) {
    //     video.play();
    // } else {
    //     video.pause();
    // }
    const method = video.paused ? 'play' : 'pause';

    video[method]();
    console.log(video[method])
}
//  Hook up event listeners

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon)
    toggle.textContent = icon;
    
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);