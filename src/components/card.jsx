import styled from "styled-components";
import { useGlobal } from "../context/context";
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
const Card = () => {
    const { userData } = useGlobal();
    console.log(userData);
    const
        {
            avatar_url,
            bio,
            blog,
            company,
            name,
            twitter_username,
            location,
            type,
            html_url
        } = userData
    return (
        <Wrapper>
            <div className="type">{type}</div>
            <div className="cardInfo">
                <div className="info">
                    <div className="personalInfo">

                        <div className="image">
                            <img src={avatar_url} alt="image" />
                        </div>
                        <div className="nameAndTwitter">
                            {name ?
                                <div className="name">
                                    {name}
                                </div> : ""}
                            {twitter_username ?
                                <div className="twitter">
                                    @{twitter_username}
                                </div> : ""}
                        </div>
                    </div>
                    <div className="professionalInfo">
                        {bio ?
                            <div className="bio">
                                {bio}
                            </div> : ""}
                        {company ?
                            <div className="company">
                                <span className="icon"> <MdBusiness /></span>{company}
                            </div> : ""}
                        {location ?
                            <div className="location">
                                <span className="icon"><MdLocationOn /></span>{location}
                            </div> : ""}
                        {blog ?
                            <div className="blog">
                                <span className="icon"> <MdLink /></span><a href={`http://${blog}`} target="_blank">{blog}</a>
                            </div> : ""}
                    </div>
                </div>

                <button className="followButton"><a href={html_url} target="_blank">follow</a></button>

            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    margin-left:20px;
    width: fit-content;
    .type 
    {
        width: 100%;
        
        padding:10px;
        border-radius:0 5px 5px 0  ;
    }
    .cardInfo
    {
        display: flex;
        width: fit-content;
        gap:100px;
        font-size: large;
        padding: 5px;
        border-radius: 0 10px 10px 0;
        
    }
    .type
    {
        width: fit-content;
    }
    .personalInfo 
    {
        display: flex;
    }
    .image
    {
        width: 70px;
        height: 70px;
        border-radius: 100%;
        overflow: hidden;
    }
    .image img 
    {
        width: 100%;
        height: 100%;
    }
    .nameAndTwitter
    {
        display: grid;
        place-items: center;
        margin-left:10px;
        
    }
    .twitter 
    {
        margin-top:-20px;
        color: gray;
    }
    .bio
    {
        width: fit-content;
        margin:10px;
    }
    .location, .company , .blog
    {
        display: flex;
        gap:5px;

    }
    .icon
    {
        display: block;
        margin-top:3px;
    }
   .followButton
   {
    display: block;
    height: fit-content;
    width: 80px;
    padding:5px;
    font-size:1.5rem;
    font-family: Arial;
    background-color: inherit;
    border-radius: 10px;
   }
   a
   {
    color:gray;
    text-decoration: none;
   }

`;
export default Card;