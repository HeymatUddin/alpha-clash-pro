function play(){
    hide('first');
    show('second');
    run();
}

function hide(first){
    const firstPage = document.getElementById(first);firstPage.classList.add('hidden');
}
function show(second){
    const secondPage = document.getElementById(second);
    secondPage.classList.remove('hidden');
}

function run(){
    const alphabet = getLetter();
    displayLetter(alphabet);
    markOnKeyboard(alphabet, 'bg-orange-400');
    document.addEventListener('keyup', keyPress);
}

function keyPress(event){
    const pressed = event.key;
    // document.getElementById(pressed).classList.add('rounded-none');

    const displayed =document.getElementById('letter-on-display').innerText.toLowerCase();
    if (pressed === displayed){
        // console.log(typeof(pressed), pressed, displayed)
        increaseScore();
        // document.getElementById(pressed).classList.remove('bg-orange-400');
        document.getElementById(pressed).classList.remove('bg-orange-400');
        run();
        
    }
    else{
        document.getElementById(document.getElementById('letter-on-display').innerText.toLowerCase()).classList.remove('bg-orange-400');
        decreaseLife();
        run();
    }
}
 
function getLetter(){
    // ABCDEFGHIJKLMNOPQRSTUVWXYZ
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('');
    const rand = Math.round(Math.random()*25);
    return alphabets[rand];
}


function displayLetter(alphabet){
    const letterOnDisplay = document.getElementById('letter-on-display').innerText=alphabet;

   
}
function markOnKeyboard(alphabet, color){
    // console.log(alphabet,color);
     document.getElementById(alphabet).classList.add(color);
}
function increaseScore(){
    let score =parseInt(document.getElementById('score-increase').innerText);
    score++;
    document.getElementById('score-increase').innerText=score;
}

function decreaseLife(){
    let lifee =parseInt(document.getElementById('life').innerText);
    // console.log('life gone', lifee)
    lifee--;
    // console.log('life gone', lifee)
    document.getElementById('life').innerText=lifee;
    if(lifee === 0){
        document.getElementById('final-score').innerText = document.getElementById('score-increase').innerText;
        document.getElementById('score-increase').innerText='0';
        document.getElementById('life').innerText = '5';
        hide('second');

        show('third');
    }
}

function playAgain(){
    hide('third');
    show('second');
}