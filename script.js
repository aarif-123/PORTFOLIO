document.addEventListener('DOMContentLoaded', () => {
    const experienceItems = document.querySelectorAll('.grid-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    experienceItems.forEach(item => {
        observer.observe(item);
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Perform form validation or any other logic here if needed

        const formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                form.reset(); // Reset the form after successful submission
                alert("Thank you! Your message has been sent successfully.");
            } else {
                alert("Oops! Something went wrong. Please try again.");
            }
        }).catch(error => {
            alert("Oops! There was a problem submitting your form. Please try again.");
        });
    });
});
