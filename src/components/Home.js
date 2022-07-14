import {React, useEffect} from 'react'
import styled from 'styled-components'
import ImgCarousal from './ImgCarousal'
import Viewers from './Viewers'
import Movies from './Movies'
import db from '../firebase'
import useStore from '../store/store'

function Home() {
  const state = useStore();
  const navOpen = state.navOpen;
  useEffect(()=>{
  })
  if (navOpen) {
    return (
      <HideContainer>
      
      
      <ImgCarousal/>
      <Viewers/>
      <Movies/>
    </HideContainer>
    )
  }
  return (
    <Container>
      
      
      <ImgCarousal/>
      <Viewers/>
      <Movies/>
    </Container>
  )
}

export default Home

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x:hidden;
  &:before{
    background: url('/images/home-background.png') center center / cover;
    content: "";
    no-repeat: fixed;
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index:-1;
    
  }
  
`

const HideContainer = styled.main`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
max-height: calc(100vh - 70px);
overflow:hidden;
&:before{
  background: url('/images/home-background.png') center center / cover;
  content: "";
  no-repeat: fixed;
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  z-index:-1;
  
}
  `

// const TestButton = styled.button`
//   background-color: red;
//   width: 20vw;
//   height: 20vh;
//   font-size: 50px;
//   align-items: center;
//   margin: 5vh 50vw;
//   `

