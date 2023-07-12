import React from "react";
import Skill from "./Skill";

export default function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="react" emoji="✌" color="#5199" />
      <Skill skill="Java" emoji="🤞" color="orange" />
      <Skill skill="Springboot" emoji="😎" color="blue" />
      <Skill skill="Hibernate" emoji="🤠" color="brown" />
      <Skill skill="Kubernetes" emoji="👍" color="teal" />
    </div>
  );
}
