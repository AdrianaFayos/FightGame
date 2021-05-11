
let fighter1 = "";
let fighter2 = "";


const changeStage = (destination) => {

    let arrStage = ["stage1", "stage2", "stage3", "stage4"];

    arrStage = arrStage.filter(val => !destination.includes(val));

    document.getElementById(destination).style.display = "block";

    for(let _stage of arrStage){
        document.getElementById(_stage).style.display = "none";
    }
}


const chooseFighter = (character) => {

    if ( fighter1 == "" ) {

        fighter1 = allPlayers[character];
        
        document.getElementById(character).className = "fighterSelected1";

        img1 = document.getElementById("imgFighterSelected1");

        img1.innerHTML = `<img class="imgFighter1" src="img/characters/${fighter1.picName}.png" alt="fighter1" >`;
        /*
        <audio id="fighterAudio1"><source src="audio//characters/${fighter1.picName}.mp4" type="audio/wav"></audio>`;
        
        fighterAudio1 = document.getElementById("fighterAudio1");
        fighterAudio1.play();  */


    } else if ( fighter2 == "") {

        fighter2 = allPlayers[character];
        
        document.getElementById(character).className = "fighterSelected2";

        img2 = document.getElementById("imgFighterSelected2");
        img2.innerHTML = `<img class="imgFighter2" src="img/characters/${fighter2.picName}.png" alt="fighter2">`;
        /*
        <audio id="fighterAudio2"><source src="audio/characters/${fighter2.picName}.mp4" type="audio/wav"></audio>`;
        
        fighterAudio2 = document.getElementById("fighterAudio2");
        fighterAudio2.play(); */

        fillPlayers();
   
        setTimeout(() => {
           changeStage("stage3");
        }, 3000); 
    }
}


const fillPlayers = () => {

    let players = document.getElementById("players");

    players.innerHTML = `
    <div class="fighterOne" >
         <div class="lifeBar"></div>
         <div class="picFighter1"><img class="imgFighter1" src="img/characters/${fighter1.picName}.png" alt="fighter1" ></div>
    </div>
    <div class="centralDiv">
        <img class="logo" src="img/logo.png" alt="logo">
        <button class="attackButton" onclick="fighting()">ATTACK</button>
        <audio id="lightsaber"><source src="audio/lightsaberSound.mp4" type="audio/wav"></audio>
    </div>
    <div class="fighterTwo">
         <div class="lifeBar"></div>
         <div class="picFighter2"><img class="imgFighter2" src="img/characters/${fighter2.picName}.png" alt="fighter2"></div>
    </div>`
}


const fighting = () => {

    lightsaber = document.getElementById("lightsaber");
    lightsaber.play();

    console.log("empieza la lucha");

}

// Play or Pause Music

let button = document.getElementById("musicContainer");
let music = document.getElementById("music");

const playMusic = () => {

    music.play();

    button.innerHTML = `
    <button id="musicButton" onclick="pauseMusic()">
       <i class="fas fa-volume-mute"></i>
    </button>`

}

const pauseMusic = () => {
    
    music.pause();

    button.innerHTML = `
    <button id="musicButton" onclick="playMusic()">
        <i class="fas fa-volume-up"></i>
    </button>`
}


