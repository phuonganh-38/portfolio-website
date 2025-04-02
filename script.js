function updateHeaderWidth() {
  const banner = document.querySelector(".banner");
  const header = document.querySelector(".header");

  if (banner && header) {
    header.style.width = `${banner.clientWidth}px`;
  }
}

window.addEventListener("load", updateHeaderWidth);
window.addEventListener("resize", updateHeaderWidth);
