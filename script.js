// ============================================
// script.js — Interações da Landing Page
// Erika Fernanda | Psicóloga Clínica
// ============================================

document.addEventListener("DOMContentLoaded", () => {

  // ── 1) Botão "Voltar ao topo" ──
  // Aparece só depois que o usuário rola a página, e some quando volta pro topo
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


  // ── 2) Animação de "revelar" elementos ao rolar a página ──
  // Usa a Intersection Observer API: quando um elemento com a
  // classe .reveal entra na tela, ganha a classe .active (definida no CSS)
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


  // ── 3) Botão do Ebook ──
  // Como ainda não existe um link de download definitivo,
  // o JS mostra um aviso amigável em vez de dar erro 404
  const ebookBtn = document.getElementById("ebookBtn");

  ebookBtn.addEventListener("click", () => {
    alert("O ebook será enviado em breve! Enquanto isso, entre em contato pelo WhatsApp ou Instagram. 🌿");
  });


  // ── 4) Log simples de boas-vindas no console ──
  console.log("Landing page da Erika Fernanda carregada com sucesso 🌿");

});
