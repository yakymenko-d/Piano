const keys = [
    {C4Key: document.getElementById("C4-key"), soundC4: new Audio("sound/C4.mp3"), keyCodeC4: 81},
    {Db4Key: document.getElementById("Db4-key"), soundDb4: new Audio("sound/Db4.mp3"), keyCodeDb4: 50},
    {D4Key: document.getElementById("D4-key"), soundD4: new Audio("sound/D4.mp3"), keyCodeD4: 87},
    {Eb4Key: document.getElementById("Eb4-key"), soundEb4: new Audio("sound/Eb4.mp3"), keyCodeEb4: 51},
    {E4Key: document.getElementById("E4-key"), soundE4: new Audio("sound/E4.mp3"), keyCodeE4: 69},
    {F4Key: document.getElementById("F4-key"), soundF4: new Audio("sound/F4.mp3"), keyCodeF4: 82},
    {Gb4Key: document.getElementById("Gb4-key"), soundGb4: new Audio("sound/Gb4.mp3"), keyCodeGb4: 53},
    {G4Key: document.getElementById("G4-key"), soundG4: new Audio("sound/G4.mp3"), keyCodeG4: 84},
    {Ab4Key: document.getElementById("Ab4-key"), soundAb4: new Audio("sound/Ab4.mp3"), keyCodeAb4: 54},
    {A4Key: document.getElementById("A4-key"), soundA4: new Audio("sound/A4.mp3"), keyCodeA4: 89},
    {Bb4Key: document.getElementById("Bb4-key"), soundBb4: new Audio("sound/Bb4.mp3"), keyCodeBb4: 55},
    {B4Key: document.getElementById("B4-key"), soundB4: new Audio("sound/B4.mp3"), keyCodeB4: 85},
    {C5Key: document.getElementById("C5-key"), soundC5: new Audio("sound/C5.mp3"), keyCodeC5: 73},
    {Db5Key: document.getElementById("Db5-key"), soundDb5: new Audio("sound/Db5.mp3"), keyCodeDb5: 57}, 
    {D5Key: document.getElementById("D5-key"), soundD5: new Audio("sound/D5.mp3"), keyCodeD5: 79},
    {Eb5Key: document.getElementById("Eb5-key"), soundEb5: new Audio("sound/Eb5.mp3"), keyCodeEb5: 48},
    {E5Key: document.getElementById("E5-key"), soundE5: new Audio("sound/E5.mp3"),  keyCodeE5: 80}
];

function keyboardUse(key, sound, code) {
    document.addEventListener('keydown', function(event) {
        if (event.keyCode == code) {
            sound.currentTime = 0
            sound.play();
            key.classList.add('active');
            window.addEventListener ("keyup", () => {key.classList.remove ('active')});
        };
    });
}
keyboardUse(keys[0].C4Key, keys[0].soundC4, keys[0].keyCodeC4);
keyboardUse(keys[1].Db4Key, keys[1].soundDb4, keys[1].keyCodeDb4);
keyboardUse(keys[2].D4Key, keys[2].soundD4, keys[2].keyCodeD4);
keyboardUse(keys[3].Eb4Key, keys[3].soundEb4, keys[3].keyCodeEb4);
keyboardUse(keys[4].E4Key, keys[4].soundE4, keys[4].keyCodeE4);
keyboardUse(keys[5].F4Key, keys[5].soundF4, keys[5].keyCodeF4);
keyboardUse(keys[6].Gb4Key, keys[6].soundGb4, keys[6].keyCodeGb4);
keyboardUse(keys[7].G4Key, keys[7].soundG4, keys[7].keyCodeG4);
keyboardUse(keys[8].Ab4Key, keys[8].soundAb4, keys[8].keyCodeAb4);
keyboardUse(keys[9].A4Key, keys[9].soundA4, keys[9].keyCodeA4);
keyboardUse(keys[10].Bb4Key, keys[10].soundBb4, keys[10].keyCodeBb4);
keyboardUse(keys[11].B4Key, keys[11].soundB4, keys[11].keyCodeB4);
keyboardUse(keys[12].C5Key, keys[12].soundC5, keys[12].keyCodeC5);
keyboardUse(keys[13].Db5Key, keys[13].soundDb5, keys[13].keyCodeDb5);
keyboardUse(keys[14].D5Key, keys[14].soundD5, keys[14].keyCodeD5);
keyboardUse(keys[15].Eb5Key, keys[15].soundEb5, keys[15].keyCodeEb5);
keyboardUse(keys[16].E5Key, keys[16].soundE5, keys[16].keyCodeE5);




