const baseURL = "https://maylekarthur98.github.io/wdd230/";
const linksURL = "https://maylekarthur98.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
  }
  getLinks();
function displayLinks(weeks) {
    weeks.forEach(week => {
        let li = document.createElement("li");
        let links = week.links;      
        //li.textContent = `${week.week}: `;
        links.forEach(link => 
            {
            let a = document.createElement("a");
            a.setAttribute("href", link.url);
            a.textContent = link.title;
            li.appendChild(a);
        });
        document.querySelector("#activities").appendChild(li);  
    });
}

