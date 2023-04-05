import React from "react";

const Education = () => (
  <>
    {/* education */}
    <div id="education" className="education text-center">
      <div className="container">
        {/* head-section */}
        <div className="head-section text-center">
          <h2>Education</h2>
          <span> </span>
        </div>
        {/* /head-section */}
        {/* <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p> */}
      </div>
      {/* education-blocks */}
      <div className="education-block">
        <h3>University of Birmingham</h3>
        <h4>Currently studying modules including:</h4>
        <ul>
          <li>Software Engineering</li>
          <li>Artificial Intelligence</li>
          <li>Data Structures and Algorithms</li>
          <li>Robot Programming</li>
          <li>Elements of Functional Computing</li>
        </ul>
      </div>
      <div className="education-block">
        <h3>Chellaston Academy Sixth Form, Derby</h3>
        <h4>Studied the following subjects at A-Level:</h4>
        <ul>
          <li>Computing (A)</li>
          <li>Mathematics (A)</li>
          <li>Physics (A)</li>
          <li>ICT (AS only) (C)</li>
        </ul>
      </div>
      <div className="education-block">
        <h3>Chellaston Academy, Derby</h3>
        <h4>Achieved the following GCSEs:</h4>
        <ul>
          <li>Mathematics (A*)</li>
          <li>ICT (A)</li>
          <li>Science (A, B)</li>
          <li>Business Studies (B)</li>
          <li>English Language (C)</li>
          <li>English Literature (C)</li>
        </ul>
      </div>
      {/* /education-blocks */}
      {/* <a className="more" href="#">more on behance</a><br /> */}
      <p></p>
      <a href="#contact" className="scroll">
        <label className="downarrow1"> </label>
      </a>
    </div>
    {/* /education */}
  </>
);

export default Education;
