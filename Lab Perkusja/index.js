var clapSound;
var kickSound;
var boomSound;
var hithatSound;
var openhatSound;
var rideSound;
var snareSound;
var tinkSound;
var tomSound;
var padBomm = document.getElementById("padBoom");
var padClap = document.getElementById("padClap");
var padKick = document.getElementById("padKick");
var padSanare = document.getElementById("padSnare");
var padHihat = document.getElementById("padHihat");
var padOpenhat = document.getElementById("padOpenhat");
var padRide = document.getElementById("padRide");
var padTink = document.getElementById("padTink");
var padTom = document.getElementById("padTom");
var recordButton1 = document.getElementById("channel1Play");
var recordButton2 = document.getElementById("channel2Play");
var recordButton3 = document.getElementById("channel3Play");
var recordButton4 = document.getElementById("channel4Play");
var btnPlay1 = document.getElementById("btnPlay1");
var btnPlay2 = document.getElementById("btnPlay2");
var btnPlay3 = document.getElementById("btnPlay3");
var btnPlay4 = document.getElementById("btnPlay4");
var resetBtn1 = document.getElementById("resetBtn1");
var resetBtn2 = document.getElementById("resetBtn2");
var resetBtn3 = document.getElementById("resetBtn3");
var resetBtn4 = document.getElementById("resetBtn4");
var isRec = false;
var isRec2 = false;
var isRec3 = false;
var isRec4 = false;
var channel1 = [];
var channel2 = [];
var channel3 = [];
var channel4 = [];
appStart();
function appStart() {
    document.addEventListener('keypress', onKeyDown);
    var btnChannel1Play = document.querySelector('#channel1Play');
    btnPlay1.addEventListener('click', onChannel1Play);
    getAudioElements();
    var btnChannel2Play = document.querySelector('#channel2Play');
    btnPlay2.addEventListener('click', onChannel2Play);
    var btnChannel3Play = document.querySelector('#channel3Play');
    btnPlay3.addEventListener('click', onChannel3Play);
    var btnChannel4Play = document.querySelector('#channel4Play');
    btnPlay4.addEventListener('click', onChannel4Play);
}
function onChannel1Play() {
    channel1.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function onChannel2Play() {
    channel2.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function onChannel3Play() {
    channel3.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function onChannel4Play() {
    channel4.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function getAudioElements() {
    clapSound = document.querySelector('[data-sound="clap"]');
    kickSound = document.querySelector('[data-sound="kick"]');
    boomSound = document.querySelector('[data-sound="boom"]');
    hithatSound = document.querySelector('[data-sound="hihat"]');
    openhatSound = document.querySelector('[data-sound="openhat"]');
    rideSound = document.querySelector('[data-sound="ride"]');
    snareSound = document.querySelector('[data-sound="snare"]');
    tinkSound = document.querySelector('[data-sound="tink"]');
    tomSound = document.querySelector('[data-sound="tom"]');
}
function onKeyDown(ev) {
    var key = ev.key;
    var time = ev.timeStamp;
    if (isRec) {
        channel1.push({ key: key, time: time });
        playSound(key);
    }
    else {
        playSound(key);
    }
    if (isRec2) {
        channel2.push({ key: key, time: time });
        playSound(key);
    }
    else {
        playSound(key);
    }
    if (isRec3) {
        channel3.push({ key: key, time: time });
        playSound(key);
    }
    else {
        playSound(key);
    }
    if (isRec4) {
        channel4.push({ key: key, time: time });
        playSound(key);
    }
    else {
        playSound(key);
    }
}
function playSound(key) {
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
            alert("Tutaj nie ma żadnego dzwięku!");
            break;
    }
}
padBomm.addEventListener('click', function () {
    boomSound.play();
    console.log("padboom");
    boomSound.currentTime = 0;
});
padClap.addEventListener('click', function () {
    clapSound.play();
    clapSound.currentTime = 0;
});
padKick.addEventListener('click', function () {
    kickSound.play();
    kickSound.currentTime = 0;
});
padSanare.addEventListener('click', function () {
    snareSound.play();
    snareSound.currentTime = 0;
});
padHihat.addEventListener('click', function () {
    hithatSound.play();
    hithatSound.currentTime = 0;
});
padOpenhat.addEventListener('click', function () {
    openhatSound.play();
    openhatSound.currentTime = 0;
});
padRide.addEventListener('click', function () {
    rideSound.play();
    rideSound.currentTime = 0;
});
padTink.addEventListener('click', function () {
    tinkSound.play();
    tinkSound.currentTime = 0;
});
padTom.addEventListener('click', function () {
    tomSound.play();
    tomSound.currentTime = 0;
});
recordButton1.addEventListener("click", function () {
    if (!isRec) {
        recordButton1.classList.add("rec");
        isRec = true;
        recordButton1.textContent = "Recording";
    }
    else if (isRec) {
        recordButton1.classList.remove("rec");
        isRec = false;
        recordButton1.textContent = "Record channel 1";
    }
});
recordButton2.addEventListener("click", function () {
    if (!isRec2) {
        recordButton2.classList.add("rec");
        isRec2 = true;
        recordButton2.textContent = "Recording";
    }
    else if (isRec2) {
        recordButton2.classList.remove("rec");
        isRec2 = false;
        recordButton2.textContent = "Record channel 2";
    }
});
recordButton3.addEventListener("click", function () {
    if (!isRec3) {
        recordButton3.classList.add("rec");
        isRec3 = true;
        recordButton3.textContent = "Recording";
    }
    else if (isRec3) {
        recordButton3.classList.remove("rec");
        isRec = false;
        recordButton3.textContent = "Record channel 3";
    }
});
recordButton4.addEventListener("click", function () {
    if (!isRec4) {
        recordButton4.classList.add("rec");
        isRec4 = true;
        recordButton4.textContent = "Recording";
    }
    else if (isRec4) {
        recordButton4.classList.remove("rec");
        isRec4 = false;
        recordButton4.textContent = "Record channel 4";
    }
});
resetBtn1.addEventListener('click', function () {
    for (var i = 0; i < channel1.length; i) {
        channel1.shift();
        channel2.shift();
        channel3.shift();
        channel4.shift();
    }
});
resetBtn2.addEventListener('click', function () {
    for (var i = 0; i < channel2.length; i) {
        channel2.shift();
    }
});
resetBtn3.addEventListener('click', function () {
    for (var i = 0; i < channel3.length; i) {
        channel3.shift();
    }
});
resetBtn4.addEventListener('click', function () {
    for (var i = 0; i < channel4.length; i) {
        channel4.shift();
    }
});
