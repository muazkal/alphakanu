document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in-section");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Stop observing once the transition is triggered
          }
        });
      },
      { threshold: 0.1 }
    );
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in-section");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Stop observing once the transition is triggered
          }
        });
      },
      { threshold: 0.1 }
    );
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  });
  