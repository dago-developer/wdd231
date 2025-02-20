document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("newsletter-form");
    const confirmationMessage = document.getElementById("confirmation-message");
    const modal = document.getElementById("email-modal");
    const closeBtn = document.querySelector(".close-btn");

    function closeModal() {
        modal.style.display = "none";
    }

    closeBtn.addEventListener("click", closeModal);

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 


        const userData = {
            name: document.getElementById("name").value,
            lastname: document.getElementById("lastname").value,
            age: document.getElementById("age").value,
            gender: document.getElementById("gender").value,
            interests: document.getElementById("interests").value,
            email: document.getElementById("email").value
        };

        const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
        const isEmailRegistered = savedUsers.some(user => user.email === userData.email);

        if (isEmailRegistered) {
            modal.style.display = "flex";
        } else {
            savedUsers.push(userData);
            localStorage.setItem("users", JSON.stringify(savedUsers));

            form.style.display = "none";
            confirmationMessage.innerHTML = `
                <p>Thank you for subscribing, ${userData.name}! Stay tuned for updates in your inbox.</p>
            `;
            confirmationMessage.style.display = "block";
        }
    });
});