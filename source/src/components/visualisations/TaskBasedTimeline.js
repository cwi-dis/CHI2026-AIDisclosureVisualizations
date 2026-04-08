import React from "react";
import PropTypes from "prop-types";

const TaskBasedTimeline = ({ currentViz }) => {
  return (
    <div className="disclosure-TaskBasedTimeline-horizontal">
      {currentViz.content.map((step, idx) => (
        <div key={idx} className="disclosure-TaskBasedTimeline-step">
          <div className="icon-wrapper">
            <div className="icon-with-badge">
              <div className="icon">
                {typeof step.icon === 'string' && step.icon.endsWith('.png') ? (
                  <img
                    src={step.icon}
                    alt={step.emoji || "icon"}
                    className={`icon-img ${step.icon.includes('robot') ? 'robot' : ''}`}
                  />
                ) : (
                  <span>{step.icon}</span>
                )}
              </div>
              {step.collaborative && (<img src="/images/sparkles.png" alt="✨" title="This step involved collaboration" className="collab-icon" />)}
            </div>
            <div className="tooltip">{step.tooltip}</div>
          </div>
          <div className="label">{step.label}</div>
        </div>
      ))}
    </div>
  );
};

TaskBasedTimeline.propTypes = {
  currentViz: {
    content: [
      {
        collaborative: PropTypes.bool,
        tooltip: PropTypes.string,
        label: PropTypes.string
      }
    ]
  }
};

export default TaskBasedTimeline;
