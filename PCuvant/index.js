document.querySelector('body').style.height = window.innerHeight + 'px' ;

var finalWord = "";
const h2s = document.querySelector('h2');
var wh1 = document.querySelector(".wordh1");

var lev1 = '{"lets": ["T", "U", "R", "N"], "answers": ["TU", "TUN", "UNT", "TURN"]}';
var lev2 = '{"lets": ["D", "U", "E", "L"], "answers": ["EU", "UD", "LED", "DUEL"]}';
//var lev3 = '{"lets": ["D", "O", "A", "R"], "answers": [ "DAR", "CARO", "DOAR"]}';

var myArray = [lev1, lev2];


function returnJSON(){
    var randomNumber = Math.floor(Math.random()*myArray.length)
    var randomItem = myArray[randomNumber];
    return randomItem;
}

var obj = JSON.parse(returnJSON());


for(let i = 0; i < obj.lets.length; i++){
    var createBtn = document.createElement('button');
    createBtn.classList.add('letterButton');
    document.getElementById('buttonsContainer').appendChild(createBtn);
}

const allButt = document.querySelectorAll(".letterButton");
const duelAnswers = obj.answers; //console.log(duelAnswers); -> array 
let letters = obj.lets;


for(let i = 0; i < duelAnswers.length; i++){   
    var createDiv = document.createElement('div');
    //createSpan.classList.add('underline');

    var secondClass = 'word' + i;
    createDiv.classList.add('word', secondClass);
    document.getElementById('main').appendChild(createDiv);

      for(let j = 0; j < duelAnswers[i].length; j++){
        document.querySelector('.' + secondClass).appendChild(document.createElement('span'));
    }
    
}
//console.log(list);

function getRandomValue() {
    rv = letters[Math.floor(Math.random()*letters.length)];
    for(var i = 0; i < letters.length; i++){
            if (letters[i] == rv) letters.splice(i, 1);
        }
    return rv;
}

allButt.forEach((e) =>{
    rand = getRandomValue()
    e.setAttribute("id", rand);
    e.setAttribute("onclick", 'addletter(' + "'" + rand + "'" + ')');
    e.innerHTML = rand;
})

function addletter(key){
    
    var keyVar = document.getElementById(key);
    if (finalWord.includes(key))  finalWord.replace(key, "");
    finalWord += key; wh1.innerHTML += key;
    keyVar.style.background = "#c4a516";
    keyVar.disabled = true;
}
var count = 0; var checkValues = 0;
document.getElementById("submit").addEventListener("click", function(){

    boolWord = false;
    for (var i = 0; i < duelAnswers.length; i++){
        if (duelAnswers[i] == finalWord) {
            copyI = i;
            boolWord = true;
        }

        allButt[i].disabled = false;
        allButt[i].style.background = "#edc928";
    }

    wh1.innerHTML = "";
    finalWord = "";

    if(boolWord) {
        document.querySelector(".word" + copyI).innerHTML = duelAnswers[copyI];
        h2s.innerHTML = "Cuvânt valid !";
        h2s.style.color = "green"; count++;
        checkValues = 0;
        document.querySelectorAll('span').forEach((e) =>{
            checkValues++; 
        })
        if(count >= 4 && checkValues == 0) {
            setTimeout(() => document.getElementById('danNegro').style.display = 'block', 1000); 
            setTimeout(() => document.querySelectorAll('.dntn').forEach((e) =>{ e.style.display = 'block' }), 2000);
            setTimeout(() => document.querySelector('.mc').style.display = 'block', 3000); 
            setTimeout(() => document.getElementById('danNegroface').style.display = 'block', 4000);
            count = 0; checkValues = 0;

        }
    }
    else {
        h2s.innerHTML = "Cuvânt invalid !";
        h2s.style.color = "red";
    }
    
})
