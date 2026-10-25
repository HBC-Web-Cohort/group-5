
/* JavaScript for Services Page */

// Select all booking links inside service cards
const serviceLinks = document.querySelectorAll(
    ".service-card .learn-more"
);

// Add a click event to every booking link
serviceLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        // Prevent the default link action
        event.preventDefault();

        // Find the service card containing the clicked link
        const card = link.closest(".service-card");

        // Get the service name from its heading
        const serviceName = card.querySelector("h3").textContent.trim();

        // Create the appointment page URL
        const appointmentURL = new URL(
            "appointment.html",
            window.location.href
        );

        // Add the selected service to the URL
        appointmentURL.searchParams.set("service", serviceName);

        // Navigate to the appointment page
        window.location.href = appointmentURL.href;

    });

});