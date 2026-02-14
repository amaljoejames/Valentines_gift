import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Infosys Springboard */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Intern</h4>
                <h5>Infosys Springboard</h5>
              </div>
              <h3>Nov 2025 – Present</h3>
            </div>
            <p>
              Working on backend development for a Java-based community volunteer
              management platform. Implemented role-based access control (RBAC),
              secure authentication, and modular backend components. Designed and
              optimized relational database tables and developed core event
              lifecycle workflows in an agile environment.
            </p>
          </div>

          {/* Edunet Foundation */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Virtual Intern</h4>
                <h5>Edunet Foundation (AICTE)</h5>
              </div>
              <h3>Sep 2024 – Dec 2024</h3>
            </div>
            <p>
              Developed a Python-based image steganography system implementing
              multiple data-hiding techniques. Applied cybersecurity fundamentals
              for secure data handling and threat mitigation, and documented system
              architecture and implementation for technical and non-technical users.
            </p>
          </div>

          {/* Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications (BCA)</h4>
                <h5>Mandsaur University</h5>
              </div>
              <h3>2023 – 2026</h3>
            </div>
            <p>
              Pursuing a strong foundation in computer science with focus on
              programming, data structures, database management systems, and
              software engineering while building real-world backend projects
              using Java and the MERN stack.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
