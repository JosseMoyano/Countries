const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      type: DataTypes.STRING(3),
			primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bandera:{
      type: DataTypes.TEXT,
      isUrl: true,
      allowNull: false
    },
    continente: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subregion: {
      type: DataTypes.STRING
    },
    area: {
      type: DataTypes.FLOAT
    },
    poblacion: {
      type: DataTypes.INTEGER
    }
  },
  {
    timestamps: false
    }
  );
};
