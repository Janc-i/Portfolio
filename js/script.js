let descriptionArray = ["about", "about"];
let descriptionArrayIndex = [0, 0];
const body = document.querySelector("body");

const screenWidthM = 1160;
const screenWidthS = 700;

const menuButtons = document.querySelectorAll(".menuButton");

const descriptionPanels = document.querySelectorAll(".descriptionSegment");

//add active status to menu button on click
for (let menuButton of menuButtons) {
  menuButton.addEventListener("click", () => {
    for (let menuButton1 of menuButtons) {
      menuButton1.classList.remove("activeButton");
    }
    menuButton.classList.add("activeButton");
    //show corresponding description panel on larger screen after clicking on menu button
    if (window.innerWidth > screenWidthM) {
      for (let descriptionPanel of descriptionPanels) {
        if (
          descriptionPanel.classList.contains(
            menuButton.lastElementChild.innerText.toLowerCase()
          )
        ) {
          for (let descriptionPanel2 of descriptionPanels) {
            let descriptionIndex =
              Array.from(descriptionPanels).indexOf(descriptionPanel);

            if (descriptionArray[0] !== descriptionPanel.classList[0]) {
              descriptionArray.unshift(descriptionPanel.classList[0]);
            }

            if (descriptionArrayIndex[0] !== descriptionIndex) {
              descriptionArrayIndex.unshift(descriptionIndex);
            }

            if (descriptionArray.length > 2) {
              descriptionArray.pop();
            }
            if (descriptionArrayIndex.length > 2) {
              descriptionArrayIndex.pop();
            }

            if (descriptionPanel2.classList[0] !== descriptionArray[1]) {
              descriptionPanel2.classList.add("hideContent");
              descriptionPanel2.classList.remove("fadeInAnimation");
              descriptionPanel2.classList.remove("fadeOutAnimation");
              descriptionPanel2.classList.remove("fadeInAnimation2");
              descriptionPanel2.classList.remove("fadeOutAnimation2");
            }
            if (descriptionIndex > descriptionArrayIndex[1]) {
              descriptionPanel.classList.add("fadeInAnimation");
              descriptionPanel.classList.remove("fadeOutAnimation");
              descriptionPanel.classList.remove("fadeInAnimation2");
              descriptionPanel.classList.remove("fadeOutAnimation2");

              descriptionPanels[descriptionArrayIndex[1]].classList.add(
                "fadeOutAnimation"
              );
              descriptionPanels[descriptionArrayIndex[1]].classList.remove(
                "fadeInAnimation"
              );
              descriptionPanels[descriptionArrayIndex[1]].classList.remove(
                "fadeInAnimation2"
              );
              descriptionPanels[descriptionArrayIndex[1]].classList.remove(
                "fadeOutAnimation2"
              );
            } else if (descriptionIndex < descriptionArrayIndex[1]) {
              descriptionPanel.classList.add("fadeInAnimation2");
              descriptionPanel.classList.remove("fadeOutAnimation");
              descriptionPanel.classList.remove("fadeInAnimation");
              descriptionPanel.classList.remove("fadeOutAnimation2");

              descriptionPanels[descriptionArrayIndex[1]].classList.add(
                "fadeOutAnimation2"
              );
              descriptionPanels[descriptionArrayIndex[1]].classList.remove(
                "fadeInAnimation"
              );
              descriptionPanels[descriptionArrayIndex[1]].classList.remove(
                "fadeInAnimation2"
              );
              descriptionPanels[descriptionArrayIndex[1]].classList.remove(
                "fadeOutAnimation"
              );
            }
          }

          descriptionPanel.classList.remove("hideContent");

          let descriptionSegments = document.querySelectorAll(
            ".descriptionSegment"
          );
          for (let descriptionSegment of descriptionSegments) {
            //descriptionSegment.scrollTo(0, 0);                                // always scroll to top when click menu button screen>M
          }
        }
      }
      //show all description panels on smaller screen after clicking on menu button
    } else {
      for (let descriptionPanel of descriptionPanels) {
        descriptionPanel.classList.remove("hideContent");

        //scroll to corresponding description panel
        if (
          descriptionPanel.classList.contains(
            menuButton.lastElementChild.innerText.toLowerCase()
          )
        ) {
          if (window.innerWidth > screenWidthS) {
            window.scrollTo({
              top: descriptionPanel.offsetTop - 16,
              behavior: "smooth",
            });
          } else {
            window.scrollTo({
              top: descriptionPanel.offsetTop - 122 - 16,
              behavior: "smooth",
            });
          }
        }
      }
    }
  });
}

