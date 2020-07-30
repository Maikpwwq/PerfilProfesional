import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import About from '../components/About';
import Info from '../components/Info';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificate from '../components/Certificate';
import Skills from '../components/Skills';
import Loader from '../components/Loader';

//Hooks
import useJSONAPI from '../hooks/useJSONAPI';

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

const api = new Request('./Datos.json') // Constructor Request
const API = require('./Datos.json'); // Load Json data

const App = () => {
    const data = useJSONAPI(API);
    console.log(data);
    return data.length === 0 ? <><GlobalStyle/><Loader/></> : (
        <Main>
            <GlobalStyle/>
            <Sidebar>
                <About avatar={data.avatar}
                    name={data.name}
                    profesion={data.profesion}
                    bio={data.bio}
                    adress={data.adress}
                    social={data.social}                         
                />                    
            </Sidebar>
            <Info>
                <Education 
                    data= {data.education}                    
                />
                <Experience
                    data= {data.experience}
                />                
                <Certificate
                    data= {data.certificate}
                />
                <Skills
                    data= {data.skills}
                />
            </Info>  
        </Main>
    );
}

export default App;