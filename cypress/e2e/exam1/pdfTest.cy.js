/// <reference types = "cypress"/>

describe('PDF Text Comparison', () => {
  it('should assert true if the texts of two PDF files are the same', () => {
    cy.task('getPdfContent', 'equal1.pdf').then(({ text: firstPdfText }) => {
      cy.task('getPdfContent', 'equal2.pdf').then(({ text: secondPdfText }) => {
        expect(firstPdfText).to.equal(secondPdfText);
      });
    });
  });

  it('should assert false if the texts of two PDF files are not the same', () => {
    cy.task('getPdfContent', 'equal1.pdf').then(({ text: firstPdfText }) => {
      cy.task('getPdfContent', 'not equal.pdf').then(
        ({ text: secondPdfText }) => {
          expect(firstPdfText).not.to.equal(secondPdfText);
        }
      );
    });
  });
});
