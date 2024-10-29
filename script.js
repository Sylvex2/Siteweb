function ShowSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    const element = document.querySelector('.hideonweb');
    element.classList.toggle('hideonweb');
}
function hiddensidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

// Ascunde meniul mobil la încărcarea paginii dacă ecranul este mai mare de 800px
window.addEventListener('resize', function() {
    const sidebar = document.querySelector('.sidebar'); 
    const menuButton=document.querySelector('.menubutton')
    if (window.innerWidth > 1024) {
        sidebar.style.display = 'none';
        menuButton.style.display = 'none';
    } else {
        sidebar.style.display = 'none';
        menuButton.style.display = 'block';
    }
    
});
function openFullscreen(img) {
  const fullscreen = document.getElementById("fullscreen");
  const fullscreenImg = document.getElementById("fullscreenImg");
  fullscreen.style.display = "flex";
  fullscreenImg.src = img.src;
}

// Functie pentru inchiderea lightbox-ului
function closeFullscreen() {
  const fullscreen = document.getElementById("fullscreen");
  fullscreen.style.display = "none";
}

// Event listener pentru inchiderea lightbox-ului cand se face clic in afara imaginii
document.getElementById("fullscreen").addEventListener("click", function(event) {
  const fullscreenImg = document.getElementById("fullscreenImg");
  if (event.target !== fullscreenImg) {
      closeFullscreen();
  }
});

//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 1500;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}
prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}
/* pentru scroll sa fie navbaru sticky */
/*let lastScrollTop = 0;
const header = document.querySelector('.header');
const mediaQuery = window.matchMedia('(min-width: 768px)');

function handleScroll() {
  let scrollTop = window.scrollY;
  if (scrollTop > lastScrollTop ) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }
  lastScrollTop = scrollTop;
}

function handleMousemove(event) {
  if (event.clientY < 200) {  // Change this value to adjust hover area
    header.classList.remove('hidden');
  } else if (window.scrollY > 0) {
    header.classList.add('hidden');
  }
}

function handleMediaQueryChange(e) {
  if (e.matches) {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMousemove);
  } else {
    window.removeEventListener('scroll', handleScroll);
    document.removeEventListener('mousemove', handleMousemove);
    header.classList.remove('hidden'); // Make sure header is visible on mobile
  }
}

// Initial check
handleMediaQueryChange(mediaQuery);

// Listen for changes
mediaQuery.addEventListener('change', handleMediaQueryChange);

  */








