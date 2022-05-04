import React from 'react'
import styled from 'styled-components'

function Navbar() {
  return (
      <>
        <Nav>
            <Logo src='./images/logo.svg'/>
            <NavMenu>
                <a>
                    <img src="./images/home-icon.svg" alt="" />
                    <span>HOME</span>
                </a>
            </NavMenu>
        </Nav></>
    
  )
}

export default Navbar

const Nav = styled.nav`
    height:70px;
    background:#090b13;
    display:flex;
    align-items:center;
    padding: 0 36px;
    `

const Logo = styled.img`
    width:80px`

const NavMenu = styled.div`
        display:flex;

        a{
            display:flex;
            align-items:center;
            padding: 0 12px;
            img{
                height: 20px;
            }
        }
`