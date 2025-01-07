console.log("Welcome to musifyyyy");

let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myBar = document.getElementById('myBar');
let gif = document.getElementById('gif');

let songs = [
    {songName:"Off My Face",filePath: 'song/1.mp3', coverpath : "covers/1.jpg"},
    {songName:"Peaches -Jb",filePath: 'song/2.mp3', coverpath : "covers/1.jpg"},
    {songName:"Off My Face",filePath: 'song/3.mp3', coverpath : "covers/3.jpg"},
    {songName:"Off My Face",filePath: 'song/4.mp3', coverpath : "covers/4.jpg"},
    {songName:"Off My Face",filePath: 'song/5.mp3', coverpath : "covers/5.jpg"},
    {songName:"Off My Face",filePath: 'song/6.mp3', coverpath : "covers/6.jpg"},
    {songName:"Off My Face",filePath: 'song/7.mp3', coverpath : "covers/7.jpg"},
    {songName:"Off My Face",filePath: 'song/8.mp3', coverpath : "covers/8.jpg"},


]

//audioElement.play();
//handle play/pause click 
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-regular', 'fa-3x', 'fa-circle-play');
        masterPlay.classList.add('fa-solid','fa-3x', 'fa-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-solid', 'fa-3x', 'fa-pause');
        masterPlay.classList.add('fa-regular', 'fa-3x', 'fa-circle-play');
        gif.style.opacity = 0;
    }
});


//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myBar.value = progress;
})

myBar.addEventListener('change', ()=>{
    audioElement.currentTime = myBar.value * audioElement.duration/100;
}

)
