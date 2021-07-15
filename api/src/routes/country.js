const { Router } = require('express');
const router = Router();
const { Country, Activity } = require('../db');
const { Op } = require('sequelize');


router.get('/', async (req, res, next) => {
    try {
        let { name } = req.query; 
        if (name){
            nameMayus = name.replace(/\b\w/g, l => l.toUpperCase()); 
            let pais = await Country.findAll({
                where: {
                    name: { 
                        [Op.or]: {
                            [Op.startsWith]: nameMayus,
                            [Op.endsWith]: name,
                            [Op.substring]: name
                        }
                    }
                },
                include: [Activity]
            })
            if(pais.length > 0) return res.json(pais)
            return res.json('No hay coincidencias')    
        } else {
            let paises = await Country.findAll({
                attributes: ['bandera', 'name', 'continente', 'id', 'poblacion'],
                include: [Activity],
                limit: 10})
            return res.json(paises)
        }
    } catch (error) {
        next(error)
    }
});

router.get('/:idPais', async (req, res, next) => {
    try {
        const {idPais} = req.params;
        let pais = await Country.findByPk(idPais.toUpperCase(), {
            attributes: ['bandera', 'name', 'id', 'continente', 'capital', 'subregion', 'area', 'poblacion'],
            include: [Activity]
        });
        return res.json(pais)
    } catch (error) {
        next(error)
    }
});


module.exports = router;