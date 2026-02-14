import { useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
    let translateX = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box.length) return;

      const rectLeft =
        document.querySelector(".work-container")?.getBoundingClientRect().left || 0;
      const rect = box[0].getBoundingClientRect();
      const parentWidth =
        box[0].parentElement?.getBoundingClientRect().width || 0;

      let padding =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;

      translateX =
        rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">

          {/* 01 — Track */}
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Track</h4>
                  <p>Project & Team Management Platform</p>
                </div>
              </div>
              <h4>Tools & Features</h4>
              <p>
                Node.js, Express.js, MongoDB, JWT, REST APIs,
                Role-Based Access Control, Project Lifecycle Management
              </p>
            </div>
            <WorkImage image="/images/track.webp" alt="Track Project" />
          </div>

          {/* 02 — Wanderlust */}
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>Wanderlust</h4>
                  <p>Property Listing & Booking Platform</p>
                </div>
              </div>
              <h4>Tools & Features</h4>
              <p>
                Node.js, Express.js, MongoDB, MVC Architecture,
                Authentication & Authorization, Booking Workflows
              </p>
            </div>
            <WorkImage image="/images/wanderlust.webp" alt="Wanderlust Project" />
          </div>

          {/* 03 — VolunteerHub */}
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>VolunteerHub</h4>
                  <p>Community Volunteer Management System</p>
                </div>
              </div>
              <h4>Tools & Features</h4>
              <p>
                Core Java, SQL, OOP Principles,
                Role-Based Access Control, Event Workflow Management
              </p>
            </div>
            <WorkImage image="/images/volunteerhub.webp" alt="VolunteerHub Project" />
          </div>

          {/* 04 — Image Steganography */}
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>
                <div>
                  <h4>Image Steganography System</h4>
                  <p>Secure Data Hiding Application</p>
                </div>
              </div>
              <h4>Tools & Features</h4>
              <p>
                Python, Image Processing,
                Data Hiding Techniques, Cybersecurity Fundamentals
              </p>
            </div>
            <WorkImage image="/images/steganography.webp" alt="Steganography Project" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;
