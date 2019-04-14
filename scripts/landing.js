// term cyler and button loader for landing splash
terms = [
  "galactic ",
  "lightspeed ",
  "stellar ",
  "epic "
]
i = 0

var term = document.getElementById("term")
var continueButton = document.getElementById("continue")

var landingInterval = setInterval( function() {
  if (i < terms.length) {
    term.style.opacity = 0
    termTransition(i)
    i++
  } else {
    clearInterval(landingInterval)
    fadeButton()
  }
}, 1000)

// functions
function termTransition(i) {
  let termOpacity = 0;
  let intervalTimer = 0;
  term.textContent = terms[i]
  var fadeInterval = setInterval( function() {
    if (termOpacity >= 1) clearInterval(fadeInterval)
    termOpacity += 0.125
    term.style.opacity = termOpacity
  }, 50)
}

function fadeButton() {
  let buttonOpacity = 0;
  var fadeInterval = setInterval( function() {
    if (buttonOpacity >= 1) clearInterval(fadeInterval)
    buttonOpacity += 0.125
    continueButton.style.opacity = buttonOpacity
  }, 50)
}