//show corresponding description panel on larger screen after screen resize and page load
window.addEventListener("resize", () => {
  descriptionPanelHandler();
});

window.addEventListener("load", () => {
  for (let descriptionPanel of descriptionPanels) {
    descriptionPanel.classList.add("hideContent");
  }
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };
  descriptionPanelHandler();

  //also hide and remove loader after page loaded
  //and run afterLoad animation
  const loader = document.querySelector(".loader");
  loader.classList.add("hideLoader");
  loader.addEventListener("transitionend", () => {
    loader.remove();
  });

  body.classList.add("afterLoadAnimation");

  setTimeout(() => {
    body.classList.remove("afterLoadAnimation");
  }, 1000);
  let cursor = document.querySelector(".cursorCircle");
  if (window.innerWidth > screenWidthM) {
    cursor.style.display = "block";
  }

  changeMood();
});

let descriptionPanelHandler = () => {
  let activeButton = document.querySelector(".activeButton");
  if (window.innerWidth > screenWidthM) {
    arrowToTop.style.display = "none";

    for (let descriptionPanel of descriptionPanels) {
      if (
        descriptionPanel.classList.contains(
          activeButton.lastElementChild.innerText.toLowerCase()
        )
      ) {
        for (let descriptionPanel2 of descriptionPanels) {
          //descriptionPanel2.classList.add("hideContent");
        }
        descriptionPanel.classList.remove("hideContent");
      }
    }
  } else if (
    window.innerWidth <= screenWidthM &&
    window.innerWidth > screenWidthS
  ) {
    for (let descriptionPanel of descriptionPanels) {
      descriptionPanel.classList.remove("hideContent");
      descriptionPanel.classList.remove("fadeInAnimation");
      descriptionPanel.classList.remove("fadeInAnimation2");
      descriptionPanel.classList.remove("fadeOutAnimation");
      descriptionPanel.classList.remove("fadeOutAnimation2");
    }
  } else if (window.innerWidth <= screenWidthS) {
    for (let descriptionPanel of descriptionPanels) {
      descriptionPanel.classList.remove("hideContent");
      descriptionPanel.classList.remove("fadeInAnimation");
      descriptionPanel.classList.remove("fadeInAnimation2");
      descriptionPanel.classList.remove("fadeOutAnimation");
      descriptionPanel.classList.remove("fadeOutAnimation2");
      arrowToTop.style.display = "none";
    }
  }
};

//move to top - click on arrow if screen width <= screenWidthM or click on nameMinimal (screen top) if screen width <= screenWidthS

let arrowToTop = document.querySelector(".arrowToTop");

document.addEventListener("scroll", () => {
  if (
    document.documentElement.scrollTop > 400 &&
    window.innerWidth <= screenWidthM &&
    window.innerWidth > screenWidthS
  ) {
    arrowToTop.style.display = "flex";
  } else if (
    document.documentElement.scrollTop <= 400 &&
    window.innerWidth <= screenWidthM &&
    window.innerWidth > screenWidthS
  ) {
    arrowToTop.style.display = "none";
  } else if (window.innerWidth <= screenWidthS) {
    arrowToTop.style.display = "none";
  }
});
arrowToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

let nameMinimal = document.querySelector(".nameMinimal");
nameMinimal.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//give active status to a button according to scrolling through description panels

