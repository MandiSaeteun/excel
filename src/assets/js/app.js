$(document).foundation();

$(document).ready(function() {
  $("#myTags").tagit();
});

//MAKE URL ACTIVE
$(function() {
  if ((location.pathname.split("/")[1]) !== ""){
    $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
  }
});

//SCROLL TO ANCHOR
// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 2500, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});


//Counter by Geoff Kimball <3
// Element to apply the number to (swap out the '[data-count]' with whatever HTML you're using)
var countElement = document.querySelector('[data-count]');

// Starting point for the timer (the farther back in time, the bigger the starting number)
var start = (new Date(2018, 4, 30)).getTime();
// Frequency with which the timer is updated (in milliseconds)
var timeInterval = 800;
// Number to increment by each intervak
var wordInterval = 1;

function calculate() {
  // Calculate the amount of time that's passed since the starting point
  var timeOffset = Date.now() - start;

  // Calculate what the new number should be
  var count = Math.round((timeOffset / timeInterval) * wordInterval);

  // Add commas to the number and then insert it into the HTML
  countElement.textContent = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Run this function forever
setInterval(calculate, timeInterval);

// Run it once on page load
calculate();
