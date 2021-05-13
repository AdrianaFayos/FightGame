class Fighter{

    constructor(name, picName, attack, defense, technique, speed){
        this.life = 300;
        this.luck = Math.floor(Math.random() *11);
        this.name = name;
        this.picName = picName
        this.attack = attack;
        this.defense = defense;
        this.technique = technique;
        this.speed = speed;
    }


    hit(enemy){
        enemy.life -= (this.attack - (enemy.defense * (enemy.luck / this.speed))).toFixed();
    }

    
    specialHit(enemy){
        enemy.life -= (( this.attack + this.technique ) - (enemy.defense * (enemy.luck / this.speed))).toFixed();
    }
};

let player1 = new Fighter("Luke Skywalker", "lukeSkywalker", 30, 40, 20, 40);
let player2 = new Fighter("Leia", "leia", 20, 30, 20, 20);
let player3 = new Fighter("Yoda", "yoda", 50, 40, 40, 10);
let player4 = new Fighter("Chewbacca", "chewbacca", 40, 20, 20, 30);
let player5 = new Fighter("Darth Vader", "darthVader", 40, 30, 40, 30 );
let player6 = new Fighter("Darth Maul", "darthMaul", 30, 20, 30, 30);
let player7 = new Fighter("Emperor Palpatine", "emperorPalpatine", 50,20,30,20);
let player8 = new Fighter("Stormtrooper", "stormtrooper", 20, 20, 30, 30 );

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