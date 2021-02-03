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
    padding: 1rem 2rem;
    z-index:1000;
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
    margin-right: -3rem;

    @media screen and (max-width: 48rem){
        display: none;
    }
`
const NavMenuLinks = styled(Link)`
    ${NavLink}
`
const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1.5rem;
    background: yellow;

    @media screen and (max-width: 48rem){
        display: none;
    }
`

const Navbar = () => {
    return (
        <Nav>
            <Logo to='/'>Edd</Logo>
            <MenuBars />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='/contact' primary>Contact Us</Button>
            </NavBtn>
        </Nav>
    );
};

export default Navbar;