import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import travolta from "../../images/travolta.gif";

import "./Page404.css";

const Page404 = () => {
  return (
    <Fragment>
      <Header />
      <div className="page-404">
        <Link to="/"> ⬅️ Take me home</Link>
        <div className="lost">
          <img src={travolta} alt="a man looking around" />
          <h1>Who are you? How did you get here?? 😕</h1>
        </div>
      </div>
    </Fragment>
  );
};
export default Page404;
