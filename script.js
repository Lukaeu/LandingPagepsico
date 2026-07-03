document.addEventListener("DOMContentLoaded", () => {


  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });



  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target); // anima uma vez só
      }
    });
  }, {
    threshold: 0.15
  });

  revealElements.forEach((el) => revealObserver.observe(el));



  const ebookBtn = document.getElementById("ebookBtn");

  ebookBtn.addEventListener("click", () => {
    alert("O ebook será enviado em breve! Enquanto isso, entre em contato pelo WhatsApp ou Instagram. 🌿");
  });


  console.log("Landing page da Erika Fernanda carregada com sucesso 🌿");

});
