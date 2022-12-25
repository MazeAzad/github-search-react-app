import { useGlobal } from "../context/context";
import styled from "styled-components";
const Followers = () => {
    const { userFollowers } = useGlobal();
    const followers = userFollowers.map((follower) => {
        const
            {
                avatar_url,
                html_url,
                login,
                id
            } = follower;
        return {
            image: avatar_url,
            link: html_url,
            name: login,
            id: id
        }
    })

    return (

        <section>
            <div className="title">followers</div>
            <Wrapper>

                {followers.map((follower) => {
                    return <div className="follower" key={follower.id}>
                        <div className="imageContainer">
                            <img src={follower.image} alt="image" />
                        </div>
                        <div className="info">
                            <div className="name">{follower.name}</div>
                            <div className="link"><a target="_blank" href={follower.link}>{follower.link}</a></div>
                        </div>
                    </div>
                })}
            </Wrapper>
        </section>
    )
}

const Wrapper = styled.section`
    width: 394px;
    height: 250px;
    margin-left:20px;
    overflow-y: auto;
    
  
    .follower 
    {
        display: flex;
        margin-bottom: 20px;
        gap:10px;
       
    }
    .imageContainer 
    {
        width: 40px;
        height: 40px;
        overflow: hidden;
        border-radius: 100%;
    }
    .imageContainer img 
    {
        width: 100%;
        height: 100%;
    }
    a 
    {
        color:grey;
        text-decoration: none;
    }
    @media only screen and (max-width:520px)
   {
    width: 320px;
   }
`;

export default Followers;
