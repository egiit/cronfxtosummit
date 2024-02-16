import { DataTypes } from "sequelize";
import { dbFXMain } from "../config/database.js";

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


export const GINDetail = dbFXMain.define(
  "GINDetail", {
  CompanyCode: { type: DataTypes.STRING(10), allowNull: true },
  GINID: { type: DataTypes.STRING(10), allowNull: true },
  CreatedDate: { type: DataTypes.DATE, allowNull: true },
  CreatedID: { type: DataTypes.STRING(20), allowNull: true },
  GINStatus: { type: DataTypes.STRING(10), allowNull: true },
  PostedDate: { type: DataTypes.DATEONLY, allowNull: true },
  PostedID: { type: DataTypes.STRING(20), allowNull: true },
  IssuedPurpose: { type: DataTypes.STRING(500), allowNull: true },
  IssuedSite: { type: DataTypes.STRING(100), allowNull: true },
  IssuedDepartment: { type: DataTypes.STRING(100), allowNull: true },
  MaterialReceivedID: { type: DataTypes.STRING(10), allowNull: true },
  BOMPOID: { type: DataTypes.STRING(10), allowNull: true },
  ItemGroupCode: { type: DataTypes.STRING(2), allowNull: true },
  ItemType: { type: DataTypes.STRING(2), allowNull: true },
  ItemCategory: { type: DataTypes.STRING(3), allowNull: true },
  ItemID: { type: DataTypes.STRING(10), allowNull: true },
  ItemDescription: { type: DataTypes.STRING(500), allowNull: true },
  ItemDimensionID: { type: DataTypes.STRING(5), allowNull: true },
  ColorDescription: { type: DataTypes.STRING(500), allowNull: true },
  SizeDescription: { type: DataTypes.STRING(500), allowNull: true },
  SerialNo: { type: DataTypes.STRING(20), allowNull: true },
  SiteCode: { type: DataTypes.STRING(100), allowNull: true },
  WHDepartment: { type: DataTypes.STRING(100), allowNull: true },
  WHName: { type: DataTypes.STRING(200), allowNull: true },
  WHLocation: { type: DataTypes.STRING(500), allowNull: true },
  ItemStatus: { type: DataTypes.STRING(150), allowNull: true },
  ItemQuality: { type: DataTypes.STRING(150), allowNull: true },
  PurchaseUOM: { type: DataTypes.STRING(10), allowNull: true },
  IssuedQty: { type: DataTypes.DECIMAL(18, 2), allowNull: true },
  PrimaryCurrencyCode: { type: DataTypes.STRING(3), allowNull: true },
  PrimaryCurrencyCost: { type: DataTypes.DECIMAL(18, 6), allowNull: true },
  Customer: { type: DataTypes.STRING(500), allowNull: true },
  CustomerSeason: { type: DataTypes.STRING(200), allowNull: true },
  CustomerDivision: { type: DataTypes.STRING(200), allowNull: true },
  CustomerByPlan: { type: DataTypes.STRING(200), allowNull: true },
  CustomerProgram: { type: DataTypes.STRING(200), allowNull: true },
  OrderTypeCode: { type: DataTypes.STRING(3), allowNull: true },
  OrderID: { type: DataTypes.STRING(10), allowNull: true },
  OrderDescription: { type: DataTypes.STRING(500), allowNull: true },
  OrderReferenceNo: { type: DataTypes.STRING(500), allowNull: true },
  Remark: { type: DataTypes.STRING(500), allowNull: true },
  CustomDocumentType: { type: DataTypes.STRING(10), allowNull: true },
  CustomDocNo: { type: DataTypes.STRING(500), allowNull: true },
  CustomDocDate: { type: DataTypes.DATE, allowNull: true }
  },
  {
    tableName: "GINDetail",
    createdAt: false,
    updatedAt: false,
  }
);


