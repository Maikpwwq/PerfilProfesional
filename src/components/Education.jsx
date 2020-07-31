import React from "react";
import H2Element from '../styled/H2Element';
import H3Element from '../styled/H3Element';
import ParamElement from '../styled/ParamElement';

const Education = props => {
    return (
      <div className="EducationSection">
        <div className="EducationContainer">
          <H2Element name="Education" />
          {props.data.map((edu, index) => (
            <div className='Education-item' key={`Education-${index}`}>
              <H3Element>{edu.degree} @ {edu.university} -
              <span> From {edu.startDate} to {edu.endDate}</span></H3Element>
              <ParamElement content={edu.description} />
            </div>
          ))}
        </div> 
      </div>
    );
}

export default Education;