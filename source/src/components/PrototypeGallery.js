import React from "react";
import TextualDisclosure from "./visualisations/TextualDisclosure";
import RoleBasedTimeline from "./visualisations/RoleBasedTimeline";
import Chatbot from "./visualisations/Chatbot";
import TaskBasedTimeline from "./visualisations/TaskBasedTimeline";
import demoContent from "../data/demoContent";

const PrototypeGallery = () => {
  return (
    <div className="gallery-page">
      <h1>Human–AI Collaboration Disclosure Prototypes</h1>
      <p>
        Static and interactive disclosure prototypes accompanying our CHI 2026
        paper: <br /> <b> <em>
          “More Human or More AI? Visualizing Human–AI Collaboration
          Disclosures in Journalistic News Production”
        </em></b>. <br />
        The full reproducibility package, reusable React components, and demo
        source code are available on{" "}
        <a
          href="https://github.com/cwi-dis/CHI2026-AIDisclosureVisualizations"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>.
      </p>

      <div className="prototype-card">
        <h2>Textual Disclosure</h2>
        <TextualDisclosure currentViz={demoContent.TextualDisclosure} />
      </div>

      <div className="prototype-card">
        <h2>Role-Based Timeline</h2>
        <RoleBasedTimeline currentViz={demoContent.RoleBasedTimeline} />
      </div>

      <div className="prototype-card">
        <h2>Chatbot</h2>
        <Chatbot currentViz={demoContent.chatbot} />
      </div>

      <div className="prototype-card">
        <h2>Task-Based Timeline</h2>
        <TaskBasedTimeline currentViz={demoContent.TaskBasedTimeline} />
      </div>
    </div>
  );
};

export default PrototypeGallery;
