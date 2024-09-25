

const cartoonAudio = new Audio('./sound/Waiting.mp3');
cartoonAudio.volume = 0.2; // Reducir volumen a la mitad (20%)
const forceAudio = new Audio('./sound/HeadEmpty.mp3');
forceAudio.volume = 0.2;
const squeakyAudio = new Audio('./sound/Dive.mp3');
squeakyAudio.volume = 0.2;
const hopeAudio = new Audio('./sound/bee.mp3');
hopeAudio.volume = 0.2;
const janjiAudio = new Audio('./sound/crimnakusa.mp3');
janjiAudio.volume = 0.2;

// selecting elements
const prevBtn = document.querySelector('.previous');
const playBtn = document.querySelector('.play-pause');
const nextBtn = document.querySelector('.next');
const songName = document.querySelector('.song-name');
const playPauseIcon = document.querySelector('#play-pause-icon');


const songs = [
  { ele: cartoonAudio, audioName: 'Waiting' },
  { ele: forceAudio, audioName: 'HeadEmpty' },
  { ele: squeakyAudio, audioName: 'Dive ' },
  { ele: hopeAudio, audioName: 'Bee' },
  { ele: janjiAudio, audioName: 'CrimNakusa' },
];

for(const song of songs) {
  song.ele.addEventListener('ended', ()=> {
    updateSong('next');
    playPauseSong();
  })
}

let current = 0;
let currentSong = songs[current].ele;
songName.textContent = songs[current].audioName;

playBtn.addEventListener('click',()=> {
  playPauseSong();
})

nextBtn.addEventListener('click', () => {
  updateSong('next');
  playPauseSong();
});

prevBtn.addEventListener('click', () => {
  updateSong('prev');
  playPauseSong();
});

const updateSong = (action)=> {
  currentSong.pause();
  currentSong.currentTime = 0;

  if(action === 'next'){
    current++;
    if(current > songs.length -1) current = 0;
  }
  if(action === 'prev'){
    current--;
    if(current < 0) current = songs.length - 1;
  }
  currentSong = songs[current].ele;
  songName.textContent = songs[current].audioName;
}

const playPauseSong = ()=> {
  if(currentSong.paused){
    currentSong.play();
    playPauseIcon.className = 'ph-bold ph-pause';
  }
  else {
    currentSong.pause();
    playPauseIcon.className = 'ph-bold ph-play';
  }
}