if (window.innerWidth <= screenWidthM) {
  window.addEventListener("scroll", () => {
    for (let descriptionPanel of descriptionPanels) {
      let panelHeight = parseInt(getComputedStyle(descriptionPanel).height);

      if (
        window.innerWidth > screenWidthS
          ? window.scrollY >= descriptionPanel.offsetTop - 17
          : window.scrollY >= descriptionPanel.offsetTop - 17 - 122 &&
            window.scrollY < descriptionPanel.offsetTop + panelHeight
      ) {
        for (let menuButton of menuButtons) {
          menuButton.classList.remove("activeButton");
          if (
            descriptionPanel.classList.contains(
              menuButton.lastElementChild.innerText.toLowerCase()
            )
          ) {
            menuButton.classList.add("activeButton");
          }
        }
      }
    }
  });
}

// ---------------------AUTOMATIC TYPING--------------------------
const typingTextphrases = [
  "HumanBeing[i]",
  "Front-end Developer",
  "Bug-sensitive Perfectionist",
  "Detail-oriented Individual",
  "Knowledge Sponge",
  "Neverending Learner",
];

const cardTypingText = document.querySelector(".cardTypingText");
const cardTypingTextSmall = document.querySelector(".cardTypingTextSmall");
let wordIndex = 0;
let letterIndex = 0;
let currentTypingTextPhrase = [];
let isDeleting = false;
let isEnd = false;

function automaticTyping() {
  isEnd = false;
  cardTypingText.innerHTML = currentTypingTextPhrase.join("");
  cardTypingTextSmall.innerHTML = currentTypingTextPhrase.join("");

  if (wordIndex < typingTextphrases.length) {
    if (!isDeleting && letterIndex <= typingTextphrases[wordIndex].length) {
      currentTypingTextPhrase.push(typingTextphrases[wordIndex][letterIndex]);
      letterIndex++;
      cardTypingText.innerHTML = currentTypingTextPhrase.join("");
      cardTypingTextSmall.innerHTML = currentTypingTextPhrase.join("");
    }

    if (isDeleting && letterIndex <= typingTextphrases[wordIndex].length) {
      currentTypingTextPhrase.pop(typingTextphrases[wordIndex][letterIndex]);
      letterIndex--;
      cardTypingText.innerHTML = currentTypingTextPhrase.join("");
      cardTypingTextSmall.innerHTML = currentTypingTextPhrase.join("");
    }

    if (letterIndex == typingTextphrases[wordIndex].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && letterIndex === 0) {
      currentTypingTextPhrase = [];
      isDeleting = false;
      wordIndex++;
      if (wordIndex === typingTextphrases.length) {
        wordIndex = 0;
      }
    }
  }

  const deletingSpeed = 20;
  const typingSpeed = 100;
  const waitingTime = isEnd ? 1600 : isDeleting ? deletingSpeed : typingSpeed;

  setTimeout(automaticTyping, waitingTime);
}

automaticTyping();

//----------------END of AUTOMATIC TYPING-------------------------

//---------------calculate age------------------------------------

