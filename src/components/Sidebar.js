import { useEffect, useRef } from 'react';
import React from 'react'
import styled from 'styled-components'
import useStore from '../store/store'

export default function Sidebar(props) {
    const ref = useRef(null);
    const { onClickOutside } = props;
    const state = useStore();
    const navOpen = state.navOpen;
    const setNavOpen = state.setNavOpen;
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClickOutside]);
  if (!props.show)
    return null;
  return (
    <div ref={ref}>
            <Sidebars>
                <SideList><img src="./channels.svg" alt="" /> Channels</SideList>
                <SideList><img src="./languages.svg" alt="" /> Languages</SideList>
                <SideList><img src="./genres.svg" alt="" /> Genres</SideList>
            </Sidebars>
    </div>
  )
}






const Sidebars = styled.div`
width: 70vw;
background-color: #151718;
min-height: 100vh;
position: absolute;
top: 0;
left: 0;
right: 0;
z-index: 2;
transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0s;
padding-top: 10px;
max-height: 100vh;
overflow: hidden;
`

const SideList = styled.div`
display: flex;
padding: 10px 0;
font-size: 1.2rem;
// margin-left: 15px;
img {
    padding:0 15px;
    z-index:3;
}
`
