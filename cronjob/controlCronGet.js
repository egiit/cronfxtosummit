import { QueryTypes } from "sequelize";
import { dbAudit, dbFXMain, dbSummitMain } from "../config/database.js";
import { queryGetFXCustOrderDetail, queryGetFXCustomerShipmentDetail, queryGetFXFinishProd, queryGetFXGINDetail, queryGetFXGRNDetail, queryGetFinishProd } from "../models/modelsAuditTrial.js";
import { FX_CustomerOrderDetail, FX_CustomerShipmentDetail, FX_FinishingProdDetail, FX_GINDetail, FX_GRNDetail} from "../models/modelsMainDb.js";

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
  try{
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
  } catch(err){
    return console.log(err);
  }
}

export async function cronCustomerShipmentDetail() {
  try{
      const dataCustShipmDetail = await dbFXMain.query(queryGetFXCustomerShipmentDetail, {type: QueryTypes.SELECT});
      if(!dataCustShipmDetail || dataCustShipmDetail.length === 0) return "Data Customer Shipment Detail is empty!";
      const postDataCustShipDet = await FX_CustomerShipmentDetail.bulkCreate(dataCustShipmDetail);
      if(!postDataCustShipDet) return console.log("Failed to insert Customer Shipment Detail data!");
      return console.log("Success Post Data of Customer Shipment Detail!");
  } catch(err){
    return console.log(err)
  }
}

export async function cronCustomerOrderDetail(){
  try{
    const dropCustOrderDet = await FX_CustomerOrderDetail.truncate();
    const dataCustOrderDetail = await dbFXMain.query(queryGetFXCustOrderDetail, {type: QueryTypes.SELECT});
    const postDataCustOrderDetail = await FX_CustomerOrderDetail.bulkCreate(dataCustOrderDetail);
    return console.log("Action: Insert, Status: Success, Table: Customer Order Detail");
  } catch(err){
    return console.log(err);
  }
}

export async function cronGINDetail(){
  try{
    const dataGINDetail = await dbFXMain.query(queryGetFXGINDetail, {type: QueryTypes.SELECT});
    if(!dataGINDetail || dataGINDetail.length === 0) return "Data GIN Detail is empty!";
      const postDataGINDetail = await FX_GINDetail.bulkCreate(dataGINDetail);
      if(!postDataGINDetail) return console.log("Action: Insert, Status: Failed, Table: Customer Order Detail");
      return console.log("Action: Insert, Status: Success, Table: GIN Detail");
  } catch(err){
    return console.log(err);
  }
}