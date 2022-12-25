import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
const githubContext = React.createContext();

const GithubProvider = ({ children }) => {
    const [searchedUser, setSearchedUser] = useState('john-smilga');

    // this section will be removed after end of dev 
    const getUserDataFromLocalStorage = () => {
        const userDataJson = localStorage.getItem('userData');
        return JSON.parse(userDataJson);
    }
    const getUserReposFromLocalStorage = () => {
        const userReposJson = localStorage.getItem('repos');
        return JSON.parse(userReposJson);
    }
    const getUserFollowersFromStorage = () => {
        const userFollowerJson = localStorage.getItem('followers');
        return JSON.parse(userFollowerJson);
    }
    const [userData, setUserData] = useState(getUserDataFromLocalStorage);
    const [userRepos, setUserRepos] = useState(getUserReposFromLocalStorage);
    const [userFollowers, setUserFollower] = useState(getUserFollowersFromStorage);
    const [requests, setRequests] = useState(localStorage.getItem('requests'));
    const [loading, setLoading] = useState(true);
    let userAPI = `https://api.github.com/users/${searchedUser}`;
    let repoAPI = `https://api.github.com/users/${searchedUser}/repos?per_page=100`;
    let followersAPI = `https://api.github.com/users/${searchedUser}/followers`;
    let limit_rate = `https://api.github.com/rate_limit`;
    const fetchUser = async () => {
        try {
            const response = await axios(userAPI);
            setUserData(response.data);
        } catch (err) {
            console.log(err);
        }

    }
    const fetchRepo = async () => {
        try {
            const response = await axios(repoAPI);
            setUserRepos(response.data);
        } catch (err) {
            console.log(err);
        }

    }
    const fetchFollower = async () => {
        try {
            const response = await axios(followersAPI);
            setUserFollower(response.data);
        } catch (err) {
            console.log(err);
        }
    }
    const fetchLimit = async () => {
        const response = await axios(limit_rate);
        setRequests(response.data.rate.remaining);
    }

    useEffect(() => {
        setLoading(true);
        fetchUser();
        fetchRepo();
        fetchFollower();
        fetchLimit();
        setLoading(false);
    }, [searchedUser])

    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(userData));
        localStorage.setItem('repos', JSON.stringify(userRepos));
        localStorage.setItem('followers', JSON.stringify(userFollowers));
        localStorage.setItem('requests', requests);
    }, [userRepos, userData, userFollowers, requests])
    return <githubContext.Provider
        value=
        {
            {
                userRepos,
                userData,
                userFollowers,
                requests,
                setSearchedUser,
                loading
            }
        }
    >
        {children}
    </githubContext.Provider>
}
const useGlobal = () => {
    return useContext(githubContext);
}

export { GithubProvider, useGlobal };