import { getDayOfYear } from "date-fns";
import React, { useMemo } from "react";
import quotesList from "./quotes-list";

const TodaysQuote = () => {
  const quote = useMemo(() => {
    const day = getDayOfYear(new Date());
    const position = day % quotesList.length;
    return quotesList[position];
  }, [getDayOfYear(new Date())]);

  return (
    <>
      {/* quotes */}
      <div className="quotes">
        <div className="container">
          {/* head-section */}
          <div className="head-section text-center">
            <h1>Today's Quote</h1>
            <h3>{quote.text}</h3>
            <div>
              <span className="head-section"></span>
            </div>
            <h2>{quote.author}</h2>
          </div>
          {/* /head-section */}
        </div>
      </div>
      {/* /quotes */}
    </>
  );
};

export default TodaysQuote;
