const { defineConfig } = require('cypress');
const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const parsePdf = async (pdfName) => {
  const pdfPathname = path.join('cypress\\e2e\\PDFs', pdfName);
  let dataBuffer = fs.readFileSync(pdfPathname);
  return await pdf(dataBuffer); // use async/await since pdf returns a promise
};

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        getPdfContent(pdfName) {
          return parsePdf(pdfName);
        },
      });
      // implement node event listeners here
    },
    testIsolation: false,
    supportFile: false,
  },
});
