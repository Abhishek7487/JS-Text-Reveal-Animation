const tl = gsap.timeline({
  defaults: { durationo: 0.75, ease: "Power3.easeOut" },
});

tl.fromTo(
  ".heroImg",
  {
    scale: 1.25,
    borderRadius: "0rem",
  },
  {
    scale: 1,
    borderRadius: "2rem",
    delay: 0.35,
    duration: 2.5,
    ease: "elastic.out(1.5,1)",
  }
);

tl.fromTo(
  ".cta1",
  {
    x: "110%",
    opacity: 0.5,
  },
  {
    x: 0,
    opacity: 1,
  },
  "<20%"
);
tl.fromTo(
  ".cta3",
  {
    x: "-110%",
    opacity: 0.5,
  },
  {
    x: 0,
    opacity: 1,
  },
  "<20%"
);
tl.fromTo(
  ".cta2",
  {
    y: "110%",
    opacity: 0.5,
  },
  {
    y: 0,
    opacity: 1,
  },
  "<20%"
);

tl.fromTo(
  ".cta4",
  {
    x: "110%",
    opacity: 0.5,
  },
  {
    x: 0,
    opacity: 1,
  },
  "<20%"
);
tl.fromTo(
  ".cta6",
  {
    x: "-110%",
    opacity: 0.5,
  },
  {
    x: 0,
    opacity: 1,
  },
  "<20%"
);
tl.fromTo(
  ".cta5",
  {
    y: "110%",
    opacity: 0.5,
  },
  {
    y: 0,
    opacity: 1,
  },
  "<20%"
);

tl.fromTo(
  ".ctaBtn",
  {
    y: 20,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
  },
  "<"
);

// Split text alternative
const logo = document.querySelector(".logo");
const letters = logo.textContent.split("");

logo.textContent = "";

letters.forEach((letter) => {
  logo.innerHTML += `<span class = "letter"> ${letter} </span>`;
});

gsap.set(".letter", { display: "inline-block" });
gsap.fromTo(
  ".letter",
  {
    y: 20,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    delay: 2,
    stagger: 0.05,
    ease: "back.out(3)",
  }
);
