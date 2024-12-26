//Mobile menu
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');
const closeIcon = document.querySelector('.close');

// Toggle navigation visibility
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    navLinks.classList.toggle('hidden');
});

closeIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    navLinks.classList.toggle('hidden');
});

// Underline animation
import { annotate } from 'https://unpkg.com/rough-notation?module';

const text = document.querySelector('.underline');
const annotation1 = annotate(text, { type: 'underline' });
annotation1.show();

const text2 = document.querySelector('.underline-2')
const annotation2 = annotate(text2, {type: 'underline', color: 'white'});
annotation2.show();

// Accordion
const expandBtns = document.querySelectorAll("#expand-btn");
const accordionContents = document.querySelectorAll(".accordion-content");

// Loop through each button and add an event listener
expandBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        accordionContents[index].classList.toggle("slide-in");
        btn.classList.toggle("rotate");
    });
});

// Testimonial switcher
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
