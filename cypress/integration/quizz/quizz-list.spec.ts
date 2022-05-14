import { Quizz } from '../../../src/app/quizz.model';

describe('Quizz List', () => {
  it('Should have loading alert when waiting for data', () => {
    cy.visit('/');
    cy.get('div[role="alert"]').contains('Chargement...');
  });

  it('Should show quizz list when data has arrived', () => {
    cy.intercept({
      method: 'GET',
      url: '/quizz',
    }).as('getQuizz');

    cy.wait('@getQuizz').then(({ response }) => {
      expect(response).to.not.null;
      if (response) {
        response.body.forEach((quizz: Quizz) => {
          cy.get('a[role="button"]').each((quizzLine) => {
            expect(quizzLine.text()).contains(quizz.title);
          });
        });
      }
    });
  });
});
