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

export const FX_CustomerShipmentDetail = dbSummitMain.define(
  "FX_CustomerShipmentDetail", {
    CompanyCode: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    CustomerPKSID: {
      type: DataTypes.CHAR(10),
      allowNull: true,
    },
    CustomerPKSNo: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    PackingSlipDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    CreatedDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    CreatedID: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    PackingSlipStatus: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    ApprovedDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    ApprovedID: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    PKSQty: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    UOMCode: {
      type: DataTypes.CHAR(3),
      allowNull: true,
    },
    UnitPrice: {
      type: DataTypes.DECIMAL(65, 4),
      allowNull: true,
    },
    TotalPKSAmount: {
      type: DataTypes.DECIMAL(65, 4),
      allowNull: true,
    },
    CurrencyCode: {
      type: DataTypes.CHAR(3),
      allowNull: true,
    },
    OrderPriceType: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    ReferenceNote: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    CustomerName: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    DivisionCode: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    SeasonCode: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    DeliveryLocation: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    CountryID: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    ShipmentType: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    OrderID: {
      type: DataTypes.CHAR(10),
      allowNull: true,
    },
    OrderRefPONo: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    OrderPOStyleRef: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    OrderPOID: {
      type: DataTypes.CHAR(10),
      allowNull: true,
    },
    PORefCode: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    ProductItemID: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    ProductItemCode: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    ProductItemDescription: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    ProductItemCategoryCode: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    FGItemColorCode: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    FGItemColorName: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    FGSize: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    ProductionMonth: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    ManufacturingSiteID: {
      type: DataTypes.CHAR(5),
      allowNull: true,
    },
    OrderShipPONo: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    OrderShipStyleNo: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    OrderShipPoID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ShipPORefCode: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    DeliveryTerm: {
      type: DataTypes.CHAR(3),
      allowNull: true,
    },
    DeliveryModeCode: {
      type: DataTypes.CHAR(3),
      allowNull: true,
    },
    PackingMethodCode: {
      type: DataTypes.CHAR(3),
      allowNull: true,
    },
    POConfirmedDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    POExpiryDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    PODeliveryDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    PlanBLDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    PlanExfactoryDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    ShipmentDetailCompletion: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    ShipmentConfirmedDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    GWKG: {
      type: DataTypes.DECIMAL(65, 4),
      allowNull: true,
    },
    NWKG: {
      type: DataTypes.DECIMAL(65, 4),
      allowNull: true,
    },
    CustomDocNo: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    CustomExportRegNo: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    CustomsExportRegDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    CustomsExportAckNo: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    CustomsExportAckDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    AJUNo: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    ActualExFactoryDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    ShipmentDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    BLNo: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    ASNGTN_InvoiceNo: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    DeliveryMode: {
      type: DataTypes.CHAR(3),
      allowNull: true,
    },
    CarrierName: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    PortofLoading: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    PortofDischarge: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    FinalDestination: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    PaymentTerms: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    ShippingTerms: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    InvoiceCreation: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    InvoiceCreationDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "FX_CustomerShipmentDetail",
    createdAt: false,
    updatedAt: false,
  }
)

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

