import { QueryTypes, Op } from "sequelize";
import moment from "moment";
import { dbFXMain, dbSummitMain } from "../config/database.js";
import {
  queryGetBOMSourcingDetail,
  queryGetFXCustOrderDetail,
  queryGetFXCustomerShipmentDetail,
  queryGetFXFinishProd,
  queryGetFXGINDetail,
  queryGetFXGRNDetail,
  queryGetFinishProd,
  queryGetLTNListing,
  queryGetMRPListing,
  queryGetMRRListing,
  queryGetMRSListing,
  queryGetMRVListing,
  queryGetMSDListing
} from "../models/modelsAuditTrial.js";
import {
  FX_BOMSourcingDetail,
  FX_CustomerOrderDetail,
  FX_CustomerShipmentDetail,
  FX_FinishingProdDetail,
  FX_GINDetail,
  FX_GRNDetail,
  FX_LTNListing,
  FX_MRPListing,
  FX_MRRListing,
  FX_MRSListing,
  FX_MRVListing,
  FX_MSDListing
} from "../models/modelsMainDb.js";
import { GRNDetail, GINDetail, MRSListing, MRVListing, MRRListing, LTNListing, MSDListing, FinishingProdDetail, CustomerShipmentDetail } from "../models/modelsFXDb.js";


const startDate     = moment().subtract(1, 'd').format('YYYY-MM-DD');
const endDate       = moment().format('YYYY-MM-DD');
const yesterday     = startDate;    

// GRNDetail
export async function cronGRNDetail() {
  try {
    const dataGRNetail  = await GRNDetail.findAll({ where: { InhouseDate: yesterday } });
    if (!dataGRNetail || dataGRNetail.length === 0) return console.log(`GRNDetail ${yesterday} ==> DATA IS EMPTY`);
    const postDataGRNDetail = await FX_GRNDetail.bulkCreate(dataGRNetail);
    if (!postDataGRNDetail) return console.log(`GRNDetail ${startDate} - ${endDate} ==> FAIL TO INSERT DATA`);
    return console.log(`GRNDetail ${startDate} - ${endDate} ==> SUCCESS INSERT DATA`);
  } catch (err) {
    return console.log(err);
  }
}

// GINDetail
export async function cronGINDetail() {
  try {
    const dataGINDetail  = await GINDetail.findAll({ where: { PostedDate: yesterday } });
    if (!dataGINDetail || dataGINDetail.length === 0) return console.log(`GINDetail ${yesterday} ==> DATA IS EMPTY`);
    const postDataGINDetail = await FX_GINDetail.bulkCreate(dataGINDetail);
    if (!postDataGINDetail) return console.log(`GINDetail ${yesterday} ==> FAIL TO INSERT DATA`);
    return console.log(`GINDetail ${yesterday} ==> SUCCESS INSERT DATA`);
  } catch (err) {
    return console.log(err);
  }
}

// MRS Listing
export async function cronMRSListing() {
  try {
    const dataMRSListing  = await MRSListing.findAll({ where: { IssuedDate: yesterday } });
    if (!dataMRSListing || dataMRSListing.length === 0) return console.log(`MRSListing ${yesterday} ==> DATA IS EMPTY`);
    const postDataMRSListing = await FX_MRSListing.bulkCreate(dataMRSListing);
    if (!postDataMRSListing) return console.log(`MRSListing ${yesterday} ==> FAIL TO INSERT DATA`);
    return console.log(`MRSListing ${yesterday} ==> SUCCESS INSERT DATA`);
  } catch (err) {
    return console.log(err);
  }
}

// MRV Listing
export async function cronMRVListing() {
  try {
    const dataMRVListing = await MRVListing.findAll({ where: { CreatedDate: yesterday } });
    if (!dataMRVListing || dataMRVListing.length === 0) return console.log(`MRVListing ${yesterday} ==> DATA IS EMPTY`);
    const postDataMRVListing = await FX_MRVListing.bulkCreate(dataMRVListing);
    if (!postDataMRVListing) return console.log(`MRVListing ${yesterday} ==> FAIL TO INSERT DATA`);
    return console.log(`MRVListing ${yesterday} ==> SUCCESS INSERT DATA`);
  } catch (err) {
    return console.log(err);
  }
}

// MRR Listing
export async function cronMRRListing() {
  try {
    const dataMRRListing = await MRRListing.findAll({ where: { InhouseDate: yesterday } });
    if (!dataMRRListing || dataMRRListing.length === 0) return console.log(`MRRListing ${yesterday} ==> DATA IS EMPTY`);
    const postDataMRRListing = await FX_MRRListing.bulkCreate(dataMRRListing);
    if (!postDataMRRListing) return console.log(`MRRListing ${yesterday} ==> FAIL TO INSERT DATA`);
    return console.log(`MRRListing ${yesterday} ==> SUCCESS INSERT DATA`);
  } catch (err) {
    return console.log(err);
  }
}

