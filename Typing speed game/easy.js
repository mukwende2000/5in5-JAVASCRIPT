const easyWordsToType = document.querySelector('.easy-words-to-type');
const minutes = document.querySelector('.minutes');
const secs = document.querySelector('.secs');

// Timer to check game state
let secCounter = 60;
let minCounter = 5
let countdownTimer = setInterval(() => {
    secCounter-- 
    secs.textContent = secCounter;
    if(secCounter === 0) {
        if (minCounter === 0) {
            clearInterval(countdownTimer)
            gameOver()
        } else {
            secCounter = 60;   
        }
    }
    
    if (secCounter === 59) {
        minCounter--;
        minutes.textContent = `0${minCounter}`;
    }

    if (secCounter ===60) {
        secs.textContent = '00';
    } else if (secCounter < 10) {
        secs.textContent = `0${secCounter}`;
    }    
}, 1000);



// Generate andom words tp display to the user
const wordsArray = ['this', 'is', 'the', 'game', 'we', 'am', 'working', 'on', 'teach', 
'myself', 'how','code', 'and', 'program', 'in', 'HTML', 'CSS', 'javascript', 'programming',
'general','improve', 'skills', 'pray', 'get', 'better', 'everyday', 'ruby', 'requests','loved',
'typing', 'master','quick', 'fast', 'behaviour', 'touch', 'github', 'version','control','awesome', 'fourty'];



for (i = 0; i < 10; i++) {
    const span = document.createElement('span');
    const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    span.textContent = `${randomWord} `;
    easyWordsToType.appendChild(span);
}

easyInput.focus();

// Variable to track game state and stats
let currentChar = 0;
let remainingWords = easyWordsToType.children.length;
let wronglyTypedWords = 0;
let correctlyTypedWords = 0;
let attemptedWords = 0;

//Check correct and wrong words on type
window.addEventListener('keypress', checkInput)
function checkInput(e) {
        if (e.key === 'Enter') {
            if (easyInput.value.trim() === easyWordsToType.children[currentChar].textContent.trim()) {
                const span = document.createElement('span');
                span.textContent = easyWordsToType.children[currentChar].textContent;
                const easyOutput = document.querySelector('.output');
                easyOutput.appendChild(span) 
                easyInput.value = '';
                currentChar++;
                remainingWords--;
                console.log(remainingWords);
                if (remainingWords === 0) gameOver();
            } else {
                easyWordsToType.children[currentChar].style.color = 'red';
                easyInput.value = '';
            }
        }
}    


// Game over function
function gameOver() {

    clearInterval(countdownTimer);
    easyWordsToType.style.display = 'none';
    const results = document.createElement('div');
    results.className = 'results';
    results.innerHTML = `<span>Game over here are your results</span> <br>
                          <span>Attempted Words: ${attemptedWords}</span> <br>
                          <span>Correctly Typed Words: ${correctlyTypedWords}</span> <br>
                          <span>Wrongly Typed Words: ${wronglyTypedWords}</span>`

    const easy = document.querySelector('.easy');
    easy.appendChild(results);
}
