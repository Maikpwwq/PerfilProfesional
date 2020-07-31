import React from "react";
import H2Element from '../styled/H2Element';
import H3Element from '../styled/H3Element';
import ParamElement from '../styled/ParamElement';

const Certificate = props => {
    return (
      <div className="CertificateSection">
          <div className="CertificateContainer">
              <H2Element name="Certificate"/>
              {props.data.map((cert, index) => (
                <div className='Certificate-item' key={`Certificate-${index}`}>
                  <H3Element> {cert.name} @ {cert.institution} -
                  <span> Completed {cert.date}</span></H3Element>
                  <ParamElement content={cert.description}/>
                </div>
              ))}
          </div>
      </div>
    );
}

export default Certificate;