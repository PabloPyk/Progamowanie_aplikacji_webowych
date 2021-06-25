let clapSound: HTMLAudioElement;
let kickSound: HTMLAudioElement;
let boomSound: HTMLAudioElement;
let hithatSound: HTMLAudioElement;
let openhatSound: HTMLAudioElement;
let rideSound: HTMLAudioElement;
let snareSound: HTMLAudioElement;
let tinkSound: HTMLAudioElement;
let tomSound: HTMLAudioElement;

let padBomm = document.getElementById("padBoom");
let padClap = document.getElementById("padClap");
let padKick = document.getElementById("padKick");
let padSanare = document.getElementById("padSnare");
let padHihat = document.getElementById("padHihat");
let padOpenhat = document.getElementById("padOpenhat");
let padRide = document.getElementById("padRide");
let padTink = document.getElementById("padTink");
let padTom = document.getElementById("padTom");

let recordButton1 = document.getElementById("channel1Play");
let recordButton2 = document.getElementById("channel2Play");
let recordButton3 = document.getElementById("channel3Play");
let recordButton4 = document.getElementById("channel4Play");

let btnPlay1 = document.getElementById("btnPlay1")
let btnPlay2 = document.getElementById("btnPlay2")
let btnPlay3 = document.getElementById("btnPlay3")
let btnPlay4 = document.getElementById("btnPlay4")

let resetBtn1 = document.getElementById("resetBtn1")
let resetBtn2 = document.getElementById("resetBtn2")
let resetBtn3 = document.getElementById("resetBtn3")
let resetBtn4 = document.getElementById("resetBtn4")

let isRec = false;
let isRec2 = false;
let isRec3 = false;
let isRec4 = false;

const channel1: any[] = [];
const channel2: any[] = [];
const channel3: any[] = [];
const channel4: any[] = [];

appStart();

function appStart(): void {
    document.addEventListener('keypress', onKeyDown);
    const btnChannel1Play = document.querySelector('#channel1Play')
    btnPlay1.addEventListener('click', onChannel1Play);
    getAudioElements();

    const btnChannel2Play = document.querySelector('#channel2Play');
    btnPlay2.addEventListener('click', onChannel2Play);

    const btnChannel3Play = document.querySelector('#channel3Play');
    btnPlay3.addEventListener('click', onChannel3Play);

    const btnChannel4Play = document.querySelector('#channel4Play')
    btnPlay4.addEventListener('click', onChannel4Play)
    
}
function onChannel1Play(): void {
    channel1.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)

        })
        
    
}

function onChannel2Play(): void {
    channel2.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)

        })


}

function onChannel3Play() {
    channel3.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)
    })

}
function onChannel4Play(){
    channel4.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)
    })    
}


function getAudioElements(){
    clapSound = document.querySelector('[data-sound="clap"]')
    kickSound = document.querySelector('[data-sound="kick"]')
    boomSound = document.querySelector('[data-sound="boom"]')
    hithatSound = document.querySelector('[data-sound="hihat"]')
    openhatSound = document.querySelector('[data-sound="openhat"]')
    rideSound = document.querySelector('[data-sound="ride"]')
    snareSound = document.querySelector('[data-sound="snare"]')
    tinkSound = document.querySelector('[data-sound="tink"]')
    tomSound = document.querySelector('[data-sound="tom"]')
}

function onKeyDown(ev: KeyboardEvent): void {
    const key = ev.key;
    const time = ev.timeStamp;
    
    if(isRec)
    {
    channel1.push({key, time})
    playSound(key)
    }
    else
    {
        playSound(key)
    }

    if(isRec2)
    {
    channel2.push({key, time})
    playSound(key)
    }
    else
    {
        playSound(key)
    }


    if(isRec3)
    {
    channel3.push({key, time})
    playSound(key)
    }
    else
    {
        playSound(key)
    }

    if(isRec4)
    {
    channel4.push({key, time})
    playSound(key)
    }
    else
    {
        playSound(key)
    }
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
            default:
                alert("Tutaj nie ma żadnego dzwięku!")
                break;
        
    }
    
}

padBomm.addEventListener('click', function(){
    boomSound.play();
    console.log("padboom");
     boomSound.currentTime = 0;
    })

padClap.addEventListener('click', function(){
    clapSound.play()
    clapSound.currentTime = 0;
})
padKick.addEventListener('click', function(){
    kickSound.play();
    kickSound.currentTime = 0;
})
padSanare.addEventListener('click', function(){
    snareSound.play();
    snareSound.currentTime = 0;
})
padHihat.addEventListener('click', function(){
    hithatSound.play();
    hithatSound.currentTime = 0;
})
padOpenhat.addEventListener('click', function (){
    openhatSound.play()
    openhatSound.currentTime = 0;

})
padRide.addEventListener('click', function(){
    rideSound.play()
    rideSound.currentTime = 0;
})
padTink.addEventListener('click', function() {
    tinkSound.play()
    tinkSound.currentTime = 0;

})
padTom.addEventListener('click', function(){
    tomSound.play()
    tomSound.currentTime = 0;
})


recordButton1.addEventListener("click", function () {
    if(!isRec)
    {
        recordButton1.classList.add("rec")
        isRec = true;
        recordButton1.textContent = "Recording"

    }
    else if(isRec)
    {
        recordButton1.classList.remove("rec")
        isRec = false;
        recordButton1.textContent = "Record channel 1"
    }
} )

recordButton2.addEventListener("click", function () {
    if(!isRec2)
    {
        recordButton2.classList.add("rec")
        isRec2 = true;
        recordButton2.textContent = "Recording"

    }
    else if(isRec2)
    {
        recordButton2.classList.remove("rec")
        isRec2 = false;
        recordButton2.textContent = "Record channel 2"
    }
} )

recordButton3.addEventListener("click", function() {
    if(!isRec3)
    {
        recordButton3.classList.add("rec")
        isRec3 = true;
        recordButton3.textContent = "Recording"
    }
    else if(isRec3)
    {
        recordButton3.classList.remove("rec")
        isRec = false;
        recordButton3.textContent = "Record channel 3"
    }

})

recordButton4.addEventListener("click", function() {
    if(!isRec4)
    {
        recordButton4.classList.add("rec")
        isRec4 = true;
        recordButton4.textContent = "Recording"
    }
    else if(isRec4)
    {
        recordButton4.classList.remove("rec")
        isRec4 = false;
        recordButton4.textContent = "Record channel 4"
    }

})

resetBtn1.addEventListener('click', function () {

    for (let i = 0; i < channel1.length; i) {
        channel1.shift();
        channel2.shift();
        channel3.shift();
        channel4.shift();
    }
})

resetBtn2.addEventListener('click', function () {

    for (let i = 0; i < channel2.length; i) {

        channel2.shift();
    }   

})

resetBtn3.addEventListener('click', function () {

    for (let i = 0; i < channel3.length; i) {

        channel3.shift();
    }    
})

resetBtn4.addEventListener('click', function () {

    for (let i = 0; i < channel4.length; i) {

        channel4.shift();
    }
})