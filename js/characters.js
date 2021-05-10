class Fighter{

    constructor(name , attack, defense, technique, speed){
        this.life = 300;
        this.luck = Math.floor(Math.random() *11);
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.tecnica = technique;
        this.speed = speed;
    }


    hit(enemy){
        enemy.life -= this.attack - (enemy.defense * (enemy.luck / this.speed));
    }

    
    specialHit(enemy){
        enemy.life -= ( this.attack + this.technique ) - (enemy.defense * (enemy.luck / this.speed));
    }
};

let player1 = new Fighter("Luke Skywalker");
let player2 = new Fighter("Leia");
let player3 = new Fighter("Yoda");
let player4 = new Fighter("Chewbacca");
let player5 = new Fighter("Darth Vader");
let player6 = new Fighter("Darth Maul");
let player7 = new Fighter("Emperor Palpatine");
let player8 = new Fighter("Stormtrooper");

let allPlayers = {
    "1" : player1,
    "2" : player2,
    "3" : player3,
    "4" : player4,
    "5" : player5,
    "6" : player6,
    "7" : player7,
    "8" : player8
}