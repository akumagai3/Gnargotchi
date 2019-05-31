console.log("pet script running")

const petButton = document.querySelector("#pet-button")
const status = document.querySelector("#status")
const imageDiv = document.querySelector("#image-container")
const playButton = document.querySelector("#play-button")
const feedButton = document.querySelector("#feed-button")

let hunger = 50
let happiness = 50
let loneliness = 50
let energy = 50


const timePasses = () =>{
    
  hunger += 2
  loneliness += 2
  energy -= 2
  happiness -=2
  updateImage()
  updateLabels()
  warning()
}

const imposeLimits = () => {
    if (happiness > 100) {
        happiness = 100
    } else if (happiness < 0) {
        happiness = 0
    }
     if (hunger > 100) {
        hunger = 100
    } else if (hunger < 0) {
        hunger = 0
    }
     if (loneliness > 100) {
        loneliness = 100
    } else if (loneliness < 0) {
        loneliness = 0
    }
     if (energy > 100) {
        energy = 100
    } else if (energy < 0) {
        energy = 0
    }
}

const updateLabels = () => {
    imposeLimits()
    console.log('hellooo')
    status.innerHTML = `
        <h3>hunger: ${hunger}</h3>
        <h3>energy: ${energy}</h3>
        <h3>happiness: ${happiness}</h3>
        <h3>loneliness: ${loneliness}</h3>
    `
}

const warning = () =>{
    if (hunger > 70  || energy < 30) {
        status.classList.add("alert")
    } else {
        status.classList.remove("alert")
    }
    if (loneliness > 70 || happiness < 30) { 
        status.classList.toggle("sadAlert")
    }
}

const updateImage = () => {
    if (hunger > 70) {
        imageDiv.innerHTML = `<img src="hungrygnar.png" />` 
    } else if (loneliness > 70 || happiness < 30) {
        imageDiv.innerHTML = `<img src="madGnar.png"/>` 
    } else if (energy < 30) {
        imageDiv.innerHTML = `<img src="sleepgnar.png"/>` 
    } else {
        imageDiv.innerHTML = `<img src="HappyGnar.png" />`
    }
}


petButton.addEventListener('click', (e) =>{
  happiness += 1
  loneliness-= 3
  energy += 1
  updateLabels()
})

playButton.addEventListener('click', (e) =>{
  energy -= 2
  happiness += 1
  loneliness -=1
  updateLabels()
})

feedButton.addEventListener('click', (e) =>{
  hunger -=2
  happiness += 2
  energy += 3
  loneliness -1
  updateLabels()
})

window.setInterval(timePasses, 1500)