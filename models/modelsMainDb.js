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


export const FX_GRNDetail = dbSummitMain.define(
  "FX_GRNDetail", {
  GRNID: {
  type: DataTypes.STRING(10),
  allowNull: true,
  },
  MPONO: {
  type: DataTypes.STRING(10),
  allowNull: true,
  },
  GRNSTATUS: {
  type: DataTypes.STRING(10),
  allowNull: true,
  },
  CompanyCode: {
  type: DataTypes.STRING(10),
  allowNull: true,
  },
  Vendor: {
  type: DataTypes.STRING(30),
  allowNull: true,
  },
  Country: {
  type: DataTypes.STRING(2),
  allowNull: true,
  },
  CurrencyCode: {
  type: DataTypes.STRING(3),
  allowNull: true,
  },
  TermsofPayment: {
  type: DataTypes.STRING(10),
  allowNull: true,
  },
  TermOfDelivery: {
  type: DataTypes.STRING(10),
  allowNull: true,
  },
  OrderID: {
  type: DataTypes.STRING(10),
  allowNull: true,
  },
  OrderReferenceNo: {
  type: DataTypes.STRING(50),
  allowNull: true,
  },
  OrderDescription: {
  type: DataTypes.STRING(200),
  allowNull: true,
  },
  OrderTypeCode: {
  type: DataTypes.STRING(3),
  allowNull: true,
  },
  CustomerName: {
  type: DataTypes.STRING(200),
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
  ProgramCode: {
  type: DataTypes.STRING(200),
  allowNull: true,
  },
  BuyPlanCode: {
  type: DataTypes.STRING(200),
  allowNull: true,
  },
  ForwarderName: {
  type: DataTypes.STRING(200),
  allowNull: true,
  },
  DeliveryModeCode: {
  type: DataTypes.STRING(3),
  allowNull: true,
  },
  PackingSlipNo: {
  type: DataTypes.STRING(100),
  allowNull: true,
  },
  PackingSlipDate: {
  type: DataTypes.DATE,
  allowNull: true,
  },
  InvoiceNo: {
  type: DataTypes.STRING(200),
  allowNull: true,
  },
  DeliveryNote: {
  type: DataTypes.STRING(200),
  allowNull: true,
  },
  InhouseDate: {
  type: DataTypes.DATE,
  allowNull: true,
  },
  ActualETDDate: {
  type: DataTypes.DATE,
  allowNull: true,
  },
  ActualETADate: {
  type: DataTypes.DATE,
  allowNull: true,
  },
  CustomDocTypeCode: {
  type: DataTypes.STRING(10),
  allowNull: true,
  },
  CustomDocNo: {
  type: DataTypes.STRING(50),
  allowNull: true,
  },
  CustomDocDate: {
  type: DataTypes.DATE,
  allowNull: true,
  },
  CreatedID: {
  type: DataTypes.STRING(20),
  allowNull: true,
  },
  CreatedDate: {
  type: DataTypes.DATE,
  allowNull: true,
  },
  PostedFlag: {
  type: DataTypes.INTEGER(1),
  allowNull: true,
  },
  PostedDate: {
  type: DataTypes.DATE,
  allowNull: true,
  },
  PostedID: {
  type: DataTypes.STRING(20),
  allowNull: true,
  },
  Itemgroup: {
  type: DataTypes.STRING(20),
  allowNull: true,
  },
  ItemType: {
  type: DataTypes.STRING(2),
  allowNull: true,
  },
  ItemCategory: {
  type: DataTypes.STRING(3),
  allowNull: true,
  },
  ItemID: {
  type: DataTypes.STRING(10),
  allowNull: true,
  },
  Itemdescription: {
  type: DataTypes.STRING(255),
  allowNull: true,
  },
  ItemDimensionID: {
  type: DataTypes.STRING(5),
  allowNull: true,
  },
  Itemcolor: {
  type: DataTypes.STRING(255),
  allowNull: true,
  },
  itemsize: {
  type: DataTypes.STRING(255),
  allowNull: true,
  },
  itemserial: {
  type: DataTypes.STRING(20),
  allowNull: true,
  },
  UOMCode: {
  type: DataTypes.STRING(10),
  allowNull: true,
  },
  ReceivedQty: {
  type: DataTypes.DOUBLE(100,2),
  allowNull: true,
  },
  CostPerUnit: {
  type: DataTypes.DOUBLE(100,2),
  allowNull: true,
  },
  Itemstatus: {
  type: DataTypes.STRING(200),
  allowNull: true,
  },
  ItemQualityCode: {
  type: DataTypes.STRING(200),
  allowNull: true,
  },
  WarehouseID: {
  type: DataTypes.STRING(10),
  allowNull: true,
  },
  Warehousite: {
  type: DataTypes.STRING(200),
  allowNull: true,
  },
  WarehouName: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  Remark: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  },{
    tableName: "FX_GRNDetail",
    createdAt: false,
    updatedAt: false,
  }
);


FX_FinishingProdDetail.removeAttribute("id");
FX_GRNDetail.removeAttribute("id");