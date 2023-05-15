let radiolengths = document.getElementById("lengths");
let radioweights = document.getElementById("weights");
let radiotime = document.getElementById("time");

let unitslengths = document.querySelectorAll(".lengths");
let unitsweights = document.querySelectorAll(".weights");
let unitstime = document.querySelectorAll(".time");

let typerow = document.querySelectorAll(".typerow");
let unitsrow = document.querySelectorAll(".unitsrow");
let tounitsrow = document.querySelectorAll(".tounitsrow");

let units = document.querySelector(".units");
let tounits = document.querySelector(".tounits");

let unitsshort = document.querySelector(".unitsshort");
let tounitsshort = document.querySelector(".tounitsshort");

let radioButton = document.querySelectorAll("input[type=radio]");
let equals = document.querySelector(".equals");

let input = document.getElementById("input");
let result = document.querySelector(".result");
let convert = document.querySelector(".convert");
let swap = document.querySelector(".swap");
let copyPaste = document.querySelector(".copyPaste");

let text = document.querySelector(".text");

//hide radiobuttons
radioButton.forEach(function (each) {
  each.style.display = "none";
});

//choose type of measurements and display units column
typerow.forEach(function (each) {
  each.onclick = function () {
    equals.style.visibility = "hidden";
    swap.style.visibility = "hidden";
    copyPaste.style.visibility = "hidden";

    unitsrow.forEach(function (each) {
      each.lastElementChild.checked = false;
      each.classList.remove("bgcolor");
    });
    tounitsrow.forEach(function (each) {
      each.lastElementChild.checked = false;
      each.classList.remove("bgcolor");
    });

    if (each.lastElementChild.checked) {
      typerow.forEach(function (each2) {
        each2.classList.remove("bgcolor");
      });
      each.classList.add("bgcolor");

      units.classList.remove("hide");
      tounits.classList.remove("hide");
      unitsrow.forEach(function (each2) {
        if (each2.classList.contains(each.firstElementChild.innerText)) {
          each2.classList.remove("hide");
          unitsshort.innerText = "";
          tounitsshort.innerText = "";
          input.value = "";
          result.innerText = "";
          text.innerText = "";
        } else {
          each2.classList.add("hide");
          unitsshort.innerText = "";
          tounitsshort.innerText = "";
          input.value = "";
          result.innerText = "";
          text.innerText = "";
        }
      });
      //display tounits column
      tounitsrow.forEach(function (each3) {
        if (each3.classList.contains(each.firstElementChild.innerText)) {
          each3.classList.remove("hide");
          unitsshort.innerText = "";
          tounitsshort.innerText = "";
          input.value = "";
          result.innerText = "";
          text.innerText = "";
        } else {
          each3.classList.add("hide");
          unitsshort.innerText = "";
          tounitsshort.innerText = "";
          input.value = "";
          result.innerText = "";
          text.innerText = "";
        }
      });
    }
  };
});

// units - display units abbreviations on the right panel
unitsrow.forEach(function (each) {
  each.onclick = function () {
    if (each.lastElementChild.checked) {
      unitsrow.forEach(function (each2) {
        each2.classList.remove("bgcolor");
      });
      each.classList.add("bgcolor");
      unitsshort.innerText = each.lastElementChild.value;
      unitsshort.style.color = "white";
      equals.style.visibility = "hidden";
      swap.style.visibility = "hidden";
      copyPaste.style.visibility = "hidden";
    }
    evaluation();
  };
});

// tounits - display units abbreviations on the right panel
tounitsrow.forEach(function (each) {
  each.onclick = function () {
    if (each.lastElementChild.checked) {
      tounitsrow.forEach(function (each2) {
        each2.classList.remove("bgcolor");
      });
      each.classList.add("bgcolor");
      tounitsshort.innerText = each.lastElementChild.value;
      tounitsshort.style.color = "white";
      equals.style.visibility = "hidden";
      swap.style.visibility = "hidden";
      copyPaste.style.visibility = "hidden";
    }
    evaluation();
  };
});

