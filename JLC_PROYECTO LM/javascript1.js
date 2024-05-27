document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("error-message");
    const userIconContainer = document.getElementById("user-icon-container");

    const validUsers = [
        { username: "jesus.luna.cordero@gmail.com", password: "1234" },
        { username: "jdoncal459@g.educaand.com", password: "1234" },
        { username: "betismejorequipo@apruebame.com", password: "1234" },
        { username: "yisustoys@gmail.com", password: "1234" }
    ];

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            const user = validUsers.find(user => user.username === username && user.password === password);

            if (user) {
                alert("Sesión iniciada con éxito");
                document.querySelector(".login-container").style.display = "none";
                userIconContainer.style.display = "block";
            } else {
                errorMessage.textContent = "Usuario o contraseña incorrectos.";
            }
        });
    } else { // Si no es login 
        
    }

    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    }

    window.nextSlide = function() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    };

    window.prevSlide = function() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    };
	// selector
var menu = document.querySelector('.hamburger');

// metodo
function toggleMenu (event) {
    this.classList.toggle('is-active');
    document.querySelector( ".menuppal" ).classList.toggle("is_active");
    event.preventDefault();
}

// evento
menu.addEventListener('click', toggleMenu, false);
});
