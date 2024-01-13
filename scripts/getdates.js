const year = document.getElementById('year');
year.innerHTML= `@ ${new Date().getFullYear()}`;
const lastModified = document.getElementById('lastModified');
lastModified.innerHTML = document.lastModified;