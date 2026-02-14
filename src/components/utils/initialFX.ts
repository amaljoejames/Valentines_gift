import gsap from "gsap";
import { lenis } from "../Navbar";

// Custom text splitting function
function splitTextIntoChars(element: Element): HTMLElement[] {
  const text = element.textContent || "";
  element.textContent = "";
  const chars: HTMLElement[] = [];
  for (const char of text) {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.display = "inline-block";
    element.appendChild(span);
    chars.push(span);
  }
  return chars;
}

export function initialFX() {
  document.body.style.overflowY = "auto";
  if (lenis) {
    lenis.start();
  }
  const main = document.getElementsByTagName("main")[0];
  if (main) {
    main.classList.add("main-active");
  }
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  // Animate landing text elements
  const landingElements = document.querySelectorAll(
    ".landing-info h3, .landing-intro h2, .landing-intro h1"
  );
  landingElements.forEach((el) => {
    const chars = splitTextIntoChars(el);
    gsap.fromTo(
      chars,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1.2,
        filter: "blur(0px)",
        ease: "power3.inOut",
        y: 0,
        stagger: 0.025,
        delay: 0.3,
      }
    );
  });

  const landingH2Info = document.querySelector(".landing-h2-info");
  if (landingH2Info) {
    const chars = splitTextIntoChars(landingH2Info);
    gsap.fromTo(
      chars,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1.2,
        filter: "blur(0px)",
        ease: "power3.inOut",
        y: 0,
        stagger: 0.025,
        delay: 0.3,
      }
    );
  }

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  // Loop animations for rotating text
  const landingH2Info1 = document.querySelector(".landing-h2-info-1");
  const landingH21 = document.querySelector(".landing-h2-1");
  const landingH22 = document.querySelector(".landing-h2-2");

  if (landingH2Info1 && landingH2Info) {
    loopText(landingH2Info, landingH2Info1);
  }
  if (landingH21 && landingH22) {
    loopText(landingH21, landingH22);
  }
}

function loopText(elem1: Element, elem2: Element) {
  const chars1 = splitTextIntoChars(elem1);
  const chars2 = splitTextIntoChars(elem2);

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    chars2,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      chars1,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      chars1,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      chars2,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}
