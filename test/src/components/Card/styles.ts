import styled from "styled-components";
import { colors } from "../../style/ui/colors";
import { fontFamily } from "../../style/ui/fontFamily";

export const CardContainer = styled.li`
  width: 17rem;
  margin: 2rem;
  border-radius: 0.5rem;
  padding: 3px;
  background:${colors.gray_100};
`;
export const GridCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 4fr 1fr;
  align-content: center;
  text-align: center;


  .imageBook {
    grid-column: 1/2;
    grid-row: 1/2;
    box-shadow: 5px 2px ${colors.gray_100}, 10px 3px ${colors.gray_200},
      15px 5px ${colors.black};
     
  }
  .boxText {
    grid-column: 2/3;
    grid-row: 1/2;
    padding-left: 20px;
    text-align: start;
    display: flex;
    flex-direction: column;
    h4 {
      font-family: ${fontFamily.inter};
      font-weight: 300;
      font-size: 16px;
      color: ${colors.white};
    }
  }
  .boxButton{
    grid-column: 1/2;
    grid-row: 2/3;
    display: flex;
    align-items: baseline;
    
    .like{
      background: ${colors.green};
    }

    
    button{
        background: ${colors.red};
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        margin: 3px;
        border: none;

        :hover{
            background:${colors.purple};
        }
        img{
         
      }

    }
    

  }
`;
