import { useEffect, useState } from 'react';
import styled from "styled-components";
import { useGlobal } from "../context/context";
const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { setSearchedUser, requests } = useGlobal();
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchedUser(searchTerm);

    }
    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">search user</label>
                <input type="text" id="search" name="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button type="submit">search</button>
            </form>

            <div className='requests'>{requests} requests left</div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    width: fit-content;
    margin:auto;
    display: flex;
    flex-wrap: wrap;
  
    label{
        font-size: 1.4rem;
        display: block;
    
    }
    #search{
        width: 500px;
        height: 20px;
        border:1px solid black;
        border-top:0;
        border-right:0;
    }
    #search:focus{
        outline: none;
    }
    button{
        background-color: inherit;
        width: fit-content;
        height: fit-content;
        margin-top:10px;
        margin-left:5px;
        padding:10px;
        border:1px solid black;
        border-radius: 3px;
    }
    button:hover{
        background-color: #6ac456;
    }
    .requests
    {
        width:fit-content;
        height: 20px;
        padding:20px;
        margin-left:20px;
        font-family: Arial;
    }
    @media only screen and (max-width:600px)
    {
        #search{
            width: 300px;
        }
    }
    @media only screen and (max-width:510px)
    {
        #search {
            width:150px;
        }
    }
`;
export default Search;