export const MRSListing = dbFXMain.define(
  "MRSListing", {
    StockHoldingCompany: { type: DataTypes.STRING(10), allowNull: true },
    MRSID: { type: DataTypes.STRING(10), allowNull: true },
    Status: { type: DataTypes.STRING(6), allowNull: true },
    CreatedDate: { type: DataTypes.DATE, allowNull: true },
    CreatedID: { type: DataTypes.STRING(20), allowNull: true },
    GINID: { type: DataTypes.STRING(10), allowNull: true },
    IssuedDate: { type: DataTypes.DATEONLY, allowNull: true },
    IssuedSite: { type: DataTypes.STRING(10), allowNull: true },
    IssuedDepartment: { type: DataTypes.STRING(50), allowNull: true },
    MaterialReceivedID: { type: DataTypes.STRING(10), allowNull: true },
    BOMPOID: { type: DataTypes.STRING(10), allowNull: true },
    ItemGroupCode: { type: DataTypes.STRING(2), allowNull: true },
    ItemType: { type: DataTypes.STRING(103), allowNull: true },
    ItemCategory: { type: DataTypes.STRING(105), allowNull: true },
    ItemID: { type: DataTypes.STRING(10), allowNull: true },
    ItemDescription: { type: DataTypes.STRING(302), allowNull: true },
    ItemDimensionID: { type: DataTypes.STRING(5), allowNull: true },
    ColorDescription: { type: DataTypes.STRING(200), allowNull: true },
    SizeDescription: { type: DataTypes.STRING(200), allowNull: true },
    SerialNo: { type: DataTypes.STRING(20), allowNull: true },
    OriginWHID: { type: DataTypes.STRING(10), allowNull: true },
    OriginWarehouse: { type: DataTypes.STRING(200), allowNull: true },
    OriginWHLocation: { type: DataTypes.STRING(302), allowNull: true },
    ReturnedWHID: { type: DataTypes.STRING(10), allowNull: true },
    ReturnedWarehouse: { type: DataTypes.STRING(200), allowNull: true },
    ReturnedWHLocation: { type: DataTypes.STRING(302), allowNull: true },
    ReturnedWHSite: { type: DataTypes.STRING(200), allowNull: true },
    ReturnedWHDepartment: { type: DataTypes.STRING(50), allowNull: true },
    ItemStatus: { type: DataTypes.STRING(103), allowNull: true },
    ItemQuality: { type: DataTypes.STRING(103), allowNull: true },
    PurchaseUOM: { type: DataTypes.STRING(10), allowNull: true },
    IssuedQty: { type: DataTypes.NUMERIC(18, 2), allowNull: true },
    ReturnedQty: { type: DataTypes.NUMERIC(18, 2), allowNull: true },
    Customer: { type: DataTypes.STRING(20), allowNull: true },
    CustomerSeason: { type: DataTypes.STRING(200), allowNull: true },
    CustomerDivision: { type: DataTypes.STRING(10), allowNull: true },
    CustomerByPlan: { type: DataTypes.STRING(200), allowNull: true },
    CustomerProgram: { type: DataTypes.STRING(200), allowNull: true },
    OrderTypeCode: { type: DataTypes.STRING(3), allowNull: true },
    OrderID: { type: DataTypes.STRING(10), allowNull: true },
    OrderDescription: { type: DataTypes.STRING(200), allowNull: true },
    OrderReferenceNo: { type: DataTypes.STRING(50), allowNull: true },
    Remark: { type: DataTypes.STRING(500), allowNull: true },
    CustomDocumentType: { type: DataTypes.STRING(10), allowNull: true },
    CustomDocNo: { type: DataTypes.STRING(500), allowNull: true },
    CustomDocDate: { type: DataTypes.DATE, allowNull: true }
  },
  {
    tableName: "MRSListing",
    createdAt: false,
    updatedAt: false,
  }
);

