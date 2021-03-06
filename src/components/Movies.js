import React from 'react'
import useStore from '../store/store'
import style from 'styled-components'
import movies from '../movies.json'
import {Link} from 'react-router-dom'

function Movies(props) {
    const state = useStore();
    const genre = state.genre;
  return (
    <Container>
        <h4>Recommended for You</h4>
        <Content>
            {
                movies && movies.map((movie)=>{{
                    if (genre !== "all"){
                        if (genre === "marvel"){
                            if(movie.filter === "marvel"){
                                return <Wrap>
                                <Link to={movie.endpoint}>
                                <img src={movie.path} alt="" />
                                </Link>
                                
                                </Wrap> 
                            }
                        }
                        else if(genre === "pixar"){
                            if(movie.filter === "pixar"){
                                return <Wrap>
                                <Link to={movie.endpoint}>
                                <img src={movie.path} alt="" />
                                </Link>
                                
                                </Wrap> 
                            }
                        }
                        else if(genre === "nat-geo"){
                            if(movie.filter === "nat-geo"){
                                return <Wrap>
                                <Link to={movie.endpoint}>
                                <img src={movie.path} alt="" />
                                </Link>
                                
                                </Wrap> 
                            }
                        }
                        else if(genre === "star-wars"){
                            if(movie.filter === "star-wars"){
                                return <Wrap>
                                <Link to={movie.endpoint}>
                                <img src={movie.path} alt="" />
                                </Link>
                                
                                </Wrap> 
                            }
                        }
                        
                    }
                    else if(genre === "all") {
                        return <Wrap>
                        <Link to={movie.endpoint}>
                        <img src={movie.path} alt="" />
                        </Link>
                        
                    </Wrap> 
                    }
                    
                }
                })
            }
        </Content>
    </Container>
  )
}

export default Movies

const Container = style.div`
    padding: 10px 0;
    `

const Content = style.div`
    display: grid;
    grid-template-columns: repeat(5,minmax(0,1fr));
    grid-gap: 25px;
    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(2,minmax(0,1fr)); 
    }
    `

const Wrap = style.div`
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    border: 3px solid rgba(249,249,249,0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.8);
    }
    @media only screen and (max-width: 768px) {
        width: 40vw;
    }
    `