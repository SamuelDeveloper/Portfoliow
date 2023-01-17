const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Select all elements with the class "floating-phrase"
const phrases = document.querySelectorAll(".floating-phrase");

// Define animation options
var cards = document.querySelectorAll('.card');

// listen for scroll event on the page
window.addEventListener('scroll', function() {
  // loop through all of the card elements
  for (var i = 0; i < cards.length; i++) {
    // get the position of the card element from the top of the page
    var cardPos = cards[i].getBoundingClientRect().top;

    // if the card is in the viewport
    if (cardPos < window.innerHeight) {
      // add the 'show' class to the card element, which triggers the animation
      cards[i].classList.add('show');
    }
  }
});


  
  
  
  