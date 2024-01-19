const year = document.getElementById('year');
year.innerHTML= `&#169; ${new Date().getFullYear()}`;
const lastModified = document.getElementById('lastModified');
lastModified.innerHTML = document.lastModified;