import styled from "styled-components";
import { useGlobal } from "../context/context";
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
const Info = () => {
    const { userData } = useGlobal();
    const { public_repos, followers, following, public_gists } = userData;
    const items = [
        {
            id: 1,
            icon: <GoRepo className='icon' />,
            label: 'repos',
            value: public_repos,
            color: 'pink',
        },
        {
            id: 2,
            icon: <FiUsers className='icon' />,
            label: 'followers',
            value: followers,
            color: 'green',
        },
        {
            id: 3,
            icon: <FiUserPlus className='icon' />,
            label: 'following',
            value: following,
            color: 'purple',
        },
        {
            id: 4,
            icon: <GoGist className='icon' />,
            label: 'gists',
            value: public_gists,
            color: 'yellow',
        },
    ];

    return (
        <Wrapper>
            {items.map((item) => {
                const { id, icon, label, value, color } = item;
                return <div className="infoItem" key={id}>
                    <div className="infoItemBanner">
                        <div className={`${color} iconContainer`}>
                            <div>{icon}</div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="value">{value}</div>
                        <div className="label">{label}</div>
                    </div>
                </div>
            })}
        </Wrapper>
    )
}
const Wrapper = styled.section`
    display:flex;
    flex-wrap:wrap;
    gap:20px;
    width: fit-content;
    margin: 20px auto;
  
    
    .infoItem 
    {
        display: flex;
        gap:20px;
        background-color: #bebafa;
        width: fit-content;
        padding:20px;
        padding-right:50px;
        border-radius: 5px;
        font-size: large;
        font-family: Arial;
        margin: auto;

    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: hsl(186, 100%, 94%);
      color: hsl(185, 62%, 45%);
    }
    .infoItemBanner
    {
        display:flex;
        gap:20px;
        
    }
    .iconContainer
    {
        width:40px;
        height: 40px;
        position: relative;
        border-radius: 100%;
        
    }
    .iconContainer div
    {
        width: fit-content;
        height: fit-content;
        display: flex;
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right: 0;
        margin:auto;
    }
  
`;


export default Info;