import fetch from "node-fetch";
import { GETACTIVITIES, GETCOUNTRIES, POSTACTIVITIES, SEARCHCOUNTRIES } from "../../utils/constantes";

export const GET_COUNTRY = 'GET COUNTRY';
export const SEARCH_COUNTRIES = 'SEARCH COUNTRIES';
export const SEARCH_COUNTRIES_PREV = 'SEARCH_COUNTRIES_PREV';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
export const POST_ACTIVITY = 'POST_ACTIVITY';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const GET_ACTIVITY_DETAIL = 'GET_ACTIVITY_DETAIL';

export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const ADD_FAVOURITE_ACTIVITY = 'ADD_FAVOURITE_ACTIVITY';
export const REMOVE_FAVOURITE_ACTIVITY = 'REMOVE_FAVOURITE_ACTIVITY'; // => NO LA USE TODAVIA, NO ESTA CREADA LA ACCION

export const CLEAR_COUNTRY_DETAIL = 'CLEAR_COUNTRY_DETAIL';
export const CLEAR_COUNTRIES_SEARCHED = 'CLEAR_COUNTRIES_SEARCHED';
export const CLEAR_COUNTRIES_FILTER = 'CLEAR_COUNTRIES_FILTER';
export const CLEAR_COUNTRIES_PREV = 'CLEAR_COUNTRIES_PREV';

export const FILTER_CONTINENT = 'FILTER_CONTINENT';
export const FILTER_ACTIVITY = 'FILTER_ACTIVITY';
export const ORDER = 'ORDER';



export const getCountry = () => {
    return async dispatch => {
        try {
            const response = await fetch(GETCOUNTRIES);
            const json = await response.json();
            dispatch({
                type: GET_COUNTRY,
                payload: json
            });            
        } catch (error) {
            console.error(error)
        }
    }
}

export const searchCountries = (name) => {
    return async dispatch => {
        try {
            const response = await fetch(`${SEARCHCOUNTRIES}${name}`);
            const json = await response.json();
            dispatch({
                type: SEARCH_COUNTRIES,
                payload: json
            });            
        } catch (error) {
            console.error(error)
        }
    }
}

export const searchPrevCountries = (name) => {
    return async dispatch => {
        try {
            const response = await fetch(`${SEARCHCOUNTRIES}${name}`);
            const json = await response.json();
            dispatch({
                type: SEARCH_COUNTRIES_PREV,
                payload: json
            });            
        } catch (error) {
            console.error(error)
        }
    }
}


export const getCountryDetail = (id) => {
    return async dispatch => {
        try {
            const response = await fetch(`${GETCOUNTRIES}/${id}`);
            const json = await response.json();
            dispatch({
                type: GET_COUNTRY_DETAIL,
                payload: json
            });
        } catch (error) {
            console.error(error)
        }
    }
}

export const postActivity = (actividad) => {
    return async dispatch => {
        try {
            const response = await fetch(POSTACTIVITIES, {
                    method: 'post',
                    body: JSON.stringify(actividad),
                    headers: { 'Content-Type': 'application/json' },
                })
            const json = await response.json()
            dispatch({
                type: POST_ACTIVITY,
                payload: json
            })        
        } catch (error) {
            console.error(error)
        }
    }
}

export const getActivities = () => {
    return async dispatch => {
        try {
            const response = await fetch(GETACTIVITIES);
             const json = await response.json();
             dispatch({
                 type: GET_ACTIVITIES,
                 payload: json
             });
        } catch (error) {
            console.error(error)
        }
     }
}

export const getActivityDetail = (id) => {
    console.log('entre a la action y me llego: ',id)
    return {
        type: GET_ACTIVITY_DETAIL,
        payload: id
    }
}

// --------------------------------------------------

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

export const addFavouriteActivity = (payload) => {
    return {
        type: ADD_FAVOURITE_ACTIVITY,
        payload
    }
}

export const removeFavouriteActivity = (id) => { // No la utilice todavia 
    return {
        type: REMOVE_FAVOURITE_ACTIVITY,
        payload: id
    }
}

//---------------------------------------------------------

export const clearCountryDetail = () => {
    return {
        type: CLEAR_COUNTRY_DETAIL,
        payload: undefined
    }
}

export const clearCountriesSearched = () => {
    return {
        type: CLEAR_COUNTRIES_SEARCHED,
        payload: []
    }
}

export const clearCountriesFilter = () => {
    return {
        type: CLEAR_COUNTRIES_FILTER,
        payload: undefined
    }
}

export const clearPrevCountries = () => {
    return {
        type: CLEAR_COUNTRIES_PREV,
        payload: undefined
    }
}

// ---------------------------------------------------

export const filterContinent = (array, continente) => {
    return {
        type: FILTER_CONTINENT,
        payload:{
            array,
            continente
        }
    }
}

export const filterActivity = (activity) => {
    return {
        type: FILTER_ACTIVITY,
        payload: {
            activity
        }
    }
}

export const order = (orderFunction) => {
    return {
        type: ORDER,
        payload: {
            orderFunction
        }
    }
}
