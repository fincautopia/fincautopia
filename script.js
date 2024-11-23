// Adding fade-in effect on scroll
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

faders.forEach(fader => observer.observe(fader));