// LTN Listing
export async function cronLTNListing() {
  try {
    const dataLTNListing = await LTNListing.findAll({ where: { CreatedDate: yesterday } });
    if (!dataLTNListing || dataLTNListing.length === 0) return console.log(`LTNListing ${yesterday} ==> DATA IS EMPTY`);
    const postDataLTNListing = await FX_LTNListing.bulkCreate(dataLTNListing);
    if (!postDataLTNListing) return console.log(`LTNListing ${yesterday} ==> FAIL TO INSERT DATA`);
    return console.log(`LTNListing ${yesterday} ==> SUCCESS INSERT DATA`);
  } catch (err) {
    return console.log(err);
  }
}

// MSD Listing
export async function cronMSDListing() {
  try {
    const dataMSDListing = await MSDListing.findAll({ where: { StatusDate: yesterday } });
    if (!dataMSDListing || dataMSDListing.length === 0) return console.log(`MSDListing ${yesterday} ==> DATA IS EMPTY`);
    const postDataMSDListing = await FX_MSDListing.bulkCreate(dataMSDListing);
    if (!postDataMSDListing) return console.log(`MSDListing ${yesterday} ==> FAIL TO INSERT DATA`);
    return console.log(`MSDListing ${yesterday} ==> SUCCESS INSERT DATA`);
  } catch (err) {
    return console.log(err);
  }
}

// Finishing Prod Detail
export async function cronFsProdDetail() {
  try {
    const dataFsProdDetail = await FinishingProdDetail.findAll({ where: { PostedDate: yesterday } });
    if (!dataFsProdDetail || dataFsProdDetail.length === 0) return console.log(`FPDListing ${yesterday} ==> DATA IS EMPTY`);
    const postDataFsProdDetail = await FX_FinishingProdDetail.bulkCreate(dataFsProdDetail);
    if (!postDataFsProdDetail) return console.log(`FPDListing ${yesterday} ==> FAIL TO INSERT DATA`);
    return console.log(`FPDListing ${yesterday} ==> SUCCESS INSERT DATA`);
  } catch (err) {
    return console.log(err);
  }
}

// Customer Shipment Detail
export async function cronCustomerShipmentDetail() {
  try {
    const dataCPIListing = await CustomerShipmentDetail.findAll({ where: { ApprovedDate: yesterday } });
    if (!dataCPIListing || dataCPIListing.length === 0) return console.log(`CPIListing ${yesterday} ==> DATA IS EMPTY`);
    const postDataCPIListing = await FX_CustomerShipmentDetail.bulkCreate(dataCPIListing);
    if (!postDataCPIListing) return console.log(`CPIListing ${yesterday} ==> FAIL TO INSERT DATA`);
    return console.log(`CPIListing ${yesterday} ==> SUCCESS INSERT DATA`);
  } catch (err) {
    return console.log(err)
  }
}

export async function cronCustomerOrderDetail() {
  try {
    const dropCustOrderDet = await FX_CustomerOrderDetail.truncate();
    const dataCustOrderDetail = await dbFXMain.query(queryGetFXCustOrderDetail, { type: QueryTypes.SELECT });
    const postDataCustOrderDetail = await FX_CustomerOrderDetail.bulkCreate(dataCustOrderDetail);
    return console.log("Action: Insert, Status: Success, Table: Customer Order Detail");
  } catch (err) {
    return console.log(err);
  }
}


export async function cronBOMSourcingDetail() {
  try {
    const dataBOMSourceDetail = await dbFXMain.query(queryGetBOMSourcingDetail, { type: QueryTypes.SELECT });
    if (!dataBOMSourceDetail || dataBOMSourceDetail.length === 0) return "Data BOMSourcingDetail is empty!";
    const postDATABOMSourcingDetail = await FX_BOMSourcingDetail.bulkCreate(dataBOMSourceDetail);
    if (!postDATABOMSourcingDetail) return console.log("Action: Insert, Status: Failed, Table: BOM Sourcing Detail");
    return console.log("Action: Insert, Status: Success, Table: BOM Sourcing Detail");
  } catch (err) {
    return console.log(err);
  }
}


export async function cronMRPListing() {
  try {
    const dataMRPListing = await dbFXMain.query(queryGetMRPListing, { type: QueryTypes.SELECT });
    if (!dataMRPListing || dataMRPListing.length === 0) return "Data MRP Listing is empty";
    const postDataMRPListing = await FX_MRPListing.bulkCreate(dataMRPListing);
    if (!postDataMRPListing) return console.log("Action: Insert, Status: Failed, Table: MRP Listing");
    return console.log("Action: Insert, Status: Success, Table: MRP Listing");
  } catch (err) {
    return console.log(err);
  }
}




