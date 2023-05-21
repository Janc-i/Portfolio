<?php
include('visits.php');
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index,follow" />

    <!-- seo -->

    <meta
      name="keywords"
      content="Janči, Janci, front-end developer, web developer, developer, quality assurance engineer, QA engineer, tester, portfolio"
    />
    <meta
      name="description"
      content="Aspiring front-end developer and QA engineer with a passion for creating beautiful, responsive and user-friendly websites and applications."
    />
    <meta name="author" content="Janči" />
    <meta
      property="og:title"
      content="Janči | Front-End Developer & Quality Assurance Engineer"
    />
    <meta
      property="og:description"
      content="Aspiring front-end developer and QA engineer with a passion for creating beautiful, responsive and user-friendly websites and applications."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.jancii.com/" />
    <meta
      property="og:image"
      content="https://www.jancii.com/img/portfolio.webp"
    />
    <meta property="og:image:alt" content="Janči" />

    <!-- google font -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    />
    <!-- font awesome -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
      integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <link rel="icon" href="./favicon.ico" />
    <link rel="preload" href="./img/photo.webp" as="image" />

    <title>Janči</title>

    <link rel="stylesheet" href="./css/normalize.css" />
    <link rel="stylesheet" href="./css/style.css" />
  </head>
  <body>
    <div class="cursorCircle"></div>
    <div class="loader">
      <div class="ball"></div>
      <div class="ball2"></div>
    </div>
    <div class="background">
      <div class="bubble bubble1"></div>
      <div class="bubble bubble2"></div>
      <div class="bubble bubble3"></div>
      <div class="bubble bubble4"></div>
      <div class="bubble bubble5"></div>
      <div class="bubble bubble6"></div>
      <div class="bubble bubble7"></div>
      <div class="bubble bubble8"></div>
      <div class="bubble bubble9"></div>
      <div class="bubble bubble10"></div>
      <div class="bubble bubble11"></div>
      <div class="bubble bubble12"></div>
      <div class="bubble bubble13"></div>
    </div>
    <div class="bodyContainer">
      <div class="arrowToTop">
        <i class="fa-solid fa-angle-up"></i>
      </div>

      <div class="contentContainer">
        <!-- --------------------NAVIGATION PANEL--------------------------------->
        <nav class="navigationPanel">
          <ul class="navbarTop">
            <li class="nameMinimal" tabindex="1">
              <h1>Janči</h1>
              <p class="cardTypingTextSmall"></p>
            </li>
            <li class="rgb hoverElement">
              <i class="fa-solid fa-droplet" tabindex="2"></i>

              <input
                type="range"
                id="hue-slider"
                min="0"
                max="360"
                value="113"
                class="hideContent"
              />
            </li>
            <li class="themeButton hoverElement">
              <i class="fa-solid fa-moon" tabindex="3"></i>
            </li>
          </ul>
          <ul class="navbarBottom">
            <li
              class="menuButton activeButton aboutButton hoverElement"
              tabindex="4"
            >
              <i class="fa-regular fa-user"></i>
              <p>ABOUT</p>
            </li>
            <li class="menuButton resumeButton hoverElement" tabindex="5">
              <i class="fa-regular fa-rectangle-list"></i>
              <p>RESUME</p>
            </li>
            <li class="menuButton projectsButton hoverElement" tabindex="6">
              <i class="fa-solid fa-laptop-code"></i>
              <p>PROJECTS</p>
            </li>
            <li class="menuButton personalButton hoverElement" tabindex="7">
              <i class="fa-regular fa-heart"></i>
              <p>PERSONAL</p>
            </li>
            <li class="menuButton contactButton hoverElement" tabindex="8">
              <i class="fa-regular fa-paper-plane"></i>
              <p>CONTACT</p>
            </li>
          </ul>
        </nav>
        <main class="mainPanel">
          <!-------------------------------CARD----------------------------------->
          <section class="card">
            <div class="photo"></div>
            <div class="cardInfo">
              <h1 class="cardName">Janči</h1>
              <p class="cardTypingText"></p>
              <div class="cardSocialIcons">
                <a
                  href="https://www.facebook.com/profile.php?id=100092690254755"
                  target="_blank"
                  aria-label="Facebook"
                  rel="noopener noreferrer"
                  ><i class="fa-brands fa-facebook hoverElement"></i
                ></a>
                <a
                  href="https://www.instagram.com/jon.el/?theme=dark"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  ><i class="fa-brands fa-instagram hoverElement"></i
                ></a>
                <a
                  href="https://twitter.com/Jon_ELLL"
                  target="_blank"
                  aria-label="Twitter"
                  rel="noopener noreferrer"
                  ><i class="fa-brands fa-twitter hoverElement"></i
                ></a>
                <a
                  href="https://www.linkedin.com/in/jan%C4%8Di-l-637012273/"
                  target="_blank"
                  aria-label="LinkedIn"
                  rel="noopener noreferrer"
                  ><i class="fa-brands fa-linkedin hoverElement"></i
                ></a>
                <a
                  href="https://github.com/Janc-i/Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  ><i class="fa-brands fa-github hoverElement"></i
                ></a>
              </div>
            </div>
            <ul class="cardButtons">
              <li class="downloadButton hoverElement" tabindex="9">
                <div class="downloadMenu">
                  <a href="./cv/CV-SK.pdf" target="_blank" tabindex="11"
                    >Slovensky</a
                  >
                  <a href="./cv/CV-EN.pdf" target="_blank" tabindex="10"
                    >English</a
                  >
                </div>
                <p>DOWNLOAD <span>CV</span></p>

                <i class="fa-solid fa-download"></i>
              </li>
              <li
                class="hoverElement"
                id="contact"
                tabindex="12"
                onclick="document.querySelector('.contactButton').click()"
              >
                <span>ME</span>
                <i class="fa-sharp fa-solid fa-paper-plane"></i>
                <p>CONTACT</p>
              </li>
            </ul>
          </section>
          <!--------------------------DESCRIPTION--------------------------------->
          <section class="description">
            <!--------------------------------- ABOUT ---------------------------->
            <div class="about descriptionSegment">
              <!-- about me -->
              <section id="aboutMe">
                <header>
                  <p><span>A</span>bout Me</p>
                </header>
                <div class="main">
                  <article class="article1">
                    <p>
                      <span>Hello, I'm Janči.</span><br />
                      Welcome to my website. This is my own work and my
                      showroom. It serves as a demonstration of my skills and
                      knowledge and to provide a deeper understanding of my
                      personality. Feel free to browse around to get to know me
                      better.
                    </p>
                  </article>
                  <article class="article2">
                    <p><span>Age</span><span class="myAge"></span></p>
                    <p><span>Residence</span><span>Slovakia</span></p>
                    <p><span>Address</span><span>Prešov, Slovakia</span></p>
                    <p><span>Availability</span><span>Available</span></p>
                  </article>
                </div>
              </section>
              <!-- my services -->
              <section id="myServices">
                <header>
                  <p><span>M</span>y Services</p>
                </header>
                <div class="main">
                  <article class="article1">
                    <i class="fa-solid fa-code"></i>
                    <h4>Web Development</h4>
                    <p>
                      I can help you create a website or application, that is
                      visually appealing, user-friendly, and performs well on
                      all devices and browsers.
                    </p>
                  </article>
                  <article class="article2">
                    <i class="qaIconServices"
                      ><img src="./img/qa.webp" alt=""
                    /></i>
                    <h4>Quality Assurance</h4>
                    <p>
                      I can provide a range of testing services to ensure that
                      your application is high-quality, functional, and easy to
                      use.
                    </p>
                  </article>
                </div>
              </section>
              <!-- my experience -->
              <section id="myExperience">
                <header>
                  <p><span>M</span>y Experience</p>
                </header>
                <div class="main">
                  <article class="article1">
                    <i class="fa-solid fa-star"></i>

                    <p>
                      Upon the recent completion of Front-end Development and QA
                      Testing courses, I have acquired a diverse range of skills
                      and techniques in HTML, CSS, and JavaScript, which I have
                      incorporated into the development of this website.
                      <br />
                      You can check some of my other work in the
                      <span
                        class="projectsLink hoverElement"
                        onclick="document.querySelector('.projectsButton').click()"
                        ><span></span><span>Projects</span></span
                      >
                      section.
                      <br /><br />
                      Furthermore, my immersion in the field of Quality
                      Assurance has allowed me to deepen my understanding of
                      testing principles and expand my knowledge of various
                      testing methodologies. This involvement has provided me
                      with a fresh perspective on software evaluation,
                      empowering me to thoroughly analyze and assess software
                      products for optimal functionality and user experience.
                      <br /><br />
                      I am seeking an opportunity to gain practical, hands-on
                      experience in these fields, and apply the knowledge and
                      skills I have acquired, whether it be through work or
                      internship. Despite being based in Slovakia, I am highly
                      motivated and fully capable of working remotely with a
                      team located anywhere in the world. I am commited to
                      delivering high-quality work and continuously improving my
                      abilities. I am eager to contribute my knowledge and
                      talent and to learn from experienced professionals.
                      <br /><br />
                      If there are any available opportunities that align with
                      my knowledge and experience, I would be honored to hear
                      from you. <br /><br /><br />
                      Thank you for your time and consideration.
                    </p>
                  </article>
                </div>
              </section>
              <!-- pricing -->
              <section id="pricing">
                <header>
                  <p><span>P</span>ricing</p>
                </header>
                <div class="main">
                  <article class="article1">
                    <i class="fa-solid fa-rocket"></i>
                    <h4>Starter</h4>
                    <h4><span>€ </span><span>0</span><span> hour</span></h4>
                    <p>
                      I am open to the possibility of working without pay, if it
                      increases my chances of securing a potential permanent
                      position in the future. I believe it to be a mutually
                      beneficial outcome.
                    </p>
                  </article>
                </div>
              </section>
              <!-- fun facts -->
              <section id="funFacts">
                <header>
                  <p><span>F</span>un Facts</p>
                </header>
                <div class="main">
                  <article class="article1">
                    <i class="fa-brands fa-html5"></i>
                    <p>4995<br />Lines of HTML/CSS Code</p>
                  </article>

                  <article class="article2">
                    <i class="fa-brands fa-square-js"></i>
                    <p>757<br />Lines of Javascript Code</p>
                  </article>
                  <article class="article3">
                    <i class="fa-solid fa-clock"></i>
                    <p>150+<br />Hours of Work</p>
                  </article>

                  <article class="article4">
                    <i class="fa-solid fa-mug-saucer"></i>
                    <p>36<br />Cups of Coffee</p>
                  </article>
                </div>
                <article class="article5">
                  <div class="note">
                    <i class="fa-solid fa-note-sticky"></i>
                    I found building this website to be the most complex and
                    challenging project I have worked on so far. I developed it
                    from scratch utilising my knowledge of HTML, Sass and raw
                    Javascript, with some assistance from Google and even some
                    experimentation with ChatGPT. Visual inspiration by a
                    <a
                      class="hoverElement"
                      href="https://themeforest.net/item/ryancv-vcard-resume-wordpress-theme/22890097"
                      target="_blank"
                      rel="noopener noreferrer"
                      >design</a
                    >.
                    <p class="inspect">
                      <a
                        class="hoverElement"
                        href="https://github.com/Janc-i/Portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><i class="fa-solid fa-magnifying-glass"></i> Source
                        Code</a
                      >
                    </p>
                  </div>
                </article>
              </section>
              <!-- visitors counter -->
              <section id="visitors">
                <header>
                  <p><span>V</span>isitors</p>
                </header>
                <div class="main">
                  <article class="article1">
                    <i class="fa-solid fa-eye"></i>
                    <p class="visitors">0</p>
                    <i class="fa-solid fa-eye"></i>
                  </article>
                </div>
              </section>
              <!-- quote -->
              <section id="quote">
                <header>
                  <p><span>Q</span>uote</p>
                </header>
                <div class="main">
                  <article class="article1">
                    <p>
                      <i class="fa-solid fa-quote-left"></i>
                      Tell me and I forget. Teach me and I remember. Involve me
                      and I learn.
                      <i class="fa-solid fa-quote-right"></i>
                    </p>
                    <p>- Benjamin Franklin -</p>
                  </article>
                  <p class="easterEgg">
                    EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg
                    EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg
                    EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg
                    EasterEgg EasterEgg
                  </p>
                </div>
              </section>
            </div>
            <!--------------------- RESUME ----------------------->
            <div class="resume descriptionSegment">
              <section id="resume">
                <header>
                  <p><span>R</span>esume</p>
                </header>
                <div class="main">
                  <article class="article1">
                    <h4>
                      <i class="fa-solid fa-briefcase"></i>
                      <span>EXPERIENCE</span>
                    </h4>
                    <div class="employer">
                      <span class="period"> 2017 - 2023 </span>
                      <h5 class="pt">Warehouse Manager</h5>
                      <h6 class="pt">+ Purchase and Sales Support</h6>
                      <span class="company">Pharm Trade a.s.</span>
                      <p>
                        <span>Pharmaceutical industry</span><br />
                        Responsible for warehouse management and supervising a
                        team of 8 employees, supplier and customer care,
                        handling logistics, interviewing, coaching, mentoring,
                        reporting, problem-solving
                      </p>
                    </div>
                    <div class="employer">
                      <span class="period"> 2016 - 2016 </span>
                      <h5 class="tvareko">Production Coordinator</h5>
                      <span class="company">Tvareko s.r.o.</span>
                      <p>
                        <span>Construction industry</span><br />
                        coordinating building material production - seasonal job
                      </p>
                    </div>
                    <div class="employer">
                      <span class="period"> 2014 - 2015 </span>
                      <h5 class="fte">Expedition Operator</h5>
                      <span class="company">FTE s.r.o.</span>
                      <p>
                        <span>Automotive industry</span><br />
                        Expedition warehouse operator <br />
                        FLT driver
                      </p>
                    </div>
                    <div class="employer">
                      <span class="period"> 2009 - 2013 </span>
                      <h5 class="lidl">Picker</h5>
                      <span class="company">Lidl v.o.s.</span>
                      <p>
                        <span>Food industry</span><br />
                        Order assembling <br />
                        Low lift truck driver
                      </p>
                    </div>
                    <div class="employer">
                      <span class="period"> 2007 - 2008 </span>
                      <h5 class="total">Team Leader</h5>
                      <span class="company">Total Ltd, London, UK</span>
                      <p>
                        <span> Food industry</span><br />
                        Led a team of pickers, contact between workers and
                        management
                      </p>
                    </div>
                    <div class="employer">
                      <span class="period"> 2006 - 2007 </span>
                      <h5 class="de">Picker</h5>
                      <span class="company"
                        >Driving Edge Ltd, Manchester, UK</span
                      >
                      <p>
                        <span>Food industry</span><br />
                        Order assembling <br />
                        Low lift truck driver
                      </p>
                    </div>
                    <div class="employer">
                      <span class="period"> 2005 - 2006 </span>
                      <h5 class="daikin">Production Operator</h5>
                      <span class="company">Daikin, Brno, CZ</span>
                      <p>
                        <span>HVAC industry</span><br />
                        production of air-conditioning components
                      </p>
                    </div>
                  </article>
                  <article class="article2">
                    <h4>
                      <i class="fa-solid fa-building-columns"></i>
                      <span>EDUCATION</span>
                    </h4>
                    <div class="education schoolIcon">
                      <span class="period"> 2000 - 2004 </span>
                      <h5>Grammar School</h5>
                      <span class="educationPlace">GJAR, Prešov</span>
                      <p>
                        Comprehensive secondary education with leaving
                        examination
                      </p>
                    </div>
                    <div class="education githubIcon">
                      <span class="period">2023</span>
                      <h5>Git/GitHub <span>Course</span></h5>
                      <span class="educationPlace">Skillmea</span>
                      <p>Basic knowledge of Git, Commands, Branches, GitHub</p>
                      <a
                        class="hoverElement"
                        href="./certificates/skillmea-certifikat-git-a-github-zaklady.pdf"
                        target="_blank"
                        >CERTIFICATE</a
                      >
                    </div>
                    <div class="education testerIcon">
                      <span class="period">2023</span>
                      <h5>QA Manual Tester <span>Course</span></h5>
                      <span class="educationPlace">Skillmea</span>
                      <p>
                        Test plan, Bug reporting, Test methods, types,
                        strategies, Qualitative attributes
                      </p>
                      <a
                        class="hoverElement"
                        href="./certificates/skillmea-certifikat-manualne-testovanie.pdf"
                        target="_blank"
                        >CERTIFICATE</a
                      >
                    </div>
                    <div class="education webDeveloperIcon">
                      <span class="period">2022</span>
                      <h5>Web Developer <span>Course</span></h5>
                      <span class="educationPlace">Skillmea</span>
                      <p>
                        HTML, CSS, Javascript, JQuery, Responsive design,
                        Cross-browser compatibility, Chrome developer tools,
                        Debugging
                      </p>
                      <a
                        class="hoverElement"
                        href="./certificates/skillmea-certifikat-webrebel-1-html-css-javascript.pdf"
                        target="_blank"
                        >CERTIFICATE</a
                      >
                      <span class="webDevIcons"
                        ><i class="fa-brands fa-html5"></i
                        ><i class="fa-brands fa-square-js"></i
                        ><i class="fa-brands fa-css3-alt"></i
                      ></span>
                    </div>
                    <div class="education excelIcon">
                      <span class="period">2017</span>
                      <h5>Microsoft Excel <span>Course</span></h5>
                      <span class="educationPlace">Learn2Code</span>
                      <p>
                        Basic functions, Formatting, Filters, Conditions,
                        Formulas, Data manipulation, Macros
                      </p>
                      <a
                        class="hoverElement"
                        href="./certificates/microsoft-excel.pdf"
                        target="_blank"
                        >CERTIFICATE</a
                      >
                    </div>
                    <div class="education wordIcon">
                      <span class="period">2017</span>
                      <h5>Microsoft Word <span>Course</span></h5>
                      <span class="educationPlace">Learn2Code</span>
                      <p>
                        Basic knowledge, Working with text, Formatting, Styling
                      </p>
                      <a
                        class="hoverElement"
                        href="./certificates/microsoft-word.pdf"
                        target="_blank"
                        >CERTIFICATE</a
                      >
                    </div>
                    <div class="education photoshopIcon">
                      <span class="period">2017</span>
                      <h5>Visual Design <span>Course</span></h5>
                      <span class="educationPlace">Learn2Code</span>
                      <p>
                        Basic principles of image editing in Adobe Photoshop,
                        Selection Tools, Layers, Filters
                      </p>
                      <a
                        class="hoverElement"
                        href="./certificates/visual-design-digital-photoshop.pdf"
                        target="_blank"
                        >CERTIFICATE</a
                      >
                    </div>
                  </article>
                </div>
              </section>

              <!-- skills -->
              <section id="skills">
                <header>
                  <p><span>S</span>kills</p>
                </header>
                <div class="main">
                  <article class="article1">
                    <h4>
                      <i class="fa-solid fa-brain"></i>
                      <span>KNOWLEDGE</span>
                    </h4>
                    <p class="skill">
                      Front-end Development
                      <span><span class="percent60 percentX"></span></span>
                    </p>

                    <p class="skill">
                      Microsoft Office
                      <span><span class="percent50 percentX"></span></span>
                    </p>
                    <p class="skill">
                      Adobe Photoshop
                      <span><span class="percent40 percentX"></span></span>
                    </p>
                    <p class="skill">
                      Adobe Audition
                      <span><span class="percent50 percentX"></span></span>
                    </p>
                  </article>
                  <article class="article2">
                    <h4>
                      <i class="fa-solid fa-flag"></i>
                      <span>LANGUAGES</span>
                    </h4>
                    <p class="language">
                      Slovak
                      <span class="slovakPercent">
                        <span></span><span></span><span></span><span></span
                        ><span></span><span></span><span></span><span></span
                        ><span></span><span></span>
                      </span>
                    </p>
                    <p class="language">
                      Czech
                      <span class="czechPercent">
                        <span></span><span></span><span></span><span></span
                        ><span></span><span></span><span></span><span></span
                        ><span></span><span></span>
                      </span>
                    </p>
                    <p class="language">
                      English
                      <span class="englishPercent">
                        <span></span><span></span><span></span><span></span
                        ><span></span><span></span><span></span><span></span
                        ><span></span><span></span>
                      </span>
                    </p>
                    <p class="language">
                      French
                      <span class="frenchPercent">
                        <span></span><span></span><span></span><span></span
                        ><span></span><span></span><span></span><span></span
                        ><span></span><span></span>
                      </span>
                    </p>
                  </article>
                  <!-- coding -->
                  <article class="article3">
                    <h4>
                      <i class="fa-solid fa-code"></i>
                      <span>Coding</span>
                    </h4>
                    <div>
                      <div class="htmlSVG">
                        <svg width="100" height="100">
                          <circle
                            class="emptyCircle"
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="currentColor"
                            stroke-width="10"
                            fill="none"
                          />
                          <circle
                            class="circleHTML filledCircle"
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="currentColor"
                            stroke-width="10"
                            fill="none"
                            stroke-dasharray="251.2"
                            stroke-dashoffset="0"
                            transform="rotate(-90 50 50)"
                          />
                          <text
                            class="textHTML"
                            x="50"
                            y="50"
                            stroke="currentColor"
                            font-size="20"
                            text-anchor="middle"
                            dominant-baseline="middle"
                          >
                            0%
                          </text>
                        </svg>
                        <p>HTML</p>
                      </div>
                      <div class="cssSVG">
                        <svg width="100" height="100">
                          <circle
                            class="emptyCircle"
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="currentColor"
                            stroke-width="10"
                            fill="none"
                          />
                          <circle
                            class="circleCSS filledCircle"
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="currentColor"
                            stroke-width="10"
                            fill="none"
                            stroke-dasharray="251.2"
                            stroke-dashoffset="0"
                            transform="rotate(-90 50 50)"
                          />
                          <text
                            class="textCSS"
                            x="50"
                            y="50"
                            stroke="currentColor"
                            font-size="20"
                            text-anchor="middle"
                            dominant-baseline="middle"
                          >
                            0%
                          </text>
                        </svg>
                        <p>CSS/Sass</p>
                      </div>
                      <div class="jsSVG">
                        <svg width="100" height="100">
                          <circle
                            class="emptyCircle"
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="currentColor"
                            stroke-width="10"
                            fill="none"
                          />
                          <circle
                            class="circleJS filledCircle"
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="currentColor"
                            stroke-width="10"
                            fill="none"
                            stroke-dasharray="251.2"
                            stroke-dashoffset="0"
                            transform="rotate(-90 50 50)"
                          />
                          <text
                            class="textJS"
                            x="50"
                            y="50"
                            stroke="currentColor"
                            font-size="20"
                            text-anchor="middle"
                            dominant-baseline="middle"
                          >
                            0%
                          </text>
                        </svg>
                        <p>Javascript</p>
                      </div>
                    </div>
                  </article>
                </div>
              </section>
              <!-- quote -->
              <section id="quote">
                <header>
                  <p><span>Q</span>uote</p>
                </header>
                <div class="main">
                  <article class="article1">
                    <p>
                      <i class="fa-solid fa-quote-left"></i>
                      Happiness is when opportunity meets preparedness.
                      <i class="fa-solid fa-quote-right"></i>
                    </p>
                    <p>- Zig Ziglar -</p>
                  </article>
                  <p class="easterEgg">
                    EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg
                    EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg
                    EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg
                    EasterEgg EasterEgg
                  </p>
                </div>
              </section>
            </div>
            <!-- PROJECTS----------------------------------- -->
            <div class="projects descriptionSegment">
              <section>
                <header>
                  <p><span>P</span>rojects</p>
                  <ul class="projectsMenu">
                    <li id="all" class="hoverElement activeProjectButton">
                      All
                    </li>
                    <li id="apps" class="hoverElement">Apps</li>
                    <li id="games" class="hoverElement">Games</li>
                    <li id="web" class="hoverElement">Web</li>
                    <li id="QA" class="hoverElement">QA</li>
                  </ul>
                </header>
                <div class="main">
                  <article class="article1">
                    <a
                      class="project game bigBang hoverElement"
                      href="./projects/games/bigBang/bigBang.html"
                      style="display: block"
                      target="_blank"
                    >
                      <div class="projectWrapper">
                        <div>
                          <img
                            src="./img/projects/bigBang.webp"
                            alt="Big Bang Theory Game"
                          />
                        </div>
                        <h4>Big Bang Game</h4>
                        <p>
                          Favorite Rock, Paper, Scissors, Lizard, Spock game
                          performed by the famous TV series protagonists
                        </p>
                      </div>
                    </a>
                    <a
                      class="project app converter hoverElement"
                      href="./projects/apps/multiConverter/converter.html"
                      style="display: block"
                      target="_blank"
                    >
                      <div class="projectWrapper">
                        <div>
                          <img
                            src="./img/projects/converter.webp"
                            alt="Multi-Converter"
                          />
                        </div>
                        <h4>Multi-Converter</h4>
                        <p>Converter of the most common physical units</p>
                      </div></a
                    >
                    <a
                      class="project game shoot hoverElement"
                      href="./projects/games/catchOrShoot/catchOrShoot.html"
                      style="display: block"
                      target="_blank"
                    >
                      <div class="projectWrapper">
                        <div>
                          <img
                            src="./img/projects/shoot.webp"
                            alt="Catch or Shoot Game"
                          />
                        </div>
                        <h4>Catch or Shoot Game</h4>
                        <p>Simple 2D Arcade</p>
                      </div></a
                    >
                    <a
                      class="project game dice hoverElement"
                      href="./projects/games/diceGame/diceGame.html"
                      style="display: block"
                      target="_blank"
                    >
                      <div class="projectWrapper">
                        <div>
                          <img src="./img/projects/dice.webp" alt="Dice Game" />
                        </div>
                        <h4>Dice Game</h4>
                        <p>Strategic game based on the rules of Blackjack</p>
                      </div></a
                    >
                    <a
                      class="project game ticTacToe hoverElement"
                      href="./projects/games/ticTacToe/ticTacToe.html"
                      style="display: block"
                      target="_blank"
                    >
                      <div class="projectWrapper">
                        <div>
                          <img
                            src="./img/projects/ticTacToe.webp"
                            alt="Tic Tac Toe"
                          />
                        </div>
                        <h4>Tic Tac Toe</h4>
                        <p>Classic paper-and-pencil game</p>
                      </div></a
                    >

                    <a
                      class="project app calculator hoverElement"
                      href="./projects/apps/calculator/calculator.html"
                      style="display: block"
                      target="_blank"
                    >
                      <div class="projectWrapper">
                        <div>
                          <img
                            src="./img/projects/calculator.webp"
                            alt="Calculator"
                          />
                        </div>
                        <h4>Calculator</h4>
                        <p>App for performing basic arithmetic operations</p>
                      </div></a
                    >

                    <a
                      class="project app montyHall hoverElement"
                      href="./projects/apps/montyHallProblem/montyHall.html"
                      style="display: block"
                      target="_blank"
                    >
                      <div class="projectWrapper">
                        <div>
                          <img
                            src="./img/projects/montyHall.webp"
                            alt="Monty Hall Problem"
                          />
                        </div>
                        <h4>Monty Hall Problem</h4>
                        <p>
                          Simulation of the famous brain teaser with the aid of
                          ChatGPT
                        </p>
                      </div></a
                    >
                    <a
                      class="project app todo hoverElement"
                      href="./projects/apps/todoList/todo.html"
                      style="display: block"
                      target="_blank"
                    >
                      <div class="projectWrapper">
                        <div>
                          <img
                            src="./img/projects/todo.webp"
                            alt="To-do List"
                          />
                        </div>
                        <h4>To-do list</h4>
                        <p>Keep track of tasks that need to be accomplished</p>
                      </div></a
                    >
                    <a
                      class="project app apiSearch hoverElement"
                      href="./projects/apps/searchApi/searchApi.html"
                      style="display: block"
                      target="_blank"
                    >
                      <div class="projectWrapper">
                        <div>
                          <img
                            src="./img/projects/apiSearch.webp"
                            alt="Search using API"
                          />
                        </div>
                        <h4>Search function</h4>
                        <p>Simple search function using API</p>
                      </div></a
                    >
                    <a
                      class="project game turtle hoverElement"
                      href="./projects/games/catchTheTurtle/turtle.html"
                      style="display: block"
                      target="_blank"
                    >
                      <div class="projectWrapper">
                        <div>
                          <img
                            src="./img/projects/turtle.webp"
                            alt="Catch The Turtle"
                          />
                        </div>
                        <h4>Catch The Turtle</h4>
                        <p>Can you be faster than the turtle?</p>
                      </div></a
                    >

                    <a
                      class="project app particle hoverElement"
                      href="./projects/apps/particleAnimation/particle.html"
                      style="display: block"
                      target="_blank"
                    >
                      <div class="projectWrapper">
                        <div>
                          <img
                            src="./img/projects/particle.webp"
                            alt="Particle Animation"
                          />
                        </div>
                        <h4>Particle Animation</h4>
                        <p>Animation crafted with the aid of ChatGPT.</p>
                      </div></a
                    >
                    <a
                      class="project web Tilde hoverElement"
                      href="./projects/web/tildeNightfury/tilde/tilde.html"
                      style="display: block"
                      target="_blank"
                    >
                      <div class="projectWrapper">
                        <div>
                          <img
                            src="./img/projects/tilde.webp"
                            alt="Tilde Web Clone"
                          />
                        </div>
                        <h4>Tilde</h4>
                        <p>Web Clone</p>
                      </div></a
                    >
                    <a
                      class="project web Zeus hoverElement"
                      href="./projects/web/zeus/zeus.html"
                      style="display: block"
                      target="_blank"
                    >
                      <div class="projectWrapper">
                        <div>
                          <img
                            src="./img/projects/zeus.webp"
                            alt="Zeus Web Clone"
                          />
                        </div>
                        <h4>Zeus</h4>
                        <p>Web Clone</p>
                      </div></a
                    >
                    <a
                      class="project web Nightfury hoverElement"
                      href="./projects/web/tildeNightfury/nightfury/nightfury.html"
                      style="display: block"
                      target="_blank"
                    >
                      <div class="projectWrapper">
                        <div>
                          <img
                            src="./img/projects/nightfury.webp"
                            alt="Nightfury Web Clone"
                          />
                        </div>
                        <h4>Nightfury</h4>
                        <p>Web Clone</p>
                      </div></a
                    >
                    <a
                      class="project web mtmoto hoverElement"
                      href="./projects/web/mtmoto/mtmoto.html"
                      style="display: block"
                      target="_blank"
                    >
                      <div class="projectWrapper">
                        <div>
                          <img
                            src="./img/projects/mtmoto.webp"
                            alt="Mt Moto Web Clone"
                          />
                        </div>
                        <h4>MT Moto</h4>
                        <p>Web Clone</p>
                      </div></a
                    >
                    <a
                      class="project web premy hoverElement"
                      href="./projects/web/Premy/premy.html"
                      style="display: block"
                      target="_blank"
                    >
                      <div class="projectWrapper">
                        <div>
                          <img
                            src="./img/projects/premy.webp"
                            alt="Premy Web Clone"
                          />
                        </div>
                        <h4>Premy</h4>
                        <p>Web Clone</p>
                      </div></a
                    >
                    <a
                      class="project QA firstCypressTest hoverElement"
                      href="https://youtu.be/zlrxi5vxN4c"
                      style="display: block"
                      target="_blank"
                    >
                      <div class="projectWrapper">
                        <div>
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/zlrxi5vxN4c"
                            title="YouTube video player"
                            frameborder="0"
                            allowfullscreen
                          ></iframe>
                        </div>
                        <h4>Cypress.io</h4>
                        <p>My first automation test using Cypress.io</p>
                      </div></a
                    >
                  </article>

                  <div></div>
                </div>
              </section>
              <!-- quote -->
              <section id="quote">
                <header>
                  <p><span>Q</span>uote</p>
                </header>
                <div class="main">
                  <article class="article2">
                    <p>
                      <i class="fa-solid fa-quote-left"></i>
                      I find that the harder I work, the more luck I seem to
                      have.
                      <i class="fa-solid fa-quote-right"></i>
                    </p>
                    <p>- Thomas Jefferson -</p>
                  </article>
                  <p class="easterEgg">
                    EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg
                    EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg
                    EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg
                    EasterEgg EasterEgg
                  </p>
                </div>
              </section>
            </div>
            <!---------------------- PERSONAL ------------------------------>
            <div class="personal descriptionSegment">
              <section>
                <header>
                  <p><span>P</span>ersonality</p>
                </header>
                <div class="main">
                  <article class="article1">
                    <div class="oceanWrapper openness">
                      <div class="oceanLeft">Openness</div>
                      <div class="oceanRight">
                        <!-- ----------------------------------------- -->
                        <div class="trait">
                          <p>Down-to-Earth</p>
                          <div class="traitPercent"><span></span></div>

                          <p>Imaginative</p>
                        </div>
                        <!-- ----------------------------------------- -->
                        <div class="trait">
                          <p>Conforming</p>
                          <div class="traitPercent"><span></span></div>

                          <p>Creative</p>
                        </div>
                        <!-- ----------------------------------------- -->
                        <div class="trait">
                          <p>Conventional</p>
                          <div class="traitPercent"><span></span></div>

                          <p>Original</p>
                        </div>
                        <!-- ----------------------------------------- -->
                        <div class="trait">
                          <p>Uninquisitive</p>
                          <div class="traitPercent"><span></span></div>

                          <p>Curious</p>
                        </div>
                        <!-- ----------------------------------------- -->
                        <div class="trait">
                          <p>Careless</p>
                          <div class="traitPercent"><span></span></div>

                          <p>Empathetic</p>
                        </div>
                      </div>
                    </div>

                    <div class="oceanWrapper conscientiousness">
                      <div class="oceanLeft">Conscientiousness</div>
                      <div class="oceanRight">
                        <!-- ----------------------------------------- -->
                        <div class="trait">
                          <p>Negligent</p>
                          <div class="traitPercent"><span></span></div>

                          <p>Conscientious</p>
                        </div>
                        <!-- ----------------------------------------- -->
                        <div class="trait">
                          <p>Lazy</p>
                          <div class="traitPercent"><span></span></div>

                          <p>Hard-working</p>
                        </div>
                        <!-- ----------------------------------------- -->
                        <div class="trait">
                          <p>Disorganized</p>
                          <div class="traitPercent"><span></span></div>

                          <p>Well-organized</p>
                        </div>
                        <!-- ----------------------------------------- -->
                        <div class="trait">
                          <p>Late</p>
                          <div class="traitPercent"><span></span></div>

                          <p>Punctual</p>
                        </div>
                        <!-- ----------------------------------------- -->
                        <div class="trait">
                          <p>Inefficient</p>
                          <div class="traitPercent"><span></span></div>

                          <p>Reliable</p>
                        </div>
                      </div>
                    </div>
                    <div class="oceanWrapper extraversion">
                      <div class="oceanLeft">Extraversion</div>
                      <div class="oceanRight">
                        <!-- ----------------------------------------- -->
                        <div class="trait">
                          <p>Reticent</p>
                          <div class="traitPercent"><span></span></div>

                          <p>Talkative</p>
                        </div>
                        <!-- ----------------------------------------- -->
                        <div class="trait">
                          <p>Spontaneous</p>
                          <div class="traitPercent"><span></span></div>

                          <p>Thoughtful</p>
                        </div>
                        <!-- ----------------------------------------- -->
                        <div class="trait">
                          <p>Calm</p>
                          <div class="traitPercent"><span></span></div>

                          <p>Energetic</p>
                        </div>
                        <!-- ----------------------------------------- -->
                        <div class="trait">
                          <p>Analytical</p>
                          <div class="traitPercent"><span></span></div>

                          <p>Impulsive</p>
                        </div>
                        <!-- ----------------------------------------- -->
                        <div class="trait">
                          <p>Observant</p>
                          <div class="traitPercent"><span></span></div>

                          <p>Engaging</p>
                        </div>
                      </div>
                    </div>
                    <div class="oceanWrapper agreeableness">
                      <div class="oceanLeft">Agreeableness</div>
                      <div class="oceanRight">
                        <!-- ----------------------------------------- -->
                        <div class="trait">
                          <p>Critical</p>
                          <div class="traitPercent"><span></span></div>

                          <p>Kind</p>
                        </div>
                        <!-- ----------------------------------------- -->
                        <div class="trait">
                          <p>Disobedient</p>
                          <div class="traitPercent"><span></span></div>

                          <p>Cooperative</p>
                        </div>
                        <!-- ----------------------------------------- -->
                        <div class="trait">
                          <p>Selfish</p>
                          <div class="traitPercent"><span></span></div>

                          <p>Helpful</p>
                        </div>
                        <!-- ----------------------------------------- -->
                        <div class="trait">
                          <p>Rude</p>
                          <div class="traitPercent"><span></span></div>

                          <p>Courteous</p>
                        </div>
                        <!-- ----------------------------------------- -->
                        <div class="trait">
                          <p>Irritable</p>
                          <div class="traitPercent"><span></span></div>

                          <p>Good-natured</p>
                        </div>
                      </div>
                    </div>
                    <div class="oceanWrapper neuroticism">
                      <div class="oceanLeft">Neuroticism</div>
                      <div class="oceanRight">
                        <!-- ----------------------------------------- -->
                        <div class="trait">
                          <p>Calm</p>
                          <div class="traitPercent"><span></span></div>

                          <p>Nervous</p>
                        </div>
                        <!-- ----------------------------------------- -->
                        <div class="trait">
                          <p>Even-tempered</p>
                          <div class="traitPercent"><span></span></div>

                          <p>Temperamental</p>
                        </div>
                        <!-- ----------------------------------------- -->
                        <div class="trait">
                          <p>Moody</p>
                          <div class="traitPercent"><span></span></div>

                          <p>Steady</p>
                        </div>
                        <!-- ----------------------------------------- -->
                        <div class="trait">
                          <p>Unstable</p>
                          <div class="traitPercent"><span></span></div>

                          <p>Contented</p>
                        </div>
                        <!-- ----------------------------------------- -->
                        <div class="trait">
                          <p>Emotional</p>
                          <div class="traitPercent"><span></span></div>

                          <p>Relaxed</p>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </section>
              <!-----soft skills----->
              <section class="softSkills">
                <header>
                  <p><span>S</span>oft Skills</p>
                </header>
                <div class="main">
                  <article>
                    <div class="textWrapper">
                      <i class="fa-brands fa-gripfire"></i>
                      <div class="skillText">
                        Set of personal attributes and interpersonal abilities
                        which enables me to effectively communicate,
                        collaborate, adapt, and problem-solve in any
                        professional or personal context.
                      </div>
                      <i class="fa-brands fa-gripfire"></i>
                    </div>
                    <div class="skills">
                      <div>
                        <div class="skillName hoverElement">
                          <h4>Communication</h4>
                          <p>
                            I am able to effectively communicate with team
                            members and clients through clear and concise
                            language.
                          </p>
                        </div>
                        <div class="skillName hoverElement">
                          <h4>Teamwork</h4>
                          <p>
                            I work effectively with others, and contribute to
                            team goals by actively listening to others'
                            perspectives and ideas.
                          </p>
                        </div>
                        <div class="skillName hoverElement">
                          <h4>Adaptability</h4>
                          <p>
                            I am able to adapt quickly to new situations and
                            changing circumstances, and maintain a positive
                            attitude even when faced with challenges.
                          </p>
                        </div>
                        <div class="skillName hoverElement">
                          <h4>Problem-solving</h4>
                          <p>
                            I am able to identify potential problems and develop
                            creative solutions by thinking critically and
                            analyzing data.
                          </p>
                        </div>
                        <div class="skillName hoverElement">
                          <h4>Time-management</h4>
                          <p>
                            I prioritize my tasks and manage my time effectively
                            to ensure that I meet all deadlines and complete all
                            assignments on time.
                          </p>
                        </div>
                        <div class="skillName hoverElement">
                          <h4>Emotional intelligence</h4>
                          <p>
                            I am self-aware and able to understand and manage my
                            own emotions, while also empathizing with others and
                            building strong relationships.
                          </p>
                        </div>
                        <div class="skillName hoverElement">
                          <h4>Conflict resolution</h4>
                          <p>
                            I am able to identify conflicts and resolve them in
                            a constructive and positive manner, by listening
                            actively, seeking common ground, and finding
                            mutually agreeable solutions.
                          </p>
                        </div>
                        <div class="skillName hoverElement">
                          <h4>Critical thinking</h4>
                          <p>
                            My analytical and critical thinking skills allow me
                            to carefully evaluate arguments and analyze
                            information, ultimately leading to informed and
                            strategic decision-making.
                          </p>
                        </div>
                        <div class="skillName hoverElement">
                          <h4>Attention to detail</h4>
                          <p>
                            I adopt a meticulous approach to my work by paying
                            close attention to even the smallest details,
                            recognizing the impact they can have on the overall
                            success of a project.
                          </p>
                        </div>
                        <div class="skillName hoverElement">
                          <h4>Positive attitude</h4>
                          <p>
                            Even in challenging situations, I maintain a
                            positive and solution-focused outlook, viewing
                            obstacles as opportunities for growth and
                            development.
                          </p>
                        </div>
                        <div class="skillName hoverElement">
                          <h4>Networking</h4>
                          <p>
                            I build and maintain relationships with others in a
                            professional context to expand my network and grow
                            my career.
                          </p>
                        </div>
                      </div>
                      <div>
                        <i class="fa-solid fa-comments"></i>

                        <i class="fa-solid fa-users"></i>
                        <i class="fa-solid fa-compass"></i>
                        <i class="fa-solid fa-handshake"></i>

                        <i class="fa-solid fa-brain"></i>
                        <i class="fa-solid fa-lightbulb"></i>
                        <i class="fa-solid fa-unlock"></i>

                        <i class="fa-solid fa-people-arrows"></i>
                        <i class="fa-solid fa-user-gear"></i>
                        <i class="fa-solid fa-people-carry-box"></i>
                      </div>
                      <div>
                        <div class="skillName hoverElement">
                          <h4>Decision-making</h4>
                          <p>
                            I make informed decisions by analyzing data, drawing
                            on my experience, and seeking input from others to
                            align with organizational goals.
                          </p>
                        </div>
                        <div class="skillName hoverElement">
                          <h4>Stress management</h4>
                          <p>
                            I manage and cope with stress effectively, including
                            time management, prioritization, and self-care
                            strategies.
                          </p>
                        </div>
                        <div class="skillName hoverElement">
                          <h4>Self-motivation</h4>
                          <p>
                            I stay motivated and focused on achieving my goals,
                            even when faced with challenges, by maintaining a
                            positive attitude and a long-term perspective.
                          </p>
                        </div>

                        <div class="skillName hoverElement">
                          <h4>Active listening</h4>
                          <p>
                            I believe that effective communication is key to
                            building strong relationships, and I listen
                            attentively and respond thoughtfully to others,
                            taking into account their perspective and needs.
                          </p>
                        </div>
                        <div class="skillName hoverElement">
                          <h4>Goal-setting</h4>
                          <p>
                            I approach goal-setting with a structured and
                            analytical mindset, developing achievable plans and
                            strategies that take potential obstacles into
                            account.
                          </p>
                        </div>
                        <div class="skillName hoverElement">
                          <h4>Empathy</h4>
                          <p>
                            I believe empathy is essential for building strong
                            relationships, and I actively seek to understand and
                            connect with the emotions and experiences of others.
                          </p>
                        </div>
                        <div class="skillName hoverElement">
                          <h4>Trustworthiness</h4>
                          <p>
                            I firmly believe that honesty, reliability, and
                            ethical behavior are key components of a successful
                            and fulfilling professional life. As such, I
                            prioritize these qualities in all of my
                            interactions.
                          </p>
                        </div>
                        <div class="skillName hoverElement">
                          <h4>Creativity</h4>
                          <p>
                            I have a natural curiosity and a desire to explore
                            different perspectives, which allows me to think
                            outside of the box and come up with novel approaches
                            to complex problems.
                          </p>
                        </div>
                        <div class="skillName hoverElement">
                          <h4>Accountability</h4>
                          <p>
                            I take ownership of my responsibilities and actions,
                            and I recognize that accountability is a fundamental
                            aspect of personal and professional growth.
                          </p>
                        </div>
                        <div class="skillName hoverElement">
                          <h4>Positive reinforcement</h4>
                          <p>
                            I acknowledge and celebrate both my own and others'
                            positive behaviors and achievements, providing
                            encouragement and motivation to continue striving
                            towards success.
                          </p>
                        </div>
                        <div class="skillName hoverElement">
                          <h4>Continuous learning</h4>
                          <p>
                            I am committed and capable of continuous learning to
                            enhance my abilities and stay up-to-date with the
                            latest trends and advancements in the industry.
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                  <!-- who I am -->
                  <section id="whoIam">
                    <header>
                      <p><span>W</span>ho I am</p>
                    </header>
                    <div class="main">
                      <article class="article3">
                        <i class="fa-solid fa-user-tag"></i>
                        <p>
                          When it comes to describing myself as a prospective
                          job candidate, I place significant importance on
                          expressing that being a perfectionist is an integral
                          part of who I am. I possess a great level of precision
                          and accuracy when it comes to paying attention to even
                          the smallest of details. I am highly sensitive to any
                          potential bugs, errors or conflicts that may arise,
                          always going the extra mile to ensure that everything
                          is working seamlessly and to the best of my ability.
                          <br /><br />
                          I have an insatiable love for seeking ways to improve
                          and simplify processes, leading to increased
                          efficiency. Not only do I apply this mindset to
                          optimize my own workflow, but I also enjoy assisting
                          others in becoming more efficient. By sharing my
                          ideas, I empower them to streamline their work and
                          achieve greater productivity. My analytical and
                          logical thinking enables me to deconstruct complex
                          problems into their core components, effectively
                          developing efficient solutions that address the root
                          of an issue. <br /><br />I consider myself a reliable,
                          non-confrontational, open-minded and quick-to-learn
                          individual who adapts to new situations and challenges
                          with ease, which has allowed me to consistently excel
                          in my past roles. <br /><br />
                          Although I may not be the best at what I do, I
                          consistently give my best effort and push myself to my
                          limits. My greatest fulfillment comes from ensuring
                          that those around me are satisfied with the results of
                          my work.
                        </p>
                      </article>
                    </div>
                  </section>
                  <!-- What Ive learned -->
                  <section id="whatIveLearned">
                    <header>
                      <p><span>W</span>hat I've learned</p>
                    </header>
                    <div class="main">
                      <article class="article4">
                        <p>
                          <i class="fa-solid fa-circle-check"></i
                          ><span>Learning by doing.</span>
                          I've learned that the most effective way to learn
                          coding is by actually doing it. This hands-on approach
                          can help me gain a deeper understanding of programming
                          concepts and improve my problem-solving abilities.
                        </p>
                        <br />

                        <p>
                          <i class="fa-solid fa-circle-check"></i
                          ><span>Persistence is key.</span>
                          Developing a portfolio website can be challenging,
                          especially since I'm new to coding and web
                          development. However, by persevering and pushing
                          through the difficulties, I can ultimately achieve my
                          goals.
                        </p>
                        <br />
                        <p>
                          <i class="fa-solid fa-circle-check"></i
                          ><span>Attention to detail matters.</span>
                          Developing a website involves a lot of small details
                          that can make a big difference in the overall quality
                          of the site.
                        </p>
                        <br />
                        <p>
                          <i class="fa-solid fa-circle-check"></i
                          ><span>There's always one more bug to fix.</span>
                          Software development is a complex and dynamic process,
                          and I believe that even the most skilled and
                          experienced developers cannot anticipate every
                          possible scenario that may lead to bugs and errors.
                        </p>
                        <br />
                        <p>
                          <i class="fa-solid fa-circle-check"></i
                          ><span>Learning is an ongoing process.</span>
                          The pursuit of knowledge and expertise is a
                          never-ending journey, regardless of how much one may
                          already possess. I understand that there is an
                          infinite expanse of knowledge, insight, and
                          understanding waiting to be discovered and learned.
                        </p>
                        <br />
                        <p>
                          <i class="fa-solid fa-circle-check"></i
                          ><span
                            >Planning and organization can save time and
                            effort.</span
                          >

                          Before starting building a project, it's important to
                          plan out the structure, content, and design.
                          Developing a plan and organizing my files and assets
                          can save my time and effort in the long run.
                        </p>
                        <br />
                        <p>
                          <i class="fa-solid fa-circle-check"></i
                          ><span>Practice makes perfect.</span>
                          Although website development can be difficult
                          sometimes, I find that the more I practice, the easier
                          it becomes.
                        </p>
                        <br />
                        <p>
                          <i class="fa-solid fa-circle-check"></i
                          ><span>I shouldn't be afraid to ask for help.</span>
                          It's perfectly fine to look for help or seek guidance
                          when necessary, particularly when I am new in the
                          field. In fact, knowing where and how to seek help can
                          be a great way to learn and grow my skills as a
                          developer.
                        </p>
                        <br />
                        <p>
                          <i class="fa-solid fa-circle-check"></i
                          ><span>A website is never truly finished.</span>
                          There is always room for improvement or new features
                          to add.
                        </p>
                        <br />

                        <p>
                          <i class="fa-solid fa-circle-check"></i
                          ><span>Building a website is empowering.</span>
                          Developing a website can be a challenging but
                          rewarding experience. The ability to create something
                          from scratch and see it come to life can be incredibly
                          empowering and gives me the confidence to tackle even
                          more challenging projects in the future.
                        </p>
                      </article>
                    </div>
                  </section>
                  <!-- quote -->
                  <section id="quote">
                    <header>
                      <p><span>Q</span>uote</p>
                    </header>
                    <div class="main">
                      <article class="article2">
                        <p>
                          <i class="fa-solid fa-quote-left"></i>
                          Everything you've ever wanted is on the other side of
                          fear.
                          <i class="fa-solid fa-quote-right"></i>
                        </p>
                        <p>- George Addair -</p>
                      </article>
                      <p class="easterEgg">
                        EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg
                        EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg
                        EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg
                        EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg
                      </p>
                    </div>
                  </section>
                </div>
              </section>
            </div>
            <!-- CONTACT -->
            <div class="contact descriptionSegment">
              <section id="getInTouch">
                <header>
                  <p><span>G</span>et in Touch</p>
                </header>
                <div class="main">
                  <article class="article1">
                    <div class="map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.873269895488!2d21.24111821616148!3d48.9939690991041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473eed7b706b13a1%3A0x32bbaed148adcede!2zSGxhdm7DoSAxLCAwODAgMDEgUHJlxaFvdg!5e0!3m2!1ssk!2ssk!4v1680556180581!5m2!1ssk!2ssk"
                        width="100%"
                        height="250"
                        style="border: 0"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </article>
                  <article class="article2">
                    <p><span>Address</span><span>Prešov, Slovakia</span></p>
                    <p>
                      <span>Email</span
                      ><span class="hoverElement"
                        ><a href="mailto:contact@jancii.com"
                          >contact@jancii.com</a
                        ></span
                      >
                    </p>
                    <p>
                      <span>Phone</span
                      ><span class="hoverElement"
                        ><a href="tel:">Included in CV</a></span
                      >
                    </p>
                    <p><span>Availability</span><span>Available</span></p>
                  </article>
                </div>
              </section>
              <section id="contactForm">
                <header>
                  <p><span>C</span>ontact Form</p>
                </header>
                <div class="main">
                  <article class="article1 formContainer">
                    <form
                      method="POST"
                      action="https://formsubmit.co/0288d5bacfb367672b38f2f7af698f5b"
                    >
                      <div class="form-row">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Name"
                          required
                        />

                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </div>

                      <textarea
                        id="message"
                        name="message"
                        rows="3"
                        placeholder="Your Message"
                        required
                      ></textarea>

                      <input
                        type="hidden"
                        name="_next"
                        value="https://jancii.com/thankyou.html"
                      />

                      <button type="submit">
                        SEND MESSAGE <i class="fa-solid fa-chevron-right"></i>
                      </button>
                    </form>
                  </article>
                  <p class="easterEgg">
                    EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg
                    EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg
                    EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg
                    EasterEgg EasterEgg
                  </p>
                </div>
              </section>
            </div>
          </section>
        </main>
      </div>
    </div>

    <script src="js/script.js"></script>
  </body>
</html>