export const MRVListing = dbFXMain.define(
  "MRVListing",
  {
    StockHoldingCompany: { type: DataTypes.STRING(200), allowNull: true },
    MRVID: { type: DataTypes.STRING(10), allowNull: true },
    Status: { type: DataTypes.STRING(10), allowNull: true },
    CreatedDate: { type: DataTypes.DATEONLY, allowNull: true },
    CreatedID: { type: DataTypes.STRING(20), allowNull: true },
    MaterialReturnTypeCode: { type: DataTypes.STRING(100), allowNull: true },
    MaterialType: { type: DataTypes.STRING(50), allowNull: true },
    VendorCode: { type: DataTypes.STRING(100), allowNull: true },
    VendorName: { type: DataTypes.STRING(200), allowNull: true },
    MaterialReceivedID: { type: DataTypes.STRING(10), allowNull: true },
    BOMPOID: { type: DataTypes.STRING(10), allowNull: true },
    GRN_CustomDocumentType: { type: DataTypes.STRING(100), allowNull: true },
    GRN_CustomDocNo: { type: DataTypes.STRING(100), allowNull: true },
    GRN_CustomDocDate: { type: DataTypes.DATEONLY, allowNull: true },
    ItemGroupCode: { type: DataTypes.STRING(10), allowNull: true },
    ItemType: { type: DataTypes.STRING(100), allowNull: true },
    ItemCategory: { type: DataTypes.STRING(100), allowNull: true },
    ItemID: { type: DataTypes.STRING(10), allowNull: true },
    ItemDescription: { type: DataTypes.STRING(100), allowNull: true },
    ItemDimensionID: { type: DataTypes.STRING(10), allowNull: true },
    ColorDescription: { type: DataTypes.STRING(100), allowNull: true },
    SizeDescription: { type: DataTypes.STRING(100), allowNull: true },
    SerialNo: { type: DataTypes.STRING(100), allowNull: true },
    WarehouseID: { type: DataTypes.STRING(10), allowNull: true },
    WarehouseCode: { type: DataTypes.STRING(100), allowNull: true },
    WarehouseSite: { type: DataTypes.STRING(100), allowNull: true },
    WarehouseDepartment: { type: DataTypes.STRING(100), allowNull: true },
    WHLocationID: { type: DataTypes.STRING(10), allowNull: true },
    WHLocation: { type: DataTypes.STRING(100), allowNull: true },
    ItemStatus: { type: DataTypes.STRING(100), allowNull: true },
    ItemQuality: { type: DataTypes.STRING(100), allowNull: true },
    PurchaseUOM: { type: DataTypes.STRING(10), allowNull: true },
    ReturnQty: { type: DataTypes.NUMERIC(18, 2), allowNull: true },
    PurchaseCurrencyCode: { type: DataTypes.STRING(10), allowNull: true },
    CostPerUnit: { type: DataTypes.NUMERIC(18, 6), allowNull: true },
    ReplacementQty: { type: DataTypes.NUMERIC(18, 2), allowNull: true },
    PendingReplacementQty: { type: DataTypes.NUMERIC(18, 2), allowNull: true },
    Customer: { type: DataTypes.STRING(200), allowNull: true },
    CustomerSeason: { type: DataTypes.STRING(200), allowNull: true },
    CustomerDivision: { type: DataTypes.STRING(200), allowNull: true },
    CustomerByPlan: { type: DataTypes.STRING(200), allowNull: true },
    CustomerProgram: { type: DataTypes.STRING(200), allowNull: true },
    OrderTypeCode: { type: DataTypes.STRING(10), allowNull: true },
    OrderID: { type: DataTypes.STRING(10), allowNull: true },
    OrderDescription: { type: DataTypes.STRING(200), allowNull: true },
    OrderReferenceNo: { type: DataTypes.STRING(200), allowNull: true },
    ProductionMonthWindow: { type: DataTypes.STRING(50), allowNull: true },
    OrderDeliveryWindow: { type: DataTypes.STRING(50), allowNull: true },
    PackingSlipNo: { type: DataTypes.STRING(200), allowNull: true },
    PackingSlipDate: { type: DataTypes.DATE, allowNull: true },
    DeliveryNote: { type: DataTypes.STRING(200), allowNull: true },
    CustomDocumentType: { type: DataTypes.STRING(100), allowNull: true },
    CustomDocNo: { type: DataTypes.STRING(100), allowNull: true },
    CustomDocDate: { type: DataTypes.DATEONLY, allowNull: true },
    Note: { type: DataTypes.STRING(500), allowNull: false }
  },
  {
    tableName: "MRVListing",
    createdAt: false,
    updatedAt: false,
  }
);

