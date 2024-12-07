import React from 'react';
import './ProjectAccordion.css'


const ProjectAccordion = (props) => {
  return (
    <div className="body" id="body__wrapper">
      <div className="page__wrapper">
        <div className="accordion">
          <details>
            <summary>{props.title}</summary>
            <p>
              {props.description}
            </p>
            {/* <div>
                {props.tasks}
            </div> */}
          </details>
        </div>
      </div>
    </div>
  );
};

export default ProjectAccordion;
