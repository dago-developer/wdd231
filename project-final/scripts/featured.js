// Usamos el array original que ya habíamos creado
const places = [
    {
        name: "Playa San Luis",
        image: "images/sanluis.webp",
        category: "Beaches"
    },
    {
        name: "Playa Los Bordones",
        image: "images/bordones.webp",
        category: "Beaches"
    },
    {
        name: "Museo Gran Mariscal",
        image: "images/museo.webp",
        category: "History"
    },
    {
        name: "Castillo de San Antonio",
        image: "images/fortaleza.webp",
        category: "History"
    },
    {
        name: "Arepera La Estrella",
        image: "images/barcaribeño.webp",
        category: "Food&Fun"
    },
    {
        name: "Café Colonial",
        image: "images/eldelfin.webp",
        category: "Food&Fun"
    }
];

function getRandomPlaces(count) {
    let shuffled = [...places].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displayFeaturedActivities(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; 

    const selectedPlaces = getRandomPlaces(2); 

    selectedPlaces.forEach(place => {
        const card = document.createElement("div");
        card.classList.add("featured-card");

        card.innerHTML = `
            <img src="${place.image}" alt="${place.name}" loading="lazy">
            <h4>${place.name}</h4>
        `;
        card.addEventListener("click", () => {
            window.location.href = "categories.html";
        });
        container.appendChild(card);
    });
}

// Llenar las tarjetas con actividades aleatorias
displayFeaturedActivities("featured-container-1");
displayFeaturedActivities("featured-container-2");
