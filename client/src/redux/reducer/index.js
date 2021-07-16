import { GET_COUNTRY, SEARCH_COUNTRIES, ADD_FAVOURITE, REMOVE_FAVOURITE, GET_COUNTRY_DETAIL, CLEAR_COUNTRY_DETAIL, CLEAR_COUNTRIES_SEARCHED, FILTER_CONTINENT, CLEAR_COUNTRIES_FILTER, GET_ACTIVITIES, ADD_FAVOURITE_ACTIVITY, ADD_ACTIVITY, FILTER_ACTIVITY, ORDER } from '../action';

const initialState = {
    firstCountries :{
        todo: undefined,
        actual: undefined
    },
    searchedCountries: {
        todo: [],
        actual: []
    },
    countriesFavorites: {
        todo: [],
        actual: []
    },
    activities: {
        todo: [],
        actual: []
    },
    countriesFilter: {
        todo: [],
        actual:[]
    },
    countriesFilterByActivity: undefined,
    countriesDetail: undefined,    
    activitiesFavourite: []
    
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
                    todo: state[action.payload.array].actual.filter(country => country.continente === action.payload.continente),
                    actual: state[action.payload.array].actual.filter(country => country.continente === action.payload.continente),
                } 
                
        }
        
        case FILTER_ACTIVITY:
            return {
                ...state,
                countriesFilterByActivity: state.activities?.todo.filter(actividad => actividad.id === action.payload.activity),
                
        }

        case CLEAR_COUNTRIES_FILTER:
            return {
                ...state,
                countriesFilter:{
                    todo: action.payload,
                    actual: action.payload
                }
            }

        case GET_ACTIVITIES:
            return {
                ...state,
                activities:{
                    ...state.activities,
                    todo: action.payload,
                    actual: action.payload,
                } 
            }

        case ADD_ACTIVITY:
            return {
                ...state,
                activities:{
                    ...state.activities,
                    todo: [...state.activities.todo, action.payload],
                    actual: [...state.activities.todo, action.payload]
                } 
            }
            

        case ADD_FAVOURITE_ACTIVITY:
            return {
                ...state,
                activitiesFavourite: [...state.activitiesFavourite, action.payload]
            }

        case ORDER:
            return {
                ...state,
                searchedCountries:{
                    ...state.searchedCountries,
                    actual: state.searchedCountries.actual ? [...state.searchedCountries.actual] : [],
                    todo: state.searchedCountries.todo?.sort(action.payload.funcion)
                },
                firstCountries:{
                    ...state.firstCountries,
                    actual: [...state.firstCountries.actual],
                    todo: state.firstCountries.todo?.sort(action.payload.funcion)
                }, 
                countriesFilter:{
                    ...state.countriesFilter,
                    actual:[...state.countriesFilter.actual],
                    todo: state.countriesFilter?.todo?.sort(action.payload.funcion)
                } 
                
            }
        
        default:
            return state;
    }
}

