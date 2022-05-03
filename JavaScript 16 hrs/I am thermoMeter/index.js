const cBToast = document.querySelector('#toast');
const cookStatus = document.querySelector('#cookStaus');
const cBToastChanger = () => {
    if(cBToast.checked){
        cBToast.checked = true;
    }    
    if(!cBToast.checked){
        cBToast.checked = true;
    }
}


const tempLoad = () => {
    let temp = document.getElementById('temp');
    cBToast.checked = true;
    temp.style.color = "#fff";
    temp.innerHTML = "&#xf2cb";
    cookStatus.innerHTML = "Cooking";
    
    setTimeout(()=>{
        temp.innerHTML= "&#xf2ca";
        
    }, 1500);
    setTimeout(()=>{
        temp.innerHTML= "&#xf2c9";
    }, 3000);
    setTimeout(()=>{
        temp.innerHTML= "&#xf2c8";
    }, 4500);
    
    setTimeout(()=>{
        cBToast.checked = false;
        cookStatus.innerHTML = "Serve";
        temp.innerHTML= "&#xf2c7";
        temp.style.color= "#d63031";
    }, 6000);
}

tempLoad();
setInterval(tempLoad, 9000);


document.addEventListener('load', cBToastChanger());
