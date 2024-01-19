import { QueryTypes } from "sequelize";
import { dbAudit, dbFXMain, dbSummitMain } from "../config/database.js";
import { queryGetBOMSourcingDetail, queryGetFXCustOrderDetail, queryGetFXCustomerShipmentDetail, queryGetFXFinishProd, queryGetFXGINDetail, queryGetFXGRNDetail, queryGetFinishProd, queryGetLTNListing, queryGetMRPListing, queryGetMRRListing, queryGetMRSListing, queryGetMRVListing } from "../models/modelsAuditTrial.js";
import { FX_BOMSourcingDetail, FX_CustomerOrderDetail, FX_CustomerShipmentDetail, FX_FinishingProdDetail, FX_GINDetail, FX_GRNDetail, FX_LTNListing, FX_MRPListing, FX_MRRListing, FX_MRSListing, FX_MRVListing } from "../models/modelsMainDb.js";

export async function cronFsProdDetail() {
  try {
    const finishProdDetail = await dbFXMain.query(queryGetFXFinishProd, {
      //   replacements: {
      //     schDate: date,
      //   },
      type: QueryTypes.SELECT,
    });
    //console.log(finishProdDetail);
    if (!finishProdDetail || finishProdDetail.length === 0)
      return "Tidak ada data atau terdapat error saat mengambil data Finishing Prod Detail";

    const postDataFinish = await FX_FinishingProdDetail.bulkCreate(
      finishProdDetail
    );
    if (!postDataFinish) return console.log("terdapat error saat insert data");

    return console.log("Berhasil post Finishing Production Detail");
  } catch (error) {
    return console.log(error);
  }
}

export async function cronGRNDetail() {
  try {
    const dataGRNetail = await dbFXMain.query(queryGetFXGRNDetail, { type: QueryTypes.SELECT });
    //console.log(dataGRNetail);
    if (!dataGRNetail || dataGRNetail.length === 0)
      return "Tidak ada data atau terdapat error saat mengambil data Finishing Prod Detail";
    //return console.log("Berhasil post GRN Detail");
    const postDataGRN = await FX_GRNDetail.bulkCreate(
      dataGRNetail
    );
    if (!postDataGRN) return console.log("terdapat error saat insert data");

    return console.log("Berhasil post GRN Detail");
  } catch (err) {
    return console.log(err);
  }
}

export async function cronCustomerShipmentDetail() {
  try {
    const dataCustShipmDetail = await dbFXMain.query(queryGetFXCustomerShipmentDetail, { type: QueryTypes.SELECT });
    if (!dataCustShipmDetail || dataCustShipmDetail.length === 0) return "Data Customer Shipment Detail is empty!";
    const postDataCustShipDet = await FX_CustomerShipmentDetail.bulkCreate(dataCustShipmDetail);
    if (!postDataCustShipDet) return console.log("Failed to insert Customer Shipment Detail data!");
    return console.log("Success Post Data of Customer Shipment Detail!");
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

export async function cronGINDetail() {
  try {
    const dataGINDetail = await dbFXMain.query(queryGetFXGINDetail, { type: QueryTypes.SELECT });
    if (!dataGINDetail || dataGINDetail.length === 0) return "Data GIN Detail is empty!";
    const postDataGINDetail = await FX_GINDetail.bulkCreate(dataGINDetail);
    if (!postDataGINDetail) return console.log("Action: Insert, Status: Failed, Table: Customer Order Detail");
    return console.log("Action: Insert, Status: Success, Table: GIN Detail");
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

export async function cronLTNListing() {
  try {
    const dataLTNListing = await dbFXMain.query(queryGetLTNListing, { type: QueryTypes.SELECT });
    if (!dataLTNListing || dataLTNListing.length === 0) return "Data LTN Listing is empty!";
    const postDataLTNListing = await FX_LTNListing.bulkCreate(dataLTNListing);
    if (!postDataLTNListing) return console.log("Action: Insert, Status: Failed, Table: LTN Listing");
    return console.log("Action: Insert, Status: Success, Table: LTN Listing");
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

export async function cronMRRListing() {
  try {
    const dataMRRListing = await dbFXMain.query(queryGetMRRListing, { type: QueryTypes.SELECT });
    if (!dataMRRListing || dataMRRListing.length === 0) return "Data MRR Listing is empty";
    const postDataMRRListing = await FX_MRRListing.bulkCreate(dataMRRListing);
    if (!postDataMRRListing) return console.log("Action: Insert, Status: Failed, Table: MRR Listing");
    return console.log("Action: Insert, Status: Success, Table: MRR Listing");
  } catch (err) {
    return console.log(err);
  }
}

export async function cronMRSListing() {
  try {
    const dataMRSListing = await dbFXMain.query(queryGetMRSListing, { type: QueryTypes.SELECT });
    if (!dataMRSListing || dataMRSListing.length === 0) return "Data MRS Listing is empty";
    const postDataMRSListing = await FX_MRSListing.bulkCreate(dataMRSListing);
    if (!postDataMRSListing) return console.log("Action: Insert, Status: Failed, Table: MRS Listing");
    return console.log("Action: Insert, Status: Success, Table: MRS Listing");
  } catch (err) {
    return console.log(err);
  }
}

export async function cronMRVListing() {
  try {
    const dataMRVListing = await dbFXMain.query(queryGetMRVListing, { type: QueryTypes.SELECT });
    if (!dataMRVListing || dataMRVListing.length === 0) return "Data MRV Listing is empty";
    const postDataMRVListing = await FX_MRVListing.bulkCreate(dataMRVListing);
    if (!postDataMRVListing) return console.log("Action: Insert, Status: Failed, Table: MRV Listing");
    return console.log("Action: Insert, Status: Success, Table: MRV Listing");
  } catch (err) {
    return console.log(err);
  }
}
