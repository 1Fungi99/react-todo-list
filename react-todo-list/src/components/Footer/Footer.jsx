import React from "react";

import "./Footer.css";

const Footer = (props) => {
  return (
    <footer>
      <button className="massDelete" onClick={(e) => props.handleMassDelete(e)}>
        Mass Deletion
      </button>
    </footer>
  );
};

export default Footer;
