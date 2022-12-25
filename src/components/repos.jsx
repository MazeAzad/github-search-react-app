import styled from "styled-components";
import { useGlobal } from "../context/context";
import { Pie, Column, Doughnot, Bars } from "./charts";
const Repos = () => {
    return (
        <Wrapper>
            <Pie />
            <Column />
            <Doughnot />
            <Bars />
        </Wrapper>
    )
}
const Wrapper = styled.section`
   width: 1000px;
   display: grid;
   margin: auto;
   grid-template-columns: 2fr 2fr;
   @media only screen and (max-width:1000px)
   {
    grid-template-columns: 1fr;
    width: 500px;
   }
  
    
`;
export default Repos;