import { E as EmblaCarousel } from "./vendor.js";
const base = "";
const components = "";
const Button = "";
const Footer = "";
const Social = "";
const Hamburger = "";
const Header = "";
const Logo = "";
const Nav = "";
const Intro = "";
const Facts = "";
const Step = "";
const Steps = "";
const Appeal = "";
const Extra = "";
const Client = "";
const Clients = "";
function script() {
  const el = document.querySelector(".clients");
  if (!el)
    return;
  const sliderEl = el.querySelector(".clients__viewport");
  const prevEl = el.querySelector(".clients__prev");
  const nextEl = el.querySelector(".clients__next");
  const embla = EmblaCarousel(sliderEl, {
    loop: false,
    containScroll: "trimSnaps",
    align: "center",
    slidesToScroll: 1,
    speed: 15,
    breakpoints: {
      "(min-width: 768px)": {
        startIndex: 1,
        containScroll: ""
      }
    }
  });
  function update() {
    prevEl.disabled = !embla.canScrollPrev();
    nextEl.disabled = !embla.canScrollNext();
  }
  embla.on("select", update);
  embla.on("init", update);
  embla.on("reInit", update);
  prevEl.addEventListener("click", (e) => embla.scrollPrev());
  nextEl.addEventListener("click", (e) => embla.scrollNext());
}
{
  script();
}
const Promo = "";
const Result = "";
const Results = "";
const utilities = "";
(() => {
  const hamburgerEl = document.querySelector(".hamburger");
  if (!hamburgerEl)
    return;
  let active = false;
  hamburgerEl.addEventListener("click", (e) => {
    window.dispatchEvent(
      new CustomEvent("toggle-nav", { detail: active = !active })
    );
  });
  window.addEventListener("toggle-nav", ({ detail: open }) => {
    hamburgerEl.classList.toggle("hamburger_active", open);
  });
})();
(() => {
  const navEl = document.querySelector(".nav");
  if (!navEl)
    return;
  window.addEventListener("toggle-nav", ({ detail: open }) => {
    navEl.classList.toggle("nav_open", open);
    if (open) {
      Object.assign(document.body.style, {
        overflow: "hidden"
      });
    } else {
      Object.assign(document.body.style, {
        overflow: ""
      });
    }
  });
})();
