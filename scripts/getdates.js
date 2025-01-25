const currentyear = document.querySelector("#currentyear");

const lastmodified = document.querySelector("#lastModified");

const today = new Date();

currentyear.textContent = today.getFullYear();

lastmodified.textContent = document.lastModified;