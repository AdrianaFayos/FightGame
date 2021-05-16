
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
        document.getElementById(character).onclick = ""; // This block the selected fighter

        img1 = document.getElementById("imgFighterSelected1");

        img1.innerHTML = `<img class="imgFighter1" src="img/characters/${fighter1.picName}.png" alt="fighter1" >
        <audio id="fighterAudio1"><source src="audio//characters/${fighter1.picName}.mp4" type="audio/wav"></audio>`;
        
        fighterAudio1 = document.getElementById("fighterAudio1");
        fighterAudio1.play();  

    } else if ( fighter2 == "" ) {

        fighter2 = allPlayers[character];
    
        document.getElementById(character).className = "fighterSelected2";
        document.getElementById(character).onclick = ""; // This block the selected fighter

        img2 = document.getElementById("imgFighterSelected2");
        img2.innerHTML = `<img class="imgFighter2" src="img/characters/${fighter2.picName}.png" alt="fighter2">
        <audio id="fighterAudio2"><source src="audio/characters/${fighter2.picName}.mp4" type="audio/wav"></audio>`;
        
        fighterAudio2 = document.getElementById("fighterAudio2");
        fighterAudio2.play(); 

        fillPlayers();
   
        setTimeout(() => {
           changeStage("stage3");
        }, 10000); 
    }

}


// Fill players on the third stage

const fillPlayers = () => {

    let players = document.getElementById("players");

    players.innerHTML = `
    <div class="fighterOne" >
         <div class="lifeBar"><div id="lifeBar1"></div></div>
         <div class="picFighter1"><img class="imgFighter1" src="img/characters/${fighter1.picName}.png" alt="fighter1" ></div>
    </div>
    <div class="centralDiv">
        <img class="logo" src="img/logo.png" alt="logo">
        <div id="infoContainer"><p class="vs">vs</p></div>
        <button class="attackButton" onclick="fighting()">ATTACK</button>
        <audio id="lightsaber"><source src="audio/lightsaberSound.mp4" type="audio/wav"></audio>
    </div>
    <div class="fighterTwo">
         <div class="lifeBar"><div id="lifeBar2"></div></div>
         <div class="picFighter2"><img class="imgFighter2" src="img/characters/${fighter2.picName}.png" alt="fighter2"></div>
    </div>`
}


// Fight

const fighting = () => {

    // Div Fight Information

    document.getElementById("infoContainer").innerHTML= `<div id="infoFight"></div>`

    // Random Fight
    //console.log("empieza la lucha");

    let turn = Math.floor(Math.random() * 2);
    let specialAttack = Math.floor(Math.random() * 4);
    let infoFight = document.getElementById("infoFight");
    let life1 = document.getElementById("lifeBar1");
    let life2 = document.getElementById("lifeBar2");


    if ( (fighter1.life > 0 ) && (fighter2.life > 0 )) {

         // Play lightsaber sound on click
        lightsaber = document.getElementById("lightsaber");
        lightsaber.play();

        if (turn == 0) {

            if ( specialAttack == 3 ) {

                fighter1.specialHit(fighter2);
                infoFight.innerHTML = `${fighter1.name} Special Hit`;

            } else {

                fighter1.hit(fighter2);
                infoFight.innerHTML = `${fighter1.name} hits ${fighter2.name}`;

            }

        } else {

            if ( specialAttack == 1 ) {

                fighter2.specialHit(fighter1);
                infoFight.innerHTML = `${fighter2.name} Special Hit`;
        

            } else {

                fighter2.hit(fighter1);
                infoFight.innerHTML = `${fighter2.name} hits ${fighter1.name}`;

            }

        }
    };

         

    updateLife();
    Winner();

}

// Life Bar

const updateLife = () => {

    if ((fighter1.life > 0 ) && (fighter2.life > 0 )) {
        let lifePlayer1 = fighter1.life;
        let lifePlayer2 = fighter2.life;
            lifePlayer1 = (lifePlayer1 * 100)/300;
            document.getElementById("lifeBar1").style.width = lifePlayer1+"%";
            lifePlayer2 = (lifePlayer2 * 100)/300;
            document.getElementById("lifeBar2").style.width = lifePlayer2+"%";
    } else if (fighter1.life <= 0) {
        document.getElementById("lifeBar1").style.width = 0;
    } else {
        document.getElementById("lifeBar2").style.width = 0;
    }
}

// Winner

const Winner = () => {
    
    if(fighter1.life <= 0){

        document.getElementById("infoContainer").innerHTML= `<div id="infoFight"></div>`
        infoFight.innerHTML = `game over`;

        fillWinner(fighter2);

        setTimeout(() => {
            changeStage("stage4");
         }, 2000); 

    } else if(fighter2.life <= 0){

        document.getElementById("infoContainer").innerHTML= `<div id="infoFight"></div>`
        infoFight.innerHTML = `game over`;
        fillWinner(fighter1);

        setTimeout(() => {
            changeStage("stage4");
         }, 2000); 

    }
}


// Fill Winner Stage 4

const fillWinner = (winner) => {

    let winnerContainer = document.getElementById("winner");

    winnerContainer.innerHTML = `
    <div><img class="winnerPic" src="img/characters/${winner.picName}.png" alt="winner" ></div>
    <div class="winnerButton">
          <div class="winnerText">${winner.name} wins !!</div>
          <button onclick="reset()" class="resetButton">start again</button>
    </div>      
   `
};


// Reset Game

const reset = () => {
    window.location.reload();
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


