import React from "react";
import "./About.css";
function About() {
  return (
    <>
      <section className="about">
        <div className="hero-image"></div>
        <div className="text">
          <span className="intro">Hello!</span> My name is{" "}
          <span className="intro">Heather Johnsick</span> and I am a software
          engineer at Rocket Mortgage. I completed a{" "}
          <span className="intro">C# .NET</span> bootcamp through Grand Circus
          in Detroit, MI in May of 2020 and am currently enrolled in a{" "}
          <span className="intro">MERN stack</span> bootcamp through Michigan
          State University. In my spare time, I enjoy traveling, kayaking, and
          hiking.
        </div>
      </section>
    </>
  );
}

export default About;
