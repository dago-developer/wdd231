const currentyear = document.querySelector("#currentyear");

const today = new Date();

currentyear.textContent = today.getFullYear();