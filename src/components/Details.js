import React from 'react'
import style from 'styled-components'
import movies from '../movies.json'


function Details() {
  return (
    <Container>
        {
            movies && movies.map((movie)=>{{
                return <Background>
                <img src={movie.coverPath} alt="" />
            </Background>
            }})
        }
        
        <ImgTitle>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="" />
        </ImgTitle>
        <Controls>
            <PlayButton>
                <img src="/images/play-icon-black.png" alt="" />
                <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
                <img src="/images/play-icon-white.png" alt="" />
                <span>TRAILER</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupButton>
                <img src="/images/group-icon.png" alt="" />
            </GroupButton>
        </Controls>
        <Subtitle>
            Animation English 2018 U
        </Subtitle>
        <Description>
            A chinese mom who's sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.
        </Description>
    </Container>
  )
}

export default Details

const Container = style.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-y: hidden;`

const Background = style.div`
    position: fixed;
    top: 0;
    bottom: 10;
    left: 0;
    right: 0;
    z-index: -1;

    img {
        height: 100%;
        width:100%;
        object-fit: cover;
    }
    `
const ImgTitle = style.div`
    width: 35vw;
    height: 30vh;
    min-height: 170px;
    min-width: 200px;
    margin-top: 45px;
    margin-left:-50px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    `

const Controls = style.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    `

const PlayButton = style.button`
    display: flex;
    align-items: center;
    border-radius: 4px;
    font-size: 15px;
    padding: 0 24px;
    margin-right: 22px;
    border: none;
    height: 46px;
    cursor: pointer;
    letter-spacing: 1.8px;
    background: 2px solid white;
    cursor: pointer;
    
    &:hover {
        background: rgb(198, 198, 198); 
    }`


const TrailerButton = style(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249 ,249);
    color: rgb(249, 249 ,249);
`



const AddButton = style.button`
    margin-right: 16px;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    border: rgb(249, 249 ,249);
    background-color: rgba(0,0,0,0.6);
    span {
        font-size: 25px;
        color: white;
    }
    `

const GroupButton = style(AddButton)`
    backgound: rgb(0,0,0);
    img {
        height:100%;
        width: 100%;
    }`

const Subtitle = style.div`
    color: rgb(290,290,290);
    margin-top: 25px;
    font-size: 15px;
    min-height: 20px;`

const Description = style.div`
    margin-top: 15px;
    font-size: 20px;
    line-height: 1.4;
    color: rgb(290,290,290);
    width: 80%;`