const { Router } = require('express');
const router = Router();
const { Activity, Country } = require('../db');



router.post('/add', async (req, res, next) => {
// --------------- VISTA PARA AGREGAR ACTIVIDADES ------------
    try {
        const { name, dificultad, duracion, temporada, idPais } = req.body;        
            let actividad = await Activity.create({name, dificultad, duracion, temporada})
            idPais.forEach(async (p) =>{
                let pais = await Country.findByPk(p);
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
        res.json(actividades);
    } catch (error) {
        next(error)
    }
});

module.exports = router;