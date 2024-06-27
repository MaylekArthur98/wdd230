const year = document.getElementById('year');
year.innerHTML= `&#169; ${new Date().getFullYear()}`;
const lastModified = document.getElementById('lastModified');
lastModified.innerHTML = document.lastModified;

const visitDisplay = document.getElementById("visit");
let visit = Number(window.localStorage.getItem("lastVisit-ls")) || 0;
const msToDays = 84600000;
let days = ((Date.now() - visit) / msToDays).toFixed(0);

if (visit == 0) {
    visitDisplay.textContent = `Welcome! Let us know if you have any questions.`;
} else if ((Date.now() - visit) < msToDays) {
    visitDisplay.textContent = `Back so soon! Awesome!`;
} else if (days == 1) {
    `You last visited 1 day ago.`
} else {
    `You last visited ${days} days ago.`;
}

visit = Date.now()

localStorage.setItem("lastVisit-ls", visit);