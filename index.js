import express from "express";
import dotenv from "dotenv";
import { dbAudit, dbFXMain, dbSummitMain } from "./config/database.js";
import { cronBOMSourcingDetail, cronCustomerOrderDetail, cronCustomerShipmentDetail, cronFsProdDetail, cronGINDetail, cronGRNDetail, cronLTNListing, cronMRPListing, cronMRRListing, cronMRSListing, cronMRVListing, cronMSDListing } from "./cronjob/controlCronGet.js";
import cron from "node-cron";

dotenv.config();

const PORT = 5112;
const app = express();

const runDb = async () => {
  try {
    await dbAudit.authenticate();
    await dbSummitMain.authenticate();
    console.log("Summit DB Connected");
    await dbFXMain.authenticate();
    console.log("FX DB Connected");
  } catch (err) {
    console.log("Unable to connect to the database:", err);
  }
};
runDb();

cron.schedule(" 0 4 * * *", () => {
  console.log("Synchronize Data CustomerOrderDetail");
  cronCustomerOrderDetail();
});

cron.schedule(" 20 4 * * *", () => {
  console.log("running get data");
  cronFsProdDetail();
  cronCustomerShipmentDetail();
  cronGRNDetail();
  cronGINDetail();
  cronBOMSourcingDetail();
  cronLTNListing();
  cronMRPListing();
  cronMRRListing();
  cronMRSListing();
  cronMRVListing();
  cronMSDListing();
});


app.listen(PORT, () => console.log(`Server Runing On port : ${PORT}`));
