const dots = document.querySelectorAll('.dot')
// dots[slideIndex].classList.add('selected')
let slideIndex = 0;
showSlides();


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("sliderImage");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  dots.forEach((dot, i) => {
    if (i === slideIndex - 1) {
      dot.classList.add('selected')
    } else {
      dot.classList.remove('selected')
    }
  })
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}
