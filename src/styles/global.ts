import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;400&family=Inter:wght@300;400;500;700&family=Montserrat:wght@400;700&family=Nunito:wght@700&family=Poppins:ital,wght@0,200;0,500;1,300&family=Righteous&family=Roboto+Slab&family=Roboto:wght@100;400&family=Sarala&display=swap");

:root {
--blue: #117CB9;
--blue-light:#52B4EB;
--blue-darker: #3d92c1;
--grey:#A39F9F;
--grey-bar: #D3D3D3;
--grey-light: #E8E8E8;
--grey-lighter:#F0F0F0;
--grey-dark: #212121;
--grey-text:#747070;
--pearl: #F3F3F3;
--white: #FFFF;
--black:#000;
--green: #C6FB9D;
--soft-pink: #F8C6C6;

}

body{
	background-color: var(--pearl);
}

html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote,
a, address, cite, code strong,center,
ol, ul, li,
fieldset, form, label, legend, caption,
article, aside, details, embed, 
figure, figcaption, footer, header, 
menu, nav, output, section,
time, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	box-sizing: border-box;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
a {
	text-decoration: none;
	cursor: pointer;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body, button, input{
	font-family: 'Inter', sans-serif;
}

`;

export default GlobalStyle;
