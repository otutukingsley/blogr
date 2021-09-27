import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }


  body{
      font-family: 'Ubuntu', sans-serif;
      background-color: ${({ theme }) => theme.colors.whiteText};
      color: ${({ theme }) => theme.colors.bodyText};
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
  }


  ul{
      list-style: none;
      height: 100%;
  }
  a{
      text-decoration: none;
      color: ${({ theme }) => theme.colors.whiteText};
      font-weight: 400;
  }

  nav{
      width: 100%;
      margin-top: 55px;
      display: flex;
      justify-content:space-between;
      align-items: center;
  }


  ul.nav-links-left{
      flex: 1;
      margin-left: 60px;
  }

  .nav-links-left, .nav-links-right {
      display: flex;
      align-items: center;
  }

  .nav-links-item-left{
      margin-right: 29px
  }
  .nav-links-item-right{
    margin-left: 29px
}

.btn{
    padding: 15px 30px;
    border: none;
    font-weight: 600;
    border-radius:25px;
    font-size:17px;
    cursor: pointer;
    outline: none;
    font-family: 'Ubuntu', sans-serif;
}

.btn-light{
    color: ${({ theme }) => theme.colors.lightRedBg};
    background-color: ${({ theme }) => theme.colors.whiteText};
}
.btn-white{
    color: ${({ theme }) => theme.colors.whiteText};
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.whiteText};

}
.btn-white:hover {
    background: ${({ theme }) => theme.colors.whiteText};
    color: ${({ theme }) => theme.colors.lightRedBg};
}
.btn-light:hover{
 background-color: ${({ theme }) => theme.colors.veryLightRed};
color: ${({ theme }) => theme.colors.whiteText};
}

.header-header{
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    margin-top: 150px;
    margin-bottom: 46px;
}

.button-container{
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: center;
}
.button-container .btn{ 
    margin: 15px;
}

.header-title{
    font-size: 60px;
    font-weight: 300;
    margin-bottom: 25px;
}

.paragraph{
    font-weight:400;
    letter-spacing: 1.5px;
    font-size: 18px;
}
.design{
    padding-top: 7.1375rem;
    padding-bottom: 15.75rem;
    padding-left: 1.875rem;
    padding-right: 1.875rem;
    height: 920px;
}
.designed-header{
    text-align: center;
    font-size: 2.2rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.veryDarkGreyBlue};
}
.designed-container{
    max-width: 1300px;
    margin: 0 0 0 auto;
    position: relative;
}
.designed-content{
    position: absolute;
    left: 0;
    width: 50%;
    margin-top: 11rem;
    padding-right: 0.7rem;
}

.editor{
    margin-bottom:83px;
}
.editor-header, .robust-header{
    margin-bottom:35px;
    font-weight: 400;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.veryDarkGreyBlue};
    letter-spacing: 0.1rem;
}
.content{
    text-align: left;
    line-height: 2;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.veryDarkDestBlue};
    letter-spacing: 0.07rem;
}
.art-section{
    margin-top: 10rem;
    border: 2px solid ${({ theme }) => theme.colors.veryDarkGreyBlue};
    height: 401px;
    background-color: ${({ theme }) => theme.colors.veryDarkGreyBlue};
    border-top-right-radius: 160px;
    border-bottom-left-radius: 160px;
    background-position-y: 75%;
    background-position-x: -45%;
    background-repeat: no-repeat;
    background-image: url('./images/bg-pattern-circles.svg');
    color: white;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    padding-left: 120px;
    padding-right: 120px;
}

.infrastructure{
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
margin-left:20px;
}

.infrastructure h1{
    font-size: 2.5rem;
    font-weight: 300;
    margin-bottom: 35px;
    letter-spacing:0.07rem;
}
.infrastructure p{
    text-align: justify;
    line-height: 2;
    text-align: left;
    line-height: 2;
    font-weight: lighter;
    font-size:15px;
    width:75%;
}

.powerful-container{
    max-width: 1300px;
    margin: 0 auto 0 0;
    position: relative;
}
.powerful-content{
    position: absolute;
    right: 0;
    width: 50%;
    margin-top: 11rem;
    padding-right: 0.7rem;
}

.footer-logo{
    width:20%;
    height: 100%;
}
.footer-content{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 80%;
    text-align:left;
}

footer a{
    color: ${({ theme }) => theme.colors.footerText};
    font-size:14px;
    font-weight: 300;
}


footer h3{
    margin-bottom: 40px;
    color: ${({ theme }) => theme.colors.whiteText};
    font-weight: 400;
    font-size: 16px;
}

footer li{
    margin-bottom: 19px;
}

.footer-links{
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: flex-start;
    padding: 0;
}
`

export const HeaderSection = styled.header`
  height: 600px;
  background-color: ${({ theme }) => theme.colors.lightRedBg};
  background-image: url('./images/bg-pattern-intro.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 120%;
  border-bottom-left-radius: 160px;
  color: ${({ theme }) => theme.colors.whiteText};
`

export const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  height: 100%;
  overflow: hidden;
  position: relative;

`
export const FooTer = styled.footer`
padding: 88px 0;
background-color:${({ theme }) => theme.colors.footerBg};
`

export const FooterContainer = styled(HeaderContainer)`
display: flex;
flex-direction: row;
`

export const Illustration = styled.div`
height: 886px;
width: 93%;
background-image: url('./images/illustration-editor-desktop.svg');
background-position: center center;
background-repeat: no-repeat;
background-size: 80%;
background-position-x: 0;
position: absolute;
top: 0;
bottom: 0;
right: -35rem;
z-index: 1;
`
export const PowerFul = styled.div`
height: 886px;
width: 93%;
background-image: url('./images/illustration-laptop-desktop.svg');
background-position: center center;
background-repeat: no-repeat;
background-size: 80%;
background-position-x: 0;
position: absolute;
top: 0;
bottom: 0;
left: -19rem;
z-index: 1;
`

