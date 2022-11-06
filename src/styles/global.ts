import {createGlobalStyle } from 'styled-components'

interface IGLobal {
  theme: {
    body: string;
    header: string;
    fontColor: string;
    button: string;
    boderBottom: string;
    svgColor: string;
  };
}

export default createGlobalStyle<IGLobal>`
:root {
--blue: #117CB9;
--blue-light:#52B4EB;
--grey:#A39F9F;
--grey-bar: #D3D3D3;
--grey-light: #E8E8E8;
--grey-lighter:#F0F0F0;
--grey-dark: #212121;
--grey-text:#747070;
--pearl: #F3F3F3;
--white: #FFFF;
--black:#000;


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
body {
	line-height: 1;	
	background-color: ${({ theme }) => theme.body};
	color: ${({ theme }) => theme.fontColor};
}
button {
	color: ${({ theme }) => theme.button};
	cursor: pointer;
}
svg {
	.nav--params {
		color: ${({ theme }) => theme.svgColor};
	}
}
header {
	background-color: ${({ theme }) => theme.header};
	border-bottom: ${({ theme }) => theme.boderBottom};
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
* 
`;