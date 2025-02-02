
const membersContainer = document.getElementById('members-container');
const toggleViewBtn = document.getElementById('toggleViewBtn');

let isGridView = true;

document.getElementById('nav-toggle').addEventListener('click', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('open');
});


function createMemberCards(members) {
    membersContainer.innerHTML = '';  
    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}" class="card-image">
            <h3 class="card-name">${member.name}</h3>
            <p class="card-address">${member.address}</p>
            <p class="card-phone">${member.phone}</p>
            <a href="${member.website}" target="_blank" class="card-website">Visit Website</a>
        `;
        
        membersContainer.appendChild(card);
    });
}

function toggleView() {
    if (isGridView) {
        membersContainer.classList.remove('grid-view');
        membersContainer.classList.add('list-view');
        toggleViewBtn.textContent = 'Switch to Grid View'; 
    } else {
        membersContainer.classList.remove('list-view');
        membersContainer.classList.add('grid-view');
        toggleViewBtn.textContent = 'Switch to List View';  
    }
    isGridView = !isGridView;  
}

fetch('./data/members.json')
    .then(response => response.json())
    .then(members => {
        createMemberCards(members);
    })
    .catch(error => {
        console.error('Error al cargar los miembros:', error);
    });

toggleViewBtn.addEventListener('click', toggleView);
