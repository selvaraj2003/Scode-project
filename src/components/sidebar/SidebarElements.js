import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-router-dom'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #02072b;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s all ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

`

export const CloseIcon = styled(FaTimes)`
    color: #fff;

`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    padding-right : 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;

`
export const SidebarWrapper = styled.div`
    color: #fff;

`

export const SidebarMenu = styled.ul`
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }

`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s all ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #B05FFD;
        transition: 0.2s all ease-in-out;
    }

`

export const SidebarAchor = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s all ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #B05FFD;
        transition: 0.2s all ease-in-out;
    }

`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;

    a{
        border-radius: 10px;
        outline: none;
        border: none;
        padding : 8px 6px 8px 0px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease-in-out;
        text-decoration: none;
        font-weight: 600;
        margin-right : 15px;
        color : #fff;
        border : 1px solid #07dbcd;
        
    
        &:hover {
            color : #B05FFD;
            background : #fff;
        }
    }

`

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    text-decoration: none;
    background: #B05FFD;
    white-space: nowrap;
    padding: 15px 35px;
    color: #010606;
    font-size: 1.2rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    font-weight: 900;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #B05FFD;
    }

`