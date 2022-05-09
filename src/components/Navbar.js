import React from 'react'
import styled from 'styled-components'

function Navbar() {
  return (
      <>
        <Nav>
            <Logo src='./images/logo.svg'/>
            <NavMenu>
                <a href='/'>
                    <img src="./images/home-icon.svg" alt="" />
                    <span>HOME</span>
                </a>
                <a href='/login'>
                    <img src="./images/search-icon.svg" alt="" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="./images/watchlist-icon.svg" alt="" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="./images/original-icon.svg" alt="" />
                    <span>ORIGINALS</span>
                </a>
                <a href='/details'>
                    <img src="./images/movie-icon.svg" alt="" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="./images/series-icon.svg" alt="" />
                    <span>SERIES</span>
                </a>

            </NavMenu>
            <UsrImg src='./images/sahil-headshot.JPG'/>
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
    justify-content: space-around;
    `

const Logo = styled.img`
    width:80px`

const NavMenu = styled.div`
        display:flex;
        {/* flex:1; */}
        margin-left:25px;
        align-items: center;

        a{
            display:flex;
            text-decoration: none;
            color: inherit;
            align-items:center;
            padding: 0 12px;
            cursor:pointer;
            img{
                height: 20px;
            }
            span{
                font-size: 13px;
                letter-spacing: 1.42px;
                position: relative;

                &:after {
                    content: '';
                    height: 2px;
                    // width:30px;
                    background: white;
                    opacity:1;
                    position: absolute;
                    bottom: -6px;
                    left:0;
                    right:0;
                    opacity:0;
                    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                    transform: scaleX(0);
                }
            }

            &:hover {
                span:after {
                    transform: scaleX(1);
                    opacity:1;
                }
            }
        }
`

const UsrImg = styled.img`
        width: 36px;
        height: 36px;
        border-radius: 50%;
        cursor:pointer;
    `