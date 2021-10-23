import React, { useEffect, useState} from 'react'
import Header from './components/Header'
import Designed from './components/Designed'
import Art from './components/Art'
import Powerful from './components/Powerful'
import Footer from './components/Footer'
import MobileNav from './components/MobileNav'
import {  GlobalStyles} from './components/styles/themes'
import { theme } from './components/styles/colorTheme';
import { ThemeProvider } from 'styled-components';

function App() {
  const [width, setWidth] = useState(window.innerWidth)
  const [menu, setMenu] = useState(false)

  const handleMenuShow = () => {
    setMenu((prev) => !prev)
  }

  const handleWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWidth)

    return () => {
      window.removeEventListener('resize', handleWidth);
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Header width={width} menu={menu} handleMenuShow={handleMenuShow} />
      {width < 947 && menu && <MobileNav />}
      <Designed />
      <Art />
      <Powerful />
      <Footer />
    </ThemeProvider>
  )
}

export default App
