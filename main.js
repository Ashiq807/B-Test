const nav_links = document.querySelectorAll(".link");
const shape = document.getElementById("shape");

const linkRect = nav_links[0].getBoundingClientRect();
const navRect =
  nav_links[0].parentElement.parentElement.getBoundingClientRect();
const width = linkRect.width;
shape.style.width = `${width}px`;

nav_links.forEach((link, index) => {
  link.addEventListener("click", () => {
    const linkRect = link.getBoundingClientRect();
    const navRect = link.parentElement.parentElement.getBoundingClientRect();
    const offset = linkRect.left - navRect.left;
    const width = linkRect.width;

    shape.style.transform = `translateX(${offset}px)`;
    shape.style.width = `${width}px`;
    nav_links.forEach((item) => {
      item.classList.remove("text-black");
      item.style.color = "";
    });
    link.style.color = "black";
  });
});

const menu = document.getElementById("menu-btn");
const offscreen = document.getElementById("menu");

menu.addEventListener("click", () => {
  offscreen.classList.remove(["-left-100", "w-0"]);
  offscreen.style.left = 0;
  offscreen.style.width = "100%";
});

const close = document.getElementById("close");

close.addEventListener("click", () => {
  offscreen.style.left = "-100%";
  offscreen.style.width = "0%";
});

const slider = document.getElementById("slider");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

next.addEventListener("click", () => {
  slider.scrollBy({ left: slider.offsetWidth, behavior: "smooth" });
  next.classList.remove("size-[3.125rem]");
  next.style.width = "1.5rem";
  next.style.height = "1.5rem";
  prev.style.width = "3.125rem";
  prev.style.height = "3.125rem";
});

prev.addEventListener("click", () => {
  slider.scrollBy({ left: -slider.offsetWidth, behavior: "smooth" });
  prev.classList.remove("size-[3.125rem]");
  prev.style.width = "1.5rem";
  prev.style.height = "1.5rem";
  next.style.width = "3.125rem";
  next.style.height = "3.125rem";
});
