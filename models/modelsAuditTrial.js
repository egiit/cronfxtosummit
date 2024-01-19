export const queryGetFinishProd = `SELECT * FROM FinishingProdDetail a WHERE a.PostedDate = DATE_SUB(CURDATE(), INTERVAL 1 DAY)`;

export const queryGetFXFinishProd = `SELECT * FROM FinishingProdDetail a WHERE a.PostedDate = DATEADD(DAY,-1,GETDATE())`;

export const queryGetFXGRNDetail = `SELECT * FROM GRNDetail a WHERE YEAR(a.PostedDate)='2024' AND a.PostedDate  = DATEADD(DAY,-1,GETDATE()) `;

export const queryGetFXCustomerShipmentDetail = `SELECT * FROM CustomerShipmentDetail WHERE ApprovedDate = DATEADD(DAY,-1,GETDATE()) `;

export const queryGetFXCustOrderDetail = `SELECT * FROM CustomerOrderDetail`;

export const queryGetFXGINDetail = `SELECT * FROM GINDetail WHERE PostedDate = DATEADD(DAY,-1,GETDATE()) `;

export const queryGetBOMSourcingDetail = `SELECT * FROM BOMSourcingDetail WHERE (CreatedDate = DATEADD(DAY,-1,GETDATE())) OR (ModifiedDate  < DATEADD(DAY,-1,GETDATE()))`;