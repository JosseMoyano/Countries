const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificultad: {
      type: DataTypes.INTEGER,
      validate: {
        max: 5,
        min: 1
      }
    },
    duracion:{
      type: DataTypes.INTEGER
    },
    temporada: {
      type: DataTypes.ENUM,
      values: ['Verano', 'Otoño', 'Invierno', 'Primevera']
    }
  },
  {
    timestamps: false
  }
  );
};
