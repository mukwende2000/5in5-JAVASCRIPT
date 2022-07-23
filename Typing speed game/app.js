const hardWordsToType = document.querySelector('.hard-words-to-type');
const easyInput = document.querySelector('#easyInput');

const wordsArray = ['this', 'is', 'the', 'game', 'we', 'am', 'working', 'on', 'teach', 
'myself', 'how','code', 'and', 'program', 'in', 'HTML', 'CSS', 'javascript', 'programming',
'general','improve', 'skills', 'pray', 'get', 'better', 'everyday', 'ruby', 'requests','loved',
'typing', 'master','quick', 'fast', 'behaviour', 'touch', 'github', 'version','control','awesome', 'fourty'];

easyInput.focus();

//Generate random words for the user to type
for (i = 0; i < 200; i++) {
    const span = document.createElement('span');
    const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    span.textContent = `${randomWord} `;
    hardWordsToType.appendChild(span);
}


let test = 290;
let gameState = setInterval(() => {
    test -= 5;
    hardWordsToType.style.marginTop = `${test}px`;
    if(test === -30) {
        displayResults()
    }
}, 1000);

// Check correcly typed letter
window.addEventListener('keypress', checkInput);

let currentChar = 0;
let remainingWords = hardWordsToType.textContent.length;
let wronglyTypedWords = 0;
let correctlyTypedWords = 0;
let attemptedWords = 0;


function checkInput(e) {
        if (e.key === 'Enter') {
           if (easyInput.value.trim() === hardWordsToType.children[currentChar].textContent.trim()) {
                hardWordsToType.children[currentChar].style.color = 'greenyellow';
                remainingWords -= hardWordsToType.children[currentChar].textContent.trim().length;
                currentChar++
                correctlyTypedWords++
                attemptedWords++

                easyInput.value = '';
            } else {
                hardWordsToType.children[currentChar].style.color = 'red';
                remainingWords -= hardWordsToType.children[currentChar].textContent.trim().length;
                currentChar++;
                wronglyTypedWords++;
                attemptedWords++
                easyInput.value = '';
                }   
            if (easyInput.value.trim() === hardWordsToType.children[currentChar].textContent.trim()) {
                const span = document.createElement('span');
                span.textContent = easyWordsToType.children[currentChar].textContent;
                const easyoutput = document.querySelector('.output');
                easyInput.appendChild(span) 
            }
        }
}    

// Check game state
function displayResults () {
    clearInterval(gameState);
    hardWordsToType.style.display = 'none';
    const results = document.createElement('div');
    results.className = 'results';
     results.innerHTML = `<span>Game over here are your results</span> <br>
                          <span>Attempted Words: ${attemptedWords}</span> <br>
                          <span>Correctly Typed Words: ${correctlyTypedWords}</span> <br>
                          <span>Wrongly Typed Words: ${wronglyTypedWords}</span>`

    const hardContainer = document.querySelector('.hard-container');
    hardContainer.appendChild(results);
    console.log(results.children)
}

