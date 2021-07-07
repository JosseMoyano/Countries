import fetch from "node-fetch";

export const GET_COUNTRY = 'GET COUNTRY';
export const SEARCH_COUNTRIES = 'SEARCH COUNTRIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
export const CLEAR = 'CLEAR';


export const getCountry = () => {
    return async dispatch => {
        const response = await fetch('http://localhost:3001/countries');
        const json = await response.json();
        dispatch({
            type: GET_COUNTRY,
            payload: json
        });
    }
}

export const searchCountries = (name) => {
    return async dispatch => {
        const response = await fetch(`http://localhost:3001/countries?name=${name}`);
        const json = await response.json();
        dispatch({
            type: SEARCH_COUNTRIES,
            payload: json
        });
    }
}

export const addFavourite = (payload) => {
    return {
        type: ADD_FAVOURITE,
        payload
    }
}

export const removeFavourite = (id) => {
    return {
        type: REMOVE_FAVOURITE,
        payload: id
    }
}

export const getCountryDetail = (id) => {
    return async dispatch => {
       const response = await fetch(`http://localhost:3001/countries/${id}`);
        const json = await response.json();
        dispatch({
            type: GET_COUNTRY_DETAIL,
            payload: json
        });
    }
}

export const clearPage = () => {
    return {
        type: CLEAR,
        payload: undefined
    }
}