export const MRRListing = dbFXMain.define(
  "MRRListing", {
    StockHoldingCompany: { type: DataTypes.STRING(10), allowNull: true },
    MRRID: { type: DataTypes.STRING(10), allowNull: true },
    CreatedID: { type: DataTypes.STRING(20), allowNull: true },
    CreatedDate: { type: DataTypes.DATE, allowNull: true },
    MRRStatus: { type: DataTypes.STRING(7), allowNull: true },
    PostedID: { type: DataTypes.STRING(20), allowNull: true },
    PostedDate: { type: DataTypes.DATE, allowNull: true },
    InhouseDate: { type: DataTypes.DATEONLY, allowNull: true },
    MRVID: { type: DataTypes.STRING(10), allowNull: true },
    MRV_CreatedID: { type: DataTypes.STRING(20), allowNull: true },
    MRV_CreatedDate: { type: DataTypes.DATE, allowNull: true },
    MRV_PostedDate: { type: DataTypes.DATE, allowNull: true },
    MaterialReceivedID: { type: DataTypes.STRING(10), allowNull: true },
    BOMPOID: { type: DataTypes.STRING(10), allowNull: true },
    TermsofPayment: { type: DataTypes.STRING(10), allowNull: true },
    TermOfDelivery: { type: DataTypes.STRING(10), allowNull: true },
    DeliveryModeCode: { type: DataTypes.STRING(3), allowNull: true },
    DeliveryNote: { type: DataTypes.STRING(200), allowNull: true },
    ActualETADate: { type: DataTypes.DATEONLY, allowNull: true },
    ActualETDDate: { type: DataTypes.DATEONLY, allowNull: true },
    VendorID: { type: DataTypes.STRING(10), allowNull: true },
    VendorCode: { type: DataTypes.STRING(30), allowNull: true },
    VendorName: { type: DataTypes.STRING(200), allowNull: true },
    CountryOfOrigin: { type: DataTypes.STRING(200), allowNull: true },
    PackingSlipNo: { type: DataTypes.STRING(100), allowNull: true },
    PackingSlipDate: { type: DataTypes.DATEONLY, allowNull: true },
    InvoiceNo: { type: DataTypes.STRING(200), allowNull: true },
    ForwarderName: { type: DataTypes.STRING(200), allowNull: true },
    ItemGroupCode: { type: DataTypes.STRING(2), allowNull: true },
    ItemType: { type: DataTypes.STRING(103), allowNull: true },
    ItemCategory: { type: DataTypes.STRING(105), allowNull: true },
    ItemID: { type: DataTypes.STRING(10), allowNull: true },
    ItemDescription: { type: DataTypes.STRING(302), allowNull: true },
    ItemDimensionID: { type: DataTypes.STRING(5), allowNull: true },
    ColorDescription: { type: DataTypes.STRING(200), allowNull: true },
    SizeDescription: { type: DataTypes.STRING(200), allowNull: true },
    SerialNo: { type: DataTypes.STRING(20), allowNull: true },
    WarehouseID: { type: DataTypes.STRING(10), allowNull: true },
    Warehouse: { type: DataTypes.STRING(200), allowNull: true },
    SiteCode: { type: DataTypes.STRING(10), allowNull: true },
    WHDepartment: { type: DataTypes.STRING(50), allowNull: true },
    ItemStatus: { type: DataTypes.STRING(103), allowNull: true },
    ItemQuality: { type: DataTypes.STRING(103), allowNull: true },
    PurchaseUOM: { type: DataTypes.STRING(10), allowNull: true },
    ReceivedQty: { type: DataTypes.NUMERIC(18, 2), allowNull: true },
    CurrencyCode: { type: DataTypes.STRING(3), allowNull: true },
    CostPerUnit: { type: DataTypes.NUMERIC(18, 6), allowNull: true },
    GRNAmount: { type: DataTypes.NUMERIC(37, 8), allowNull: true },
    Customer: { type: DataTypes.STRING(20), allowNull: true },
    CustomerSeason: { type: DataTypes.STRING(200), allowNull: true },
    CustomerDivision: { type: DataTypes.STRING(10), allowNull: true },
    CustomerByPlan: { type: DataTypes.STRING(200), allowNull: true },
    CustomerProgram: { type: DataTypes.STRING(200), allowNull: true },
    OrderTypeCode: { type: DataTypes.STRING(3), allowNull: true },
    OrderID: { type: DataTypes.STRING(10), allowNull: true },
    OrderDescription: { type: DataTypes.STRING(200), allowNull: true },
    OrderReferenceNo: { type: DataTypes.STRING(50), allowNull: true },
    Remark: { type: DataTypes.STRING(500), allowNull: true },
    CustomDocumentType: { type: DataTypes.STRING(10), allowNull: true },
    CustomDocNo: { type: DataTypes.STRING(500), allowNull: true },
    CustomDocDate: { type: DataTypes.DATE, allowNull: true }
  },
  {
    tableName: "MRRListing",
    createdAt: false,
    updatedAt: false,
  }
);

