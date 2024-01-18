import { QueryTypes } from "sequelize";
import { dbAudit, dbFXMain } from "../config/database.js";
import { queryGetFXFinishProd, queryGetFinishProd } from "../models/modelsAuditTrial.js";
import { FX_FinishingProdDetail} from "../models/modelsMainDb.js";

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

    return console.log("Berhasil post");
  } catch (error) {
    return console.log(error);
  }
}
