import React from 'react'
import style from 'styled-components'
import useStore from '../store/store';

function Viewers() {
    const state = useStore();
    const showMarvel = state.showMarvel;
    const showAll = state.showAll;
    const showPixar = state.showPixar;
    const showStarWars = state.showStarWars;
    const showNatGeo = state.showNatGeo;
  return (
    <Container>
        <Wrap>
            <img onClick={showAll} src="/images/viewers-disney.png" alt="" />
        </Wrap>
        <Wrap>
            <img onClick={showPixar} src="/images/viewers-pixar.png" alt="" />
        </Wrap>
        <Wrap>
            <img onClick={showMarvel} src="/images/viewers-marvel.png" alt="" />
        </Wrap>
        <Wrap>
            <img onClick={showNatGeo} src="/images/viewers-national.png" alt="" />
        </Wrap>
        <Wrap>
            <img onClick={showStarWars} src="/images/viewers-starwars.png" alt="" />
        </Wrap>
    </Container>
  )
}

export default Viewers

const Container = style.div`
    margin-top: 30px;
    display: grid;
    padding: 30px 0 26px;
    grid-template-columns: repeat(5, minmax(0,1fr));
    grid-gap:25px;
    
`
const Wrap = style.div`
    border: 3px solid rgba(249,249,249,0.1);
    border-radius: 10px;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img{
        width:100%;
        height:100%;
        object-fit: cover;
    }
    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border: 3px solid rgba(249,249,249,0.8);
    }
    `