
let fighter1 = "";
let fighter2 = "";

// Change Stage

const changeStage = (destination) => {

    let arrStage = ["stage1", "stage2", "stage3", "stage4"];

    arrStage = arrStage.filter(val => !destination.includes(val));

    document.getElementById(destination).style.display = "block";

    for(let _stage of arrStage){
        document.getElementById(_stage).style.display = "none";
    }
}


// Choose two fighters

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


// Fill players on the third stage

const fillPlayers = () => {

    let players = document.getElementById("players");

    players.innerHTML = `
    <div class="fighterOne" >
         <div id="lifeBar1">${fighter1.life}</div>
         <div class="picFighter1"><img class="imgFighter1" src="img/characters/${fighter1.picName}.png" alt="fighter1" ></div>
    </div>
    <div class="centralDiv">
        <img class="logo" src="img/logo.png" alt="logo">
        <div id="infoFight">START</div>
        <button class="attackButton" onclick="fighting()">ATTACK</button>
        <audio id="lightsaber"><source src="audio/lightsaberSound.mp4" type="audio/wav"></audio>
    </div>
    <div class="fighterTwo">
         <div id="lifeBar2">${fighter2.life}</div>
         <div class="picFighter2"><img class="imgFighter2" src="img/characters/${fighter2.picName}.png" alt="fighter2"></div>
    </div>`
}


// Fight

const fighting = () => {

    // Play lightsaber sound on click
    lightsaber = document.getElementById("lightsaber");
    lightsaber.play();

    // Random Fight
    console.log("empieza la lucha");

    let turn = Math.floor(Math.random() * 2);
    let specialAttack = Math.floor(Math.random() * 4);
    let infoFight = document.getElementById("infoFight");
    let life1 = document.getElementById("lifeBar1");
    let life2 = document.getElementById("lifeBar2");

    if ( turn == 0) {

        if ( specialAttack == 3 ) {

            fighter1.specialHit(fighter2);
            infoFight.innerHTML = `${fighter1.name} Special Hit`;

        } else {

            fighter1.hit(fighter2);
            infoFight.innerHTML = `${fighter1.name} hits ${fighter2.name}`;

        }

    } else {

        if ( specialAttack == 4 ) {

            fighter2.specialHit(fighter1);
            infoFight.innerHTML = `${fighter2.name} Special Hit`;
    

        } else {

            fighter2.hit(fighter1);
            infoFight.innerHTML = `${fighter2.name} hits ${fighter1.name}`;

        }

    }

    console.log(fighter1.life);
    console.log(fighter2.life);
    life1.innerHTML = `${fighter1.life}`;
    life2.innerHTML = `${fighter2.life}`;

    Winner();

}

// Winner

const Winner = () => {
    
    let winner;

    if(fighter1.life <= 0){

        winner = fighter2;
        console.log("El jugador 2 gana.");

        setTimeout(() => {
            changeStage("stage4");
         }, 2000); 

    } else if(fighter2.life <= 0){

        winner = fighter1;
        console.log("El jugador 1 gana.")

        setTimeout(() => {
            changeStage("stage4");
         }, 2000); 

    }
}

// Play or Pause Music

let button = document.getElementById("musicContainer");
let music = document.getElementById("music");

const playMusic = () => {

    music.play();

    button.innerHTML = `
    <button id="musicButton" onclick="pauseMusic()">
       <i class="fas fa-volume-up"></i>
    </button>`

}

const pauseMusic = () => {
    
    music.pause();

    button.innerHTML = `
    <button id="musicButton" onclick="playMusic()">
        <i class="fas fa-volume-mute"></i>
    </button>`
}


