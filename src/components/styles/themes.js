import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
      font-family: 'Overpass', sans-serif;
      background-color: ${({ theme }) => theme.colors.whiteText};
      color: ${({ theme }) => theme.colors.bodyText};
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
      font-size: clamp(1rem, 1vw, 2rem);
    }


  ul{
      list-style: none;
      height: 100%;
    }

  a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.whiteText};
      font-weight: 400;
    }

  .btn {
    padding: 15px 30px;
    border: none;
    font-weight: bold;
    border-radius:25px;
    font-size:17px;
    cursor: pointer;
    outline: none;
    font-family: 'Ubuntu', sans-serif;


        @media(max-width:1127px){
            padding: 0.938rem;
            border-radius:1.563rem;
            font-size:0.938rem;
        }

        @media(max-width: 400px){
          padding: 0.78rem;
        }

        @media(max-width:350px){
          font-size:0.738rem;
        }

        @media(max-width:300px){
          font-size:0.55rem;
        }
    }


 .btn-light{
    color: ${({ theme }) => theme.colors.lightRedBg};
    background-color: ${({ theme }) => theme.colors.whiteText};
    transition: all 300ms ease-in-out;

    &:hover{
        background-color: ${({ theme }) => theme.colors.veryLightRed};
       color: ${({ theme }) => theme.colors.whiteText};
    }
 }


 .btn-white{
    color: ${({ theme }) => theme.colors.whiteText};
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.whiteText};

    &:hover {
        background: ${({ theme }) => theme.colors.whiteText};
        color: ${({ theme }) => theme.colors.lightRedBg};
    }
 }

  nav {
      width: 100%;
      margin-top: 3.438rem;
      display: flex;
      justify-content:space-between;
      align-items: center;
      
    
    .hamburger-btn{
        background: transparent !important;
        border: none;
        cursor: pointer;
    }


      ul.nav-links-left{
        flex: 1;
        margin-left: 3.75rem;

         .nav-links-item-left {
            margin-right: 1.813rem;
            transition: all 300ms ease-in-out;
            position: relative;

            a {
              &:hover{
                  img{
                      transform: rotate(180deg)
                  }
              } 
            }
          }
      }

      .nav-links-left, .nav-links-right {
        display: flex;
        align-items: center;
      }

       .nav-links-item-right{
        margin-left: 1.813rem
      }

      .cards {
        position: absolute;
        top: 100%;
        left: 0;
        text-align: center;
        width: 10.625rem;
        height: auto;
        background-color: ${({ theme }) => theme.colors.whiteText};
        margin-top: .625rem;
        z-index: 1000;
        border-radius: .313rem;
        box-shadow: 10px 20px 30px rgba(0, 0, 0, 0.2);
        transition: all 300ms ease-in-out;

          .card-list {
            padding: 1.25rem 0.625rem;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items:center;
            justify-content: center;


               .card-list-item {
                 margin: 0.625rem 0;

                  a{
                    color: ${({ theme }) => theme.colors.bodyText};
                    transition: all 300ms ease-in-out;

                    &:hover{
                        color: black;
                    }
                  }
                }
           }
      }
    }

