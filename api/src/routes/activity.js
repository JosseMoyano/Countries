const { Router } = require('express');
const router = Router();
const { Activity, Country } = require('../db');



router.post('/add', async (req, res, next) => {
// --------------- VISTA PARA AGREGAR ACTIVIDADES ------------
    try {
        let { name, dificultad, duracion, temporada, idPais } = req.body; 
        if(idPais.length === 0) return res.status(400).send('error al crear la actividad, falta que elijas el pais')    
        if(!name || !dificultad || !duracion || !temporada) return res.status(400).send('error al crear la actividad, falta que elijas la temporada')
        duracion = parseInt(duracion);
        dificultad = parseInt(dificultad);    
        let actividad = await Activity.create({name, dificultad, duracion, temporada})
        idPais.forEach(async (p) =>{
            let pais = await Country.findByPk(p.toUpperCase());
            await actividad.addCountry(pais);                
        })
        return res.json(actividad);
             
    } catch (error) {
        next(error)
    }
});

router.get('/show', async (req, res, next) => {
// --------------- VISTA PARA VER ACTIVIDADES CREADAS ------------
    try {
        let actividades = await Activity.findAll({include : [Country]});
        if(actividades.length > 0) return res.json(actividades);
        return res.json({'error' : 'No hay actividades para mostrar'})
    } catch (error) {
        next(error)
    }
});

module.exports = router;