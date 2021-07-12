import { GET_COUNTRY, SEARCH_COUNTRIES, ADD_FAVOURITE, REMOVE_FAVOURITE, GET_COUNTRY_DETAIL, CLEAR_COUNTRY_DETAIL, CLEAR_COUNTRIES_SEARCHED, FILTER_CONTINENT, CLEAR_COUNTRIES_FILTER, SHOW_ACTIVITIES } from '../action';

const initialState = {
    firstCountries :{
        todo: undefined,
        actual: undefined
    },
    searchedCountries: {
        todo: undefined,
        actual: undefined
    },
    countriesFavorites: {
        todo: undefined,
        actual: undefined
    },
    countriesDetail: undefined,    
    countriesFilter: undefined,
    activities: undefined
    
}

export default function reducer (state = initialState, action){
    switch(action.type){
        case GET_COUNTRY:
            return {
                ...state,
                firstCountries:{
                    ...state.firstCountries,
                    todo: action.payload,
                    actual: action.payload,
                } 
            }

        case SEARCH_COUNTRIES:
            return {
                ...state,
                searchedCountries:{
                    ...state.searchedCountries,
                    todo: action.payload,
                    actual: action.payload,
                    }
                } 

        case ADD_FAVOURITE:
            return {
                ...state,
                countriesFavorites:{
                    ...state.countriesFavorites,
                    todo: [...state.countriesFavorites.todo, action.payload],
                    actual: [...state.countriesFavorites.actual, action.payload],
            }
        }
        
        case REMOVE_FAVOURITE:
            return {
                ...state,
                countriesFavorites:{
                    ...state.countriesFavorites,
                    todo: state.countriesFavorites.todo.filter(c => c.id !== action.payload),
                    actual: state.countriesFavorites.todo.filter(c => c.id !== action.payload)
                } 
            }

        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                countriesDetail: action.payload
            }

        case CLEAR_COUNTRY_DETAIL:
            return{
                ...state,
                countriesDetail: action.payload
            }

        case CLEAR_COUNTRIES_SEARCHED:
            return{
                ...state,
                searchedCountries:{
                    ...state.searchedCountries,
                    todo: action.payload,
                    actual: action.payload,
                    }
                }    

        case FILTER_CONTINENT:
            return {
                ...state,
                countriesFilter:{
                    ...state.countriesFilter,
                    [action.payload.continente]: state[action.payload.array].todo.filter(country => country.continente === action.payload.continente)
                }
        }

        case CLEAR_COUNTRIES_FILTER:
            return {
                ...state,
                countriesFilter: action.payload
            }

        case SHOW_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }
        
        default:
            return state;
    }
}

