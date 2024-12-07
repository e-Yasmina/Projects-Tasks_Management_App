import React, { useState } from 'react';
import "./StickyNote.css"

const StickyNote = () => {
    const [content, setContent] = useState("Hello! I'm a sticky note!");
    const handleInputChange = (event) => {
        setContent(event.target.innerText);
      };
  return (
    <div className="container">
      <div className="container-inner">
        <div className="sticky-container">
          <div className="sticky-outer">
            <div className="sticky">
              <svg width="0" height="0">
                <defs>
                  <clipPath id="stickyClip" clipPathUnits="objectBoundingBox">
                    <path
                      d="M 0 0 Q 0 0.69, 0.03 0.96 0.03 0.96, 1 0.96 Q 0.96 0.69, 0.96 0 0.96 0, 0 0"
                      strokeLinejoin="round"
                      strokeLinecap="square"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="sticky-content"  contentEditable={true} onInput={handleInputChange} > 
              {!content && <span style={{ color: 'gray' }}>Add your task here</span>}
                {content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyNote;
