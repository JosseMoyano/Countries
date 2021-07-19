// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { addFavouriteActivity } from '../redux/action';
// import Pais from './pais';

// export default function ActivitiesFiltro (props) {

//     const dispatch = useDispatch()

//     const onClick = () => {
//         dispatch(addFavouriteActivity({name: props.name, id:props.id, countries:props.countries, temporada:props.temporada, duracion:props.duracion, dificultad:props.dificultad}))
//     }

//     return (
//         <div key={props.id}>
//             <button onClick={onClick}>corazon</button>
//             <h1>{props.name}</h1>
//             {props.countries?.map(country => <Pais key={country.id} name={country.name} bandera={country.bandera} continente={country.continente} id={country.id} />)}            
//             <p>Temporada: {props.temporada}</p>
//             <p>Duracion: {props.duracion}</p>
//             <p>Dificultad: {props.dificultad}</p>
//         </div>
//     )
// }