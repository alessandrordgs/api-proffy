const { Model, DataTypes } = require("sequelize");

class Proffy extends Model {
  static init(connection) {
    super.init({
      name: DataTypes.STRING,
      link_foto: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      biography: DataTypes.STRING,
      theme: DataTypes.STRING,
      amount: DataTypes.FLOAT,
      weekdays: DataTypes.STRING,
      startHour: DataTypes.STRING,
      endHour: DataTypes.STRING,
    },{
      sequelize: connection,
      freezeTableName:true,
    });
  }
}


module.exports = Proffy;