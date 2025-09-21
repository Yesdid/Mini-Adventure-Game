let xp=0;
let health=100;
let gold=50;

let dungeonButton=document.querySelector("#dungeonButton")
let townButton=document.querySelector("#townButton")
let kingButton=document.querySelector("#kingButton")
let tavernButton=document.querySelector("#tavernButton")
let fortuneTellerButton=document.querySelector("#fortuneTellerButton")
let healthStat=document.querySelector("#healthStat")
let goldStat=document.querySelector("#goldStat")
let levelStat=document.querySelector("#levelStat")
let text=document.querySelector("#text")

dungeonButton.onclick=goToDungeon;
townButton.onclick=goToTown;
kingButton.onclick=goToKing;
tavernButton.onclick=goToTavern;
fortuneTellerButton.onclick=goToFortuneTeller;

function goToDungeon(){
    text.innerHTML="You enter the dungeon. You feel a chill run down your spine."
}

function goToTown(){
    text.innerHTML="You walk back to town, the sun is shining. Where will you go next?"
}

function goToKing(){
    text.innerHTML="You stand before the king. He looks at you with hope in his eyes."
}

function goToTavern(){
    text.innerHTML="You enter the tavern. It is lively!"
}

function goToFortuneTeller(){
    text.innerHTML="You enter a mysterious tent. A hooded figure beckons you inside."
}

