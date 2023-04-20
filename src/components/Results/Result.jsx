import React, { useState, useEffect } from "react";
import "./result.css";

function Result() {
  const [skillCategories, setSkillCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/public/data/data.json");
      const data = await response.json();
      setSkillCategories(data);
    };
    fetchData();
  }, []);

  return (
    <div className="result-container">
      {/* Overall Result Section */}
      <div className="overall-result">
        <div className="overall-result-wrapper">
          <p className="result-title">Your Result</p>
          <div className="points-container">
            <p className="points-value">76</p>
            <p className="points-max">of 100</p>
          </div>
          <p className="result-rating">Great</p>
          <p className="result-description">
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </div>
      </div>

      {/* Summary Result Section */}
      <div className="summary-result">
        <div className="summary-wrapper">
          <p className="summary-heading">Summary</p>
          <div className="skills-container">
            {skillCategories.map((skill) => (
              <div className={`skill ${skill.skillClass}`} key={skill.category}>
                <div>
                  <img src={skill.icon} alt={skill.category} />
                  <p className="skill-name">{skill.category}</p>
                </div>
                <p>
                  <span className="score">{skill.score}</span> / 100
                </p>
              </div>
            ))}
          </div>
          <button className="continue-btn">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Result;
