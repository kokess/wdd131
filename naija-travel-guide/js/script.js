// OBJECT + ARRAY

const destinations = [

    {
        name: "Lagos",
        image: "images/lagos.jpg",
        description: "The commercial capital of Nigeria."
    },

    {
        name: "Abuja",
        image: "images/abuja.jpg",
        description: "The capital city of Nigeria."
    },

    {
        name: "Calabar",
        image: "images/calabar.jpg",
        description: "Famous for tourism and culture."
    },

    {
        name: "Kano",
        image: "images/kano.jpg",
        description: "Historic northern city."
    }

];


// FUNCTION 1: DISPLAY DESTINATIONS

function displayDestinations() {

    const container = document.getElementById("destinationContainer");

    if (!container) return;

    container.innerHTML = "";

    destinations.forEach(destination => {

        container.innerHTML += `

<div class="card">

<img src="${destination.image}" loading="lazy">

<h3>${destination.name}</h3>

<p>${destination.description}</p>

<button onclick="saveDestination('${destination.name}')">

Save Favorite

</button>

</div>

`;

    });

}


// FUNCTION 2: SAVE TO LOCAL STORAGE

function saveDestination(name) {

    localStorage.setItem("favorite", name);

    alert(`Saved ${name} as favorite`);

}


// FUNCTION 3: LOAD MESSAGE

function loadMessage() {

    const welcome = document.getElementById("welcomeMessage");

    if (!welcome) return;

    const favorite = localStorage.getItem("favorite");

    if (favorite) {

        welcome.textContent =
            `Welcome back! Your favorite destination is ${favorite}`;

    }
    else {

        welcome.textContent =
            `Welcome! Explore destinations in Nigeria.`;

    }

}


// FUNCTION 4: FORM HANDLING

function handleForm() {

    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value;

        localStorage.setItem("userName", name);

        document.getElementById("formMessage").textContent =
            `Thank you ${name}, your response was saved.`;

    });

}


// EVENT LISTENER

document.addEventListener("DOMContentLoaded", () => {

    displayDestinations();

    loadMessage();

    handleForm();

});
