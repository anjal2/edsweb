
export default function decorate(block){
$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3
  });
  
  var filtered = false;
  
  $('.js-filter').on('click', function(){
    if (filtered === false) {
      $('.filtering').slick('slickFilter',':even');
      $(this).text('Unfilter Slides');
      filtered = true;
    } else {
      $('.filtering').slick('slickUnfilter');
      $(this).text('Filter Slides');
      filtered = false;
    }
  });


// ---------------
var firstDiv = document.getElementsByClassName('slider-left-container');
    var secondDiv = document.getElementsByClassName('carousel-container');

    // Create a new parent div
    var parentDiv = document.createElement('div');

    // Assign an ID to the parent div
    parentDiv.className = 'parentContainer';

    // Append the parent div to the DOM
    firstDiv.parentNode.insertBefore(parentDiv, firstDiv);

    // Move the existing div elements into the parent div
    parentDiv.appendChild(firstDiv);
    parentDiv.appendChild(secondDiv);



}