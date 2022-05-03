let bulbState = false; // off
const image = document.querySelector("#imageAtCard");
const text = document.querySelector(".text");
let headingText = document.querySelectorAll(".jt__text");
const bulbIsOff = `<span>Turn On🥺</span>`;
const bulbIsOn = `<span>Thanks🥰</span>`;
const turnOffBtn = `<p>T</p>
<p>u</p>
<p>r</p>
<p>n</p>
<p>O</p>
<p>f</p>
<p>f</p>
<p>!</p>`;
const turnOnBtn = `<p>T</p>
<p>u</p>
<p>r</p>
<p>n</p>
<p>O</p>
<p>n</p>
<p>!</p>`;

changeState = () => {
  if (bulbState == false) {
    headingText.forEach((element) => {
      element.removeChild(element.firstChild);
      element.insertAdjacentHTML("afterbegin", bulbIsOff);
    });

    while (text.hasChildNodes()) {
      text.removeChild(text.firstChild);
    }

    text.insertAdjacentHTML("afterbegin", turnOnBtn);
    image.src = "off.jpg";

    // console.log(headingText[0].insertAdjacentElement("afterbegin", htmlData));

    bulbState = true;
  } else {
    headingText.forEach((element) => {
      element.removeChild(element.firstChild);
      element.insertAdjacentHTML("afterbegin", bulbIsOn);
    });
    while (text.hasChildNodes()) {
        text.removeChild(text.firstChild);
      }
    text.insertAdjacentHTML("afterbegin", turnOffBtn);
    image.src = "on.jpg";
    bulbState = false;
  }
};

changeState();
