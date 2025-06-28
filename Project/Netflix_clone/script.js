// script.js for sliding  cards
const slider = document.querySelector(".slider");
const leftButton = document.querySelector(".slider-btn.left");
const rightButton = document.querySelector(".slider-btn.right");

let scrollPosition = 0;

// Get the total width of the slider content
const totalWidth = slider.scrollWidth - slider.offsetWidth;

// Function to update button visibility
function updateButtons() {
  if (scrollPosition <= 0) {
    leftButton.classList.add("hidden"); // Hide left button at the start
  } else {
    leftButton.classList.remove("hidden");
  }

  if (scrollPosition >= totalWidth) {
    rightButton.classList.add("hidden"); // Hide right button at the end
  } else {
    rightButton.classList.remove("hidden");
  }
}

// Add event listeners for the buttons
leftButton.addEventListener("click", () => {
  const cardWidth = document.querySelector(".card").offsetWidth * 7 + 20; // Card width + margin
  scrollPosition -= cardWidth;
  if (scrollPosition < 0) scrollPosition = 0; // Prevent overscrolling
  // slider.style.transform = `translateX(-${scrollPosition}px)`;
  slider.style.transform=`translateX(${scrollPosition}px)`
  updateButtons();
});

rightButton.addEventListener("click", () => {
  const cardWidth = document.querySelector(".card").offsetWidth * 7 + 20; // Card width + margin
  scrollPosition += cardWidth;

  if (scrollPosition > totalWidth) scrollPosition = totalWidth; // Prevent overscrolling

  slider.style.transform = `translateX(-${scrollPosition}px)`;
  slider.style.transform = `translateX(${scrollPosition}px)`;
  updateButtons();
});


// Initialize button visibility
updateButtons();

// Select the slider container
// const sliders = document.querySelectorAll('.slider');

// window.addEventListener('resize', () => {
//   sliders.forEach((slider) => {
//     // Reset the slider's scroll position
//     slider.style.transform = 'translateX(0)';
//   });
// });


// making image variable to select .img classes
const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");
const image3 = document.querySelector(".img3");
const image4 = document.querySelector(".img4");
const image5 = document.querySelector(".img5");
const image6 = document.querySelector(".img6");
const image7 = document.querySelector(".img7");
const image8 = document.querySelector(".img8");
const image9 = document.querySelector(".img9");
const image = document.querySelector(".img");

// a variable for selecting option
const dropdown = document.getElementById("media");

// making object for image links
const images1 = {
  movies: "assets/images/movie1.webp",
  tvshows: "assets/images/tvshow.webp",
};
// making object for image links
const images2 = {
  movies: "assets/images/movie2.webp",
  tvshows: "assets/images/tvshow1.webp",
};
// making object for image links
const images3 = {
  movies: "assets/images/movie3.webp",
  tvshows: "assets/images/tvshow2.webp",
};
// making object for image links
const images4 = {
  movies: "assets/images/movie4.webp",
  tvshows: "assets/images/tvshow3.webp",
};
// making object for image links
const images5 = {
  movies: "assets/images/movie5.webp",
  tvshows: "assets/images/tvshow4.webp",
};
// making object for image links
const images6 = {
  movies: "assets/images/movie6.webp",
  tvshows: "assets/images/tvshow5.webp",
};
// making object for image links
const images7 = {
  movies: "assets/images/movie7.webp",
  tvshows: "assets/images/tvshow6.webp",
};
// making object for image links
const images8 = {
  movies: "assets/images/movie6.webp",
};
// making object for image links
const images9 = {
  movies: "assets/images/movie9.webp",
};
// making object for image links
const images10 = {
  movies: "assets/images/movie.webp",
};
// make an event listener when select option is changed
dropdown.addEventListener("change", (event) => {
  const opt_value = event.target.value;
  // using ternary operaor to style background image from javascript
  image1.style.backgroundImage = images1[opt_value]
    ? `url('${images1[opt_value]}')`
    : `url('assets/images/movie1.webp')`;
});
// make an event listener when select option is changed
dropdown.addEventListener("change", (event) => {
  const opt_value = event.target.value;
  image2.style.backgroundImage = images2[opt_value]
    ? `url('${images2[opt_value]}')`
    : `url('assets/images/movie2.webp')`;
});
// make an event listener when select option is changed
dropdown.addEventListener("change", (event) => {
  const opt_value = event.target.value;
  // using ternary operaor to style background image from javascript
  image3.style.backgroundImage = images3[opt_value]
    ? `url('${images3[opt_value]}')`
    : `url('assets/images/movie3.webp')`;
});
// make an event listener when select option is changed
dropdown.addEventListener("change", (event) => {
  const opt_value = event.target.value;
  image4.style.backgroundImage = images4[opt_value]
    ? `url('${images4[opt_value]}')`
    : `url('assets/images/movie4.webp')`;
});
// make an event listener when select option is changed
dropdown.addEventListener("change", (event) => {
  const opt_value = event.target.value;
  // using ternary operaor to style background image from javascript
  image5.style.backgroundImage = images5[opt_value]
    ? `url('${images5[opt_value]}')`
    : `url('assets/images/movie5.webp')`;
});
// make an event listener when select option is changed
dropdown.addEventListener("change", (event) => {
  const opt_value = event.target.value;
  // using ternary operaor to style background image from javascript
  image6.style.backgroundImage = images6[opt_value]
    ? `url('${images6[opt_value]}')`
    : `url('assets/images/movie6.webp')`;
});
// make an event listener when select option is changed
dropdown.addEventListener("change", (event) => {
  const opt_value = event.target.value;
  // using ternary operaor to style background image from javascript
  image7.style.backgroundImage = images7[opt_value]
    ? `url('${images7[opt_value]}')`
    : `url('assets/images/movie7.webp')`;
});
// make an event listener when select option is changed
dropdown.addEventListener("change", (event) => {
  const opt_value = event.target.value;
  // using ternary operaor to style background image from javascript
  image8.style.backgroundImage = images8[opt_value]
    ? `url('${images8[opt_value]}')`
    : `url('assets/images/movie8.webp')`;
});
// make an event listener when select option is changed
dropdown.addEventListener("change", (event) => {
  const opt_value = event.target.value;
  // using ternary operaor to style background image from javascript
  image9.style.backgroundImage = images9[opt_value]
    ? `url('${images9[opt_value]}')`
    : `url('assets/images/movie9.webp')`;
});
// make an event listener when select option is changed
dropdown.addEventListener("change", (event) => {
  const opt_value = event.target.value;
  // using ternary operaor to style background image from javascript
  image.style.backgroundImage = images10[opt_value]
    ? `url('${images10[opt_value]}')`
    : `url('assets/images/movie10.webp')`;
});

