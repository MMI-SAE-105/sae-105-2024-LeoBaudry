

////////////////////////////// Menu JS  //////////////////////////////

// On cible les éléments à modifier
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const page = document.body;

// Vérifier si les éléments existent avant d'ajouter l'événement
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    // Mise à jour des attributs ARIA pour accessibilité
    toggle.ariaExpanded = isClosed;
    nav.ariaHidden = isOpen;
    page.classList.toggle("noscroll", isClosed);
  });
}

////////////////////////////// Menu Accordéon  //////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    accordion.querySelectorAll("details").forEach((details) => {
      
      details.addEventListener("toggle", function() {
        if (this.open) {
          this.classList.add("expanding");
          this.classList.remove("collapsing");
        } else {
          this.classList.add("collapsing");
          this.classList.remove("expanding");
        }
      });

      details.addEventListener("animationend", function(event) {
        if (event.animationName === "accordion-slide-in" || event.animationName === "accordion-slide-out") {
          setTimeout(() => {
            this.classList.remove("expanding", "collapsing");
          }, 0);
          details.addEventListener("toggle", function(e) {
            e.preventDefault();
          });
        }
      });
    });
  });
});

////////////////////////////// Carousel  //////////////////////////////
// *** CAROUSEL ***
// TODO
const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");

const premierItem = document.querySelector(".carousel__item");
const scrollAmount = premierItem.clientWidth;

// Largeur de défilement d’un item
if (carousel) {
  // Scroll au clic sur le bouton précédent
  prevButton.addEventListener("click", () => {
    carousel.scrollBy ({
        left: -carousel.offsetWidth,
        behavior: "smooth",
    });
  });

  // Scroll au clic sur le bouton suivant
  nextButton.addEventListener("click", () => {
    carousel.scrollBy({
      left: carousel.offsetWidth,
      behavior: "smooth",
    });
  });
}

////////////////////////////// Lightbox  //////////////////////////////
