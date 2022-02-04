import {createGlobalStyle} from 'styled-components'
import { colors } from '../style/ui/colors'
import { fontFamily } from './ui/fontFamily'

export  const GlobalStyle= createGlobalStyle`
 *{
     margin:0;
     padding: 0;
     box-sizing: border-box;
 }

 html{
     @media(max-with:1080px){
         font-size: 93.75%;
     }
     @media(max-with:720px){
         font-size: 87.5%;
     }
 }
 body{
     background:${colors.white};
     -webkit-font-smoothing:antialiased;
     
 }
 body, input, textarea, select, option, button{
     font-family:${fontFamily.roboto};
     font-weight: 400;
 }
h1,h2,h3,h4,h5,h6, strong {
    font-weight: 600;
    
}
 button{
     cursor:pointer;

 }
 ul{
     list-style: none;
 }
 
 
 

`