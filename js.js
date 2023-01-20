document.querySelector('#play').onclick = play;
document.querySelector('#pause').onclick = pause;
document.querySelector('#stop').onclick = stop;
document.querySelector('#speed-up').onclick = speedUp;
document.querySelector('#speed-down').onclick = speedDown;
document.querySelector('#speed-normal').onclick = speedNormal;
document.querySelector('#volume').oninput = videoVolume;

let video;
let disply;
let progress; 

video = document.querySelector('#video-player');
progress = document.querySelector('#progress');
//!
video.ontimeupdate = progressUpdate;
progress.onclick = videoRewind;

function play(){
    video.play();
}
function pause(){
    video.pause();
}
function stop(){
    video.pause();
    video.currentTime = 0;
}
function speedUp(){
    video.play();
    video.playbackRate = 3;
}
function speedDown(){
    video.play();
    video.playbackRate = 0.5;
}
function speedNormal(){
    video.play();
    video.playbackRate = 1;
}
function videoVolume(){
    let v  = this.value;
    console.log(v);
    video.volume = v/100;
}
//бегущая полоса
function progressUpdate(){
console.log(video.duration);
console.log(video.currentTime);
let d = video.duration;
let c = video.currentTime;
progress.value = (100*c)/d;
}
//перемотка
function videoRewind() {
let w = this.offsetWidth;
let o = event.offsetX;
console.log(w);
console.log(o);
this.value = 100*o/w;
video.pause();
video.currentTime = video.duration * (o/w);
video.play;
}