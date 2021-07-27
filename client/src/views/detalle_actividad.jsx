import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getActivities, getActivityDetail } from '../redux/action';

export default function DetalleActividad () {

    const { id } = useParams()
    const dispatch = useDispatch()
    const activityDetail = useSelector( state => state.activityDetail)

    useEffect( ()=>{
        dispatch(getActivities())
        dispatch(getActivityDetail(id))
    },[dispatch, id])

    return (
        <div>
            { activityDetail?.length > 0 ? (
                activityDetail?.map(a => (
                    <div key={a.id}>
                        <h1>{a.name}</h1>
                        <h1>{a.duracion}</h1>
                        <h1>{a.dificultad}</h1>
                        <h1>{a.temporada}</h1>
                    </div>
                ))
            ) : activityDetail === undefined  ? (
                <h1>Cargando...</h1>
            ) : (
                <h1>Actividad No encontrada</h1>
            )
            }
        </div>
    )
}