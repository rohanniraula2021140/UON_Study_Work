const setOfWords = ['I looked for Mary and Samantha at the bus station, but they arrived at the station before noon and left on the bus before I arrived.',
'Mary and Samantha arrived at the bus station before noon, and they left on the bus before I arrived.',
'Mary and Samantha left on the bus before I arrived, so I did not see them at the bus station.',
'Perhaps some students are told not to begin a sentence with "because" to avoid sentence fragments (something like "Because Mary and Samantha arrived at the bus station before noon" is a'];

const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime, endTime;

const playGames = () => {
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber]; 
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
};

const wordCounter = (str) => {
    let response = str.split(" ").length;
    return response;
  };

const compareWords = (str1, str2) => {
    let word1 = str1.split(" ");
    let word2 = str2.split(" ");
    let cnt = 0;

    word1.forEach(function (item, index){
        if(item == word2[index]) {
            cnt++;
        }
    });

    let errorWords = (word1.length - cnt);
    return (cnt + " correct out of " + word1.length + " words and the total number of error are " + errorWords + ".");

  };

const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);
    
    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);
    wordCount -= 1;

    let speed = Math.round((wordCount / totalTime) *60);

    console.log(`Total Time : ${totalTime} and wordCount : ${wordCount} `);
    let finalMsg = "You typed at " + speed + " words per minutes ";
    
    finalMsg += compareWords(msg.innerText, totalStr);
    msg.innerText = finalMsg;

    

  };



btn.addEventListener('click', function(){
    console.log(this);
    if(this.innerText == 'Start'){
        typeWords.disabled = false;
        playGames();        
    }else if(this.innerText== 'Done'){
        typeWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
});




