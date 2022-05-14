describe('Home Page', () => {
  it('Should have the application title', () => {
    cy.visit('/');
    cy.get('[aria-label="my-quizz-brand"]').contains('MyQuizz');
  });
});
