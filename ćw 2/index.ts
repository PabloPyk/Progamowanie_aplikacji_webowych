let clapSound: HTMLAudioElement;
let kickSound: HTMLAudioElement;
let boomSound: HTMLAudioElement;
let hithatSound: HTMLAudioElement;
let openhatSound: HTMLAudioElement;
let rideSound: HTMLAudioElement;
let snareSound: HTMLAudioElement;
let tinkSound: HTMLAudioElement;
let tomSound: HTMLAudioElement;

const channel1: any[] = [];
appStart();

function appStart(): void {
    document.addEventListener('keypress', onKeyDown);
    const btnChannel1Play = document.querySelector('#channel1Play')
    btnChannel1Play.addEventListener('click', onChannel1Play);
    getAudioElements();
    
}
function onChannel1Play(): void {
    channel1.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)

        })
        
    
}

function getAudioElements(){
    clapSound = document.querySelector('[data-sound="clap"]')
    kickSound = document.querySelector('[data-sound="kick"]')
    boomSound = document.querySelector('[data-sound="boom"]')
    hithatSound = document.querySelector('[data-sound="hithat]')
    openhatSound = document.querySelector('[data-sound="openhat"]')
    rideSound = document.querySelector('[data-sound="ride"]')
    snareSound = document.querySelector('[data-sound="snare]')
    tinkSound = document.querySelector('[data-sound="tink"]')
    tomSound = document.querySelector('[data-sound="tom"]')
}

function onKeyDown(ev: KeyboardEvent): void {
    const key = ev.key;
    const time = ev.timeStamp;
    
    channel1.push({key, time})
    playSound(key);
    console.log(channel1);
}
function playSound(key: string): void {
    switch (key) {
        case 'a':
            clapSound.currentTime = 0;
            clapSound.play();
            break;
        case 'k':
            kickSound.currentTime = 0;
            kickSound.play();
            break;
        case 'b':
            boomSound.currentTime = 0;
            boomSound.play();
            break;
        case 'h':
            hithatSound.currentTime = 0;
            hithatSound.play();
            break;
        case 'o':
            openhatSound.currentTime = 0;
            openhatSound.play();
            break;
        case 'r':
            rideSound.currentTime = 0;
            rideSound.play();
            break;
        case 's':
            snareSound.currentTime = 0;
            snareSound.play();
            break;
        case 't':
            tinkSound.currentTime = 0;
            tinkSound.play();
            break;
        case 'i':
            tomSound.currentTime = 0;
            tomSound.play();
            break;
        
    }
    
}