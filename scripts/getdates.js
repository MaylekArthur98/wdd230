const year = document.getElementById('year');
year.innerHTML= `&#169; ${new Date().getFullYear()}`;
const lastModified = document.getElementById('lastModified');
lastModified.innerHTML = document.lastModified;
const visitsDisplay = document.querySelector(".visits");


let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. Welcome!`;
}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);