.mobile-nav{
    background-color: #fff;
    position: absolute;
    overflow: auto;
    top: 8rem;
    left: 50%;
    display: block;
    transform: translateX(-50%);
    width: 20rem;
    border-radius: 0.5rem;
    padding: 2.5rem 1.625rem;
    text-align: center;
    z-index: 3;
    box-shadow: 10px 20px 30px rgba(0, 0, 0, 0.3);


    @media (max-width: 400px) {
      width: 18rem;
    }

    @media (max-width: 300px) {
      width: 15.8rem;
    }

    hr{
        border: 1px solid gray;
        opacity: 0.4;
        margin-bottom: 1.3rem;
    }


    a{
        color: black;
        display: block;
        position: relative;
        transition: all 300ms ease-in-out;
        font-size: 1.3rem;
    
        &:hover{
            font-weight: bold;
        }
    }


    .mobile-btns{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;


        & > button{
            margin: .7rem;
            cursor: pointer;
        }

        .login{
            background: transparent;
            border: none;
            outline: none;
            font-size: 1.3rem;
        }

        .sign-up{
            padding: 1rem 2rem;
            border-radius: 2.4rem;
            text-align: center;
            font-size: 1.2rem;
            font-weight: bold;
            border: none;
            color: ${({ theme }) => theme.colors.whiteText};
            background-color: ${({ theme }) => theme.colors.lightRed};
        }
    }


    .sub-menu{
        margin: 1.6rem 0;
        background-color: #efeff1;
        border-radius: 0.5rem;
        max-height: 0;
        overflow: hidden;
        transform: max-height 3000ms ease-in-out;


        .sub-menu-item{
            margin: 1.5rem 0;
        }
    }


    .mobile-nav-item{
        margin-bottom: 2.6rem;

        &:hover{
            .sub-menu{
                max-height:18.75rem;
            }

            img{
                transform: rotate(180deg);
            }
        }

        img{
            margin: .3rem 0 .3rem .9rem;
        }
    }
}
`

export const HeaderSection = styled.header`
  height: 37.5rem;
  background-color: ${({ theme }) => theme.colors.lightRedBg};
  background-image: url('./images/bg-pattern-intro.svg');
  background-position: center center;
  opacity: 1;
  background-repeat: no-repeat;
  background-size: 120%;
  border-bottom-left-radius: 8rem;
  color: ${({ theme }) => theme.colors.whiteText};

  @media (max-width: 947px) {
    height: 43.75rem;
  }


  @media (max-width: 290px){
    border-bottom-left-radius: none;
  }

  
  .button-container{
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: center;

    .btn{ 
        margin: 0.938rem ;
    }
}
`

export const HeaderContainer = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 1.875rem;
  height: 100%;
  overflow: hidden;
  position: relative;

  .header-header{
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    margin-top:9.375rem;
    margin-bottom: 2.875rem;

    @media screen and (max-width: 947px){
        margin-top: 9.375rem;
    }


    .header-title{
        font-size: 3.75rem;
        font-weight: 300;
        margin-bottom: 1.563rem;
        text-align: center;

        @media screen and (max-width: 947px){
            font-size: clamp(2rem, 2.5vw, 3rem); 
            font-weight: 300;
            margin-bottom: 1.563rem;
        }

        @media screen and (max-width: 350px){
          font-size: 1.5rem;
        }
    }

    .paragraph{
        font-weight:400;
        letter-spacing: 0.105rem;
        font-size: 1.125rem;

        @media(max-width: 730px){
         font-size: 0.938rem;
         text-align: center;
        }
    }
  }
`

export const DesignContainer = styled.div`
padding-top: 7.1375rem;
padding-bottom: 15.75rem;
padding-left: 1.875rem;
padding-right: 1.875rem;
height: 57.5rem;

@media screen and (max-width: 947px) {
  height: unset;
  padding-top: 7.1375rem;
  padding-bottom: 7.1375rem;
  padding-left: 1.875rem;
  padding-right: 1.875rem;    
}

.designed-header{
  text-align: center;
  font-size: 2.2rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.veryDarkGreyBlue};

  @media screen and (max-width: 947px){
      margin-bottom: 4rem;
      font-size: clamp(1rem, 10vw, 2rem); 
  }
}

.designed-container{
  max-width: 81.25rem;
  margin: 0 0 0 auto;
  position: relative;


  @media screen and (max-width: 947px){
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      max-width: unset;
      width: 100%;
      margin: auto;
  
  }

  .designed-content{
      position: absolute;
      left: 0;
      width: 50%;
      margin-top: 11rem;
      padding-right: 0.7rem;


      @media screen and (max-width: 947px){
          position: unset;
          left: unset;
          width: 100%;
          text-align: center;
          margin-top: 6rem;
      }



      .content{
          text-align: left;
          line-height: 2;
          font-size: 15px;
          font-weight: 400;
          color: ${({ theme }) => theme.colors.veryDarkDestBlue};
          letter-spacing: 0.07rem;


          @media screen and (max-width: 947px){
              text-align: center;
          }
      }


      .editor-header, .robust-header{
          margin-bottom:35px;
          font-weight: 400;
          font-size: 1.6rem;
          color: ${({ theme }) => theme.colors.veryDarkGreyBlue};
          letter-spacing: 0.1rem;
      }

      .editor{
          margin-bottom:5.188rem;

          @media screen and (max-width: 947px){
              margin-bottom:3.938rem;
          }
      }
  }
}

`


