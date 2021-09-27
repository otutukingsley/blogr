import React from 'react'
import Header from './components/Header'
import {  GlobalStyles} from './components/styles/themes'
import { theme } from './components/styles/colorTheme';
import { ThemeProvider } from 'styled-components';
import Designed from './components/Designed';
import Art from './components/Art';
import Powerful from './components/Powerful';
import Footer from './components/Footer';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header/>
      <Designed/>
      <Art/>
      <Powerful/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
