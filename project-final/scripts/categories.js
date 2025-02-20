
async function fetchPlaces() {
    try {
        const response = await fetch("data/places.json"); 
        if (!response.ok) {
            throw new Error("Failed to load places data.");
        }
        return await response.json(); 
    } catch (error) {
        console.error("Error fetching places:", error);
        return []; 
    }
}
function getPlacesByCategory(places, category) {
    return places.filter(place => category === "all" || place.category === category);
}

function renderPlaces(places) {
    const container = document.querySelector(".places-container");
    container.innerHTML = ""; 
    places.forEach(place => {
        const card = document.createElement("div");
        card.classList.add("place-card");
        card.innerHTML = `
            <img src="${place.image}" alt="${place.name}" loading="lazy">
            <h3>${place.name}</h3>
            <p>${place.description}</p>
            <p class="address">${place.address}</p>
        `;
        container.appendChild(card);
    });
}

document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", async () => {
        document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.dataset.category;

        const places = await fetchPlaces();
        const filteredPlaces = getPlacesByCategory(places, category);

        renderPlaces(filteredPlaces);
    });
});

(async () => {
    const places = await fetchPlaces();
    renderPlaces(getPlacesByCategory(places, "all"));
})();