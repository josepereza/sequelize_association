'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: DataTypes.STRING,
  ClienteId: DataTypes.INTEGER}, {timestamps: false});
  Task.associate = function(models) {
    Task.belongsTo(models.Cliente);
  };
  return Task;
};