// header.js

document.addEventListener("DOMContentLoaded", () => {
  const langSwitch = document.querySelector(".lang-switch");
  const langBtn = document.getElementById("langToggle");
  const langMenu = document.getElementById("langMenu");

  if (!langSwitch || !langBtn || !langMenu) return;

  const openMenu = () => {
    langSwitch.classList.add("open");
    langBtn.setAttribute("aria-expanded", "true");
  };

  const closeMenu = () => {
    langSwitch.classList.remove("open");
    langBtn.setAttribute("aria-expanded", "false");
  };

  const toggleMenu = () => {
    if (langSwitch.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  // Hover: đưa chuột vào / ra khu vực language
  langSwitch.addEventListener("mouseenter", openMenu);
  langSwitch.addEventListener("mouseleave", closeMenu);

  // Click: để dùng được trên mobile / hoặc click cho chắc
  langBtn.addEventListener("click", (event) => {
    event.preventDefault();
    toggleMenu();
  });

  // Click ra ngoài thì đóng menu
  document.addEventListener("click", (event) => {
    if (!langSwitch.contains(event.target)) {
      closeMenu();
    }
  });

  // Nhấn Esc để đóng
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      langBtn.blur();
    }
  });
});
