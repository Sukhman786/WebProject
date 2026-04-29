// GAME 1----------------------------------------------------------------
let container = document.querySelector(".game1-container");
let optionBox = container.querySelector(".option-box");
let playerChoicesBox = container.querySelector(".player-choices");
let options = optionBox.querySelectorAll(".option div");
let player = playerChoicesBox.querySelector(".player-choice img");
let computer = playerChoicesBox.querySelector(".computer-choice img");
let resultBox = container.querySelector(".result-box");
let resultTxt =  resultBox.querySelector("h3");
let playAgainBtn = resultBox.querySelector("button");
let wonTxtValue = document.querySelector(".score-box .won h3 span");
let lostTxtValue = document.querySelector(".score-box .lost h3 span");
let drawTxtValue = document.querySelector(".score-box .draw h3 span");


let won = 0,lost = 0,draw = 0;

let computerChoices = ["Rock","Paper","Scissors"];

let outcomes = {
    RockRock: "Draw",
    RockPaper: "Computer",
    RockScissors: "You",
    PaperPaper: "Draw",
    PaperRock: "You",
    PaperScissors: "Computer",
    ScissorsScissors: "Draw",
    ScissorsRock: "Computer",
    ScissorsPaper: "You"
}

//Event Listener to option box
for(let i=0; i<options.length; i++){
    options[i].addEventListener("click", (e) => {

        player.src = "./RoPaSci_Images/Rock.png";
        computer.src = "./RoPaSci_Images/Rock.png";

        optionBox.style.display = "none";
        playerChoicesBox.style.display = "block";

        setTimeout(() => {
            playerChoicesBox.classList.add("active");
        },1000)

        setTimeout(() => {
            let playerChoices = playerChoicesBox.querySelectorAll("div");
            for(let i=0; i<playerChoices.length; i++){
                playerChoices[i].style.animationPlayState = "paused";
            }

            player.src = e.target.src;

            let randomChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)]
            computer.src = `./RoPaSci_Images/${randomChoice}.png`;

            let userChoice = e.target.parentElement.className;
            let outcomeValue = outcomes[userChoice + randomChoice]

            showResult(outcomeValue);

        },3000)
    })
}

// RESULT SHOWING (GAME 1)------------------------------------------------------------
let showResult = (result) =>{

    const lossSound = document.getElementById("mario");
    const winSound = document.getElementById("win");
    const drawSound = document.getElementById("shit");
    container.style.height = "475px";
    resultBox.style.display = "block";

    if(result === "You"){
        resultTxt.innerHTML = "Congrats, You Won! &#x1F389;";

        winSound.currentTime = 0;
        winSound.play();

        won++;
        wonTxtValue.innerHTML = won;
    }

    else if(result === "Computer"){
        resultTxt.innerHTML = "Ahh, You Lost! Baby";

        lossSound.currentTime = 0; 
        lossSound.play();

        lost++;
        lostTxtValue.innerHTML = lost;

    }

    else{
        resultTxt.innerHTML = "Shit, Match Draw!";

        drawSound.currentTime = 0;
        drawSound.play();

        draw++;
        drawTxtValue.innerHTML = draw;
    }
}

// PLAY AGAIN BUTTTON (GAME 1)
playAgainBtn.addEventListener("click",() => {
    playerChoicesBox.classList.remove("active");
    container.style.height = "400px";
    resultBox.style.display = "none";
    optionBox.style.display = "block";
    playerChoicesBox.style.display = "none";

    let playerChoices = playerChoicesBox.querySelectorAll("div");
    for(let i=0; i<playerChoices.length; i++){
        playerChoices[i].style.animationPlayState = "running";
    }
})


// GAME 2 SECTION---------------------------------------------------------------------
const game2 = document.querySelector(".game2");
const game2Container = document.querySelector(".game2-container");
const btnCheck = document.querySelector(".btn-check");
const btnAgain = document.querySelector(".btn-again");
const hideNum = document.querySelector(".hide-num");
const highScore = document.querySelector(".high-score");
const mSG = document.querySelector(".msg");
const inputNum = document.querySelector(".input-num");
const score = document.querySelector(".score");
const numContent = document.querySelector(".num-content");
const paraJi = document.querySelector(".paraji");

let secretNum = Math.trunc(Math.random()*100+1);

console.log(secretNum);

let scoreji = 20;
let highScoreji = 0;

btnCheck.addEventListener("click", () => {

    event.preventDefault();
    
    const guess = Number(inputNum.value);

    if(!guess){
        mSG.textContent = "Please Enter the Number ....";
    }

    else if(guess === secretNum){
        const winSound = document.getElementById("dora");
        
        winSound.currentTime = 0;
        winSound.play();

        hideNum.textContent = secretNum;
        hideNum.style.width = "50%";
        game2Container.style.backgroundColor = "black";
        game2.style.backgroundColor = "#fff000";
        game2.style.color = "white";
        btnAgain.style.backgroundColor = "#fff000";
        btnCheck.style.backgroundColor = "#fff000";
        hideNum.style.backgroundColor = "#fff000";
        btnAgain.style.color = "black";
        btnCheck.style.color = "black";
        hideNum.style.color = "black";
        numContent.style.color = "white";
        inputNum.style.color = "black";
        paraJi.style.color = "#fff000";
        score.style.color = "#fff000";
        highScore.style.color = "#fff000";

        mSG.textContent = "Congo, You've Won the Game";

        if(scoreji > highScoreji){
            highScoreji = scoreji;
            highScore.textContent = highScoreji;
        }
    }
    else{
        if(scoreji > 1){
            scoreji--;
            score.textContent = scoreji;

            mSG.textContent = guess > secretNum ? "Too High" : "Too Low";
        }
        else{
            mSG.textContent = "You've lost the Game";
            score.textContent = 0;
        }
    }
});

