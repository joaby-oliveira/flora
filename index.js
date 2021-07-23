const dots = document.querySelectorAll('.dot')
let slideIndex = 0
showSlides()


function showSlides() {
  let i
  let slides = document.getElementsByClassName("sliderImage")
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block"
  dots.forEach((dot, i) => {
    if (i === slideIndex - 1) {
      dot.classList.add('selected')
    } else {
      dot.classList.remove('selected')
    }
  })
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}

const menu = document.querySelector('.menuContainer')
const menuButton = document.querySelector('#menu')
menuButton.addEventListener('click', () => {
  const isOpen = menu.classList.contains('show')
  if (isOpen) {
    menu.classList.remove('show')
  } else {
    menu.classList.add('show')
  }
})


const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
  target.forEach((e) => {
    if ((windowTop) > e.offsetTop) {
      e.classList.add(animationClass)
    } else {
      e.classList.remove(animationClass)
    }
  })
}

window.addEventListener('scroll', () => {
  animeScroll()
})