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
  
export const GRNDetail = dbFXMain.define(
    "GRNDetail", {
GRNID: {
  type: DataTypes.STRING(10),
  allowNull: true,
},
MPONO: {
  type: DataTypes.STRING(10),
  allowNull: true,
},
GRNSTATUS: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
CompanyCode: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
Vendor: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
Country: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
CurrencyCode: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
TermsofPayment: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
TermOfDelivery: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
OrderID: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
OrderReferenceNo: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
OrderDescription: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
OrderTypeCode: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
CustomerName: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
DivisionCode: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
SeasonCode: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
ProgramCode: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
BuyPlanCode: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
ForwarderName: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
DeliveryModeCode: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
PackingSlipNo: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
PackingSlipDate: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
InvoiceNo: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
DeliveryNote: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
InhouseDate: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
ActualETDDate: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
ActualETADate: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
CustomDocTypeCode: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
CustomDocNo: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
CustomDocDate: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
CreatedID: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
CreatedDate: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
PostedFlag: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
PostedDate: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
PostedID: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
Itemgroup: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
ItemType: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
ItemCategory: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
ItemID: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
Itemdescription: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
ItemDimensionID: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
Itemcolor: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
itemsize: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
itemserial: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
UOMCode: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
ReceivedQty: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
CostPerUnit: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
Itemstatus: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
ItemQualityCode: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
WarehouseID: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
Warehousite: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
WarehouName: {
  type: DataTypes.STRING(100),
  allowNull: true,
},
Remark: {
  type: DataTypes.STRING(100),
  allowNull: true,
},


    },{
      tableName: "GRNDetail",
      createdAt: false,
      updatedAt: false,
    }
  )


  FinishingProdDetail.removeAttribute("id");
  