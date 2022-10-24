import React from "react";

export default function About(props) {

  let myStyle = {
    color: props.mode === "light" ? "black" : "white",
    backgroundColor: props.mode === "light" ? "white" : "#1a1a1a"
  }

  return (
    <div className="container py-5 my-5" style={myStyle}>
      <h1 className="my-3">About us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>
              Analyze your Text
              </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              facilis officiis eius itaque quo dolorem exercitationem doloribus
              alias repudiandae sunt.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              facilis officiis eius itaque quo dolorem exercitationem doloribus
              alias repudiandae sunt.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              facilis officiis eius itaque quo dolorem exercitationem doloribus
              alias repudiandae sunt.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>
              Free to use
              </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              facilis officiis eius itaque quo dolorem exercitationem doloribus
              alias repudiandae sunt.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              facilis officiis eius itaque quo dolorem exercitationem doloribus
              alias repudiandae sunt.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              facilis officiis eius itaque quo dolorem exercitationem doloribus
              alias repudiandae sunt.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>
              Browser Compatible
              </strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              facilis officiis eius itaque quo dolorem exercitationem doloribus
              alias repudiandae sunt.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              facilis officiis eius itaque quo dolorem exercitationem doloribus
              alias repudiandae sunt.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              facilis officiis eius itaque quo dolorem exercitationem doloribus
              alias repudiandae sunt.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
