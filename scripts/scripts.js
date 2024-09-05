// Selects all elements with the class "accordion" and stores them in the variable acc
var acc = document.getElementsByClassName("accordion");
// Initializes a variable for loop iteration
var i;

// Loops through each accordion element
for (i = 0; i < acc.length; i++) {
    // Adds a click event listener to each accordion element
    acc[i].addEventListener("click", function() {
        // Toggles the "active" class on the clicked accordion element
        this.classList.toggle("active");
        // Selects the next sibling element (the panel) to show or hide
        var panel = this.nextElementSibling;
        // Checks if the panel currently has a maxHeight set
        if (panel.style.maxHeight) {
            // Hides the panel by setting maxHeight to null
            panel.style.maxHeight = null;
        } else {
            // Shows the panel by setting maxHeight to its scrollHeight
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// Sets a function to run when the user scrolls
window.onscroll = function() { scrollFunction() };

// Function to adjust the position of the navbar based on scroll position
function scrollFunction() {
    // Checks if the scroll position is greater than 100 pixels
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        // Sets the navbar's top position to 0 (visible)
        document.getElementById("navbar").style.top = "0";
    } else {
        // Hides the navbar by setting its top position to -60px
        document.getElementById("navbar").style.top = "-60px";
    }
}

// Function to toggle the navigation menu between default and responsive states
function myFunction() {
    // Selects the navigation element by ID
    var x = document.getElementById("myTopnav");
    // Checks if the element's class is "topnav"
    if (x.className === "topnav") {
        // Appends " responsive" to the class name for responsiveness
        x.className += " responsive";
    } else {
        // Resets the class to "topnav"
        x.className = "topnav";
    }
}

// Sets up a scroll animation using requestAnimationFrame or setTimeout for older browsers
var scroll = window.requestAnimationFrame || function(callback) { window.setTimeout(callback, 1000 / 60) };
// Selects all elements with the class "show-on-scroll"
var elementsToShow = document.querySelectorAll('.show-on-scroll');

// Function to loop through elements and add/remove visibility class based on viewport
function loop() {
    // Iterates over each element to show/hide based on visibility
    Array.prototype.forEach.call(elementsToShow, function(element) {
        if (isElementInViewport(element)) {
            // Adds the "is-visible" class if the element is in the viewport
            element.classList.add('is-visible');
        } else {
            // Removes the "is-visible" class if the element is not in the viewport
            element.classList.remove('is-visible');
        }
    });

    // Continues the loop
    scroll(loop);
}

// Function to check if an element is within the viewport
function isElementInViewport(el) {
    // If using jQuery, convert to a native DOM element
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    // Gets the bounding rectangle of the element
    var rect = el.getBoundingClientRect();
    // Returns true if any part of the element is in the viewport
    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}

// Scroll to top button functionality (jQuery)
// Shows or hides the scroll to top button based on scroll position
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        // Fades in the button when scrolled down
        $('#back2Top').fadeIn();
    } else {
        // Fades out the button when at the top
        $('#back2Top').fadeOut();
    }
});

// Initializes button click behavior to scroll to the top
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        // Smoothly scrolls the page to the top
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});

// Initializes a Bootstrap carousel on elements with the class "carousel"
$('.carousel').carousel()
