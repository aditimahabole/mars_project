import './FunFacts.css'

const FunFacts = () => {
  return (
    <div className="fun_section">
      <div className="fun_headings">
        <div>
          <span className="fun_headings_span">FUN FACTS</span>
        </div>
        <div className="fun_h2_divs">
          <h2 className="fun_headings_h2">
            The Large <span style={{ color: "var(--dark-blue)" }}>Number</span>{" "}
            Of{" "}
          </h2>{" "}
          <h2 className="fun_headings_h2">Counting</h2>
        </div>
        <div style={{ alignItems: "center" }}>
          <p className="fun_headings_p">
            Students provided positive reviews, praising the courses
            comprehensiveness and engaging content. They highlighted the
            knowledgeable instructors and supportive learning environment.
          </p>{" "}
        </div>
      </div>

      <div className="fun_bottom">
        <div className="fun_bottom_div">
          <h1 className="fun_bottom_div_h1 fun1">45.2K</h1>
          <p className="fun_bottom_div_p">STUDENT ENROLLED</p>
        </div>

        <div className="fun_bottom_div">
          <h1 className="fun_bottom_div_h1 fun2">32.4K</h1>
          <p className="fun_bottom_div_p">CLASS COMPLETED</p>
        </div>

        <div className="fun_bottom_div">
          <h1 className="fun_bottom_div_h1 fun3">354+</h1>
          <p className="fun_bottom_div_p">TOP INSTRUCTORS</p>
        </div>

        <div className="fun_bottom_div">
          <h1 className="fun_bottom_div_h1 fun4">99.9%</h1>
          <p className="fun_bottom_div_p">SATISFACTION RATE</p>
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
