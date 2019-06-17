'use strict';

module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    nombre: DataTypes.STRING,
    poblacion: DataTypes.STRING,
    saldo :DataTypes.INTEGER
  }, {timestamps: false});
  Cliente.associate = function(models) {
    Cliente.hasMany(models.Task);
  };
  return Cliente;
};