const formSubmit = document.querySelector("main .contact form");

formSubmit.addEventListener("submit", (event) => {
  event.preventDefault();
  formSubmit.reset();
  alert("Form sent.");
});

// Intersection Animate

const sliders = document.querySelectorAll(".slide-from");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px",
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("show");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
