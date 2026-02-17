import "./Education.css";

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h2 className="section-title">Education</h2>
      <p className="section-subtitle">
      Academic background that shaped my skills
      </p>

      <div className="education-list">

        <div className="education-card">
          <h3>Bachelor of Technology (IT)</h3>
          <span className="edu-institute">AKTU University</span>
          <span className="edu-year">2023 – 2027</span>
        </div>

        <div className="education-card">
          <h3>Senior Secondary (XII)</h3>
          <span className="edu-institute">CBSE Board</span>
          <span className="edu-year">2021 – 2022</span>
        </div>

        <div className="education-card">
          <h3>Secondary School (X)</h3>
          <span className="edu-institute">CBSE Board</span>
          <span className="edu-year">2019 – 2020</span>
        </div>

      </div>
    </section>
  );
};

export default Education;
