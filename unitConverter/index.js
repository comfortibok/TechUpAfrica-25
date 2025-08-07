/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Input
let inputEl = document.getElementById("input-el");

// Length
let convertFeetEl = document.getElementById("convert-feet-el");
let convertMeterEl = document.getElementById("convert-meter-el");

// Volume
let convertGallonsEl = document.getElementById("convert-gallons-el");
let convertLitersEl = document.getElementById("convert-liters-el");

// Mass
let convertPoundsEl = document.getElementById("convert-pounds-el");
let convertKilosEl = document.getElementById("convert-kilos-el");

// Length conversion
function convertLength() {
  let feetResult = inputEl.value * 3.281;
  convertFeetEl.textContent = `${inputEl.value} meters = ${feetResult.toFixed(
    3
  )}  feet`;
  let meterResult = inputEl.value / 3.281;
  convertMeterEl.textContent = `${inputEl.value} feet = ${meterResult.toFixed(
    3
  )} meters`;
}

// Volume conversion
function convertVolume() {
  let gallonsResult = inputEl.value * 0.264;
  convertGallonsEl.textContent = `${
    inputEl.value
  } liters = ${gallonsResult.toFixed(3)} gallons`;
  let litersResult = inputEl.value / 0.264;
  convertLitersEl.textContent = `${
    inputEl.value
  } gallons = ${litersResult.toFixed(3)} liters`;
}

//Mass conversion
function convertMass() {
  let poundsResult = inputEl.value * 2.204;
  convertPoundsEl.textContent = `${
    inputEl.value
  } kilos = ${poundsResult.toFixed(3)} pounds`;
  let kilosResult = inputEl.value / 2.204;
  convertKilosEl.textContent = `${inputEl.value} pounds = ${kilosResult.toFixed(
    3
  )} kilos`;
}

const convertBtn = document.getElementById("convert-btn");
convertBtn.addEventListener("click", function () {
  if (isNaN(inputEl.value) || inputEl.value.trim() === "") {
    alert("Enter a valid number");
  } else {
    convertLength();
    convertVolume();
    convertMass();
    let conversionSectionEl = document.querySelector(".conversion-section");
    conversionSectionEl.classList.remove("hidden");
    inputEl.value=""
  }
});