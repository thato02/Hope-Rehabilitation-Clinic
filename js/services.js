
const searchInput = document.getElementById("serviceSearch");
const searchButton = document.getElementById("searchButton");
const serviceCards = document.querySelectorAll(".service-card");
const searchMessage = document.getElementById("searchMessage");

function searchServices() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    let visibleServices = 0;

    serviceCards.forEach(function (card) {
        const serviceText = card.textContent.toLowerCase();
        const matches = serviceText.includes(searchTerm);

        card.style.display = matches ? "" : "none";

        if (matches) {
            visibleServices++;
        }
    });

    if (searchTerm === "") {
        searchMessage.textContent = "";
    } else if (visibleServices === 0) {
        searchMessage.textContent = "No matching services found.";
    } else {
        searchMessage.textContent = visibleServices + " service(s) found.";
    }
}

if (searchInput && searchButton && searchMessage) {
    searchButton.addEventListener("click", searchServices);

    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            searchServices();
        }
    });

    searchInput.addEventListener("input", searchServices);
}


// FAQ ACCORDION FUNCTIONALITY

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {
    question.addEventListener("click", function () {
        const answer = question.nextElementSibling;
        const isOpen = question.getAttribute("aria-expanded") === "true";

        answer.hidden = isOpen;
        question.setAttribute("aria-expanded", String(!isOpen));
    });
});
