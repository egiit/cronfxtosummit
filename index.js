import express from "express";
import dotenv from "dotenv";
import { dbFXMain, dbSummitMain } from "./config/database.js";
import { cronBOMSourcingDetail, cronCustomerOrderDetail, cronCustomerShipmentDetail, cronFsProdDetail, cronGINDetail, cronGRNDetail, cronLTNListing, cronMRPListing, cronMRRListing, cronMRSListing, cronMRVListing, cronMSDListing } from "./cronjob/controlCronGet.js";
import cron from "node-cron";

dotenv.config();

const PORT = 5112;
const app = express();

app.listen(PORT, () => console.log(`Server Runing On port : ${PORT}`));

const runDb = async () => {
  try {
    await dbSummitMain.authenticate();
    console.log("Summit DB Connected");
    await dbFXMain.authenticate();
    console.log("FX DB Connected");
  } catch (err) {
    console.log("Unable to connect to the database:", err);
  }
};
runDb();


cron.schedule("0 3 * * *", () => {
  cronGRNDetail();
  cronGINDetail();
  cronMRSListing();
  cronMRVListing();
  cronMRRListing();
  cronLTNListing();
  cronMSDListing();
  cronFsProdDetail();
  cronCustomerShipmentDetail();
});
