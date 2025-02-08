async function getWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Cumana,VE&appid=5af05513f3b21464bcde9e24efeee867&units=metric');
    const data = await response.json();
    
    document.getElementById('weather-data').innerHTML = `
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Description: ${data.weather[0].description}</p>
    `;
}

async function loadMemberSpotlights() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();

        const filteredMembers = members.filter(member => member.membership === 3 || member.membership === 2);

        const selectedMembers = [];
        while (selectedMembers.length < 3 && filteredMembers.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredMembers.length);
            selectedMembers.push(filteredMembers.splice(randomIndex, 1)[0]);
        }
        const spotlightContainer = document.querySelector('#spotlight-cards');
        spotlightContainer.innerHTML = ''; 

        selectedMembers.forEach(member => {
            const memberCard = `
                <div class="member-card">
                    <img src="images/${member.image}" alt="${member.name}" class="member-logo">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>Phone: ${member.phone}</p>
                    <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                    <p>Membership: ${member.membership === 3 ? 'Gold' : 'Silver'}</p>
                </div>
            `;
            spotlightContainer.innerHTML += memberCard;
        });
    } catch (error) {
        console.error('Error loading member spotlights:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadMemberSpotlights);

document.addEventListener('DOMContentLoaded', loadMemberSpotlights);
document.addEventListener('DOMContentLoaded', () => {
    getWeather();
    loadMemberSpotlights();
});
