const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
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
      values: ['Verano', 'Otoño', 'Invierno', 'Primavera']
    }
  },
  {
    timestamps: false
  }
  );
};
