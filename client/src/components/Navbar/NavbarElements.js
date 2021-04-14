// https://styled-components.com/
import styled from 'styled-components'
// Link Router
import { Link as LinkR } from 'react-router-dom'
// Link Scroll 46.26
import { Link as LinkS } from 'react-scroll'

// Navbar 
export const Nav = styled.nav`
background: ${({ scrollNav }) => (scrollNav ? '#0B2545' : 'transparent')};

/* This background will keep it blue and static */
background: #0B2545; 

height: 80px;
/* BUG FIX MAY NEED TO UNCOMMENT IF THERE ARE ISSUES LATER */
/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
margin-top: -80px;
/* /////////////////////////////////////////////////////// */
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}
`;

// Container
export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`;

// Logo
export const NavLogo = styled(LinkR)`
color: #EEF4ED;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24 px;
font-weight: bold;
text-decoration: none;
`;

// Mobile dropdown
export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #EEF4ED;
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px){
    display: none;
}
`;

export const NavItem = styled.li`
height: 80px;
`;

export const NavLinks = styled(LinkS)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
margin: 0 0;

// the border bottom will be the underlining of the items in the navbar
&.active{
    border-bottom: 3px solid #01BF71;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px){
    display: none;
}
`;

export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 10px 20px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`;