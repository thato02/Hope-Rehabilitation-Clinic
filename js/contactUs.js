

const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");

if (contactForm && contactMessage) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            contactMessage.textContent =
                "Please correct the missing or invalid information.";
            contactMessage.style.color = "red";
            return;
        }

        const reason = document.getElementById("reason").value;

        let response = "";

        switch (reason) {
            case "general":
                response = "Thank you for your enquiry. Our team will contact you by phone or email to assist you.";
                break;

            case "admission":
                response = "Thank you for your admission enquiry. Our team will contact you with further information about the admission process.";
                break;

            case "fsupport":
                response = "Thank you for your interest in our family support sessions. Our team will contact you with further information.";
                break;

            case "partnership":
                response = "Thank you for your partnership enquiry. Our team will contact you to discuss possible collaboration opportunities.";
                break;

            case "volunteer":
                response = "Thank you for your interest in volunteering at HRC. Our team will contact you with information about volunteering opportunities.";
                break;

            case "sponsor":
                response = "Thank you for your interest in supporting HRC. Our team will contact you to discuss sponsorship or donation opportunities.";
                break;

            default:
                response = "Thank you for contacting HRC. Our team will follow up regarding your enquiry.";
        }

     

const fullname = document.getElementById("fullname").value;
const phone = document.getElementById("phone").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

const reasonText = document.getElementById("reason")
    .options[document.getElementById("reason").selectedIndex].text;
L

const subject = "HRC Contact Enquiry - " + reasonText;

const emailBody =
    "New enquiry received from the HRC website\n\n" +
    "Name: " + fullname + "\n" +
    "Contact number: " + phone + "\n" +
    "Email address: " + email + "\n" +
    "Reason for contact: " + reasonText + "\n\n" +
    "Message:\n" + message;


const mailtoLink =
    "mailto:info@hoperehabclinic.co.za" +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(emailBody);

window.location.href = mailtoLink;



contactMessage.textContent =
    response + " Your email application should open with your enquiry prepared. Please send the email to complete your submission.";

contactMessage.style.color = "green";
    });
}



const messageInput = document.getElementById("message");
const characterCount = document.getElementById("characterCount");

if (messageInput && characterCount) {
    function updateCharacterCount() {
        characterCount.textContent =
            messageInput.value.length + "/500 characters";
    }

    messageInput.addEventListener("input", updateCharacterCount);

    updateCharacterCount();
}



const bookingForm = document.getElementById("bookingForm");
const bookingMessage = document.getElementById("bookingMessage");

if (bookingForm && bookingMessage) {
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!bookingForm.checkValidity()) {
            bookingForm.reportValidity();
            bookingMessage.textContent =
                "Please correct the missing or invalid information.";
            bookingMessage.style.color = "red";
            return;
        }

        const age = document.getElementById("age");

        if (Number(age.value) < 17) {
            bookingMessage.textContent =
                "You must be at least 17 years old to book.";
            bookingMessage.style.color = "red";
            age.focus();
            return;
        }

        const selectedDate = document.getElementById("date").value;
        const today = new Date();
        const localToday = new Date(
            today.getTime() - today.getTimezoneOffset() * 60000
        ).toISOString().split("T")[0];

        if (selectedDate < localToday) {
            bookingMessage.textContent =
                "Please select today or a future date.";
            bookingMessage.style.color = "red";
            document.getElementById("date").focus();
            return;
        }

        bookingMessage.textContent =
    "Thank you for your appointment request. HRC will contact you by phone or SMS to confirm your appointment date and time. Your appointment is not confirmed until you receive confirmation.";
        bookingMessage.style.color = "green";

        bookingForm.reset();
    });
}
