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