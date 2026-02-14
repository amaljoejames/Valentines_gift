import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Custom text splitting utility
function splitIntoWords(element: Element): HTMLElement[] {
  const text = element.textContent || "";
  element.textContent = "";
  const words = text.split(" ");
  const wordElements: HTMLElement[] = [];
  for (let i = 0; i < words.length; i++) {
    const span = document.createElement("span");
    span.textContent = words[i];
    span.style.display = "inline-block";
    span.className = "split-word";
    element.appendChild(span);
    wordElements.push(span);
    if (i < words.length - 1) {
      element.appendChild(document.createTextNode(" "));
    }
  }
  return wordElements;
}

function splitIntoChars(element: Element): HTMLElement[] {
  const text = element.textContent || "";
  element.textContent = "";
  const chars: HTMLElement[] = [];
  for (const char of text) {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.display = "inline-block";
    span.className = "split-char";
    element.appendChild(span);
    chars.push(span);
  }
  return chars;
}

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  splitElements?: HTMLElement[];
}

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;
  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");
    if (para.anim) {
      para.anim.progress(1).kill();
      // Restore original text
      if (para.splitElements) {
        const originalText = para.splitElements.map(el => el.textContent).join(" ");
        para.textContent = originalText;
      }
    }

    const words = splitIntoWords(para);
    para.splitElements = words;

    para.anim = gsap.fromTo(
      words,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 1,
        ease: "power3.out",
        y: 0,
        stagger: 0.02,
      }
    );
  });
  titles.forEach((title: ParaElement) => {
    if (title.anim) {
      title.anim.progress(1).kill();
      // Restore original text
      if (title.splitElements) {
        const originalText = title.splitElements.map(el => el.textContent).join("");
        title.textContent = originalText;
      }
    }
    const chars = splitIntoChars(title);
    title.splitElements = chars;

    title.anim = gsap.fromTo(
      chars,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 0.8,
        ease: "power2.inOut",
        y: 0,
        rotate: 0,
        stagger: 0.03,
      }
    );
  });

  ScrollTrigger.addEventListener("refresh", () => setSplitText());
}
