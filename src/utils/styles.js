import { createGlobalStyle } from "styled-components";
import ComicChub from "./ComicChub.woff";
import ComicChub2 from "./ComicChub2.woff2";
import BelfastShadowRegular from "./BelfastShadow-Regular.woff";
import BelfastShadowRegular2 from "./BelfastShadow-Regular2.woff2";
import AmericanTypewriterBold2 from "./AmericanTypewriterBold2.woff2"
import AmericanTypewriterBold from "./AmericanTypewriterBold.woff"


export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'ComicChub';
    src: local('ComicChub'), local('ComicChub'),
    url(${ComicChub2}) format('woff2'),
    url(${ComicChub}) format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'BelfastShadow-Regular';
    src: local('BelfastShadow-Regular'), local('BelfastShadow-Regular'),
    url(${BelfastShadowRegular2}) format('woff2'),
    url(${BelfastShadowRegular}) format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'American-Typewriter-Bold';
    src: local('AmericanTypewriterBold'), local('AmericanTypewriterBold'),
    url(${AmericanTypewriterBold2}) format('woff2'),
    url(${AmericanTypewriterBold}) format('woff');
    font-weight: 300;
    font-style: normal;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Times New Roman";
}

a {
    text-decoration: none;
}

`