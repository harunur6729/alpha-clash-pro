function hideElementById(elementId){
    const home = document.getElementById(elementId);
    home.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}


function getARandomAlphabet(){
    //get or create an alphabet array
    const alphabetString ='abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets)
    //get a random indenx between o-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
   
    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet;
}