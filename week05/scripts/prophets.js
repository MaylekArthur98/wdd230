const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector("#cards");
async function getProphetsData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetsData();

const displayProphets = (prophets) => {
    // card build code goes here
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2")
        let portrait = document.createElement('img');
        let date = document.createElement("p");
        let place = document.createElement("p");


        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        date.textContent =`Date of Birth: ${prophet.birthdate}`;
        place.textContent =`Date of Birth: ${prophet.birthplace}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); 
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(date);
        card.appendChild(place);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
  }