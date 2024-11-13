import SkillBtn from "./SkillBtn";
import "./Skill.css"

const Skill = () => {
  return (
    <div className="skill-sec">
      <h1>Skills</h1>
      <section className="Skills-btn-container">
        <SkillBtn text="HTML" />
        <SkillBtn text="CSS" />
        <SkillBtn text="JAVASCRIPT" />
        <SkillBtn text="TYPESCRIPT" />
        <SkillBtn text="NODE.Js" />
        <SkillBtn text="NEXT.Js" />
        <SkillBtn text="NEST.Js" />
        <SkillBtn text="MONGODB" />
        <SkillBtn text="EXPRESS.Js" />
      </section>
      <div>
        <h1>Tools</h1>
        <section className="Skills-btn-container">
          <SkillBtn text="REACT Js" />
          <SkillBtn text="VScode" />
          <SkillBtn text="GIT" />
          <SkillBtn text="GITHUB" />
        </section>
      </div>
    </div>
  );
}

export default Skill