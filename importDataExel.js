const XLSX = require("xlsx");

function leerEXEL(ruta) {
  const workbook = XLSX.readFile(ruta);
  const workbookSheets = workbook.SheetNames;

  const sheet = workbookSheets[0];
  const dataExel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
  //cada fila es un objeto de dataExel
  console.log(dataExel[0]);
  return dataExel;
}

leerEXEL("tratamientos.xlsx");
