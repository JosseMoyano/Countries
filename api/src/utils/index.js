const { Country }  = require('../db');

const guardarPais = async (id, name, bandera, continente, capital, subregion, area, poblacion) => {
    await Country.create({id, name, bandera, continente, capital, subregion, area, poblacion})}; 

module.exports = {
    guardarPais
}