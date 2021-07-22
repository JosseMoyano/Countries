import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addFavouriteActivity } from '../redux/action';
import { StyledActividad } from './Actividad/actividad';
import { FaHeart } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'


export default function Activity (props) {   
    
    const {name, id, countries, temporada, duracion, dificultad, onClick, remove} = props;

    const activitiesFavourite = useSelector(state => state.activitiesFavourite)

    const dispatch = useDispatch()
    const history = useHistory()

    const onClick2 = () => {
        if(!remove){
            if(!(activitiesFavourite.some(a => a.id === id))){
        dispatch(addFavouriteActivity({ name, id, countries, temporada, duracion, dificultad}))
        }}}

    return (
        <StyledActividad key={id}>
            <div className='button_corazon_x'>
                {
                    !remove ? (
                        <FaHeart className='corazon' onClick={() => onClick2()}/>
                    ) : (null)
                }
            </div>
            <div className='button_corazon_x'>
                {
                    remove ? (
                        <AiFillCloseCircle size={20} onClick={onClick}/>
                    ):(null)
                }
            </div>

            <h1>{name}</h1>

            <div className='div_banderas'>
                {
                    props.countries?.map(country => (
                        <div className='div_bandera' key={country.id}>
                        <button onClick={()=>history.push(`/countries/${country.id}`)}><img className='img' src={country.bandera} alt={country.bandera}/></button>
                        </div>
                    ))
                } 
            </div>        
            <div className='div_texto'>  
                <p>Temporada: {temporada}</p>
                <p>Duración: {duracion} minutos</p>
                <p>Dificultad: {dificultad} de 5</p>
            </div> 
        </StyledActividad>
    )
}
