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
     background:${colors.gray_300};
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
 
 .react-modal-overlay{
     background: ${colors.indigo};
    
     position: fixed;
     top:0;
     bottom:0;
     right:0;
     left:0;

     display: flex;
     align-items: center;
     justify-content: center;
     border: none;
  

 }
 .react-modal-content{
     width: 90%;
     height: 95%;
     background:${colors.whiteT3} ;
    border: none;
     position: relative;
  
     border: none;

 }

 .react-modal-close{
     position:absolute;
     right: 1.5rem;
     top:1.5rem;
     border: none;
     background: ${colors.whiteT1};
     transition: filter 0.2s;
        border: none;

     &:hover{
         filter: brightness(0.8);
     }

 }

 

`