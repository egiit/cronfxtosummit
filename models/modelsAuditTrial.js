export const queryGetFinishProd = `SELECT * FROM FinishingProdDetail a WHERE a.PostedDate = DATE_SUB(CURDATE(), INTERVAL 1 DAY)`;