export const PowerfulContainer = styled(DesignContainer)`
.designed-container{
  margin: 0 auto 0 0;

  @media screen and (max-width: 947px){
    flex-direction: column;
  }

  .designed-content{
    left: unset;
    right: 0;
  }
}
`

export const FooTer = styled.footer`
  padding: 88px 0;
  background-color: ${({ theme }) => theme.colors.footerBg};
`

export const FooterContainer = styled(HeaderContainer)`
  display: flex;
  flex-direction: row;

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .footer-logo{
    width:20%;
    height: 100%;
}

`


export const FooterContent = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
width: 80%;
text-align:left;

@media (max-width: 850px){
 grid-template-columns: 1fr ;
 width: 100%;
 text-align:center;
 place-items: center;
}

  a{
    color: ${({ theme }) => theme.colors.footerText};
    font-size:0.875rem;
    font-weight: 300;
   }

   h3{
    margin-bottom: 2.5rem;
    color: ${({ theme }) => theme.colors.whiteText};
    font-weight: 400;
    font-size: 1rem;

    @media (max-width: 850px){
        margin-bottom: 1.25rem;
    }
   } 

   li{
    margin-bottom: 1.188rem;
  }

   .footer-links{
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: flex-start;
    padding: 0;

    @media (max-width: 850px) {
        margin-top: 1.5rem;
        text-align: center;
        align-items: center;
    }
  }
`

export const PowerFul = styled.div`
  height: 800px;
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

  @media (max-width: 947px) {
    height: 290px;
    width: 290px;
    background-image: url('./images/illustration-laptop-mobile.svg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: unset;
    top: unset;
    bottom: unset;
    left: unset;
    z-index: unset;
  }
`

export const TryIllustrator = styled(PowerFul)`
 background-image: url('./images/illustration-editor-desktop.svg');
 right: -35rem;
 left: unset;

 @media (max-width: 947px) {
    background-image: url('./images/illustration-editor-mobile.svg');
  }

`

export const ArT = styled.section`
  margin-top: 10rem;
  height: 25.063rem;
  background-color: ${({ theme }) => theme.colors.veryDarkGreyBlue};
  border-top-right-radius: 8rem;
  border-bottom-left-radius: 8rem;
  background-position-y: 75%;
  background-position-x: -45%;
  background-repeat: no-repeat;
  background-image: url('./images/bg-pattern-circles.svg');
  color: white;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: evenly;
  align-items: center;
  z-index: 1;
  padding: 0 8rem;



    .infrastructure {
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     justify-content: center;

      @media screen and (max-width: 1127px){
        text-align: center;
        margin-left:unset;
        width:100%;
      }

      @media(max-width: 730px){
        width:100%;
    }


      h1{
        font-size: clamp(2.1rem, 2.5vw, 2.5rem);
        font-weight: 300;
        margin-bottom: 35px;
        letter-spacing:0.07rem;

        @media screen and (max-width: 1127px){
            text-align: center;
            width: 100%;
            margin-bottom: 25px;
        }
      }
      p{
        line-height: 2;
        text-align: left;
        line-height: 2;
        font-weight: lighter;
        font-size:1.1rem;
        max-width:40rem;
        margin: 0 auto;


        @media screen and (max-width: 1127px){
            text-align: center;
            width:100%;
        }
      }
    }
  

  @media (max-width: 1127px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-left: 40px;
    padding-right: 40px;


    .art-img-container{
        margin-top:-12rem;

        @media screen and (max-width:300px){
          margin-top:-8.9rem;
        }
    }
    .art-img-container img{
        width:270px;
    }
  }

  @media (max-width: 750px) {
    height: 600px;
  }
}
`
