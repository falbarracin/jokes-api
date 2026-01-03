import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/sequelize";

export class Joke extends Model {
  public id!: number;
  public text!: string;
}

Joke.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "jokes",
    timestamps: false,
  }
);