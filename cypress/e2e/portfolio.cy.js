/* eslint-disable no-undef */
describe('Portfolio E2E - Test Senaryoları', () => {
  
  beforeEach(() => {
    cy.intercept('POST', 'https://reqres.in/api/workintech').as('getProjects');
    cy.intercept('POST', 'https://reqres.in/api/users').as('postHireLog');
    cy.visit('http://localhost:5173'); 
  });

  it('1. [API & Asenkron] Projeler API yüklenişini, loading state i ve kartları doğrular', () => {
    cy.get('[data-cy="projects-loading"]')
      .should('be.visible')
      .and('contain', 'Sunucudan Yükleniyor');

    cy.wait('@getProjects').then((interception) => {
      expect(interception.response.statusCode).to.be.oneOf([200, 201]);
      
      expect(interception.response.body).to.not.be.empty;
    });

    cy.get('[data-cy="projects-loading"]').should('not.exist');
    cy.get('[data-cy="projects-grid"]').should('be.visible');

    cy.get('[data-cy="project-card"]').should('have.length.at.least', 1);
  });

  it('2. [Etkileşim & Log] Hire Me butonuna basınca API ye log gitmeli ve Toast bildirimi açılmalı', () => {
    cy.get('[data-cy="hero-hire-btn"]').click();
    cy.wait('@postHireLog').then((interception) => {
      expect(interception.response.statusCode).to.eq(201);
      expect(interception.request.body).to.have.property('action', 'Hire Me Button Clicked');
    });

    cy.get('#contact').should('be.visible');

    cy.contains('E-posta otomatik kopyalandı! Hızlıca teklif göndermek ister misin?', { timeout: 4000 })
      .should('be.visible');
      
    cy.contains('a', 'Gmail')
      .should('have.attr', 'href')
      .and('include', 'mail.google.com');
  });

  it('3. [State Yönetimi] Dil (TR/EN) ve Tema (Dark/Light) anahtarları kusursuz çalışmalı', () => {
    
    cy.get('[data-cy="lang-toggle"]').click();
    cy.contains('Yaratıcı düşünür').should('be.visible');
    cy.get('[data-cy="lang-toggle"]').should('contain', 'ENGLISH');

    cy.get('html').invoke('attr', 'class').then((classes) => {
      const isDark = classes && classes.includes('dark');
      cy.get('[data-cy="theme-toggle"]').click({ force: true });
      
      if (isDark) {
        cy.get('html').should('not.have.class', 'dark');
      } else {
        cy.get('html').should('have.class', 'dark');
      }
    });
  });

  it('4. [Kullanıcı Deneyimi] Footer daki e-posta adresine tıklayınca kopyalama toast ı çıkmalı', () => {
    cy.get('[data-cy="email-copy-btn"]').click();
    cy.contains('E-posta adresi panoya kopyalandı! 📋').should('be.visible');
  });

});