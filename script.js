document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.pagination button');
    const testimonials = document.querySelectorAll('.testimonial-content > div');

    // Ensure the first testimonial is active by default
    testimonials[0].classList.add('active');
    buttons[0].classList.add('active-btn');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Remove active class from all testimonials
            testimonials.forEach((testimonial) => {
                testimonial.classList.remove('active');
                buttons.forEach((btn) => btn.classList.remove('active-btn'));
            });

            // Add active class to the selected testimonial
            testimonials[index].classList.add('active');
            buttons[index].classList.add('active-btn');
        });
    });
});
