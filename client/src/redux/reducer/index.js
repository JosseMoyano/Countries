import { GET_COUNTRY, SEARCH_COUNTRIES, ADD_FAVOURITE, REMOVE_FAVOURITE, GET_COUNTRY_DETAIL, CLEAR_COUNTRY_DETAIL, CLEAR_COUNTRIES_SEARCHED, FILTER_CONTINENT, CLEAR_COUNTRIES_FILTER, GET_ACTIVITIES, ADD_FAVOURITE_ACTIVITY, FILTER_ACTIVITY, ORDER, POST_ACTIVITY, REMOVE_FAVOURITE_ACTIVITY, SEARCH_COUNTRIES_PREV, CLEAR_COUNTRIES_PREV, GET_ACTIVITY_DETAIL } from '../action';

const initialState = {
    firstCountries :{
        todo: undefined,
        actual: undefined
    },
    searchedCountries: {
        todo: [],
        actual: []
    },
    prevCountries : [],
    countriesDetail: undefined,    
    activities: {
        todo: [],
        actual: []
    },
    countriesFavorites: [],
    activitiesFavourite: [],
    countriesFilter: {
        todo: [],
        actual:[]
    },
    countriesFilterByActivity: {
        todo:[],
        actual:[]
    },
    activityDetail: []
    
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

        case SEARCH_COUNTRIES_PREV:
            return {
                ...state,
                prevCountries : action.payload.slice(0,11)
            } 

        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                countriesDetail: action.payload
            }

        case POST_ACTIVITY:
            return{
                ...state,
                activities:{
                    ...state.activities,
                    todo: state.activities?.todo ? [...state.activities?.todo, action.payload] : [action.payload] ,
                    actual: state.activities?.todo ? [...state.activities?.todo, action.payload] : [action.payload]
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

        case GET_ACTIVITY_DETAIL:
            return {
                ...state,
                activityDetail: state.activities.actual?.filter(a => a.id === action.payload)
            }

    //------------------------------------------------

        case ADD_FAVOURITE:
            return {
                ...state,
                countriesFavorites: [...state.countriesFavorites, action.payload],
            }
            
        
        case REMOVE_FAVOURITE:
            return {
                ...state,
                countriesFavorites: state.countriesFavorites.filter(c => c.id !== action.payload),
            } 
            
        
        case ADD_FAVOURITE_ACTIVITY:
            return {
                ...state,
                activitiesFavourite: [...state.activitiesFavourite, action.payload]
            }  
        
        case REMOVE_FAVOURITE_ACTIVITY:
            return{
                ...state,
                activitiesFavourite: state.activitiesFavourite.filter(a => a.id !== action.payload)
            }

    //------------------------------------------------    

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

        case CLEAR_COUNTRIES_FILTER:
            return {
                ...state,
                countriesFilter:{
                    todo: action.payload,
                    actual: action.payload
                }
            }

        case CLEAR_COUNTRIES_PREV:
            return {
                ...state,
               prevCountries: action.payload
            }

    //------------------------------------------------        

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
                countriesFilterByActivity:{
                    ...state.countriesFilterByActivity,
                     todo: state.activities.todo ?  state.activities?.todo?.filter(actividad => actividad.id === action.payload.activity) : [],
                     actual: state.activities.todo ? state.activities?.todo?.filter(actividad => actividad.id === action.payload.activity) : [],
                }
            }

        case ORDER:
            return {
                ...state,
                searchedCountries:{
                    ...state.searchedCountries,
                    actual: state.searchedCountries.actual ? [...state.searchedCountries.actual] : [],
                    todo: state.searchedCountries.todo?.sort(action.payload.orderFunction)
                },
                firstCountries:{
                    ...state.firstCountries,
                    actual: [...state.firstCountries.actual],
                    todo: state.firstCountries.todo?.sort(action.payload.orderFunction)
                }, 
                countriesFilter:{
                    ...state.countriesFilter,
                    actual:[...state.countriesFilter.actual],
                    todo: state.countriesFilter?.todo?.sort(action.payload.orderFunction)
                },
                countriesFilterByActivity:{
                    ...state.countriesFilterByActivity,
                    actual: state.countriesFilterByActivity.actual ? [...state.countriesFilterByActivity.actual] : [],
                    todo: state.countriesFilterByActivity.actual[0]?.countries.sort(action.payload.orderFunction)
                } 
            }
        
        default:
            return state;
    }
}

