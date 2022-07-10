import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgCarousal() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };
  return (
    
    <Carousel {...settings}>
        <Wrap>
            <img src="./images/slider-badging.jpg" alt="" />
        </Wrap>
        <Wrap>
            <img src="./images/slider-badag.jpg" alt="" />
        </Wrap>
        <Wrap>
            <img src="./images/slider-scale.jpg" alt="" />
        </Wrap>
        <Wrap>
            <img src="./images/slider-scales.jpg" alt="" />
        </Wrap>
    </Carousel>
  )
}

export default ImgCarousal

const Carousel = styled(Slider)`
    padding-top:20px;
    margin-top: 60px;
    
    ul li button {
        &:before {
            font-size:10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button::before {
        color:white;
    }

    button {
        z-index:1;
    }
    .slick-list {
        overflow: visible;
    }
    @media only screen and (max-width: 768px){
        margin-top: 0px;
    }`

const Wrap = styled.div`
    cursor: pointer;
    img {
        border: 4px solid transparent;
        border-radius:4px;
        height:100%;
        width:100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;

        &:hover {
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            border: 4px solid rgba(249, 249, 249, 0.8)
        }
    }
    @media only screen and (max-width: 768px){

    }`