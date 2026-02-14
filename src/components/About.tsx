import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I’m a backend-focused Full-Stack Developer with hands-on experience
          building scalable web applications using Node.js, Express.js, MongoDB,
          and Core Java. I specialize in designing RESTful APIs, implementing
          JWT-based authentication, and building role-based access control (RBAC)
          systems with clean and maintainable architectures.
          <br /><br />
          I’ve worked on real-world projects involving project management,
          volunteer systems, and booking platforms, where I handled end-to-end
          backend development, database modeling, and API validation. With a
          strong foundation in OOPs, SQL, and data structures, I enjoy solving
          complex backend problems and building reliable, production-ready
          systems.
        </p>
      </div>
    </div>
  );
};

export default About;
