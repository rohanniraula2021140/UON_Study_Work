const stars = document.querySelectorAll('.star');
const output = document.querySelector('.output');

for (let x = 0; x < stars.length; x++) {
    stars[x].starValue = (x+1);
    // stars[x].addEventListener('click', function(){
    //     console.log('I am clicked');
    // })
    ["click", "mouseover", "mouseout"].forEach(function(e){
        stars[x].addEventListener(e, showRating);
    })
}

function showRating(e) {
    let type = e.type;
    // console.log(type);
    let starValue = this.starValue;
    // console.log(starvalue);
    if(type === 'click'){
        if(starValue > 0){
            output.innerHTML = `${starValue} star`;
        }
    }
    stars.forEach(function (elem, ind){
        if(type === 'click'){
            if(ind < starValue){
                elem.classList.add("orange");
                console.log('Class List added');
            }else{
                elem.classList.remove("orange");
            }
        }else if(type === 'mouseover'){
            if(ind < starValue){
                elem.classList.add("yellow");
            }else{
                elem.classList.remove("yellow");                
            }
        }else{
            
            elem.classList.remove("yellow");
            
        }
    })

}

function nextPage(){
    window.location.reload();
}