function mouseUse(key, sound) {
    key.addEventListener("mousedown", function (event) {
        sound.currentTime = 0
        sound.play();
        key.classList.add('active');
        window.addEventListener ("mouseup", () => {key.classList.remove ('active')});
    });
}
mouseUse(keys[0].C4Key, keys[0].soundС4);
mouseUse(keys[1].Db4Key, keys[1].soundDb4);
mouseUse(keys[2].D4Key, keys[2].soundD4);
mouseUse(keys[3].Eb4Key, keys[3].soundEb4);
mouseUse(keys[4].E4Key, keys[4].soundE4);
mouseUse(keys[5].F4Key, keys[5].soundF4);
mouseUse(keys[6].Gb4Key, keys[6].soundGb4);
mouseUse(keys[7].G4Key, keys[7].soundG4);
mouseUse(keys[8].Ab4Key, keys[8].soundAb4);
mouseUse(keys[9].A4Key, keys[9].soundA4);
mouseUse(keys[10].Bb4Key, keys[10].soundBb4);
mouseUse(keys[11].B4Key, keys[11].soundB4);
mouseUse(keys[12].C5Key, keys[12].soundC5);
mouseUse(keys[13].Db5Key, keys[13].soundDb5);
mouseUse(keys[14].D5Key, keys[14].soundD5);
mouseUse(keys[15].Eb5Key, keys[15].soundEb5);
mouseUse(keys[16].E5Key, keys[16].soundE5);

















// const C4 = new Audio("sound/C4.mp3");
// const Db4 = new Audio("sound/Db4.mp3");
// const D4 = new Audio("sound/D4.mp3");
// const Eb4 = new Audio("sound/Eb4.mp3");
// const E4 = new Audio("sound/E4.mp3");
// const F4 = new Audio("sound/F4.mp3");
// const Gb4 = new Audio("sound/Gb4.mp3");
// const G4 = new Audio("sound/G4.mp3");
// const Ab4 = new Audio("sound/Ab4.mp3");
// const A4 = new Audio("sound/A4.mp3");
// const Bb4 = new Audio("sound/Bb4.mp3");
// const B4 = new Audio("sound/B4.mp3");
// const C5 = new Audio("sound/C5.mp3");
// const Db5 = new Audio("sound/Db5.mp3");
// const D5 = new Audio("sound/D5.mp3");
// const Eb5 = new Audio("sound/Eb5.mp3");
// const E5 = new Audio("sound/E5.mp3");

// const C4Key = document.querySelector(".C4-key");
// const Db4Key = document.querySelector("Db4-key.mp3");
// const D4Key = document.querySelector("D4-key.mp3");
// const Eb4Key = document.querySelector("Eb4-key.mp3");
// const E4Key = document.querySelector("E4-key.mp3");
// const F4Key = document.querySelector("F4-key.mp3");
// const Gb4Key = document.querySelector("Gb4-key.mp3");
// const G4Key = document.querySelector("G4-key.mp3");
// const Ab4Key = document.querySelector("Ab4-key.mp3");
// const A4Key = document.querySelector("A4-key.mp3");
// const Bb4Key = document.querySelector("Bb4-key.mp3");
// const B4Key = document.querySelector("B4-key.mp3");
// const C5Key = document.querySelector("C5-key.mp3");
// const Db5Key = document.querySelector("Db5-key.mp3");
// const D5Key = document.querySelector("D5-key.mp3");
// const Eb5Key = document.querySelector("Eb5-key.mp3");
// const E5Key = document.querySelector("E5-key.mp3");

