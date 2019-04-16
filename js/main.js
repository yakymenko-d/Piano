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
mouseUse(keys[0].C4Key, keys[0].soundC4);
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
