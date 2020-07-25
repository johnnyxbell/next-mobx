import React from "react";
import PropTypes from "prop-types";

const PageTemplate = ({ children }) => {
  return <>{children}</>;
};

PageTemplate.propTypes = {
  children: PropTypes.object,
};

export default PageTemplate;
