import React from 'react';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import About from '../components/About';
import Info from '../components/Info';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificate from '../components/Certificate';
import Skills from '../components/Skills';
import Loader from '../components/Loader';

//Hooks import useJSONAPI from '../hooks/useJSONAPI';
//const data = useJSONAPI(api);

//API: // Load Json data // //const data = require('../../Datos.json');
import * as data from '../../Datos.json';
// Constructor Request // new Request();

// Styled components
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    background: #f5f5f5;
  }
`;

const App = () => {
    console.log(data);    
    return data.length === 0 ? <><GlobalStyle /><Loader /></> : (
      <Main>
        <GlobalStyle />
        <Sidebar>
          <About
            avatar={data.avatar}
            name={data.name}
            profession={data.profession}
            bio={data.bio}
            address={data.address}
            social={data.social}
          />
        </Sidebar>
        <Info>
          <Education data={data.education} />
          <Experience data={data.experience} />
          <Certificate data={data.certificate} />
          <Skills data={data.skills} />
        </Info>
      </Main>
    )
};

export default App;