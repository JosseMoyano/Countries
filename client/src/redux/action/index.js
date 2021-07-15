import fetch from "node-fetch";

export const GET_COUNTRY = 'GET COUNTRY';
export const SEARCH_COUNTRIES = 'SEARCH COUNTRIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
export const CLEAR_COUNTRY_DETAIL = 'CLEAR_COUNTRY_DETAIL';
export const CLEAR_COUNTRIES_SEARCHED = 'CLEAR_COUNTRIES_SEARCHED';
// export const ORDER_CONTINENTE = 'ORDER_CONTINENTE';
export const FILTER_CONTINENT = 'FILTER_CONTINENT';
export const CLEAR_COUNTRIES_FILTER = 'CLEAR_COUNTRIES_FILTER';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const ADD_FAVOURITE_ACTIVITY = 'ADD_FAVOURITE_ACTIVITY';
export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const FILTER_ACTIVITY = 'FILTER_ACTIVITY';
export const ORDER = 'ORDER';



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
        type: CLEAR_COUNTRY_DETAIL,
        payload: undefined
    }
}

export const clearCountriesSearched = () => {
    return {
        type: CLEAR_COUNTRIES_SEARCHED,
        payload: undefined
    }
}

export const clearCountriesFilter = () => {
    return {
        type: CLEAR_COUNTRIES_FILTER,
        payload: undefined
    }
}

export const filterContinent = (array, continente) => {
    return {
        type: FILTER_CONTINENT,
        payload:{
            array,
            continente
        }
    }
}

export const getActivities = () => {
    return async dispatch => {
        const response = await fetch(`http://localhost:3001/activities/show`);
         const json = await response.json();
         dispatch({
             type: GET_ACTIVITIES,
             payload: json
         });
     }
}

export const addActivity = (payload) => {
    return {
        type: ADD_ACTIVITY,
        payload
    }
}

export const addFavouriteActivity = (payload) => {
    return {
        type: ADD_FAVOURITE_ACTIVITY,
        payload
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

export const order = (funcion) => {
    console.log('entre a la action y me llego esto: ', funcion)
    return {
        type: ORDER,
        payload: {
            funcion
        }
    }
}