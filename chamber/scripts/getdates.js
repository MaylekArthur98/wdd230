const year = document.getElementById('year');
year.innerHTML= `&#169;  Silver Spring Chamber ${new Date().getFullYear()}`;
const lastModified = document.getElementById('lastModified');
lastModified.innerHTML = document.lastModified;