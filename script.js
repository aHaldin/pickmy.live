const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".reveal").forEach((el, index) => {
  el.style.transitionDelay = `${index * 120}ms`;
  observer.observe(el);
});

const emailForm = document.querySelector(".email-form");
if (emailForm) {
  emailForm.addEventListener("submit", (event) => {
    event.preventDefault();
    emailForm.reset();
  });
}
