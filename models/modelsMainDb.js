import { DataTypes } from "sequelize";
import { dbAudit, dbSummitMain } from "../config/database.js";

export const FX_FinishingProdDetail = dbSummitMain.define(
  "FX_FinishingProdDetail",
  {
    SiteCode: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    CustomerCode: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    DivisionCode: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    SeasonCode: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    OrderID: {
      type: DataTypes.STRING(12),
      allowNull: true,
    },
    OrderPOStyleRef: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    OrderRefPONo: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    OrderPOID: {
      type: DataTypes.STRING(12),
      allowNull: true,
    },
    PORefCode: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    MOID: {
      type: DataTypes.STRING(12),
      allowNull: true,
    },
    FGItemID: {
      type: DataTypes.STRING(12),
      allowNull: true,
    },
    FGItemDescription: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    FGColorID: {
      type: DataTypes.STRING(12),
      allowNull: true,
    },
    FGColorDescription: {
      type: DataTypes.STRING(100),
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
    tableName: "FX_FinishingProdDetail",
    createdAt: false,
    updatedAt: false,
  }
);

FX_FinishingProdDetail.removeAttribute("id");
