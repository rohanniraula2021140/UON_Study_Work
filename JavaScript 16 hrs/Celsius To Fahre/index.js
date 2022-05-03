const CELSIUS = 0;
const FAHRENHEIT = 1;

const SLIDER_SLIDING = 1;
const SLIDER_REST_AFTER_SLIDING = 0;

let cel_value;
let fahr_value;

const USER_RESULT_LOOKING = 1;
const USER_RESULT_NOT_LOOKING = 0;
let user_result_watch_status;

const cel_text = document.querySelector("#cel");
const fahr_text = document.querySelector("#fahr");

let tempSelection = CELSIUS;

const tempSelected = (num) => {
  if (num == CELSIUS) {
    tempSelection = CELSIUS;

    // rangeSlide(0, SLIDER_SLIDING);
    user_result_watch_status = USER_RESULT_LOOKING;
  } else if (num == FAHRENHEIT) {
    user_result_watch_status = USER_RESULT_LOOKING;
    tempSelection = FAHRENHEIT;
    rangeSlide(0, SLIDER_SLIDING);
  }
};

tempSelected(0);

function rangeSlide(value, slider_status) {
  if (slider_status == SLIDER_REST_AFTER_SLIDING) {
    user_result_watch_status = USER_RESULT_NOT_LOOKING;
  }
  if (
    tempSelection == CELSIUS &&
    user_result_watch_status == USER_RESULT_NOT_LOOKING
  ) {
    cel_text.innerHTML = `${value}°C`;

    cel_value = value;
    if (slider_status == SLIDER_REST_AFTER_SLIDING) {
      fahr_value = converter(CELSIUS, cel_value);

      fahr_text.innerHTML = `${fahr_value}°F`;
    }
  } else if (
    tempSelection == FAHRENHEIT &&
    user_result_watch_status == USER_RESULT_NOT_LOOKING
  ) {
    fahr_text.innerHTML = `${value}°F`;
    fahr_value = value;

    if (slider_status == SLIDER_REST_AFTER_SLIDING) {
      cel_value = converter(FAHRENHEIT, fahr_value);
      cel_text.innerHTML = `${cel_value}°C`;
      
    }
  }
}

function converter(currenttype, value) {
  if (currenttype == CELSIUS) {
    return (value * (9 / 5) + 32).toFixed(2);
  } else if (currenttype == FAHRENHEIT) {
    return ((value - 32) * (5 / 9)).toFixed(2);
  }
}
