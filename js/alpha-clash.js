// function play(){
//     //step-1:hide the home screen .to hide the screen add the class hidden to the home section.
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');//homeScreen ar class list a hidden atrribute add hoe geche.tai add button a click korai home-screen  ar part hide hoe jabe;
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
//     // console.log(homeScreen.classList())
//     //show the playground
// }
                                              
function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log( 'player Pressed', playerPressed);

    //stop the game if pressed'Esc'
    if(playerPressed == 'Escape'){
        gameOver();
    }

    //get the expect the press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    //check matched or not
    if(playerPressed == expectedAlphabet){
        console.log('you got a point');
        console.log('you have pressed currectly', expectedAlphabet);
        //update score:
        //1.get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseFloat(currentScoreText);
        console.log(currentScoreText);
        //2.increase the score by 1
        const newScore = currentScore + 1;
        //3.show the updated score 
        currentScoreElement.innerText = newScore;


        //start a new round

        removeBackgroundColorById(expectedAlphabet);
        continueGame();

    }
    else{
        console.log('you missed. you lost  a life');
        //step-1:get the current life number
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseFloat(currentLifeText);
        //step-2:reduce the life count
        const newLife = currentLife - 1;
        //step-3:display the update life count
        currentLifeElement.innerText = newLife;

        if(newLife==0){
           gameOver();
        }

    }
}
//capture keyboard key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent )//amra chaile keyup ar por handleKeyboardButtonPress() function ta ke dhikie dite partam ta na kore addEventListener ar vitor call kore diechi.atake bola hoi callback function.

function continueGame(){
    //step1:generate a random alphabet
    const alphabet = getARandomAlphabet();

    //set randomly  generate alphabet to the screen(show it)
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);

}


function play(){
   //hide everything show the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    //rest score and life
    const setLifeScoreElement =document.getElementById('current-life');
     setLifeScoreElement.innerText=5;
     const setScoreElement = document.getElementById('current-score');
     setScoreElement.innerText = 0;
    
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    //update final score
    //1.get the current score
    const currentScoreElement = document.getElementById('current-score');
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseFloat(currentScoreText);
    const gameScore = document.getElementById('game-score');
    gameScore.innerText =currentScore;

    //clear the last selected alphabet hightlighy
    const currentAlphabet =document.getElementById('current-alphabet');
    const currentAlphabetText = currentAlphabet.innerText;
    removeBackgroundColorById(currentAlphabetText);

}