export const LTNListing = dbFXMain.define(
  "LTNListing", {
    StockHoldingCompany: { type: DataTypes.STRING(10), allowNull: true },
    LTNID: { type: DataTypes.STRING(10), allowNull: true },
    CreatedDate: { type: DataTypes.DATEONLY, allowNull: true },
    CreatedID: { type: DataTypes.STRING(20), allowNull: true },
    LTNStatus: { type: DataTypes.STRING(8), allowNull: true },
    SourceSiteID: { type: DataTypes.STRING(10), allowNull: true },
    SourceDepartment: { type: DataTypes.STRING(50), allowNull: true },
    SourceWarehouse: { type: DataTypes.STRING(401), allowNull: true },
    SourceLocation: { type: DataTypes.STRING(200), allowNull: true },
    DestinationSite: { type: DataTypes.STRING(10), allowNull: true },
    DestinationDepartment: { type: DataTypes.STRING(50), allowNull: true },
    DestinationWarehouse: { type: DataTypes.STRING(401), allowNull: true },
    DestinationLocation: { type: DataTypes.STRING(200), allowNull: true },
    MaterialReceivedID: { type: DataTypes.STRING(10), allowNull: true },
    BOMPOID: { type: DataTypes.STRING(10), allowNull: true },
    ItemGroupCode: { type: DataTypes.STRING(2), allowNull: true },
    ItemType: { type: DataTypes.STRING(103), allowNull: true },
    ItemCategory: { type: DataTypes.STRING(105), allowNull: true },
    ItemID: { type: DataTypes.STRING(10), allowNull: true },
    ItemDescription: { type: DataTypes.STRING(302), allowNull: true },
    ItemDimensionID: { type: DataTypes.STRING(5), allowNull: true },
    ColorDescription: { type: DataTypes.STRING(200), allowNull: true },
    SizeDescription: { type: DataTypes.STRING(200), allowNull: true },
    SerialNo: { type: DataTypes.STRING(20), allowNull: true },
    ItemStatus: { type: DataTypes.STRING(103), allowNull: true },
    ItemQuality: { type: DataTypes.STRING(103), allowNull: true },
    PurchaseUOM: { type: DataTypes.STRING(10), allowNull: true },
    TransferQty: { type: DataTypes.NUMERIC(38, 2), allowNull: true },
    Customer: { type: DataTypes.STRING(20), allowNull: true },
    CustomerSeason: { type: DataTypes.STRING(200), allowNull: true },
    CustomerDivision: { type: DataTypes.STRING(10), allowNull: true },
    CustomerByPlan: { type: DataTypes.STRING(200), allowNull: true },
    CustomerProgram: { type: DataTypes.STRING(200), allowNull: true },
    OrderTypeCode: { type: DataTypes.STRING(3), allowNull: true },
    OrderID: { type: DataTypes.STRING(10), allowNull: true },
    OrderDescription: { type: DataTypes.STRING(200), allowNull: true },
    OrderReferenceNo: { type: DataTypes.STRING(50), allowNull: true },
    Remark: { type: DataTypes.STRING(500), allowNull: true },
    CustomDocumentType: { type: DataTypes.STRING(10), allowNull: true },
    CustomDocNo: { type: DataTypes.STRING(500), allowNull: true },
    CustomDocDate: { type: DataTypes.DATE, allowNull: true },
    SourceWarehouseID: { type: DataTypes.STRING(10), allowNull: true },
    DestinationWarehouseID: { type: DataTypes.STRING(10), allowNull: true }
  },
  {
    tableName: "LTNListing",
    createdAt: false,
    updatedAt: false,
  }
);







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
  GRNDetail.removeAttribute("id");
  GINDetail.removeAttribute("id");
  MRSListing.removeAttribute("id");
  MRVListing.removeAttribute("id");
  MRRListing.removeAttribute("id");
  LTNListing.removeAttribute("id");
  
