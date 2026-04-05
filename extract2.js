const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');
const mammoth = require('mammoth');
const pdfParse = require('pdf-parse');

async function extractFiles() {
  const rootDir = "c:\\Users\\vendas.online\\OneDrive - Industria E Comercio De Chopeiras Ribeirao Preto Ltda\\Área de Trabalho\\site meu";
  const extractedData = {};

  try {
    // 1. Extract Docx
    const docxPath = path.join(rootDir, "Untitled document.docx");
    if (fs.existsSync(docxPath)) {
      console.log(`Extracting: ${docxPath}`);
      const result = await mammoth.extractRawText({ path: docxPath });
      extractedData['docx'] = result.value;
    } else {
      console.error(`Not found: ${docxPath}`);
    }

    // 2. Extract Excel
    const excelPath = path.join(rootDir, "projetos", "Marketplace_Ecosystem_meu.xlsx");
    if (fs.existsSync(excelPath)) {
      console.log(`Extracting: ${excelPath}`);
      const workbook = xlsx.readFile(excelPath);
      extractedData['excel'] = {};
      workbook.SheetNames.forEach(sheet => {
        extractedData['excel'][sheet] = xlsx.utils.sheet_to_json(workbook.Sheets[sheet]);
      });
    } else {
       console.error(`Not found: ${excelPath}`);
    }

    const pdfsToRead = [
      "Projetos e priorização (8).pdf",
      "Projetos e priorização (5).pdf",
      "Projetos e priorização (10).pdf",
      "Projetos e priorização (9).pdf",
      "Escalada - Marketplace (2).pdf",
      "Escalada - Marketplace (1).pdf",
      "projetos\\Presentation - Ecossistema Digital Studio Lilyan.pdf"
    ];

    extractedData['pdfs'] = {};
    for (const p of pdfsToRead) {
      const fullPath = path.join(rootDir, p);
      if (fs.existsSync(fullPath)) {
        console.log(`Extracting PDF: ${fullPath}`);
        try {
          const dataBuffer = fs.readFileSync(fullPath);
          const parsed = await pdfParse(dataBuffer);
          extractedData['pdfs'][p] = parsed.text;
        } catch (err) {
          console.error(`Failed to parse ${p}: ${err.message}`);
        }
      } else {
        console.error(`Not found: ${fullPath}`);
      }
    }

    fs.writeFileSync('extracted_final.json', JSON.stringify(extractedData, null, 2));
    console.log("Extraction complete: extracted_final.json created.");
  } catch (err) {
    console.error("Critical error during extraction:", err);
  }
}

extractFiles();
