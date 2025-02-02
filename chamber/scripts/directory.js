fetch('data/members.json')
    .then(response => response.json())  
    .then(members => {
        const directoryContainer = document.getElementById('directory');

        members.forEach(member => {
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}" class="card-image">
                <h2 class="card-name">${member.name}</h2>
                <p class="card-address">${member.address}</p>
                <p class="card-phone">${member.phone}</p>
                <a href="${member.website}" class="card-website" target="_blank">Visitar Sitio Web</a>
                <p class="card-membership">Membresía: ${member.membership}</p>
            `;

            directoryContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });
