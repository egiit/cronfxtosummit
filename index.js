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

cron.schedule("0 4 * * *", () => {
  cronCustomerOrderDetail();
  console.log("Synchronize Data Customer Order Detail...");
});

cron.schedule("10 4 * * *", () => {
  cronFsProdDetail();
  console.log("Synchronize Data Finishing Production Detail");
});

cron.schedule("20 4 * * *", () => {
  cronCustomerShipmentDetail();  
  console.log("Synchronize Data Customer Shipment Detail");
});

cron.schedule("30 4 * * *", () => {
  cronGRNDetail();
  console.log("Synchronize Data GRN Detail");
});

cron.schedule("40 4 * * *", () => {
  cronGINDetail();
  console.log("Synchronize Data GRN Detail");
});

cron.schedule("50 4 * * *", () => {
  cronBOMSourcingDetail();
  console.log("Synchronize Data BOM Sourcing Detail");
});

cron.schedule("0 5 * * *", () => {
  cronLTNListing();
  console.log("Synchronize Data LTN Listing Detail");
});

cron.schedule("10 5 * * *", () => {
  cronLTNListing();
  console.log("Synchronize Data LTN Listing Detail");
});

cron.schedule("20 5 * * *", () => {
  cronMRPListing();
  console.log("Synchronize Data MRP Listing Detail");
});

cron.schedule("30 5 * * *", () => {
  cronMRRListing();
  console.log("Synchronize Data MRR Listing Detail");
});

cron.schedule("40 5 * * *", () => {
  cronMRSListing();
  console.log("Synchronize Data MRS Listing Detail");
});

cron.schedule("50 5 * * *", () => {
  cronMRVListing();
  console.log("Synchronize Data MRV Listing Detail");
});

cron.schedule("60 5 * * *", () => {
  cronMSDListing();
  console.log("Synchronize Data MSD Listing Detail");
});


app.listen(PORT, () => console.log(`Server Runing On port : ${PORT}`));
