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

// Función para obtener lugares aleatorios sin repetición
function getRandomPlaces(count, exclude = []) {
    let shuffled = [...places].filter(place => !exclude.includes(place)); // Excluye lugares ya usados
    shuffled.sort(() => 0.5 - Math.random()); // Mezcla aleatoriamente
    return shuffled.slice(0, count); // Retorna la cantidad deseada
}

function displayFeaturedActivities(containerId, usedPlaces = []) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; 

    const selectedPlaces = getRandomPlaces(2, usedPlaces);

    selectedPlaces.forEach(place => {
        if (!usedPlaces.includes(place)) {
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

            usedPlaces.push(place);
        }
    });

    return usedPlaces;
}

let usedPlaces = []; 

usedPlaces = displayFeaturedActivities("featured-container-1", usedPlaces);

displayFeaturedActivities("featured-container-2", usedPlaces);