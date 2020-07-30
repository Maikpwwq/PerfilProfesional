import React from "react";
import H2Element from '../styled/H2Element';
import H3Element from '../styled/H3Element';
import ParamElement from '../styled/ParamElement';

const Experience = props => {
    return (
      <div className="Experience">
        <div className="Experiencecontainer">
            <H2Element name="Experience" />
            {props.data.map((exp, index) => (
                <div className='Experience-item' key={`Experience-${index}`}>
                    <H3Element>{exp.degree} @ {exp.institution} 
                    <span>{exp.startDate} - {exp.endDate}</span></H3Element>
                    <ParamElement content={exp.description} />
                </div>
            ))}
        </div>
      </div>
    );
}

export default Experience;