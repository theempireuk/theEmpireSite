var tooltipArea = document.getElementById("tooltip-area")
var clicked = "nothing"
var tooltips = {
  "react": "<p>React is the most popular front-end javascript library for creating smooth data-driven webapps. It was created by Facebook in 2013 and made open-source in 2017.</p><a href='https:reactjs.org' target='_blank'>Learn more</a>",
  "node": "<p>Node.js is an open-source runtime environment for javascript, allowing for server-side applications such as backends and webcrawlers to utilise the power of modern javascript .</p><a href='https://nodejs.org/'>Learn more</a>",
  "html5": "<p>HTML5 is the latest iteration of the web's core language. It provides new element and style attributes as well as new browser APIs which vastly increase the potential of webapps.</p><a href='https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'>Learn more</a>",
  "mongodb": "<p>MongoDB is a non-relational database schema built for javascript objects. It's intuitive and simple to implement into javascript webapps, as well as hugely scalable, making it the most popular database schema.</p><a href='https://www.mongodb.com/what-is-mongodb'>Learn more</a>",
  "docker": "<p>Docker is a containerisation tool. It uses small files to tell computer systems exactly how to configure themselves to build and run your app, meaning the container code can be distributed to multiple servers at scale with little to no maintenance needed.</p><a href='https://www.docker.com/'>Learn more</a>",
  "netlify": "<p>Netlify is a web hosting platform. Due to serving only static webapps (like client-side javascript applications built in React) it's cheap, very cheap. Netlify also offer lots of handy server-side functions.</p><a href='https://www.netlify.com/'>Learn more</a>",
  "gcp": "<p>Google Cloud Platform is another web hosting platform, but bolstered out with the massive power of Google's Machine Learning and service integrations. It's our destination of choice for backend applications.</p><a href='https://cloud.google.com/gcp/'>Learn more</a>"
}

function displayTooltip(tooltip) {
  // if (tooltipArea.style.opacity > 0) return
  tooltipArea.style.opacity = 0

  // set text content according to corresponding icon hover
  clicked = tooltips[tooltip]
  tooltipArea.innerHTML = clicked

  // render corresponding tooltip
  tooltipArea.style.display = "block"

  // fade up opacity of tooltip area
  let tooltipOpacity = 0
  var fadeInterval = setInterval( function() {
    if (tooltipOpacity >= 1) clearInterval(fadeInterval)
    tooltipOpacity += 0.1
    tooltipArea.style.opacity = tooltipOpacity
  }, 50)

  var disappearDelay = setTimeout( function() {
    disappear()
  }, 120000)
}

function disappear() {
  let tooltipOpacity = tooltipArea.style.opacity
  var fadeInterval = setInterval( function() {
    if (tooltipOpacity <= 0) {
      tooltipArea.style.display = "none"
      clearInterval(fadeInterval)
    }
    tooltipOpacity -= 0.1
    tooltipArea.style.opacity = tooltipOpacity
  }, 50)
}
