import React from "react"
import Header from "./header"
import Footer from "./footer"
import { MainDiv } from "./main"
import { GlobalStyle } from "../utils/styles"


const Layout = ({ children }) => {


  return (
    <>
      <GlobalStyle />
      <Header />
      <MainDiv>{children}</MainDiv>
      <Footer />
    </> 
  )
}

export default Layout