//eval
// function inputvalue() {
//   return input.value;
// }
function evaluation() {
  //meter

  if (unitsshort.innerText === "m" && tounitsshort.innerText === "m") {
    result.innerText = input.value;
  }
  if (unitsshort.innerText === "m" && tounitsshort.innerText === "km") {
    result.innerText = input.value / 1000;
  }
  if (unitsshort.innerText === "m" && tounitsshort.innerText === "feet") {
    result.innerText = input.value / 3.28084;
  }
  if (unitsshort.innerText === "m" && tounitsshort.innerText === "miles") {
    result.innerText = input.value / 1609.344;
  }
  if (unitsshort.innerText === "m" && tounitsshort.innerText === "yards") {
    result.innerText = input.value * 1.0936;
  }
  if (unitsshort.innerText === "m" && tounitsshort.innerText === "inches") {
    result.innerText = input.value * 39.3700787402;
  }

  //kilometer

  if (unitsshort.innerText === "km" && tounitsshort.innerText === "km") {
    result.innerText = input.value;
  }
  if (unitsshort.innerText === "km" && tounitsshort.innerText === "m") {
    result.innerText = input.value * 1000;
  }
  if (unitsshort.innerText === "km" && tounitsshort.innerText === "feet") {
    result.innerText = input.value * 3280.8398950131;
  }
  if (unitsshort.innerText === "km" && tounitsshort.innerText === "miles") {
    result.innerText = input.value * 0.62137119;
  }
  if (unitsshort.innerText === "km" && tounitsshort.innerText === "yards") {
    result.innerText = input.value / 0.0009144;
  }
  if (unitsshort.innerText === "km" && tounitsshort.innerText === "inches") {
    result.innerText = input.value * 39370.1;
  }

  //foot

  if (unitsshort.innerText === "feet" && tounitsshort.innerText === "feet") {
    result.innerText = input.value;
  }
  if (unitsshort.innerText === "feet" && tounitsshort.innerText === "m") {
    result.innerText = input.value * 0.304;
  }
  if (unitsshort.innerText === "feet" && tounitsshort.innerText === "km") {
    result.innerText = (input.value * 0.304) / 1000;
  }
  if (unitsshort.innerText === "feet" && tounitsshort.innerText === "miles") {
    result.innerText = input.value * 0.0001894;
  }
  if (unitsshort.innerText === "feet" && tounitsshort.innerText === "yards") {
    result.innerText = input.value / 3;
  }
  if (unitsshort.innerText === "feet" && tounitsshort.innerText === "inches") {
    result.innerText = input.value * 12;
  }

  //mile

  if (unitsshort.innerText === "miles" && tounitsshort.innerText === "miles") {
    result.innerText = input.value;
  }
  if (unitsshort.innerText === "miles" && tounitsshort.innerText === "m") {
    result.innerText = input.value * 1609.344;
  }
  if (unitsshort.innerText === "miles" && tounitsshort.innerText === "km") {
    result.innerText = input.value * 1.609344;
  }
  if (unitsshort.innerText === "miles" && tounitsshort.innerText === "feet") {
    result.innerText = input.value * 5280;
  }
  if (unitsshort.innerText === "miles" && tounitsshort.innerText === "yards") {
    result.innerText = input.value * 1760;
  }
  if (unitsshort.innerText === "miles" && tounitsshort.innerText === "inches") {
    result.innerText = input.value * 63360;
  }

  //yard

  if (unitsshort.innerText === "yards" && tounitsshort.innerText === "yards") {
    result.innerText = input.value;
  }
  if (unitsshort.innerText === "yards" && tounitsshort.innerText === "m") {
    result.innerText = input.value * 0.9144;
  }
  if (unitsshort.innerText === "yards" && tounitsshort.innerText === "km") {
    result.innerText = (input.value * 0.9144) / 1000;
  }
  if (unitsshort.innerText === "yards" && tounitsshort.innerText === "feet") {
    result.innerText = input.value * 3;
  }
  if (unitsshort.innerText === "yards" && tounitsshort.innerText === "miles") {
    result.innerText = input.value / 1760;
  }
  if (unitsshort.innerText === "yards" && tounitsshort.innerText === "inches") {
    result.innerText = input.value * 3 * 12;
  }

  //inch

  if (
    unitsshort.innerText === "inches" &&
    tounitsshort.innerText === "inches"
  ) {
    result.innerText = input.value;
  }
  if (unitsshort.innerText === "inches" && tounitsshort.innerText === "m") {
    result.innerText = input.value * 0.0254;
  }
  if (unitsshort.innerText === "inches" && tounitsshort.innerText === "km") {
    result.innerText = (input.value * 0.0254) / 1000;
  }
  if (unitsshort.innerText === "inches" && tounitsshort.innerText === "feet") {
    result.innerText = input.value / 12;
  }
  if (unitsshort.innerText === "inches" && tounitsshort.innerText === "miles") {
    result.innerText = input.value * 0.000015783;
  }
  if (unitsshort.innerText === "inches" && tounitsshort.innerText === "yards") {
    result.innerText = input.value / 36;
  }

  //gram

  if (unitsshort.innerText === "g" && tounitsshort.innerText === "g") {
    result.innerText = input.value;
  }
  if (unitsshort.innerText === "g" && tounitsshort.innerText === "kg") {
    result.innerText = input.value / 1000;
  }
  if (unitsshort.innerText === "g" && tounitsshort.innerText === "tons") {
    result.innerText = input.value / 1000000;
  }
  if (unitsshort.innerText === "g" && tounitsshort.innerText === "pounds") {
    result.innerText = input.value * 0.002205;
  }
  if (unitsshort.innerText === "g" && tounitsshort.innerText === "ounces") {
    result.innerText = input.value * 0.035274;
  }
  if (unitsshort.innerText === "g" && tounitsshort.innerText === "carats") {
    result.innerText = input.value * 5;
  }

  //kilogram

  if (unitsshort.innerText === "kg" && tounitsshort.innerText === "kg") {
    result.innerText = input.value;
  }
  if (unitsshort.innerText === "kg" && tounitsshort.innerText === "g") {
    result.innerText = input.value * 1000;
  }
  if (unitsshort.innerText === "kg" && tounitsshort.innerText === "tons") {
    result.innerText = input.value / 1000;
  }
  if (unitsshort.innerText === "kg" && tounitsshort.innerText === "pounds") {
    result.innerText = input.value * 2.2046244202;
  }
  if (unitsshort.innerText === "kg" && tounitsshort.innerText === "ounces") {
    result.innerText = input.value / 0.0283495231;
  }
  if (unitsshort.innerText === "kg" && tounitsshort.innerText === "carats") {
    result.innerText = input.value * 5000;
  }

  //ton

  if (unitsshort.innerText === "tons" && tounitsshort.innerText === "tons") {
    result.innerText = input.value;
  }
  if (unitsshort.innerText === "tons" && tounitsshort.innerText === "g") {
    result.innerText = input.value * 1000000;
  }
  if (unitsshort.innerText === "tons" && tounitsshort.innerText === "kg") {
    result.innerText = input.value * 1000;
  }
  if (unitsshort.innerText === "tons" && tounitsshort.innerText === "pounds") {
    result.innerText = input.value * 2204.6244202;
  }
  if (unitsshort.innerText === "tons" && tounitsshort.innerText === "ounces") {
    result.innerText = input.value * 35273.96;
  }
  if (unitsshort.innerText === "tons" && tounitsshort.innerText === "carats") {
    result.innerText = input.value * 5000000;
  }

  //pound

  if (
    unitsshort.innerText === "pounds" &&
    tounitsshort.innerText === "pounds"
  ) {
    result.innerText = input.value;
  }
  if (unitsshort.innerText === "pounds" && tounitsshort.innerText === "g") {
    result.innerText = input.value * 453.592;
  }
  if (unitsshort.innerText === "pounds" && tounitsshort.innerText === "kg") {
    result.innerText = (input.value * 453.592) / 1000;
  }
  if (unitsshort.innerText === "pounds" && tounitsshort.innerText === "tons") {
    result.innerText = (input.value * 453.592) / 1000000;
  }
  if (
    unitsshort.innerText === "pounds" &&
    tounitsshort.innerText === "ounces"
  ) {
    result.innerText = input.value * 16;
  }
  if (
    unitsshort.innerText === "pounds" &&
    tounitsshort.innerText === "carats"
  ) {
    result.innerText = input.value * 2267.96185;
  }

  //ounce

  if (
    unitsshort.innerText === "ounces" &&
    tounitsshort.innerText === "ounces"
  ) {
    result.innerText = input.value;
  }
  if (unitsshort.innerText === "ounces" && tounitsshort.innerText === "g") {
    result.innerText = input.value * 28.3495;
  }
  if (unitsshort.innerText === "ounces" && tounitsshort.innerText === "kg") {
    result.innerText = input.value * 0.0283495;
  }
  if (unitsshort.innerText === "ounces" && tounitsshort.innerText === "tons") {
    result.innerText = input.value * 0.0000283495;
  }
  if (
    unitsshort.innerText === "ounces" &&
    tounitsshort.innerText === "pounds"
  ) {
    result.innerText = input.value * 0.0625;
  }
  if (
    unitsshort.innerText === "ounces" &&
    tounitsshort.innerText === "carats"
  ) {
    result.innerText = input.value * 141.7475;
  }

  //carrat

  if (
    unitsshort.innerText === "carats" &&
    tounitsshort.innerText === "carats"
  ) {
    result.innerText = input.value;
  }
  if (unitsshort.innerText === "carats" && tounitsshort.innerText === "g") {
    result.innerText = input.value * 0.2;
  }
  if (unitsshort.innerText === "carats" && tounitsshort.innerText === "kg") {
    result.innerText = input.value * 0.0002;
  }
  if (unitsshort.innerText === "carats" && tounitsshort.innerText === "tons") {
    result.innerText = input.value * 0.0000002;
  }
  if (
    unitsshort.innerText === "carats" &&
    tounitsshort.innerText === "pounds"
  ) {
    result.innerText = input.value * 0.0004409249;
  }
  if (
    unitsshort.innerText === "carats" &&
    tounitsshort.innerText === "ounces"
  ) {
    result.innerText = input.value * 0.0070547981;
  }

  //second

  if (
    unitsshort.innerText === "seconds" &&
    tounitsshort.innerText === "seconds"
  ) {
    result.innerText = input.value;
  }
  if (
    unitsshort.innerText === "seconds" &&
    tounitsshort.innerText === "minutes"
  ) {
    result.innerText = input.value / 60;
  }
  if (
    unitsshort.innerText === "seconds" &&
    tounitsshort.innerText === "hours"
  ) {
    result.innerText = input.value / 3600;
  }
  if (unitsshort.innerText === "seconds" && tounitsshort.innerText === "days") {
    result.innerText = input.value / 3600 / 24;
  }
  if (
    unitsshort.innerText === "seconds" &&
    tounitsshort.innerText === "months"
  ) {
    result.innerText = input.value * 3.802570537e-7;
  }
  if (
    unitsshort.innerText === "seconds" &&
    tounitsshort.innerText === "years"
  ) {
    result.innerText = input.value * 3.168808781e-8;
  }

  //minute

  if (
    unitsshort.innerText === "minutes" &&
    tounitsshort.innerText === "minutes"
  ) {
    result.innerText = input.value;
  }
  if (
    unitsshort.innerText === "minutes" &&
    tounitsshort.innerText === "seconds"
  ) {
    result.innerText = input.value * 60;
  }
  if (
    unitsshort.innerText === "minutes" &&
    tounitsshort.innerText === "hours"
  ) {
    result.innerText = input.value / 60;
  }
  if (unitsshort.innerText === "minutes" && tounitsshort.innerText === "days") {
    result.innerText = input.value * 0.0006944444;
  }
  if (
    unitsshort.innerText === "minutes" &&
    tounitsshort.innerText === "months"
  ) {
    result.innerText = input.value * 0.0000228154;
  }
  if (
    unitsshort.innerText === "minutes" &&
    tounitsshort.innerText === "years"
  ) {
    result.innerText = input.value * 0.0000019013;
  }

  //hour

  if (unitsshort.innerText === "hours" && tounitsshort.innerText === "hours") {
    result.innerText = input.value;
  }
  if (
    unitsshort.innerText === "hours" &&
    tounitsshort.innerText === "seconds"
  ) {
    result.innerText = input.value * 3600;
  }
  if (
    unitsshort.innerText === "hours" &&
    tounitsshort.innerText === "minutes"
  ) {
    result.innerText = input.value * 60;
  }
  if (unitsshort.innerText === "hours" && tounitsshort.innerText === "days") {
    result.innerText = input.value / 24;
  }
  if (unitsshort.innerText === "hours" && tounitsshort.innerText === "months") {
    result.innerText = input.value * 0.0013689254;
  }
  if (unitsshort.innerText === "hours" && tounitsshort.innerText === "years") {
    result.innerText = input.value * 0.0001140771;
  }

  //day

  if (unitsshort.innerText === "days" && tounitsshort.innerText === "days") {
    result.innerText = input.value;
  }
  if (unitsshort.innerText === "days" && tounitsshort.innerText === "seconds") {
    result.innerText = input.value * 60 * 60 * 24;
  }
  if (unitsshort.innerText === "days" && tounitsshort.innerText === "minutes") {
    result.innerText = input.value * 60 * 24;
  }
  if (unitsshort.innerText === "days" && tounitsshort.innerText === "hours") {
    result.innerText = input.value * 24;
  }
  if (unitsshort.innerText === "days" && tounitsshort.innerText === "months") {
    result.innerText = input.value * 0.0328542094;
  }
  if (unitsshort.innerText === "days" && tounitsshort.innerText === "years") {
    result.innerText = input.value * 0.0027378508;
  }

  //month

  if (
    unitsshort.innerText === "months" &&
    tounitsshort.innerText === "months"
  ) {
    result.innerText = input.value;
  }
  if (
    unitsshort.innerText === "months" &&
    tounitsshort.innerText === "seconds"
  ) {
    result.innerText = input.value * 2629800;
  }
  if (
    unitsshort.innerText === "months" &&
    tounitsshort.innerText === "minutes"
  ) {
    result.innerText = input.value * 43830;
  }
  if (unitsshort.innerText === "months" && tounitsshort.innerText === "hours") {
    result.innerText = input.value * 730.5;
  }
  if (unitsshort.innerText === "months" && tounitsshort.innerText === "days") {
    result.innerText = input.value * 30.4375;
  }
  if (unitsshort.innerText === "months" && tounitsshort.innerText === "years") {
    result.innerText = (input.value * 1) / 12;
  }

  //year

  if (unitsshort.innerText === "years" && tounitsshort.innerText === "years") {
    result.innerText = input.value;
  }
  if (
    unitsshort.innerText === "years" &&
    tounitsshort.innerText === "seconds"
  ) {
    result.innerText = input.value * 31557600;
  }
  if (
    unitsshort.innerText === "years" &&
    tounitsshort.innerText === "minutes"
  ) {
    result.innerText = input.value * 525960;
  }
  if (unitsshort.innerText === "years" && tounitsshort.innerText === "hours") {
    result.innerText = input.value * 8766;
  }
  if (unitsshort.innerText === "years" && tounitsshort.innerText === "days") {
    result.innerText = input.value * 365.25;
  }
  if (unitsshort.innerText === "years" && tounitsshort.innerText === "months") {
    result.innerText = input.value * 12;
  }

  //celsius

  if (unitsshort.innerText === "°C" && tounitsshort.innerText === "°C") {
    result.innerText = input.value;
  }
  if (unitsshort.innerText === "°C" && tounitsshort.innerText === "°F") {
    result.innerText = input.value * 1.8 + 32;
  }
  if (unitsshort.innerText === "°C" && tounitsshort.innerText === "K") {
    result.innerText = input.value * 1 + 273.15;
  }
  //fahrenheit

  if (unitsshort.innerText === "°F" && tounitsshort.innerText === "°F") {
    result.innerText = input.value;
  }
  if (unitsshort.innerText === "°F" && tounitsshort.innerText === "°C") {
    result.innerText = (input.value - 32) / 1.8;
  }
  if (unitsshort.innerText === "°F" && tounitsshort.innerText === "K") {
    result.innerText = ((input.value - 32) * 5) / 9 + 273.15;
  }
  //kelvin

  if (unitsshort.innerText === "K" && tounitsshort.innerText === "K") {
    result.innerText = input.value;
  }
  if (unitsshort.innerText === "K" && tounitsshort.innerText === "°C") {
    result.innerText = input.value - 273.15;
  }
  if (unitsshort.innerText === "K" && tounitsshort.innerText === "°F") {
    result.innerText = ((input.value - 273.15) * 9) / 5 + 32;
  }

  //end of evaluation formulas

  //text

  if (isNaN(input.value)) {
    text.innerText = "incorrect value";
    result.innerText = "";
    text.style.color = "red";
  } else if (input.value === "") {
    text.innerText = "";
    result.innerText = "";
  } else if (
    units.querySelector(".bgcolor") === null ||
    tounits.querySelector(".bgcolor") === null
  ) {
    text.innerText = "";
  } else {
    text.innerText = `${input.value} ${unitsshort.innerText} = ${result.textContent} ${tounitsshort.innerText}`;
    text.style.color = "black";
  }

  if (
    units.querySelector(".bgcolor") !== null &&
    tounits.querySelector(".bgcolor") !== null &&
    input.value !== "" &&
    isNaN(input.value) === false
  ) {
    unitsshort.style.color = "black";
    tounitsshort.style.color = "black";
    equals.style.visibility = "visible";
    swap.style.visibility = "visible";
    copyPaste.style.visibility = "visible";
  } else if (input.value === "" || isNaN(input.value) === true) {
    unitsshort.style.color = "white";
    tounitsshort.style.color = "white";
    equals.style.visibility = "hidden";
    swap.style.visibility = "hidden";
    copyPaste.style.visibility = "hidden";
  }
}

//swap units

swap.onclick = function () {
  let unittext = unitsshort.innerText;
  let tounittext = tounitsshort.innerText;

  let fununittext = function () {
    return unittext;
  };

  let funtounittext = function () {
    return tounittext;
  };

  unitsshort.innerText = funtounittext();
  tounitsshort.innerText = fununittext();
  result.innerText = "";

  unitsrow.forEach(function (each) {
    if (each.lastElementChild.value === unitsshort.innerText) {
      unitsrow.forEach(function (each2) {
        each2.classList.remove("bgcolor");
      });

      each.lastElementChild.checked = true;
      each.classList.add("bgcolor");
    }
  });
  tounitsrow.forEach(function (each) {
    if (each.lastElementChild.value === tounitsshort.innerText) {
      tounitsrow.forEach(function (each2) {
        each2.classList.remove("bgcolor");
      });

      each.lastElementChild.checked = true;
      each.classList.add("bgcolor");
    }
  });

  evaluation();
};

// Copy the text inside the result field
copyPaste.onclick = function () {
  let copyText = result.innerText;
  navigator.clipboard.writeText(copyText);
};

