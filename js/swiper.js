const swiper = new Swiper(".swiper", {
  zoom: true,
  // Optional parameters
  // direction: "vertical",
  // loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2500,
    stopOnlastSlide: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },
});

const gallary = new Swiper(".gallary", {
  zoom: true,
  direction: "horizontal",
  slidesPerView: 2,
  spaceBetween: 100,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  zoom: {
    maxRatio: 5,
    minRatio: 1,
  },
});