function calculateAge(dateOfBirth) {
  let today = new Date();
  let birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  let monthDifference = today.getMonth() - birthDate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

let myAge = calculateAge("1984-12-11");
document.querySelector(".myAge").innerText = myAge;
//-------------------------------------------------------------------------------------
//VISITORS COUNTER

let visitContainer = document.querySelector(".visitors");

let visits;

fetch("../visits.txt")
  .then((response) => response.text())
  .then((data) => {
    visits = data; // Assign data to visits variable
  })
  .catch((error) => {
    console.error(error);
    console.log("There was an error fetching the data");
  });

//animate visits count
let countDuration = 1500;

function animatevisitsCount() {
  const visitsNumber = parseInt(visits);
  let count = 0;
  const increment = visitsNumber / (countDuration / 50); // increase the count in 40 steps to simulate the specified count duration

  const visitsCounterInterval = setInterval(() => {
    if (visitsNumber - count < increment) {
      count = visitsNumber;
    } else {
      count += increment;
    }

    visitContainer.textContent = Math.round(count); // update the element with the current count

    if (count >= visitsNumber) {
      clearInterval(visitsCounterInterval); // stop the interval when the count reaches the target visitsNumber
    }
  }, 50); // run the interval every 50 milliseconds
}

//animate visits only when in viewport and only once

// Define the callback function
const callback = (entries, observer) => {
  if (entries[0].isIntersecting) {
    animatevisitsCount();

    // Stop observing the target element
    observer.unobserve(entries[0].target);
  }
};

// Create an instance of the IntersectionObserver class
const observer = new IntersectionObserver(callback, { once: true });

// Start observing the target element
observer.observe(visitContainer);

//END OF VISITOR COUNTER
//--------------------------------------------------------------------------------------------

// svg circular progress bar in resume
//HTML progress bar icon
var progressHTML = 60; // Set the progressHTML value here (between 0 and 100)
var circleHTML = document.querySelector(".circleHTML");
var radius = circleHTML.r.baseVal.value;
var circumference = radius * 2 * Math.PI;
var offset = circumference - (progressHTML / 100) * circumference;
circleHTML.style.strokeDashoffset = offset;

var textHTML = document.querySelector(".textHTML");
textHTML.textContent = progressHTML + "%";

//CSS progress bar icon
var progressCSS = 60; // Set the progressCSS value here (between 0 and 100)
var circleCSS = document.querySelector(".circleCSS");
var radius = circleCSS.r.baseVal.value;
var circumference = radius * 2 * Math.PI;
var offset = circumference - (progressCSS / 100) * circumference;
circleCSS.style.strokeDashoffset = offset;

var textCSS = document.querySelector(".textCSS");
textCSS.textContent = progressCSS + "%";

//JS progress bar icon
var progressJS = 50; // Set the progressJS value here (between 0 and 100)
var circleJS = document.querySelector(".circleJS");
var radius = circleJS.r.baseVal.value;
var circumference = radius * 2 * Math.PI;
var offset = circumference - (progressJS / 100) * circumference;
circleJS.style.strokeDashoffset = offset;

var textJS = document.querySelector(".textJS");
textJS.textContent = progressJS + "%";

//--------------------------------------------------------------
// use tab for scrolling through menu and elements with attr tabindex
document.querySelectorAll("[tabindex]").forEach(function (tabElement) {
  tabElement.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      tabElement.click();
    }
  });
});

//rgb icon animation
const rgbbutton = document.querySelector(".rgb");
let hueIcon = 0;
let speed = 50; // adjust as desired
let lastUpdate = Date.now();

function RGBanimation() {
  const now = Date.now();
  const elapsed = now - lastUpdate;
  const hueIconChange = (speed * elapsed) / 1000;
  hueIcon = (hueIcon + hueIconChange) % 360;
  rgbbutton.style.color = `hsl(${hueIcon}, 48%, 61%)`;
  lastUpdate = now;
}

let intervalRGBanimation = setInterval(RGBanimation, 32); // 60 FPS - if set to 16

//changing mood of the website
const hueSlider = document.getElementById("hue-slider");
const root = document.documentElement;

