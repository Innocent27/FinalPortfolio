// Project data
const projects = [
    {
      title: "LC Studio Website",
      desc: "I created this website for the launch of LC Studio, a company focused training and promoting new developers",
      stack: "HTML/CSS/JS",
      img: "./images/LC_Studio.png",
      img_alt: "LC Studio Website",
      github: "https://github.com/JasonWandrag/LC_Studio_front_end",
      live: "https://www.lcstudio.co.za/",
    },
    {
      title: "Splashify",
      desc: "This is a scrollable gallery using the Unsplash API",
      stack: "React/CSS",
      img: "./images/Splashify.png",
      img_alt: "Splashify - The Unsplash Viewer",
      github: "https://github.com/JasonWandrag/splashify",
      live: "https://jason-wandrag-splashify.netlify.app/",
    },
  ];
  
  const totalSlides = projects.length;
  // Get HTML containers to add elements to
  let slidesContainer = document.getElementById("carousel-container");
  let bulletsContainer = document.getElementById("carousel-bullets");
  
  // Function to create slides
  function createSlide(project, index) {
    const slide = `
          <div class="carousel-slide${index == 0 ? " active" : ""}">
              <div class="carousel-content">
                  <h3>${project.title}</h3>
                  <h4>Made with: ${project.stack}</h4>
                  <p>${project.desc}</p>
                  <div class="carousel-btns">
                      <a class="form-submit" target="_blank" href="${
                        project.live
                      }">Live</a>
                      <a class="form-submit" target="_blank" href="${
                        project.github
                      }">Github</a>
                  </div>
              </div>
              <img class="carousel-img" src=${project.img} alt=${
      project.img_alt
    } />
          </div>
      `;
    // Add slide to container
    slidesContainer.innerHTML += slide;
  }
  
  // Function to create bullets
  function createBullet(index) {
    // Create button to be clicked on and add attributes
    let bulletButton = document.createElement("button");
    bulletButton.classList.add("carousel-bullet");
    bulletButton.setAttribute("onclick", `bulletSlider(${index})`);
  
    // Create bullet with active classes
    let bullet = document.createElement("i");
    bullet.classList.add("fas");
    bullet.classList.add("fa-circle");
    if (index == 0) bullet.classList.add("active");
  
    // Add bullet to bulletButton
    bulletButton.appendChild(bullet);
  
    // Add bulletButton to buttonContainer
    bulletsContainer.appendChild(bulletButton);
  }
  
  // Bullet press functionality
  let bulletSlider = (index) => {
    let bullets = document.getElementsByClassName("fa-circle");
    let slides = document.getElementsByClassName("carousel-slide");
    for (let i = 0; i < totalSlides; i++) {
      if (index == i) {
        bullets[i].classList.add("active");
        slides[i].classList.add("active");
      } else {
        bullets[i].classList.remove("active");
        slides[i].classList.remove("active");
      }
    }
  };
  
  // Side Caret functionality
  let changeSlide = (toSlide) => {
    let bullets = document.getElementsByClassName("fa-circle");
    let slides = document.getElementsByClassName("carousel-slide");
    for (let i = 0; i < totalSlides; i++) {
      if (slides[i].classList.contains("active")) {
        let endOfArray = i + toSlide > totalSlides - 1 ? true : false;
        let beginningOfArray = i + toSlide < 0 ? true : false;
        slides[i].classList.remove("active");
        bullets[i].classList.remove("active");
        if (endOfArray) {
          slides[0].classList.add("active");
          bullets[0].classList.add("active");
        } else if (beginningOfArray) {
          bullets[totalSlides - 1].classList.add("active");
          slides[totalSlides - 1].classList.add("active");
        } else {
          bullets[i + toSlide].classList.add("active");
          slides[i + toSlide].classList.add("active");
        }
        break;
      }
    }
  };
  
  projects.forEach((project, index) => {
    createBullet(index);
    createSlide(project, index);
  });