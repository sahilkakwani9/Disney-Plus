import React from 'react'
import style from 'styled-components'

function Login() {
  return (
    <Container>
        <Box>   
            <LogoOne src="/images/cta-logo-one.svg"/>
            <SignUp>GET ALL THERE</SignUp>
            <Description>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase.</Description>
            <LogoTwo src="/images/cta-logo-two.png"/>
        </Box>
    </Container>
  )
}

export default Login

const Container = style.div`
    min-height: calc(100vh - 70px);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: top;
    
    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/images/login-background.jpg');
        opacity: 0.9;
        position: absolute;
        content: "";
        top:0;
        bottom:0;
        right:0;
        left:0;
        z-index: -1;
    }`

const Box = style.div`
    max-width: 50%;
    // width: 90%;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `

const LogoOne = style.img`
    `
const SignUp = style.a`
    width: 100%;
    background-color: #0063e5;
    text-align: center;
    font-weight: bold;
    border-radius: 4px;
    padding: 17px 0;
    font-size: 18px;
    cursor: pointer;
    margin-top: 8px;
    margin-bottom: 12px;
    transition: all 250ms;

    &:hover {
        background-color: #0483ee;
    }
    `

const Description = style.div`
    font-size: 11px;
    text-align: center;
    letter-spacing: 1.5px;
    line-height: 1.5;
    margin-bottom: 10px;` 

const LogoTwo = style.img`
    width: 90%;`