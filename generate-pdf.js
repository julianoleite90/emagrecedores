const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generatePDF() {
  console.log('🚀 Iniciando geração do PDF...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Configurar viewport para desktop
  await page.setViewport({
    width: 1200,
    height: 800,
    deviceScaleFactor: 1,
  });
  
  try {
    console.log('📄 Acessando o site local...');
    
    // Aguardar a página carregar completamente
    await page.goto('http://localhost:3002', {
      waitUntil: ['networkidle0', 'domcontentloaded'],
      timeout: 30000
    });
    
    // Aguardar um pouco mais para garantir que tudo carregou
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    console.log('🖨️ Gerando PDF...');
    
    const pdfPath = path.join(__dirname, 'site-analise-emagrecedores.pdf');
    
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20px',
        bottom: '20px',
        left: '20px',
        right: '20px'
      },
      preferCSSPageSize: true
    });
    
    console.log(`✅ PDF gerado com sucesso: ${pdfPath}`);
    
  } catch (error) {
    console.error('❌ Erro ao gerar PDF:', error);
  } finally {
    await browser.close();
  }
}

// Executar a função
generatePDF(); 