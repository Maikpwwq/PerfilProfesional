import React from "react";
import Social from './Social';
//import MailForm from './MailForm';

import styled from 'styled-components';

const AboutSection = styled.div`
  text-align: center;
`;

const AboutContainer = styled.div`

`;

const AboutAvatar = styled.div`
  padding: 2em 0 0 0;
`;

const AboutAvatarDiv = styled.div`
  border-radius: 100%;
  width: 160px;
  height: 160px;
  border: 2px solid #E91E63;
  margin: 0 auto;
  display: block;
  box-shadow:  0 0 10px  rgba(0,0,0,0.6);
`;

const AboutAvatarImg = styled.iframe`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: block;
  outline: none;
  border: none;
  allowTransparency: 'true';
  background: none transparent;
`;

const AboutName = styled.div`
  text-align: center;
`;

const Abouth2 = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  letter-spacing: 1.2px;
  margin: .5em 0 0 0;
  color: #C2185B
`;
const AboutProfession = styled.p`
  margin: .2em 0 1em 0;
  letter-spacing: 1.6px;
  font-weight: 300;
  color: #C2185B;
`;

const AboutBio = styled.p`
  color: #757575;
  font-size: 1em;
  font-weight: 300;
  text-align: justify;
`;

const AboutLocation = styled.p`
  font-size: 1em;
  font-weight: 400;
  color: #757575;
`;

const About = ({avatar,name,profession,bio,address,social}) => {
    return (
      <AboutSection>
        <AboutContainer>
          <AboutAvatar>
            <AboutAvatarDiv>
              <AboutAvatarImg src={avatar} alt={name} seamless/>
            </AboutAvatarDiv>            
          </AboutAvatar>   
          <AboutName>
            <Abouth2>{name}</Abouth2>
          </AboutName>
          <AboutProfession>{profession}</AboutProfession>
          <AboutBio>
            {bio}
          </AboutBio>
          <AboutLocation>
            {address}
          </AboutLocation>
          <div className="About-social">
            <Social social={social} />
          </div>        
        </AboutContainer>
      </AboutSection>
      //<MailForm/>
    );
}

export default About;    
