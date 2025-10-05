let xp=0;
let health=100;
let gold=50;

let dungeonButton=document.querySelector("#dungeonButton")
let townButton=document.querySelector("#townButton")
let kingButton=document.querySelector("#kingButton")
let tavernButton=document.querySelector("#tavernButton")
let fortuneTellerButton=document.querySelector("#fortuneTellerButton")
let forestButton=document.querySelector("#forestButton")
let storeButton=document.querySelector("#storeButton")
let choiceButton1=document.querySelector("#choiceButton1")
let choiceButton2=document.querySelector("#choiceButton2")

let healthStat=document.querySelector("#healthStat")
let goldStat=document.querySelector("#goldStat")
let levelStat=document.querySelector("#levelStat")
let text=document.querySelector("#text")
let image=document.querySelector("#image")

const locations=[
    {
        name:"town",
        "buttonsshow": [kingButton, dungeonButton, tavernButton, forestButton, fortuneTellerButton, storeButton],
        "buttonshide": [townButton, choiceButton1, choiceButton2],
        text: "You walk back to town, the sun is shining. Where will you go next?",
        image: "https://imgs.search.brave.com/aPMY0iaqLDe0DT8vy_UL25Q3t4TVIY6D1abWQNK5dzs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzAyLzYyLzgx/LzM2MF9GXzEwMjYy/ODE1NV9aUGlBYU5F/RFJTWlUyUzBMQWti/Y2d2d0x5TW1yOWMy/WS5qcGc"
    },
    {
        name:"dungeon",
        "buttonsshow": [choiceButton1, choiceButton2, townButton],
        "buttonshide": [kingButton, dungeonButton, tavernButton, forestButton, fortuneTellerButton, storeButton],
        text: "You enter the dungeon. You feel a chill run down your spine. Which path will you take?",
        image: "https://imgs.search.brave.com/x-1ykY_D2MfsS1vUsbGTYxMnH6-9S_I4p30I1gkMQYY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE1/ODQxMjQ4NS9waG90/by9qZXdlbC1jYXZl/LW5hdGlvbmFsLW1v/bnVtZW50LWhpc3Rv/cmljLXNpdGUtd2l0/aC1vdXRzaWRlLWhp/bGwtdmlldy10aGUt/YmVhdXRpZnVsLXJv/Y2sud2VicD9hPTEm/Yj0xJnM9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUZmMVFQN1pZb3Rm/V2pieFZzMkdqRWRV/cXc3aUlEaVg5MzdG/VmpvSWQ2Tlk9"
    },
    {
        name:"king",
        "buttonsshow": [townButton],
        "buttonshide": [dungeonButton, kingButton, tavernButton, forestButton, fortuneTellerButton, choiceButton1, choiceButton2, storeButton],
        text: "You stand before the king. He looks at you with hope in his eyes.",
        image: "https://imgs.search.brave.com/50o3v9S4c2rJB5J1Frv29p1mNoyT-wsAAJNm85r3Xjk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzYxLzQ1LzY5/LzM2MF9GXzU2MTQ1/Njk0Nl9YTnp4Wkk3/ampMOG1SclBDRTla/TnhMWmpwYWxIekFN/NS5qcGc"
    },
    {
        name:"tavern",
        "buttonsshow": [townButton],
        "buttonshide": [dungeonButton, kingButton, tavernButton, forestButton, fortuneTellerButton, choiceButton1, choiceButton2, storeButton],
        text: "You enter the tavern. It is lively!",
        image: "https://imgs.search.brave.com/kdHkhyBRF1wi8XcX5TDM29zVuaGOlINEgqO6YA3pDZI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM4/NTQ0NjE3My9waG90/by9tZWRpZXZhbC10/YXZlcm4tYmFyLWlu/dGVyaW9yLWxpdC1i/eS1jYW5kbGVzLWFu/ZC1kYXlsaWdodC10/aHJvdWdoLXdpbmRv/d3MtM2QtcmVuZGVy/aW5nLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1FSXNiVG5J/UlozX01JYVlwSWJI/Z1FzMXQ0MFY0dkNw/ODZNRDZkSm42NVZn/PQ"
    },
    {
        name:"fortune",
        "buttonsshow": [townButton],
        "buttonshide": [dungeonButton, kingButton, tavernButton, forestButton, fortuneTellerButton, choiceButton1, choiceButton2, storeButton],
        text: "You enter a mysterious tent. A hooded figure beckons you inside.",
        image: "https://imgs.search.brave.com/hy1rIHR2F0390HpGl3mo7IsOOu0PQ_3vOeitaVYpkbY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/b3J0dW5lLXRlbGxl/ci13aXRoLWNyeXN0/YWwtYmFsbC1jbG9z/ZS11cC1haS1nZW5l/cmF0aXZlXzEyMzgy/Ny0yNDkwNi5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQwJnE9/ODA"
    },
    {
        name:"forest",
        "buttonsshow": [townButton],
        "buttonshide": [dungeonButton, kingButton, tavernButton, forestButton, fortuneTellerButton, choiceButton1, choiceButton2, storeButton],
        text: "You walk into the forest. You hear rustling in the bushes.",
        image: "https://imgs.search.brave.com/ZJQucP_4UJFC1ijzwY7B4gru7Ohf3QfBAT4FEDB8pCk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by90cmVlcy1ncm93/aW5nLWZvcmVzdF8x/MDQ4OTQ0LTQyMjU3/NTMuanBnP3NlbXQ9/YWlzX2luY29taW5n/Jnc9NzQwJnE9ODA"
    },
    {
        name:"store",
        "buttonsshow": [townButton, choiceButton1, choiceButton2],
        "buttonshide": [dungeonButton, kingButton, tavernButton, forestButton, fortuneTellerButton, storeButton],
        text: "You enter the store. The bell chimes as you step inside.",
        image: "https://imgs.search.brave.com/Lak844cbH3T4UuMzhU1R3qVsll-XDi3-wO_BlHXKOa8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM4L2Fh/LzljLzM4YWE5Yzg5/MDc2Y2NhNzIyYjdk/MGI1MWNiMTJjNzdj/LmpwZw"
    },
    {
        name:"potions",
        "buttonsshow": [storeButton, choiceButton1, choiceButton2],
        "buttonshide": [dungeonButton, kingButton, tavernButton, forestButton, fortuneTellerButton, townButton],
        text: "What kind of potions would you like to buy?",
        image: "https://imgs.search.brave.com/4h59620CLTzarVV15fke7wPMLEfcBK9iHpWC03QN7xk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/bGV0cy1zaGFyZS1y/ZWNpcGVzLWZvci11/c2VmdWwtcG90aW9u/cy1hbmQtcG9pc29u/cy12MC03eTR4cnNm/eGR2d2ExLmpwZz9h/dXRvPXdlYnAmcz0w/ZDIzMGJmMjdlOThh/MDA3ODZjMDAyMTNh/YWExNzQyYWE2OTRk/NWZh"
    },
    {
        name:"weapons",
        "buttonsshow": [storeButton, choiceButton1, choiceButton2],
        "buttonshide": [dungeonButton, kingButton, tavernButton, forestButton, fortuneTellerButton, townButton],
        text: "What kind of weapons would you like to buy?",
        image: "https://imgs.search.brave.com/sbgYn2-YEUQhvCu98A791cyTbJqoODR7ifdIeiRXEZc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9tYWxs/ZXQtb3RoZXItbWVk/aWV2YWwtd2VhcG9u/cy1yZWVuYWN0bWVu/dC1taWRkbGUtYWdl/cy00NTU1OTk2Ni5q/cGc"
    }
] 

