const container = document.querySelector('#container1');

const request = new XMLHttpRequest();
request.open('GET', "https://restcountries.com/v2/name/nepal");
request.send();

// to get the reponse
request.addEventListener('load', function(){
    const[data] = JSON.parse(this.responseText);
    console.log("rohan");
    const htmlData = `
    <div class="container">
    <div class="card">
      <div class="imgBx">
        <img src="${data.flag}" width="250px" height="200px"  id="flag">
      </div>
      <div class="contentBx">
        <h2 id="countryName">${data.name}</h2>
        <div class="size">
          <h3>Population : ${data.population}</h3>
          
          
        </div>
        <div class="color">
          <h3>Capital : ${data.capital}</h3>
          
        </div>
        <a href="https://en.wikipedia.org/wiki/Nepal" target="_blank">Learn More</a>
      </div>
    </div>
  </div>
    `;
    container.insertAdjacentHTML("afterbegin", htmlData);
    
});