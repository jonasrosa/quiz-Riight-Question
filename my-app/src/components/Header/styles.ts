import styled from "styled-components";
import { colors } from "../../style/ui/colors";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 4.5rem;
  border-bottom: 1px solid ${colors.background};
  background-color: ${colors.background};
  position: fixed;
`;
export const HeaderContext = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  .boxInput{
      background:${colors.gray_200};
      width: 33rem;
      display: flex ;
      align-items: center;
      border-radius: 8px;
      :hover{
          background: ${colors.gray_100};

      }

  }
  input{
      width: 30rem;
      height: 2rem;
      background:none ;
      outline: none;
      border: none;
  }
`;
