describe('Home Page', () => {
  it('Should have the application title', () => {
    cy.visit('/');
    cy.get('[aria-label="my-quizz-brand"]').contains('MyQuizz');
  });

  it('Should start on quizzs page', () => {
    cy.location().should((location) =>
      expect(location.pathname.toString()).contain('/quizz')
    );
  });

  it('Should navigate to quizz page when click on Quizz List menu item', () => {
    cy.get('a[aria-label="quizz-list-menu"').click();
    cy.location().should((location) =>
      expect(location.pathname.toString()).contain('/quizz')
    );
  });
});
