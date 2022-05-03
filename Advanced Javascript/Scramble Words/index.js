const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWords = "";
let randwords = "";

let sWords = ['C','Java','Python','C++','C#','Visual Basic','JavaScript','PHP','SQL','Assembly language','R','Groovy'];

const createNewWords =  () => {
    let ranNum = Math.floor(Math.random() * sWords.length);
    let newTempSwords = sWords[ranNum];
    return newTempSwords;
}

const scrambleWords = (arr) => {
     for (let i = arr.length; i >0; i--) {
        let temp = arr[i];
        let j = Math.floor(Math.random() * (i+1));
        arr[i] = arr[j];
        arr[j] = temp;
     }
     return arr;
}

btn.addEventListener('click', function(){
    if(!play){
        play = true;
        btn.innerHTML = 'Guess';
        guess.classList.toggle('hidden');
        newWords = createNewWords();
        randwords = scrambleWords(newWords.split("")).join("");
        // console.log(randwords.join(""));
        msg.innerHTML = `Guess the word: ${randwords}`;
    }else{
        let tempWord = guess.value;
        if(newWords === tempWord){
            play  = false;
            msg.innerHTML  = `Awesome It's correct. It is ${newWords}`;
            btn.innerHTML = "Start Again";
            guess.classList.toggle('hidden');
            guess.value = "";   
        }else{
            msg.innerHTML = `Sorry Boss. It's Incorrect. Plz try again ${randwords}`;
        }
    }
})