// swiper

// const swiper = new Swiper(".mySwiper", {
//   cssMode: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   mousewheel: true,
//   keyboard: true,
// });
// const swiper = new Swiper(".swiper", {
//   effect: "fade",
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
// });

document.querySelectorAll(".img-container img").forEach((img) => {
  img.onclick = () => {
    document.querySelector(".pop-up").style.display = "block";
    document.querySelector(".pop-up img").src = img.getAttribute("src");
  };
});

document.querySelector(".pop-up span").onclick = () => {
  document.querySelector(".pop-up").style.display = "none";
};
