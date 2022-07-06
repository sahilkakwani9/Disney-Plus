import {React,useState,useEffect} from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import useStore from '../store/store'
import { useAuth0 } from "@auth0/auth0-react";


function Navbar() {
    // const history = useHistory();
    const [photo,setPhoto] = useState("");
    const state = useStore();
    const logged = state.logged;
    const setLogged = state.setLogged;
    console.log(logged);
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loginWithRedirect } = useAuth0();
    // const userName = useSelector(selectUserName);
    // const userPhoto = useSelector(selectUserPhoto);

    useEffect(()=>{
        document.title = 'Disney+'
        // logged = state.logged;
    })
    useEffect(() => {
        setLogged(window.localStorage.getItem('logged'));
      }, []);
    
      useEffect(() => {
        window.localStorage.setItem('logged', logged);
      }, [logged]);
    const clickAn= ()=>{
        navigate('/details');
    }
    // const signIn = ()=>{
    //     auth.signInWithPopup(provider)
    //     .then((result) => {
    //         let user = result.user;
    //         console.log(user.photoURL);
    //         setPhoto(user.photoURL);
    //         setLogged(true);
    //         navigate('/');

    //         // dispatch(setUserLogin({
    //         //     name: user.displayName,
    //         //     email: user.email,
    //         //     photo: user.photoURL
    //         // }))
    //     })
    // }

    // const signOut = ()=>{
    //     auth.signOut()
    //     .then(()=>{
    //         // dispatch(setSignOut());
    //         setLogged(false);
    //         navigate('/login');
    //     })

    // }
  return (
      <>
        <Nav>
            <Logo onClick={()=>{navigate('/');}} src='./images/logo.svg'/>
            {(!logged)?(
                <Login onClick={() => {navigate('/login');}}>login</Login>):
                <>
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
                    <       img src="./images/original-icon.svg" alt="" />
                            <span>ORIGINALS</span>
                        </a>
                        <a onClick={clickAn}>
                            <img src="./images/movie-icon.svg" alt="" />
                            <span>MOVIES</span>
                        </a>
                        <a>
                            <img src="./images/series-icon.svg" alt="" />
                            <span>SERIES</span>
                        </a>

                    </NavMenu>
                    <UsrImg onClick={()=>setLogged(false)} src={photo.toString()}/>
                </>
            }
            
        </Nav></>
    
  )
}

export default Navbar

const Nav = styled.nav`
    height:70px;
    background:#090b13;
    display:flex;
    align-items:center;
    width: 100vw;
    padding: 0 36px;
    justify-content: space-between;
    position: fixed;
    z-index: 1;
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

const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    text-transform: uppercase;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.6);
    letter-spacing: 1.5px;
    cursor: pointer;
    transition: all 0.2s ease 0s;
    
    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }`