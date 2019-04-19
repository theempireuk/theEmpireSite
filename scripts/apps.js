var apps = [
  {
    name: "Hytch",
    description: "Find, share and decide upon dates in London by region.",
    brief: "Make a simple, pretty and mobile-optimised frontend app for the clients customers. Also, make an intuitive backend CMS and for the client to add dates and track date metrics.",
    builtWith: "React, Node.js. Hosted on Netlify and Heroku.",
    imgSrc: "assets/satellite.png"
  },
  {
    name: "Cognitant",
    description: "Find, share and decide upon dates in London by region.",
    brief: "Make a simple, pretty and mobile-optimised frontend app for the clients customers. Also, make an intuitive backend CMS and for the client to add dates and track date metrics.",
    builtWith: "React, Node.js. Hosted on Netlify and Heroku.",
    imgSrc: "assets/satellite.png"
  },
  {
    name: "Dubzoo",
    description: "Find, share and decide upon dates in London by region.",
    brief: "Make a simple, pretty and mobile-optimised frontend app for the clients customers. Also, make an intuitive backend CMS and for the client to add dates and track date metrics.",
    builtWith: "React, Node.js. Hosted on Netlify and Heroku.",
    imgSrc: "assets/satellite.png"
  }
]
var selectedApp = 0
var appImg = document.getElementById('app-img')
var appName = document.getElementById('app-name')
var appDesc = document.getElementById('app-desc')
var appBrief = document.getElementById('app-brief')
var appBuiltWith = document.getElementById('app-builtWith')

nextApp = () => {
  if (selectedApp !== apps.length-1) {
    selectedApp += 1
    displayApp()
  }
}

previousApp = () => {
  if (selectedApp !== 0) {
    selectedApp -= 1
    displayApp()
  }
}

highlight = () => {
  event.target.style.color = "#777"
}

unhighlight = () => {
  event.target.style.color = "white"
}

displayApp = () => {
  appImg.src = apps[selectedApp].imgSrc
  appName.textContent = apps[selectedApp].name
  appDesc.textContent = apps[selectedApp].description
  appBrief.textContent = apps[selectedApp].brief
  appBuiltWith.textContent = apps[selectedApp].builtWith
}

displayApp()
