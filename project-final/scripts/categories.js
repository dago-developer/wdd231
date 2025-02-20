const places = [
    {
        name: "Playa Los Bordones",
        image: "images/bordones.webp",
        description: "A beautiful beach with golden sand and calm waters, perfect for relaxing and enjoying the sunset.",
        category: "beach",
        address: "Los Bordones, Cumaná, Venezuela"
    },
    {
        name: "Playa San Luis",
        image: "images/sanluis.webp",
        description: "One of the most popular beaches in Cumaná, known for its crystal-clear waters and vibrant atmosphere.",
        category: "beach",
        address: "San Luis, Cumaná, Venezuela"
    },
    {
        name: "Playa Quetepe",
        image: "images/quetepe.webp",
        description: "A quiet and secluded beach, ideal for those looking to escape the crowds.",
        category: "beach",
        address: "Quetepe, Cumaná, Venezuela"
    },
    {
        name: "Playa Colorada",
        image: "images/colorada.webp",
        description: "Famous for its reddish sand and calm waters, offering a unique natural beauty.",
        category: "beach",
        address: "Playa Colorada, Sucre, Venezuela"
    },
    {
        name: "Playa Copey",
        image: "images/copey.webp",
        description: "A hidden gem with soft sand and turquoise waters, perfect for swimming and snorkeling.",
        category: "beach",
        address: "Copey, Cumaná, Venezuela"
    },
    {
        name: "Playa Los Uveros",
        image: "images/losuveros.webp",
        description: "A peaceful beach with a relaxing atmosphere, ideal for enjoying a day under the sun.",
        category: "beach",
        address: "Los Uveros, Cumaná, Venezuela"
    },

    {
        name: "Santa Inés Castle",
        image: "images/santainescastle.webp",
        description: "A historical fortress built in the colonial era, offering stunning views of the city and the sea.",
        category: "history",
        address: "Av. Bermúdez, Cumaná, Venezuela"
    },
    {
        name: "Antonio José de Sucre Birthplace",
        image: "images/antoniojose.webp",
        description: "The house where the Grand Marshal of Ayacucho, Antonio José de Sucre, was born. Now a museum showcasing his legacy.",
        category: "history",
        address: "Centro Histórico, Cumaná, Venezuela"
    },
    {
        name: "Catedral de Cumaná",
        image: "images/catedral.webp",
        description: "An important religious and historical site with beautiful architecture.",
        category: "history",
        address: "Plaza Bolívar, Cumaná, Venezuela"
    },
    {
        name: "Museo Gran Mariscal de Ayacucho",
        image: "images/museo.webp",
        description: "A museum dedicated to the history of Cumaná and its role in Venezuela's independence.",
        category: "history",
        address: "Calle Sucre, Cumaná, Venezuela"
    },
    {
        name: "Fortaleza de Santiago de Cumaná",
        image: "images/fortaleza.webp",
        description: "A well-preserved fortress that once protected the city from pirate invasions.",
        category: "history",
        address: "Cumaná, Venezuela"
    },
    {
        name: "Casa de la Cultura Cumaná",
        image: "images/casadelacultura.webp",
        description: "An old colonial house turned into a cultural center that hosts art exhibits and performances.",
        category: "history",
        address: "Centro, Cumaná, Venezuela"
    },
    {
        name: "La Cumanesa",
        image: "images/cumanesa.webp",
        description: "A well-known restaurant that serves delicious traditional Venezuelan food.",
        category: "food & fun",
        address: "Av. Perimetral, Cumaná, Venezuela"
    },
    {
        name: "El Delfín Restaurant",
        image: "images/eldelfin.webp",
        description: "A seafood restaurant offering fresh fish and amazing coastal flavors.",
        category: "food & fun",
        address: "Playa San Luis, Cumaná, Venezuela"
    },
    {
        name: "Plaza Bermúdez",
        image: "images/plazabermudes.webp",
        description: "A vibrant plaza where locals gather to enjoy live music and street performances.",
        category: "food & fun",
        address: "Centro, Cumaná, Venezuela"
    },
    {
        name: "Shopping Mall Marina Plaza",
        image: "images/marinaplaza.webp",
        description: "A modern shopping center with a variety of stores, restaurants, and entertainment options.",
        category: "food & fun",
        address: "Av. Universidad, Cumaná, Venezuela"
    },
    {
        name: "El Rincón del Sabor",
        image: "images/elrincon.webp",
        description: "A cozy café with delicious pastries, coffee, and traditional Venezuelan treats.",
        category: "food & fun",
        address: "Centro Histórico, Cumaná, Venezuela"
    },
    {
        name: "Bar Caribeño",
        image: "images/barcaribeño.webp",
        description: "A beachfront bar with live music, cocktails, and an amazing view of the ocean.",
        category: "food & fun",
        address: "San Luis Beach, Cumaná, Venezuela"
    }
];

function getPlacesByCategory(category) {
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
    button.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.dataset.category;
        const filteredPlaces = getPlacesByCategory(category);
        renderPlaces(filteredPlaces);
    });
});

renderPlaces(getPlacesByCategory("all"));