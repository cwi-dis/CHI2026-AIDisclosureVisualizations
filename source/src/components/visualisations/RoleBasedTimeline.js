import React from "react";
import PropTypes from "prop-types";

const RoleBasedTimeline = ({ currentViz }) => {
  return (
    <div className="disclosure-RoleBasedTimeline-bottom">
      {currentViz.content.labels.map((item, idx) => (
        <React.Fragment key={idx}>
          <div className="disclosure-RoleBasedTimeline-entry">
            <div className="disclosure-RoleBasedTimeline-icon">
              {typeof item.icon === 'string' && item.icon.endsWith('.png') ? (
                  <img src={item.icon} alt={item.emoji || "icon"} className={`icon-img ${item.icon.includes('robot') ? 'robot' : ''}`} />
                ) : ( <span>{item.icon}</span>  )}
              </div>
            <div className="disclosure-RoleBasedTimeline-label">{item.label}</div>
          </div>
          {idx < currentViz.content.labels.length - 1 && (
            <div className="disclosure-RoleBasedTimeline-arrow">→</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

RoleBasedTimeline.propTypes = {
  currentViz: {
    content: {
      labels: [
        {
          icon: PropTypes.string,
          label: PropTypes.string
        }
      ]
    }
  }
};

export default RoleBasedTimeline;
