import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width:100px;
    max-width: 200px;
    padding: ${({big}) => (big ? '16px 40px' : '14px 24px')};
    white-space: nowrap;
    outline: none;
    border: none;
    background: ${({primary}) => (primary ? '#000d1a' : 'CD853F')};
    color: ${({primary}) => (primary ? '#fff' : '#000d1a')};
    font-size: ${({big}) => (big ? '20px' : '14px')};
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
        transform: translateY(-2px);
    }
`