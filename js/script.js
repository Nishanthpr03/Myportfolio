/* Toggle Icon Navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        const isOpen = navbar.classList.toggle('active');
        menuIcon.classList.toggle('bx-x', isOpen);
        menuIcon.setAttribute('aria-expanded', String(isOpen));
        menuIcon.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    });
}

/* Scroll Sections Active Link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                const activeLink = document.querySelector('header nav a[href="#' + id + '"]');
                if (activeLink) activeLink.classList.add('active');
            });
        };
    });

    /* Sticky Navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Remove toggle icon and navbar when click navbar link (scroll) */
    if (menuIcon && navbar) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
        menuIcon.setAttribute('aria-expanded', 'false');
        menuIcon.setAttribute('aria-label', 'Open navigation menu');
    }
});

/* Scroll Reveal */
// Using Intersection Observer for a lightweight reveal effect
const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}) : null;

const hiddenElements = document.querySelectorAll('.animate-on-scroll');
hiddenElements.forEach((el) => observer ? observer.observe(el) : el.classList.add('show'));

/* EmailJS Integration */
if (typeof emailjs !== 'undefined') {
    emailjs.init({ publicKey: "aXs9CNupXPQEIC1j" });
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const status = document.getElementById('form-status');
        if (typeof emailjs === 'undefined') {
            status.textContent = 'The form service is unavailable. Please email nishanthpr82@gmail.com directly.';
            return;
        }

        // These IDs from your EmailJS dashboard
        const serviceID = 'service_myuzq1m';
        const templateID = 'template_ac4cdka';

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnValue = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        status.textContent = 'Sending your message...';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                submitBtn.textContent = originalBtnValue;
                submitBtn.disabled = false;
                status.textContent = 'Message sent successfully.';
                contactForm.reset();
            }, (err) => {
                submitBtn.textContent = originalBtnValue;
                submitBtn.disabled = false;
                const errorMessage = err && (err.text || err.message);
                status.textContent = errorMessage
                    ? `Unable to send: ${errorMessage}`
                    : 'Unable to send the message right now. Please email nishanthpr82@gmail.com directly.';
                console.error('Contact form submission failed', err);
            });
    });
}
