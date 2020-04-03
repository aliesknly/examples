import React from 'react';
import './assets/css/App.css'
//Components
import {Container} from 'reactstrap'
import Header from './components/body/Header';
import Body from './components/body/Body';
import Footer from './components/body/Footer';

function App() {
  return (
    <div >
        <Header/>
      <Container>
        <Body/>
        <Footer/>
      </Container>
    </div>
  );
}

export default App;
