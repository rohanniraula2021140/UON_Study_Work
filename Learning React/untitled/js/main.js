const container = document.querySelector('#container');
const request= new XMLHttpRequest();
request.open('GET',"https://restcountries.com/v2/name/nepal");
request.send();

// To get the response
request.addEventListener('load', function () {
  // const data = this.responseText;
  const [data] = JSON.parse(this.responseText);
  const htmlData = `<div className="card" style="width: 18rem;">
  <img className="card-img-top" src="" alt="Card image cap">
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>`;


})