export const FX_CustomerOrderDetail = dbSummitMain.define(
  'FX_CustomerOrderDetail', {
  Mfg_CompanyCode: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  OrderPlacementCompany: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  OrderType: {
    type: DataTypes.CHAR(3),
    allowNull: true,
  },
  OrderID: {
    type: DataTypes.CHAR(10),
    allowNull: true,
  },
  OrderRefPONo: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  OrderPOStyleRef: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  PruductTypeCategory: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  ProductItemID: {
    type: DataTypes.CHAR(10),
    allowNull: true,
  },
  ProductItemCode: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  ProductItemDescription: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  ProductAttributeType: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  ProductAttributeCategory: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  CustomerName: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  CustomerBrand: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  CustomerOrderSeason: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  CustomerProgramName: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  BuyPlanName: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  ProjectionOrderID: {
    type: DataTypes.CHAR(10),
    allowNull: true,
  },
  ProjectionOrderCode: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  OrderConfirmedDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  OrderUOM: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  CurrencyCode: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  OrderPOID: {
    type: DataTypes.CHAR(10),
    allowNull: true,
  },
  MOID: {
    type: DataTypes.CHAR(10),
    allowNull: true,
  },
  StatusName: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  PORefCode: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  ColorCode: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  ColorName: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  PODelvieryLcoation: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  DelvieryLocationCode: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  DelvieryLocationName: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  CountryID: {
    type: DataTypes.CHAR(2),
    allowNull: true,
  },
  PackingMethodCode: {
    type: DataTypes.CHAR(3),
    allowNull: true,
  },
  DelvieryMode: {
    type: DataTypes.CHAR(3),
    allowNull: true,
  },
  POConfirmedDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  OrginalDeliveryDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  RevisedDeliveryDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  PlanExfactoryDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  POExpiryDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  ProductionMonth: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  PriceTypeCode: {
    type: DataTypes.CHAR(3),
    allowNull: true,
  },
  UnitPrice: {
    type: DataTypes.DECIMAL(18, 6),
    allowNull: true,
  },
  MOCost: {
    type: DataTypes.DECIMAL(18, 6),
    allowNull: true,
  },
  RevisiedUnitPrice: {
    type: DataTypes.DECIMAL(18, 6),
    allowNull: true,
  },
  OrderQty: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  MOQty: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  ManufacturingSiteID: {
    type: DataTypes.CHAR(5),
    allowNull: true,
  },
  ContractNumber: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  ContractConfirmedDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  ContractExpiryDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'FX_CustomerOrderDetail',
  engine: 'InnoDB',
  charset: 'utf8mb4',
  collate: 'utf8mb4_general_ci',
  createdAt: false,
  updatedAt: false,
});

export const FX_GINDetail = dbSummitMain.define('FXGINDetail', {
  CompanyCode: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  GINID: {
    type: DataTypes.CHAR(10),
    allowNull: true,
  },
  CreatedDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  CreatedID: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  GINStatus: {
    type: DataTypes.STRING(10),
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
  IssuedPurpose: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  IssuedSite: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  IssuedDepartment: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  MaterialReceivedID: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  BOMPOID: {
    type: DataTypes.CHAR(10),
    allowNull: true,
  },
  ItemGroupCode: {
    type: DataTypes.CHAR(2),
    allowNull: true,
  },
  ItemType: {
    type: DataTypes.CHAR(2),
    allowNull: true,
  },
  ItemCategory: {
    type: DataTypes.CHAR(3),
    allowNull: true,
  },
  ItemID: {
    type: DataTypes.CHAR(10),
    allowNull: true,
  },
  ItemDescription: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  ItemDimensionID: {
    type: DataTypes.STRING(5),
    allowNull: true,
  },
  ColorDescription: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  SizeDescription: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  SerialNo: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  SiteCode: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  WHDepartment: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  WHName: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  WHLocation: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  ItemStatus: {
    type: DataTypes.STRING(150),
    allowNull: true,
  },
  ItemQuality: {
    type: DataTypes.STRING(150),
    allowNull: true,
  },
  PurchaseUOM: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  IssuedQty: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  PrimaryCurrencyCode: {
    type: DataTypes.CHAR(3),
    allowNull: true,
  },
  PrimaryCurrencyCost: {
    type: DataTypes.DECIMAL(18, 6),
    allowNull: true,
  },
  Customer: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  CustomerSeason: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  CustomerDivision: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  CustomerByPlan: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  CustomerProgram: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  OrderTypeCode: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  OrderID: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  OrderDescription: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  OrderReferenceNo: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  Remark: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  CustomDocumentType: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  CustomDocNo: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  CustomDocDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'FX_GINDetail',
  engine: 'InnoDB',
  charset: 'utf8mb4',
  collate: 'utf8mb4_general_ci',
  createdAt: false,
  updatedAt: false,
});


FX_FinishingProdDetail.removeAttribute("id");
FX_GRNDetail.removeAttribute("id");
FX_GINDetail.removeAttribute("id");
FX_CustomerShipmentDetail.removeAttribute("id");
FX_CustomerOrderDetail.removeAttribute("id");