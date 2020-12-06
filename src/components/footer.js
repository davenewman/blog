import React, { useState } from 'react'
import styled from "styled-components"




const FooterDiv = styled.div`
    display: flex;
    justify-content: start;
    background: #0C0C1C;
    padding: 5vh 5vw;
    color: #888b8d;


`


export default function Footer () {
    return (

        <FooterDiv>
            © {new Date().getFullYear()} - David Newman, Built with&nbsp;<a href="https://www.gatsbyjs.com">Gatsby</a>
        </FooterDiv>
    )   


}
