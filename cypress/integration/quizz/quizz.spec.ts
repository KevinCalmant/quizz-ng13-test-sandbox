describe('Quizz', () => {
  it('Should have loading alert when waiting for data', () => {
    cy.get('div[role="alert"]').contains('Chargement...');
  });
});