let changeMood = () => {
  var hue = hueSlider.value;
  let hueDark = parseInt(hue) + 80; // default = 59. difference in hue between darker and lighter background gradient
  if (hueDark > 360) {
    hueDark = hueDark - 360;
  }
  let currentColor = `hsl(${hue}, 48%, 61%)`;
  let currentDarkColor = `hsl(${hueDark}, 34%, 48%)`;
  let currentScrollBarColor = `hsl(${hueDark}, 34%, 48%, 0.3)`;
  root.style.setProperty("--text-mood", currentColor);
  root.style.setProperty("--bg-gradient-light", currentColor);
  root.style.setProperty("--bg-gradient-dark", currentDarkColor);
  //styling scrollbar
  hueSlider.style.backgroundColor = `hsl(${hue}, 48%, 61%, 0.2)`;
  var scrollbarSliderStyle = document.createElement("style");
  scrollbarSliderStyle.innerHTML = `
    .description > div::-webkit-scrollbar-thumb {
      width: 10px;
      background-color: ${currentScrollBarColor};
    }

    #hue-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 20px;
      height: 20px;
      background-color: ${currentColor};
      border-radius: 50%;
    }
  `;
  document.head.appendChild(scrollbarSliderStyle);
  // stop icon rgb animation, change color to current mood when adjusting slider
  hueSlider.addEventListener("input", () => {
    clearInterval(intervalRGBanimation);
  });
  rgbbutton.style.color = currentColor;

  //cursor animation -------------------------------------------------------
  if (window.innerWidth > screenWidthM) {
    let cursorCircle = document.querySelector(".cursorCircle");

    let hoverElements = document.querySelectorAll(".hoverElement");
    cursorDefaultStyle();
    function cursorDefaultStyle() {
      cursorCircle.style.backgroundColor = `hsl(${hue}, 48%, 61%, 0.2)`;
      cursorCircle.style.borderColor = `hsl(${hue}, 48%, 61%, 0)`;
      cursorCircle.style.transform = "scale(0.4)";
    }
    hoverElements.forEach((hoverElement) => {
      hoverElement.addEventListener("mouseover", () => {
        cursorCircle.style.backgroundColor = `hsl(${hue}, 48%, 61%, 0)`;
        cursorCircle.style.borderColor = `hsl(${hue}, 48%, 61%, 1)`;
        cursorCircle.style.transform = "scale(1.1)";
      });
      hoverElement.addEventListener("mouseleave", cursorDefaultStyle);
    });
  }
  function cursorMove() {
    let cursorCircle = document.querySelector(".cursorCircle");
    let mouseX = 0;
    let mouseY = 0;
    let xp = 0;
    let yp = 0;

    document.addEventListener("mousemove", function (e) {
      if (
        e.pageX >= 0 + 15 &&
        e.pageX < window.innerWidth - 15 &&
        e.pageY >= 0 + 15 &&
        e.pageY < window.innerHeight - 15
      ) {
        mouseX = e.pageX - 37;
        mouseY = e.pageY - 37;
      }
    });

    function animateCursorMove() {
      xp += (mouseX - xp) / 16;
      yp += (mouseY - yp) / 16;
      cursorCircle.style.left = xp + "px";
      cursorCircle.style.top = yp + "px";
      requestAnimationFrame(animateCursorMove);
    }
    requestAnimationFrame(animateCursorMove);
  }

  cursorMove();
};
// end of cursor animation -------------------------------------------------------
hueSlider.addEventListener("input", changeMood);
// show or hide hue slider
let showHueSlider = () => {
  hueSlider.classList.remove("hideContent");
};
let hideHueSlider = (event) => {
  if (!rgbbutton.contains(event.target)) {
    hueSlider.classList.add("hideContent");
  }
};
rgbbutton.addEventListener("click", showHueSlider);
body.addEventListener("click", hideHueSlider);

//prevent page scroll on adjusting slider
hueSlider.addEventListener("touchstart", function (event) {
  event.stopPropagation();
});

hueSlider.addEventListener("touchmove", function (event) {
  event.stopPropagation();
  // event.preventDefault();
});

hueSlider.addEventListener("touchend", function (event) {
  hueSlider.classList.add("hideContent");
  event.stopPropagation();
});

// MOOD with Local storage
// Retrieve the hue value from local storage, or set a default value
let hueValue = localStorage.getItem("hueValue") || 180; //last number to change default mood color

// Set the initial value of the slider to the retrieved value
hueSlider.value = hueValue;

// When the slider value changes, update the hue value and store it in local storage
hueSlider.addEventListener("input", () => {
  hueValue = hueSlider.value;
  localStorage.setItem("hueValue", hueValue);
});

//DARK THEME ---------------------------------------------------------------------
const themeButton = document.querySelector(".themeButton");
const bubbles = document.querySelector(".background");
const qaIconServices = document.querySelector(".qaIconServices");
const card = document.querySelector(".card");

let darkTheme = localStorage.getItem("darkTheme") === "true" || false; //last word changes default theme

themeButton.addEventListener("click", () => {
  darkTheme = !darkTheme;
  localStorage.setItem("darkTheme", darkTheme);
  updateTheme();
});

