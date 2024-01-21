export const queryGetFinishProd = `SELECT * FROM FinishingProdDetail a WHERE a.PostedDate = DATE_SUB(CURDATE(), INTERVAL 1 DAY)`;

export const queryGetFXFinishProd = `SELECT * FROM FinishingProdDetail a WHERE a.PostedDate = DATEADD(DAY,-1,GETDATE())`;

export const queryGetFXGRNDetail = `SELECT * FROM GRNDetail a WHERE YEAR(a.PostedDate)='2024' AND a.PostedDate  = DATEADD(DAY,-1,GETDATE()) `;

export const queryGetFXCustomerShipmentDetail = `SELECT * FROM CustomerShipmentDetail WHERE ApprovedDate = DATEADD(DAY,-1,GETDATE()) `;

export const queryGetFXCustOrderDetail = `SELECT * FROM CustomerOrderDetail`;

export const queryGetFXGINDetail = `SELECT * FROM GINDetail WHERE PostedDate = DATEADD(DAY,-1,GETDATE()) `;

export const queryGetBOMSourcingDetail = `SELECT * FROM BOMSourcingDetail WHERE (CreatedDate = DATEADD(DAY,-1,GETDATE())) OR (ModifiedDate  < DATEADD(DAY,-1,GETDATE()))`;

export const queryGetLTNListing = `SELECT * FROM LTNListing WHERE CONVERT(DATE, CreatedDate) = DATEADD(DAY,-1,GETDATE()) `;

export const queryGetMRPListing = `SELECT * FROM MRPListing_MRPDetail WHERE CONVERT(DATE, MOCreatedDate,) = DATEADD(DAY,-1,GETDATE()) `;

export const queryGetMRRListing = `SELECT * FROM MRRListing WHERE CONVERT(DATE, PostedDate) = DATEADD(DAY,-1,GETDATE()) `;

export const queryGetMRSListing = `SELECT * FROM MRSListing WHERE CONVERT(DATE, CreatedDate) = DATEADD(DAY,-1,GETDATE()) `;

export const queryGetMRVListing = `SELECT * FROM MRVListing WHERE CONVERT(DATE, CreatedDate) = DATEADD(DAY,-1,GETDATE()) `;

export const queryGetMSDListing = `SELECT * FROM MSDListing WHERE CONVERT(DATE, StatusDate) = DATEADD(DAY,-1,GETDATE()) `;