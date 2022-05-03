const text = document.querySelector('#text_Here');
let num = 500;
let breakpoint = 1000;
let speed = 10;
function increment(){
    text.innerHTML = num;
    if(num > breakpoint){
        clearInterval(increase);
        increase = setInterval(increment, speed+=100);
        breakpoint += 500;
    }
    num+=(30 + speed/10);
}

let increase = setInterval(increment, speed);

setTimeout(() =>{
    clearInterval(increase);
}, 3000);