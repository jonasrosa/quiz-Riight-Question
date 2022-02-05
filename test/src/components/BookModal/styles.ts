import styled from "styled-components";
import { colors } from "../../style/ui/colors";
import { fontFamily } from "../../style/ui/fontFamily";

export const Container = styled.div`
  width: 100%;
  height: 100%;
 
    width: 100%;
  }
`;

export const ListContainer=styled.li`
    width: 100%;
    height: 3rem;
    background: ${colors.whiteT3};
    border-bottom:1px solid ${colors.indogo} ;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{
        display: flex;
        align-items: center;

        input{
            margin-left:10px ;
        }
        h4{
            font-size: 18px;
            font-family: ${fontFamily.inter};
            font-weight: 400;
            margin-left: 20px;
        }
    }
    
    button{
        margin-right: 20px;
        
        border: none;

    }

`

