import { useState } from "react";
import "./about.css";
function About() {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleReadMore = () => {
      setIsExpanded(!isExpanded);
    };
    return (
      <section className="about-section flex">
        <div className="left-side ">
          <img className="avatar" src="./public/myProfile.jpg" alt="profile" />
        </div>
        <div className="right-side">
          <h1 className="title">
            About <span>me</span>
          </h1>
          <p className="subtitle">
            {isExpanded
              ? "I'm Mohamed Sidiya a Full-Stack Developer with over 3 years of experience, passionate about creating smooth and intuitive web experiences, skilled in full-stack development using React.js and Django REST Framework. Outside of work, I'm passionate about continuous learning and keeping up with the latest tech advancements."
              : "I'm Mohamed Sidiya a Full-Stack Developer with over 3 years of experience, passionate about creating smooth and intuitive web experiences..."}
          </p>
          <button className="btn-more" onClick={handleReadMore}>
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </section>
    );
}

export default About;