// document.addEventListener('keydown', function(e) {
// 	if (e.keyCode == 81) {
//         C4.play();
//         C4.currentTime = 0;
//         C4Key.classList.add('active');
//         window.addEventListener ("keyup", () => {C4Key.classList.remove ("active")});
//     }
//     else if (e.keyCode == 50) {
//         Db4.play();
//         Db4.currentTime = 0;
//         Db4Key.classList.add('active');
//         window.addEventListener ("keyup", () => {Db4Key.classList.remove ("active")});
//     }
//     else if (e.keyCode == 87) {
//         D4.play();
//         D4.currentTime = 0;
//         D4Key.classList.add('active');
//         window.addEventListener ("keyup", () => {D4Key.classList.remove ("active")});
//     }
//     else if (e.keyCode == 51) {
//         Eb4.play();
//         Eb4.currentTime = 0;
//         Eb4Key.classList.add('active');
//         window.addEventListener ("keyup", () => {Eb4Key.classList.remove ("active")});
//     }
//     else if (e.keyCode == 69) {
//         E4.play();
//         E4.currentTime = 0;
//         E4Key.classList.add('active');
//         window.addEventListener ("keyup", () => {E4Key.classList.remove ("active")});
//     }
//     else if (e.keyCode == 82) {
//         F4.play();
//         F4.currentTime = 0;
//         F4Key.classList.add('active');
//         window.addEventListener ("keyup", () => {F4Key.classList.remove ("active")});
//     }
//     else if (e.keyCode == 53) {
//         Gb4.play();
//         Gb4.currentTime = 0;
//         Gb4Key.classList.add('active');
//         window.addEventListener ("keyup", () => {Gb4Key.classList.remove ("active")});
//     }
//     else if (e.keyCode == 84) {
//         G4.play();
//         G4.currentTime = 0;
//         G4Key.classList.add('active');
//         window.addEventListener ("keyup", () => {G4Key.classList.remove ("active")});
//     }
//     else if (e.keyCode == 54) {
//         Ab4.play();
//         Ab4.currentTime = 0;
//         Ab4Key.classList.add('active');
//         window.addEventListener ("keyup", () => {Ab4Key.classList.remove ("active")});
//     }
//     else if (e.keyCode == 89) {
//         A4.play();
//         A4.currentTime = 0;
//         A4Key.classList.add('active');
//         window.addEventListener ("keyup", () => {A4Key.classList.remove ("active")});
//     }
//     else if (e.keyCode == 55) {
//         Bb4.play();
//         Bb4.currentTime = 0;
//         Bb4Key.classList.add('active');
//         window.addEventListener ("keyup", () => {Bb4Key.classList.remove ("active")});
//     }
//     else if (e.keyCode == 85) {
//         B4.play();
//         B4.currentTime = 0;
//         B4Key.classList.add('active');
//         window.addEventListener ("keyup", () => {B4Key.classList.remove ("active")});
//     }
//     else if (e.keyCode == 73) {
//         C5.play();
//         C5.currentTime = 0;
//         C5Key.classList.add('active');
//         window.addEventListener ("keyup", () => {C5Key.classList.remove ("active")});
//     }
//     else if (e.keyCode == 57) {
//         Db5.play();
//         Db5.currentTime = 0;
//         Db5Key.classList.add('active');
//         window.addEventListener ("keyup", () => {Db5Key.classList.remove ("active")});
//     }
//     else if (e.keyCode == 79) {
//         D5.play();
//         D5.currentTime = 0;
//         D5Key.classList.add('active');
//         window.addEventListener ("keyup", () => {D5Key.classList.remove ("active")});
//     }
//     else if (e.keyCode == 48) {
//         Eb5.play();
//         Eb5.currentTime = 0;
//         Eb5Key.classList.add('active');
//         window.addEventListener ("keyup", () => {Eb5Key.classList.remove ("active")});
//     }
//     else if (e.keyCode == 80) {
//         E5.play();
//         E5.currentTime = 0;
//         E5Key.classList.add('active');
//         window.addEventListener ("keyup", () => {E5Key.classList.remove ("active")});
//     }
// });


// Db4Key.addEventListener('click', (e) => {
//     Db4.play();
//     Db4.currentTime = 0
//     event.preventDefault();
//     console.log('e', e);
// })
