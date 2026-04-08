import React from "react";
import PropTypes from "prop-types";

const TextualDisclosure = ({ currentViz }) => {
  return (
    <div className="disclosure-textualdisclosure">
      <div className="disclosure-column">
        <strong>ChatGPT-4o</strong> {currentViz.content.ai}
      </div>
    </div>
  );
};

TextualDisclosure.propTypes = {
  currentViz: {
    content: {
      ai: PropTypes.string
    }
  }
};

export default TextualDisclosure;
