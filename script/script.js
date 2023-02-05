let score = 0;
let currentScore = document.getElementById("current-score");
let time = 120;
let timer = document.getElementById("time");
let LP = 3;
let currentLP = document.getElementById("current-LP");
let input =document.getElementById("input");
input.disabled = true;

let words = ["me", "you", "we", "they", "he", "she", "it", "apple", "banana", "orange", "monkey", "tiger", "dog", "human", "lion"];
let randomWord = words[Math.floor(Math.random() * words.length)];
let word = document.getElementById("word");
word.innerHTML =  randomWord;
console.log(randomWord);


let pow = document.getElementById("power-btn");
pow.addEventListener('click', start);


let arr =[];
let gameplay = document.addEventListener('keydown', function(k){
    let key = k.code;
    let temp_arr = [];
    if((key == "Backspace") && (key != "undefined")){
        arr.pop();
    }else if((key == "Space") && key != ("undefined")){
        cal();
    }else if(key != "undefined"){
        temp_arr = key.split("Key");
        temp_arr.shift();
        let wordInput = temp_arr.map(ele => ele.toLocaleLowerCase());
        arr.push(wordInput[0]);
        console.log(arr);
    }
})
function cal(){
    let fullWord = arr.join('');
    console.log(fullWord);
    if(fullWord == randomWord){
        score++;
        input.value = "";
        arr = [];
        currentScore.innerHTML = score;
        randomWord = words[Math.floor(Math.random() * words.length)];
        word.innerHTML = randomWord;
    }
    else{
        LP--;
        input.value = "";
        arr = [];
        currentLP.innerHTML = LP;
        randomWord = words[Math.floor(Math.random() * words.length)];
        word.innerHTML = randomWord;
    }
}

function start(){
    input.value = "";
    arr = [];
    score = 0;
    currentScore.innerHTML = "0";
    time = 120;
    LP = 3;
    currentLP.innerHTML = "3"
    input.disabled = false;
    let countdown = setInterval(function(){
        if((time <= 0) || LP == 0){
            clearInterval(countdown);
            end();
        }
        timer.innerHTML = time + "s";
        time--;
    }, 1000)
}
function end(){
    input.disabled = true;
}