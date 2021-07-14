//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const fetch = require('node-fetch');
const { guardarPais } = require('./src/utils')

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  console.log('Conectado a la Base de Datos')
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    fetch('https://restcountries.eu/rest/v2/all')
    .then(data => data.json())            
    .then(data => data.forEach(c => guardarPais(c.alpha3Code, c.name, c.flag, c.region, c.capital, c.subregion, c.area, c.population)))  
    .catch(e => console.error(e))
    console.log('Datos cargados con exito');
  });
});
