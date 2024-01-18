import { DataTypes } from "sequelize";
import { dbAudit, dbFXMain } from "../config/database.js";

export const FinishingProdDetail = dbFXMain.define(
    "FinishingProdDetail",
    {
      SiteCode: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      CustomerCode: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      DivisionCode: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      SeasonCode: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      OrderID: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      OrderPOStyleRef: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      OrderRefPONo: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      OrderPOID: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      PORefCode: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      MOID: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      FGItemID: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      FGItemDescription: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      FGColorID: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      FGColorDescription: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      GoodQty: {
        type: DataTypes.INTEGER(255),
        allowNull: true,
      },
      RejectedQty: {
        type: DataTypes.INTEGER(255),
        allowNull: true,
      },
      UnaccountedQty: {
        type: DataTypes.INTEGER(255),
        allowNull: true,
      },
      SampleQty: {
        type: DataTypes.INTEGER(255),
        allowNull: true,
      },
      PostedDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: "FinishingProdDetail",
      createdAt: false,
      updatedAt: false,
    }
  );
  
  FinishingProdDetail.removeAttribute("id");
  