const btn = document.getElementById("toggle");
const icon = document.getElementById("icon");
const content = document.getElementById("content");
// changing button icon when toggle on button
btn.addEventListener("click", () => {
  content.classList.toggle("hidden");
  if (icon.classList.contains("fa-plus")) {
    icon.classList.remove("fa-plus");
    icon.classList.add("fa-times");
  } else {
    icon.classList.add("fa-plus");
    icon.classList.remove("fa-times");
  }
});
const btn1 = document.getElementById("toggle1");
const icon1 = document.getElementById("icon1");
const content1 = document.getElementById("content1");
// changing button icon when toggle on button
btn1.addEventListener("click", () => {
  content1.classList.toggle("hidden");
  if (icon1.classList.contains("fa-plus")) {
    icon1.classList.remove("fa-plus");
    icon1.classList.add("fa-times");
  } else {
    icon1.classList.add("fa-plus");
    icon1.classList.remove("fa-times");
  }
});
const btn2 = document.getElementById("toggle2");
const icon2 = document.getElementById("icon2");
const content2 = document.getElementById("content2");
// changing button icon when toggle on button
btn2.addEventListener("click", () => {
  content2.classList.toggle("hidden");
  if (icon2.classList.contains("fa-plus")) {
    icon2.classList.remove("fa-plus");
    icon2.classList.add("fa-times");
  } else {
    icon2.classList.add("fa-plus");
    icon2.classList.remove("fa-times");
  }
});
const btn3 = document.getElementById("toggle3");
const icon3 = document.getElementById("icon3");
const content3 = document.getElementById("content3");
// changing button icon when toggle on button
btn3.addEventListener("click", () => {
  content3.classList.toggle("hidden");
  if (icon3.classList.contains("fa-plus")) {
    icon3.classList.remove("fa-plus");
    icon3.classList.add("fa-times");
  } else {
    icon3.classList.add("fa-plus");
    icon3.classList.remove("fa-times");
  }
});
const btn4 = document.getElementById("toggle4");
const icon4 = document.getElementById("icon4");
const content4 = document.getElementById("content4");
// changing button icon when toggle on button
btn4.addEventListener("click", () => {
  content4.classList.toggle("hidden");
  if (icon4.classList.contains("fa-plus")) {
    icon4.classList.remove("fa-plus");
    icon4.classList.add("fa-times");
  } else {
    icon4.classList.add("fa-plus");
    icon4.classList.remove("fa-times");
  }
});
const btn5 = document.getElementById("toggle5");
const icon5 = document.getElementById("icon5");
const content5 = document.getElementById("content5");
// changing button icon when toggle on button
btn5.addEventListener("click", () => {
  content5.classList.toggle("hidden");
  if (icon5.classList.contains("fa-plus")) {
    icon5.classList.remove("fa-plus");
    icon5.classList.add("fa-times");
  } else {
    icon5.classList.add("fa-plus");
    icon5.classList.remove("fa-times");
  }
});
