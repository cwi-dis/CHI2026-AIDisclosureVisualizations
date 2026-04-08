import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Chatbot = ({ currentViz }) => {
  const [chatHistory, setChatHistory] = useState([]);
  const [followups, setFollowups] = useState([]);
  const [isResetting, setIsResetting] = useState(true);

  const handleQuestion = (q) => {
    setIsResetting(false);
    setChatHistory([{ q: q.label, a: q.answer }]);
    setFollowups(q.followups || []);
  };

  const handleFollowup = (fup) => {
    setIsResetting(false);
    setChatHistory(prev => [...prev, { q: fup.label, a: fup.answer }]);
    setFollowups([]);
  };

  const resetChat = () => {
    setIsResetting(true);
    setChatHistory([]);
    setFollowups([]);
  };

  const chatBodyRef = useRef(null);

  const scrollToBottom = () => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (!isResetting && chatHistory.length > 0) {
      scrollToBottom();
    }
  }, [chatHistory, followups, isResetting]);

  return (
    <div className="disclosure-Chatbot-static">
      <div className="chat-body" ref={chatBodyRef}>
        <div className="chat-message">
          <img
            src="/images/robot.png"
            alt="🤖"
            className="chat-icon icon-img"
          />
          <div className="chat-bubble bot">
            <div style={{ marginBottom: "6px" }}><strong>Hi, I'm NewsChat!</strong></div>
            {currentViz.content.intro.split("\n").map((line, idx) => (
              <div key={idx} style={{ margin: 0 }}>{line}</div>
            ))}
          </div>
        </div>

        {chatHistory.length === 0 && (
          <div className="button-grid">
            {currentViz.content.questions.map((q, idx) => (
              <button key={idx} onClick={() => handleQuestion(q)}>{q.label}</button>
            ))}
          </div>
        )}

        {chatHistory.map((entry, idx) => (
          <div key={idx}>
            <div className="chat-message">
              <div className="chat-bubble user">{entry.q}</div>
            </div>
            <div className="chat-message">
              <img
                src="/images/robot.png"
                alt="🤖"
                className="chat-icon icon-img"
              />
              <div className="chat-bubble bot">{entry.a}</div>
            </div>
          </div>
        ))}

        {chatHistory.length > 0 && (
          <div className="button-grid">
            {followups.map((fup, idx) => (
              <button key={idx} onClick={() => handleFollowup(fup)}>{fup.label}</button>
            ))}
            <button onClick={resetChat}>Back to start</button>
          </div>
        )}
      </div>
    </div>
  );
};

Chatbot.propTypes = {
  currentViz: {
    content: {
      into: PropTypes.string,
      questions: [
        {
          label: PropTypes.string,
          answer: PropTypes.string,
          followups: PropTypes.array
        }
      ]
    }
  }
};

export default Chatbot;
