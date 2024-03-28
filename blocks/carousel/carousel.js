
export default function decorate(block){
// $('.carousel').slick({
//     slidesToShow: 3,
//     slidesToScroll: 3
//   });
  
//   var filtered = false;
  
//   $('.js-filter').on('click', function(){
//     if (filtered === false) {
//       $('.filtering').slick('slickFilter',':even');
//       $(this).text('Unfilter Slides');
//       filtered = true;
//     } else {
//       $('.filtering').slick('slickUnfilter');
//       $(this).text('Filter Slides');
//       filtered = false;
//     }
//   });

document.addEventListener("DOMContentLoaded", function() {
    console.log("inside tjis");
    const carousel = document.querySelector(".carousel");
    const carouselWrapper = document.querySelector(".carousel-wrapper");
    const slides = document.querySelectorAll(".carousel > div");
    const slideWidth = slides[0].offsetWidth;
    const numSlides = slides.length;
    const numVisibleSlides = 3;
    let currentIndex = 0;
  
    function moveCarousel(index) {
      const offset = -index * slideWidth;
      carouselWrapper.style.transform = translateX(${offset}px);
      currentIndex = index;
    }
  
    function nextSlide() {
      if (currentIndex < numSlides - numVisibleSlides) {
        moveCarousel(currentIndex + 1);
      } else {
        moveCarousel(0);
      }
    }
  
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
  });

}