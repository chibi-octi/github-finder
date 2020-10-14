import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types';

const GithubState = (props) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // Search User

    const searchUsers = async text => {
        setLoading();
    
        const res = await axios.get(
          `https://api.github.com/search/users?q=${text}&client_id=${
            process.env.REACT_APP_GITHUB_CLIENT_ID
          }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        );
    
        dispatch({
            type: SEARCH_USERS,
            PAYLOAD: res.data.items
        })
      };

    // Get User


    //Get Repo


    //Clear Users


    //Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });



/*  The provider we are going to wrap up the entire application
    And pass any we want to make them available to the entire app in the value
    {props.children} is the whole application in app.js with in <Router>
    Note that the value is the attribute
    ******** we need to put stuff in the value if we want component can access **** */

    return <GithubContext.Provider
        value = {{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading
        }}
    >
        
        {props.childern}

    </GithubContext.Provider>
}

export default GithubState;

