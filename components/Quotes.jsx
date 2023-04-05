import React from "react";

const Quotes = () => (
  <>
    {/* quotes */}
    <div className="quotes">
      <div className="container">
        {/* head-section */}
        <div className="head-section text-center">
          <h1>Today's Quote</h1>
          <h3 id="quoteText">Quote</h3>
          <div>
            <span className="head-section"></span>
          </div>
          <h2 id="quoteAuthor">Author</h2>
        </div>
        {/* /head-section */}
      </div>
    </div>
    {/* /quotes */}
  </>
);

export default Quotes;
