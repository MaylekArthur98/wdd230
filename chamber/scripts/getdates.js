const year = document.getElementById('year');
year.innerHTML= `&#169; ${new Date().getFullYear()}`;
const lastModified = document.getElementById('lastModified');
lastModified.innerHTML = document.lastModified;

const visitsDisplay = document.getElementById("visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
const msToDays = 84600000;
let daysBetween = ((Date.now()- numVisits) / msToDays).toFixed(0);

if (numVisits == 0){
    visitsDisplay.textContent = `Welcome! let us know if you have any questions.`;
}
else if ((Date.now() - numVisits) < msToDays){
    visitsDisplay.textContent = `Back so soon! Awesome!`;
}
else if (daysBetween == 1){
    `You last visited 1 day ago`;
}
else {
    `You last visited ${days} days ago.`;
}
numVisits = Date.now();

localStorage.setItem("numVisits-ls", numVisits);