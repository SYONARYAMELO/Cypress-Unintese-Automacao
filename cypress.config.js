const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter:'mochawesome', // Define Mochawesome como gerador de relatório
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome-report', // Pasta onde os relatórios serão salvos
    overwrite: true,
    html: true,
    json: true,
    timestamp: 'mmddyyyy_HHMMss',
    embeddedScreenshots: true, // ✅ Permite anexar screenshots no relatório
    inlineAssets: true, // ✅ Inclui imagens diretamente no HTML para fácil visualização
  },

  chromeWebSecurity:false,
  e2e: {
    setupNodeEvents(on, config) {
      // Implementação de eventos do Node aqui, se necessário
    },
  }
});
