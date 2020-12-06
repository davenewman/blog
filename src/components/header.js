import React, { useState } from 'react'
import styled from "styled-components"
import { Link } from "gatsby";

// There should be a media query here that updates the order of the grid template areas 
// Hamburger menu from https://snopkowski.com/blog/gatsby-navigation-styled-components
const HeaderDiv = styled.div`
  
    position: sticky;
    top: 0;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-areas: 'logo navitems';
    justify-items: start;
    align-items: center;
    padding: 0.8em;
    border-bottom: 10px solid;
    border-image: linear-gradient(45deg, #fff9d9, #960c22) 1;
    z-index: 4;
    background: #0C0C1C;
    @media (max-width: 768px) {
      grid-template-columns: 0.5fr auto 0.5fr;;
      grid-template-areas: 'navitems logo'
    }
`

const NavDiv = styled.div`
  font-family: arial;
  display: grid;
  grid-gap: calc(1em + 1vw);
  grid-auto-flow: column;
  margin-left: 3em;
  align-items: center;
  grid-area: navitems;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-left: 0;
    padding-top: 10vh;
    position: fixed;
    background: rgba(0, 0, 0, 0.9);
    width: 70vw;
    justify-content: flex-start;
    align-items: center;
    transition: all 0.3s ease-in;
    top: 0;
    height: 100%;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`
const Logo = styled(Link)`
    font-family: mono;
    grid-area: logo;
    margin: 0 auto;
    font-size: 2.5em;
    color: #c8102e;
    border: 5px solid gray;
    padding: 0.5em;
    text-decoration: none;
    border-radius: 50%;
    transition: 0.5s;

    :hover {
      color: #fff9d9;
      background: #c8102e;
      box-shadow: 20px 5px 5px #888b8d;
      border-color: black;
    }
`

const NavItem = styled(Link)`
  font-size: 2em;
  text-decoration: none;
  color: #888b8d;
  transition: .5s;

  &.active {
    color: green;
  }
  :hover {
    color: #c8102e;
  }
`

const Hamburger = styled.div`
  background-color: #fff;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #fff;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }

  
`
const Toggle = styled.div`

  display: none;
  height: 30px;
  cursor: pointer;
  

  @media (max-width: 768px) {
    display: flex;
    z-index: 5;
    margin-left: 0.8em;
  }
`

function NavLinks () {
  
  return (
    <>
      <NavItem to="/blog" activeClassName="active">Blog</NavItem>
      <NavItem to="/blog" activeClassName="active">About</NavItem>
      <NavItem to="/blog" activeClassName="active">Projects</NavItem>
    </>
  )
  
}

function Nav () {

  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <>
      <Toggle 
      navbarOpen={navbarOpen}
      onClick={() => setNavbarOpen(!navbarOpen)}>
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <NavDiv>
          <NavLinks />
        </NavDiv>
      ) : (
        <NavDiv open>
          <NavLinks />
        </NavDiv>
      )}
    </>
  )
}

export default function Header () {
    return (
    <HeaderDiv>
        <Logo to="/">DN</Logo>
        <Nav />
    </HeaderDiv>
    )
}