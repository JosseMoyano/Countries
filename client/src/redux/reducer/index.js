import { GET_COUNTRY, SEARCH_COUNTRIES, ADD_FAVOURITE, REMOVE_FAVOURITE, GET_COUNTRY_DETAIL, CLEAR, CLEAR_COUNTRIES_LOADED } from '../action';

const initialState = {
    countries : undefined,
    countriesLoades: undefined,
    countriesFavorites: [],
    countriesDetail: undefined,
}

export default function reducer (state = initialState, action){
    switch(action.type){
        case GET_COUNTRY:
            return {
                ...state,
                countries: action.payload
            }
        case SEARCH_COUNTRIES:
            return {
                ...state,
                countriesLoades: action.payload
            }
        case ADD_FAVOURITE:
            return {
                ...state,
                countriesFavorites: [...state.countriesFavorites, action.payload]
            }
        
        case REMOVE_FAVOURITE:
            return {
                ...state,
                countriesFavorites: state.countriesFavorites.filter(c => c.id !== action.payload)
            }

        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                countriesDetail: action.payload
            }

        case CLEAR:
            return{
                ...state,
                countriesDetail: action.payload
            }

        case CLEAR_COUNTRIES_LOADED:
            return{
                ...state,
                countriesLoades: action.payload
            }       
            

        default:
            return state;
    }
}

