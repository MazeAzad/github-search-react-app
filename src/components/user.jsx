import Card from "./card";
import Followers from "./followers";
import styled from "styled-components";
const User = () => {
    return (
        <Wrapper>
            <Card />
            <Followers />
        </Wrapper>
    )
}
const Wrapper = styled.section`
    display: flex;
    margin:30px auto;
    width: fit-content;
    gap:20px;
    flex-wrap: wrap;
    justify-content: center;
     
 
`;

export default User;
