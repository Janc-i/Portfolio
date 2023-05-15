let buttonNumber = document.getElementsByClassName("buttonNumber");
let display = document.querySelector("#displayID");
let rovnasa = document.querySelector("#rovnasa");
let ac = document.querySelector("#numberAc");
let percento = document.querySelector("#percento");
let backspace = document.querySelector("#backspace");
let calculated = false;

if (calculated === true) {
  display.innerText = "";
  calculated = false;
}
display.innerText = "0";
calculated = true;

for (let i = 0; i < buttonNumber.length; i++) {
  buttonNumber[i].onclick = function () {
    if (display.innerText.length < 19) {
      if (calculated === true) {
        display.innerText = "";
        calculated = false;
      }
      if (buttonNumber[i].innerText === "x") {
        display.append("*");
      } else if (buttonNumber[i].innerText === ",") {
        if (display.innerText === "") {
          display.append("0.");
        } else {
          display.append(".");
        }
      } else {
        display.append(buttonNumber[i].innerText);
      }
    }
  };

  ac.onclick = function () {
    display.innerText = "0";
    calculated = true;
  };

  percento.onclick = function () {
    display.append("*0.01");
  };

  backspace.onclick = function () {
    if (display.innerText.length > 1) {
      display.innerText = display.innerText.slice(0, -1);
    } else {
      display.innerText = "0";

      calculated = true;
    }
  };

  rovnasa.onclick = function () {
    display.innerText = eval(display.innerText);
    calculated = true;
  };
}

// document.onkeydown = function (event) {
//   if (event.key === "*") {
//     display.append("*");
//   } else if (event.key === ",") {
//     if (display.innerText === "") {
//       display.append("0.");
//     } else {
//       display.append(".");
//     }
//   } else if (event.key === "%") {
//     display.append("*0.01");
//   } else if (event.key === "Delete") {
//     display.innerText = "";
//   } else if (event.key === "Backspace") {
//     display.innerText = display.innerText.slice(0, -1);
//   } else if (event.key === "Enter") {
//     display.innerText = eval(display.innerText);
//     calculated = true;
//   } else if (event.key === "1") {
//     display.append("1");
//   } else if (event.key === "2") {
//     display.append("2");
//   } else if (event.key === "3") {
//     display.append("3");
//   } else if (event.key === "4") {
//     display.append("4");
//   } else if (event.key === "5") {
//     display.append("5");
//   } else if (event.key === "6") {
//     display.append("6");
//   } else if (event.key === "7") {
//     display.append("7");
//   } else if (event.key === "8") {
//     display.append("8");
//   } else if (event.key === "9") {
//     display.append("9");
//   } else if (event.key === "0") {
//     display.append("0");
//   } else if (event.key === "+") {
//     display.append("+");
//   } else if (event.key === "-") {
//     display.append("-");
//   } else if (event.key === "/") {
//     display.append("/");
//   } else if (event.key === "(") {
//     display.append("(");
//   } else if (event.key === ")") {
//     display.append(")");
//   }
// };
