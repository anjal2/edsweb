
export default function decorate(block) {
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });

    var filtered = false;

    $('.js-filter').on('click', function () {
        if (filtered === false) {
            $('.filtering').slick('slickFilter', ':even');
            $(this).text('Unfilter Slides');
            filtered = true;
        } else {
            $('.filtering').slick('slickUnfilter');
            $(this).text('Filter Slides');
            filtered = false;
        }
    });


    // // --------------
    // const div1 = document.getElementsByClassName('slider-left-container')[0]; // Added index [0] to select the first element
    // const div2 = document.getElementsByClassName('carousel-container')[0]; // Added index [0] to select the first element

    // // Create a new div to wrap them
    // const wrapperDiv = document.createElement("div");
    // wrapperDiv.className="parentContainer";

    // // Wrap div1 inside the new div
    // if (div1) {
    //     wrapperDiv.appendChild(div1.cloneNode(true)); // Cloned the node to avoid moving it
    // } else {
    //     console.error("Element with class 'slider-left-container' not found.");
    // }

    // // Wrap div2 inside the new div (optional, depending on desired order)
    // if (div2) {
    //     wrapperDiv.appendChild(div2.cloneNode(true)); // Cloned the node to avoid moving it
    // } else {
    //     console.error("Element with class 'carousel-container' not found.");
    // }

    // // Insert the wrapper div directly into the body (assuming no parent container)
    // // document.body.appendChild(wrapperDiv);



    // const referenceDiv = document.getElementsByClassName("columns-container"); // Replace with your div ID

    // // Get the parent container of the reference div
    // // const parentContainer = referenceDiv.parentNode;

    // // // Insert the wrapper div after the reference div
    // // parentContainer.insertBefore(wrapperDiv, referenceDiv.nextSibling);

    // const targetDivId = "columns-container"; // Replace with your target div ID
    // const newDivContent = "This is the new div content."; // Optional

    // insertDivAfterTarget(targetDivId, newDivContent);

}