//Первый слайдер ---------------------------------------------------------
let indexItems = -1;
const items = document.querySelectorAll('.slider-left-item');
const btnNext = document.querySelector('.slider-left-btn-next');
const btnPrev = document.querySelector('.slider-left-btn-prev');

function chengeClassItem (index) {
    items.forEach (item => item.classList.add('slider-opacity-0'));
    items[index].classList.remove('slider-opacity-0');
}
function showNextSlide() {
    indexItems < items.length -1 ? indexItems++ : indexItems = 0;
    chengeClassItem(indexItems);
}
showNextSlide();
btnNext.addEventListener('click', showNextSlide);
btnPrev.addEventListener('click', () => {
    indexItems > 0 ? indexItems-- : indexItems = items.length - 1;
    chengeClassItem(indexItems);
});
setTimeout( () => {
    items.forEach(item => item.style.transition = 'all ease 2s');
}, 1000);


// Второй слайдер --------------------------------------------------------
let count = 0;
const container_2 = document.querySelector('.slider-right-container');
const track_2 = document.querySelector('.slider-right-track');
const items_2 = document.querySelectorAll('.slider-right-item');
const btnNext_2 = document.querySelector('.slider-right-btn-next');
const btnPrev_2 = document.querySelector('.slider-right-btn-prev');
const itemsCount_2 = items_2.length;
let itemWidth;

function resazeSlide() {
    itemWidth = container_2.offsetWidth / 3;
    track_2.style.width = itemWidth * itemsCount_2 + 'px';
    items_2.forEach(item => {
        item.style.minWidth = itemWidth + 'px';
    });
    track_2.style.transition = 'none';
    moveTrack();
}
window.addEventListener('resize', resazeSlide);
resazeSlide();

function moveTrack() {
    track_2.style.transform = `translateX(-${count * itemWidth}px)`;
}
function checkBtns() {
    btnNext_2.disabled = count >= itemsCount_2 - 3;
    btnPrev_2.disabled = count <= 0;

}
btnNext_2.addEventListener('click', () => {
    count ++;
    track_2.style.transition = 'all ease .8s';
    moveTrack();
    checkBtns();
});
btnPrev_2.addEventListener('click', () => {
    count--;
    track_2.style.transition = 'all ease .8s';
    moveTrack();
    checkBtns();
});


//VIDEO------------------------------------------------------
const video = document.querySelector('.video'),
    playBtn = document.querySelector('.controls_play'),
    stopBtn = document.querySelector('.controls_stop'),
    playBtnImg = document.querySelector('.play_btn'),
    progress = document.querySelector('.progress'),
    time = document.querySelector('.controls_time');

//Play & pause video
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
        playBtnImg.src = './img/ico/pause.svg';
    } else {
        video.pause()
        playBtnImg.src = './img/ico/play.svg';
    }
}
playBtn.addEventListener('click', toggleVideoStatus);
video.addEventListener('click', toggleVideoStatus);
