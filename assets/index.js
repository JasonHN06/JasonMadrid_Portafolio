// Efecto de luz que sigue el cursor
const light = document.getElementById("cursor-light");
document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  light.style.background = `
    radial-gradient(
        circle at ${x}px ${y}px,
        rgba(255, 255, 255, 0.15),
        rgba(91, 59, 104, 0.3),
        rgba(8, 12, 26, 0.6)
    )
    `;
});

// Observador para resaltar navegación activa
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Remover clase active de todos los enlaces
        navLinks.forEach((link) => link.classList.remove("active"));
        // Agregar clase active al enlace correspondiente
        const activeLink = document.querySelector(
          `.nav-link[data-section="${entry.target.id}"]`
        );
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  },
  {
    threshold: 0.5,
    rootMargin: "-50px 0px -50px 0px",
  }
);

// Observar todas las secciones
sections.forEach((section) => observer.observe(section));
// Scroll con rueda del mouse para navegar por secciones
let isScrolling = false;

document.addEventListener(
  "wheel",
  (e) => {
    if (isScrolling) return;
    e.preventDefault(); // Evitar scroll por defecto
    isScrolling = true;
    const sections = document.querySelectorAll("section");
    const currentSection = [...sections].findIndex((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top >= -100 && rect.top < window.innerHeight / 2;
    });
    let targetSection = currentSection;
    if (e.deltaY > 0 && currentSection < sections.length - 1) {
      // Scroll hacia abajo
      targetSection = currentSection + 1;
    } else if (e.deltaY < 0 && currentSection > 0) {
      // Scroll hacia arriba
      targetSection = currentSection - 1;
    }
    if (targetSection !== currentSection && targetSection >= 0) {
      sections[targetSection].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Permitir nuevo scroll después de un delay
    setTimeout(() => {
      isScrolling = false;
    }, 1000);
  },
  { passive: false }
);

// Animaciones de GSAP para la sección About 
window.addEventListener("DOMContentLoaded", () => {
  gsap.from(".about-text", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from(".about-img", {
    opacity: 0,
    x: 80,
    duration: 1,
    ease: "power2.out",
    delay: 0.3,
  });
});

// Animación del texto typing
const typingText = document.querySelector(".typing-text");
if (typingText) {
  const text = typingText.textContent;
  typingText.textContent = ""; // Limpiar texto inicial
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      typingText.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100); // Escribe letra por letra con velocidad de escritura
    }
  }
  // Iniciar animación después de un pequeño delay
  setTimeout(typeWriter, 500);
}

// Animación de entrada para la sección de skills
document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.getElementById("skills");
  const skillsGrid = skillsSection.querySelector(".skills-grid");
  const skillsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Elimina clases de invisibilidad y aplica entrada progresiva
          skillsGrid.classList.remove("opacity-0", "translate-y-12");
          skillsGrid.classList.add("opacity-100", "translate-y-0");
        }
      });
    },
    {
      threshold: 0.5,
    }
  );
  skillsObserver.observe(skillsSection);
});

// Animación de entrada para las tarjetas de servicios
const cards = document.querySelectorAll(".card-service");
const observed = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Agrega animacion de entrada y remueve clases de invisibilidad
        entry.target.classList.add("fade-up");
        entry.target.classList.remove("opacity-0");
      }
    });
  },
  {
    // Activa cuando el 20% de la tarjeta es visible
    threshold: 0.2,
  }
);
cards.forEach((card) => observed.observe(card));