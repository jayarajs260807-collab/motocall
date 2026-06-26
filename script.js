// Smooth Scroll Navigation

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Button Scroll

const btn = document.querySelector('.btn-primary');

if (btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector('#how-it-works')
            .scrollIntoView({
                behavior: 'smooth'
            });
    });
}

// Fade-in Animation

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll(
    '.feature-card, .step, .contact-card'
).forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
});