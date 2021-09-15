// Select Land Page
let landPage = document.querySelector('.landing-page');

// get Array of imgs
let imgsArray = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '8.jpg'];

let counterLandPage = 0;

setInterval(() => {
  //Change Background Image Url
  // if ( == 'url(imgs/1.jpg)') {
  //url("imgs/2.jpg")
  if (
    landPage.style.backgroundImage == 'url("imgs/1.jpg")' ||
    landPage.style.backgroundImage == 'url("imgs/7.jpg")'
  ) {
    // console.log(landPage.style.backgroundImage);
    landPage.style.backgroundPosition = '0% 0%';
  }
  landPage.style.backgroundImage =
    "url('imgs/" + imgsArray[counterLandPage] + "')";
  counterLandPage++;
  if (counterLandPage == imgsArray.length) {
    counterLandPage = 0;
  }
}, 6000);

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

let toggleBtn = document.querySelector('.navbar-toggler'),
  nav = document.querySelector('.navbar-collapse');

toggleBtn.onclick = function (e) {
  e.stopPropagation();
  if (this.classList.contains('collapsed')) {
    this.classList.remove('collapsed');
    nav.classList.add('show');
    let overlay = document.createElement('div');

    // Add class to overlay
    overlay.className = 'popup-overlay';

    // Append Overlay To body
    document.body.appendChild(overlay);
  } else {
    this.classList.add('collapsed');
    nav.classList.remove('show');
    document.querySelector('.popup-overlay').remove();
  }
};