function updateTheme() {
  if (darkTheme) {
    body.classList.add("dark");
    bubbles.classList.add("darkBubbles");
    themeButton.querySelector("i").classList.remove("fa-moon");
    themeButton.querySelector("i").classList.add("fa-sun");
    card.classList.add("darkCardCopy");
    qaIconServices.innerHTML = `<img src="./img/qa-dark.png" alt=""/>`;
  } else {
    body.classList.remove("dark");
    bubbles.classList.remove("darkBubbles");
    themeButton.querySelector("i").classList.remove("fa-sun");
    themeButton.querySelector("i").classList.add("fa-moon");
    card.classList.remove("darkCardCopy");
    qaIconServices.innerHTML = `<img src="./img/qa.png" alt=""/>`;
  }
}
updateTheme();

//end of dark theme ------------------------------------------------------------------
//soft skills slider
let softSkills = document.querySelectorAll(".skillName");
let skillText = document.querySelector(".skillText");
let activeSkill = document.querySelector(".activeSkill");

softSkills.forEach((softSkill) => {
  softSkill.addEventListener("click", () => {
    if (!softSkill.classList.contains("activeSkill")) {
      // remove "activeSkill" class from all other softSkills
      for (let softSkill2 of softSkills) {
        softSkill2.classList.remove("activeSkill");
      }
      // add "activeSkill" class to the clicked softSkill
      softSkill.classList.add("activeSkill");
      // skillText.innerHTML = softSkill.querySelector("p").innerHTML;
    } else {
      // if the clicked softSkill already has "activeSkill" class, remove it
      softSkill.classList.remove("activeSkill");
    }
    if (softSkill.classList.contains("activeSkill")) {
      skillText.innerHTML = softSkill.querySelector("p").innerHTML;
      skillText.style.color = "var(--text-mood)";
      skillText.classList.add("skillTextFade");
      skillText.addEventListener(
        "animationend",
        () => {
          // remove the skillTextFade class after the animation ends
          skillText.classList.remove("skillTextFade");
        },
        { once: true }
      );
    } else {
      skillText.innerHTML =
        "Set of personal attributes and interpersonal abilities which enables me to effectively communicate, collaborate, adapt, and problem-solve in any professional or personal context.";
      skillText.style.color = "var(--text-quote-grey)";
    }
  });
});

//---------------------------------------------------------
//PROJECTS MENU
let projects = document.querySelectorAll(".project");
let games = document.querySelectorAll(".game");
let apps = document.querySelectorAll(".app");
let webs = document.querySelectorAll(".web");
let projectButtons = document
  .querySelector(".projectsMenu")
  .querySelectorAll("li");
let appsButton = document.getElementById("apps");
let gamesButton = document.getElementById("games");
let webButton = document.getElementById("web");
let allButton = document.getElementById("all");

appsButton.addEventListener("click", () => {
  projects.forEach((project) => {
    project.classList.add("hideProject");
  });
  apps.forEach((app) => {
    app.classList.remove("hideProject");
  });
});
gamesButton.addEventListener("click", () => {
  projects.forEach((project) => {
    project.classList.add("hideProject");
  });
  games.forEach((game) => {
    game.classList.remove("hideProject");
  });
});
webButton.addEventListener("click", () => {
  projects.forEach((project) => {
    project.classList.add("hideProject");
  });
  webs.forEach((web) => {
    web.classList.remove("hideProject");
  });
});
allButton.addEventListener("click", () => {
  projects.forEach((project) => {
    project.classList.remove("hideProject");
  });
});

projectButtons.forEach((projectButton) => {
  projectButton.addEventListener("click", () => {
    projectButtons.forEach((projectButton2) => {
      projectButton2.classList.remove("activeProjectButton");
    });
    projectButton.classList.add("activeProjectButton");
  });
});

//particle background animation
const particleCanvas = document.querySelector(".background");

function createParticle(x, y) {
  const particle = document.createElement("div");
  particle.classList.add("particleCursor");
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  particle.style.setProperty("--tx", `${Math.random() * 400 - 200}px`);
  particle.style.setProperty("--ty", `${Math.random() * 400 - 200}px`);
  particleCanvas.appendChild(particle);
  setTimeout(() => {
    particle.remove();
  }, 1000);
}

if (window.innerWidth > screenWidthM) {
  particleCanvas.addEventListener("mousemove", (event) => {
    createParticle(event.clientX, event.clientY);
  });
}
