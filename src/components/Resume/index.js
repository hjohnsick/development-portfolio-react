import React from "react";
import MyResume from "../../assets/resume/resume.txt";
import "./Resume.css";

function Resume() {
  return (
    <section className="resume">
      <h5>I have experience with the following technologies:</h5>
      <ul>
        <li>C#</li>
        <li>JavaScript</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>React</li>
        <li>Html/CSS</li>
        <li>Unit testing</li>
      </ul>
      <a href={MyResume} download className="resume-link">
        Click here to download my resume!
      </a>
    </section>
  );
}

export default Resume;
