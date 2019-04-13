// term cyler and button loader for landing splash
terms = [
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
    fadeButton()
    clearInterval(landingInterval)
  }
}, 1500)

// functions
function termTransition(i) {
  let termOpacity = 0;
  let intervalTimer = 0;
  term.textContent = terms[i]
  var fadeInterval = setInterval( function() {
    if (termOpacity >= 1) clearInterval(fadeInterval)
    termOpacity += 0.05
    term.style.opacity = termOpacity
  }, 50)
}

function fadeButton() {
  let buttonOpacity = 0;
  var fadeInterval = setInterval( function() {
    if (buttonOpacity >= 1) clearInterval(fadeInterval)
    buttonOpacity += 0.05
    continueButton.style.opacity = buttonOpacity
  }, 50)
}
