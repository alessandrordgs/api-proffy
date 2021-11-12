const { Model, DataTypes } = require("sequelize");
class Proffy extends Model {
  static init(connection) {
    super.init({
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      telefone: DataTypes.STRING,
    },{
      sequelize: connection,
      freezeTableName:true,
    });
  }
}


module.exports = Proffy;