// PLAY AGAIN BUTTON (GAME 2)
btnAgain.addEventListener("click", () => {
    scoreji = 20;
    secretNum = Math.trunc(Math.random()*100+1);
    score.textContent = scoreji;
    hideNum.textContent = "?";
    hideNum.style.width = "25%";
    hideNum.style.transition = "all 0.5s ease-in";
    game2Container.style.backgroundColor = "#fff000";
    game2.style.backgroundColor = "black";
    game2.style.color = "black";
    btnAgain.style.backgroundColor = "black";
    btnCheck.style.backgroundColor = "black";
    hideNum.style.backgroundColor = "black";
    btnAgain.style.color = "white";
    btnCheck.style.color = "white";
    hideNum.style.color = "white";
    numContent.style.color = "black";
    inputNum.style.color = "black";
    paraJi.style.color = "white";
    score.style.color = "white";
    highScore.style.color = "white";
    mSG.textContent = "Start Guessing.......";
    inputNum.value = "";
})



// GAME 3 SECTION--------------------------------------------------------------------

let cardsArray = ["clubs_A","clubs_J","clubs_K","clubs_Q","clubs_A","clubs_J","clubs_K","clubs_Q","hearts_A","hearts_J","hearts_K","hearts_Q","hearts_A","hearts_J","hearts_K","hearts_Q"];
let scoreUpdator = 20;

//shuffle cards functin
function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(cardsArray);

let allCards = document.querySelectorAll(".cardji");

allCards.forEach((card, index) => {
    card.setAttribute("data-name", cardsArray[index]);
});

let firstCard = null;
let secondCard = null;
let lockBoard = false;

function clickingFun(card){

    if(lockBoard) return;

    if(card === firstCard) return;

    let cardName = card.getAttribute("data-name");

    card.classList.remove('back');
    card.classList.add('face');
    card.style.backgroundImage = `url(./playing-cards-master/${cardName}.png)`;

    if(!firstCard){
        firstCard = card;
    }
    
    else{
        secondCard = card;
        lockBoard = true;

        checkMatch();
    }
}

function checkMatch(){
    let cardScore = document.querySelector(".card-score");
    let firstName = firstCard.getAttribute("data-name");
    let secondName = secondCard.getAttribute("data-name");

    if(firstName === secondName){
        firstCard = null;
        secondCard = null;
        lockBoard = false;

        scoreUpdator+=5;
        cardScore.textContent = scoreUpdator;

        const winSoundji = document.getElementById("win");
        
        winSoundji.currentTime = 0;
        winSoundji.play();
    }
    
    else{
        setTimeout(() => {
            firstCard.classList.add('back');
            secondCard.classList.add('back');

            firstCard.classList.remove('face');
            secondCard.classList.remove('face');

            firstCard.style.backgroundImage = "";
            secondCard.style.backgroundImage = "";

            firstCard = null;
            secondCard = null;
            lockBoard = false;

            scoreUpdator-=2;
            cardScore.textContent = scoreUpdator;
        }, 1000);
    }
}

// RESET GAME 3--------------------------------------------------------------------------
function resetGame3(){
    let cardScore = document.querySelector(".card-score");
    scoreUpdator = 20;
    cardScore.textContent = scoreUpdator;

    firstCard = null;
    secondCard = null;
    lockBoard = false;
   
    shuffle(cardsArray);

    let allCards = document.querySelectorAll(".cardji");

    allCards.forEach((card, index) => {
        card.classList.remove('face');
        card.classList.add('back');
        card.style.backgroundImage = "";

        card.setAttribute("data-name", cardsArray[index]);
    });
}

// CONTACT SECTION (SUBMIT BUTTON)----------------------------------------------------------
document.querySelector('.form-contact').addEventListener('submit', function(event) {
    event.preventDefault();

    const nameji = document.querySelectorAll('.input-form')[0].value.trim();
    const btn = document.querySelector('.input-btn');
    const responseText = document.querySelector('#response-text');

    btn.style.display = "none";

    responseText.innerHTML = `Thank you, <span class="hidMsgSpan">${nameji}</span>! We will <span class="hidMsgSpan">contact you</span> soon.`;
    responseText.style.display = "block";

    this.reset();
});

// Mobile Navbar Toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Changes icon to an 'X'
    navbar.classList.toggle('active'); // Shows/hides the menu
};

// Close menu when clicking a link
window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};