export const queryGetFinishProd = `SELECT * FROM FinishingProdDetail a WHERE a.PostedDate = DATE_SUB(CURDATE(), INTERVAL 1 DAY)`;

export const queryGetFXFinishProd = `SELECT * FROM FinishingProdDetail a WHERE a.PostedDate < DATEADD(DAY,-1,GETDATE()) ORDER BY a.PostedDate DESC`;