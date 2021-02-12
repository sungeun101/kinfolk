import React from 'react';
import styled, { css } from 'styled-components/macro' 
import { Link } from 'react-router-dom'
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { FaBars } from 'react-icons/fa'

const Nav = styled.nav`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 3.75rem;
    padding: 2em;
    z-index:100;
    text-transform: uppercase;
`
const NavLink = css`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
`
const Logo = styled(Link)`
    ${NavLink}
    font-size: 1.3rem;
    font-style: italic;
`
const MenuBars = styled(FaBars)`
    display:none;

    @media screen and (max-width: 48rem){
        display: block;
        font-size: 1.5rem;
        cursor: pointer;
    }
`
const NavMenu = styled.div`
    display:flex;
    align-items: center;
    font-size:1rem;

    @media screen and (max-width: 48rem){
        display: none;
    }
`
const NavMenuLinks = styled(Link)`
    ${NavLink}
`
const NavBtn = styled.div`
    ${NavLink}

    @media screen and (max-width: 48rem){
        display: none;
    }
`

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo to='/'>kinfolk</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='/contact' primary='true'>Contact Us</Button>
            </NavBtn>
        </Nav>
    );
};

export default Navbar;