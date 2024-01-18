import dotenv from "dotenv";
import tedious from "tedious";
dotenv.config();
import { Sequelize } from "sequelize";
const {
  DB_NAME,
  HOST,
  USER,
  PASS,
  DBMAIN_NAME,
  DBMAIN_USER,
  DBMAIN_PASS,
  DBMAIN_HOST,
  FX_DBMAIN_NAME,
  FX_DBMAIN_USER,
  FX_DBMAIN_PASS,
  FX_DBMAIN_HOST,
} = process.env;
tedious.Connection;

export const dbAudit = new Sequelize(DB_NAME, USER, PASS, {
  host: HOST,
  port: 3306,
  dialect: "mysql",
  logging: false,
  timezone: "+07:00",
  dialectOptions: {
    timezone: "local",
  },
});

export const dbSummitMain = new Sequelize(
  DBMAIN_NAME,
  DBMAIN_USER,
  DBMAIN_PASS,
  {
    host: DBMAIN_HOST,
    port: 3306,
    dialect: "mysql",
    logging: false,
    timezone: "+07:00",
    dialectOptions: {
      timezone: "local",
    },
  }
);


export const dbFXMain = new Sequelize(
  FX_DBMAIN_NAME,
  FX_DBMAIN_USER,
  FX_DBMAIN_PASS,
  {
    host: DBMAIN_HOST,
    port: 1433,
    dialect: "mssql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    logging: false,
    timezone: "+07:00",
    dialectOptions: {
      timezone: "local",
      options: { encrypt: true }
    },
  }
);
