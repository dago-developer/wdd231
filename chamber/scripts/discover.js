function handleVisit() {
    const sidebar = document.createElement('div'); 
    sidebar.classList.add('sidebar-message');
    document.getElementById('visitor-info').appendChild(sidebar);


    const lastVisit = localStorage.getItem('lastVisit');
    const currentDate = Date.now(); 

    if (lastVisit) {
        const lastVisitDate = new Date(parseInt(lastVisit)); 
        const timeDiff = Math.floor((currentDate - lastVisitDate) / (1000 * 3600 * 24)); 

        if (timeDiff < 1) {
            sidebar.textContent = "Back so soon! Awesome!";
        } else {
            sidebar.textContent = `You last visited ${timeDiff} ${timeDiff === 1 ? 'day' : 'days'} ago.`;
        }
    } else {
        sidebar.textContent = "Welcome! Let us know if you have any questions.";
    }

    localStorage.setItem('lastVisit', currentDate.toString());
}

document.addEventListener('DOMContentLoaded', handleVisit);

document.addEventListener("DOMContentLoaded", function() {
    fetch('data/discover-data.json')
      .then(response => response.json())
      .then(itemsData => {
        const infoCardsContainer = document.querySelector('.info-cards');
  
        itemsData.forEach(item => {
          const card = document.createElement('div');
          card.classList.add('card');
  
          card.innerHTML = `
            <h2>${item.name}</h2>
            <figure>
              <img src="images/${item.image}" alt="${item.name}" loading="lazy">
            </figure>
            <address>${item.address}</address>
            <p>${item.description}</p>
            <button>Learn more</button>
          `;
  
          infoCardsContainer.appendChild(card);
        });
      })
      .catch(error => {
        console.error("Error loading the JSON data:", error);
      });
});

// discover.js
document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.header').classList.toggle('open');
});
