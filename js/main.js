// buttons
const buttons = document.getElementsByClassName("buttons")

// Interface
const questionField = document.getElementById("correctField");
const img = document.getElementById("image");
const pointsField = document.getElementById("pointsField");
const streakField = document.getElementById("streakField");
const tipfield = document.getElementById("tipfield");
const startInactive = document.getElementById("startInactive");
const next = document.getElementById("next");
const roundfield = document.getElementById("roundfield");

const correctText = document.getElementById("correctText");
const incorrectText = document.getElementById("incorrectText");

const quizSect = document.getElementById("quizSect");
const resultSect = document.getElementById("resultSect");

const rightf = document.getElementById("rightf");
const wrongf = document.getElementById("wrongf");
const streakrec = document.getElementById("streakrec");
const endstreak = document.getElementById("endstreak");

const restart = document.getElementById("restart");

// audios
const snd_5_right = document.getElementById("snd_5_right");
const snd_10_right = document.getElementById("snd_10_right");
const snd_15_right = document.getElementById("snd_15_right");
const snd_all_right = document.getElementById("snd_all_right");

// global keywords
let currentRound = 0;
let points = 0;
let streak = 0;
let highestStreak = 0;
let hasAns = false;
let roundNumber = 0;

let incorrectTally = 0;

// functions 
function randomRoundNumber(){
    let rand = Math.floor(Math.random() * questions.length);
    return rand;
}

function setQuestion(rn){
    if(roundNumber !== 20){
        roundNumber += 1;

        roundfield.innerHTML = roundNumber;
        buttons[0].innerHTML = "reset";
        buttons[1].innerHTML = "reset";
        buttons[2].innerHTML = "reset";
        buttons[3].innerHTML = "reset";

        startInactive.style.display = "none";
        incorrectText.style.display = "none";
        correctText.style.display = "none";


        let randomQuestionStart = Math.floor(Math.random() * buttons.length)
        buttons[randomQuestionStart].innerHTML = questions[rn].correct;

        img.src = questions[rn].image;
        questionField.innerHTML = questions[rn].question;


        let loops = 0;

        for(let i = 0; i < 4; i++){
            if(buttons[i].innerHTML !== questions[rn].correct){
                if(loops === 0){
                    loops += 1;
                    buttons[i].innerHTML = questions[rn].opt1
                } 
                else if(loops === 1){
                    loops += 1; 
                    buttons[i].innerHTML = questions[rn].opt2
                }
                else if (loops === 2){
                    loops += 1;
                    buttons[i].innerHTML = questions[rn].opt3
                }
            }
        }
    } else{
        quizSect.style.display = "none"; // quiz end
        
        rightf.innerHTML = 20 - incorrectTally;
        wrongf.innerHTML = incorrectTally;

        if(streak > highestStreak){
            highestStreak = streak;
        }
        streakrec.innerHTML = highestStreak;
        endstreak.innerHTML = streak;

        resultSect.style.display = "inline";

        if((20-incorrectTally) <= 5){
            snd_5_right.play();
            console.log("less than 5 right")
        } 
        else if((20-incorrectTally) <= 15){
            snd_10_right.play();
            console.log("less than 15 right")
        }
        else if((20-incorrectTally) < 20){
            snd_15_right.play();
            console.log("less than 20 right")
        }
        else if((20-incorrectTally) <= 20){
            snd_all_right.play();
            console.log("nice");
        }
    }
    
}

function newRoundCheck(i){
    startInactive.style.display = "inline";
    hasAns = true;

    if(buttons[i].innerHTML === questions[currentRound].correct){
        console.log("you win!")
        correctText.style.display = "inline";
        
        points += 1;
        streak += 1;
    } else{
        console.log("you lose L bozo")
        
        if(streak > highestStreak){
            highestStreak = streak
        }
        console.log(highestStreak);
        streak = 0;
        incorrectTally += 1;
        incorrectText.style.display = "inline";
    }

    tipfield.innerHTML = questions[currentRound].tip;

    streakField.innerHTML = streak;
    pointsField.innerHTML = points;
}

function nextQuest(){
    let lastRound = currentRound;
    // neste spørsmål
    currentRound = randomRoundNumber();

    while(currentRound === lastRound){ // Stop duplicates 
        currentRound = randomRoundNumber();
    }
    setQuestion(currentRound);
}

// code 

window.onload = function(){ // load the first question
    currentRound = randomRoundNumber();    
    setQuestion(currentRound);
    startInactive.style.display = "none";
}

// click validation

for(let i = 0; i < buttons.length; i++){
    buttons[i].onclick = function(){
        if(hasAns === false){ // check if the player has already answered
            newRoundCheck(i);
        }

    };
}

next.onclick = function(){
    if(hasAns === true){ // Go to the next page if the player has clicked next
        hasAns = false;
        nextQuest();
    }
}

restart.onclick = function() //restart quiz 
{
    location.reload();
}