function update(location){
    if (location.text) 
        text.innerHTML = location.text;
    if (location.image && image)
        image.src = location.image;

    if (Array.isArray(location.buttonshide)){
        for (const btn of location.buttonshide){
            if (btn && btn.style)
                btn.style.display = "none";
        }
    }

    if (Array.isArray(location.buttonsshow)){
        for (const btn of location.buttonsshow){
            if (btn && btn.style)
                btn.style.display = "inline-block";
        }
    }
}


dungeonButton.onclick=goToDungeon;
townButton.onclick=goToTown;
kingButton.onclick=goToKing;
tavernButton.onclick=goToTavern;
fortuneTellerButton.onclick=goToFortuneTeller;
forestButton.onclick=goToForest;
storeButton.onclick=goToStore;

function goToTown(){
    update(locations[0])
}

function goToDungeon(){
    update(locations[1])
}

function goToKing(){
    update(locations[2])
}

function goToTavern(){
    update(locations[3])
}

function goToFortuneTeller(){
    update(locations[4])
}

function goToForest(){
    update(locations[5])
}

function goToStore(){
    update(locations[6])
    choiceButton1.onclick=goToPotions
    choiceButton2.onclick=goToWeapons
    choiceButton1.innerHTML="Potions"
    choiceButton2.innerHTML="Weapons"
}

function goToPotions(){
    update(locations[7])
}

function goToWeapons(){
    update(locations[8])
}