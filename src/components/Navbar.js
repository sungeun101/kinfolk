import React from 'react';
import styled, {css} from 'styled-components/macro' 
import {Link} from 'react-router-dom'
import { menuData } from '../data/MenuData';
import { Button } from './Button';

const Nav = styled.nav`
    position: fixed;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    padding: 1rem 2rem;
    background: green;
    box-sizing:border-box;
`
const NavLink = css`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    background: pink;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
`
const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
`
const MenuBars = styled.i`
    
`
const NavMenu = styled.div`
    display:flex;
    align-items: center;
    margin-right: -48px;
`
const NavMenuLinks = styled(Link)`
    ${NavLink}
`
const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
    background: yellow;
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