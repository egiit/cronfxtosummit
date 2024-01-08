import { QueryTypes } from "sequelize";
import { dbAudit } from "../config/database.js";
import { queryGetFinishProd } from "../models/modelsAuditTrial.js";
import { FinishingProdDetail } from "../models/modelsMainDb.js";

export async function cronFsProdDetail() {
  try {
    const finishProdDetail = await dbAudit.query(queryGetFinishProd, {
      //   replacements: {
      //     schDate: date,
      //   },
      type: QueryTypes.SELECT,
    });

    if (!finishProdDetail || finishProdDetail.length === 0)
      return "Tidak ada data atau terdapat error saat mengambil data Finishing Prod Detail";

    const postDataFinish = await FinishingProdDetail.bulkCreate(
      finishProdDetail
    );
    if (!postDataFinish) return console.log("terdapat error saat insert data");

    return console.log("Berhasil post");
  } catch (error) {
    return console.log(error);
  }
}
