
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

    } else if ( fighter2 == "" ) {

        fighter2 = allPlayers[character];
        
        document.getElementById(character).className = "fighterSelected2";

        img2 = document.getElementById("imgFighterSelected2");
        img2.innerHTML = `<img class="imgFighter2" src="img/characters/${fighter2.picName}.png" alt="fighter2" >`;

        fillPlayers();
       
        setTimeout(() => {
           changeStage("stage3");
        }, 2000);
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
    </div>
    <div class="fighterTwo">
         <div class="lifeBar"></div>
         <div class="picFighter2"><img class="imgFighter2" src="img/characters/${fighter2.picName}.png" alt="fighter2"></div>
    </div>`
}


const fighting = () => {

    console.log("empieza la lucha")
}
