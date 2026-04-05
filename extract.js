const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');
const pdf = require('pdf-parse');

async function extract() {
  // Read Excel
  const excelPath = path.join(__dirname, 'public', 'cases', 'Marketplace_Ecosystem_meu.xlsx');
  if (fs.existsSync(excelPath)) {
    const workbook = xlsx.readFile(excelPath);
    const excelData = {};
    workbook.SheetNames.forEach(sheet => {
      excelData[sheet] = xlsx.utils.sheet_to_json(workbook.Sheets[sheet]);
    });
    fs.writeFileSync('excel-data.json', JSON.stringify(excelData, null, 2));
    console.log('Excel extraction done.');
  }

  // Read PDFs
  const pdfDir = path.join(__dirname, 'public', 'cases');
  const files = fs.readdirSync(pdfDir).filter(f => f.endsWith('.pdf'));
  const pdfData = {};
  for (const file of files) {
    try {
      const dataBuffer = fs.readFileSync(path.join(pdfDir, file));
      const data = await pdf(dataBuffer);
      pdfData[file] = data.text;
    } catch (e) {
      console.error(`Error reading ${file}: ${e.message}`);
    }
  }
  fs.writeFileSync('pdf-data.json', JSON.stringify(pdfData, null, 2));
  console.log('PDF extraction done.');
}

extract().catch(console.error);
