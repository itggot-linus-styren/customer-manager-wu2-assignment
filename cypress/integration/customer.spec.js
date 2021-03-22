describe('Assignment tests', () => {

  describe('existing functionality works', () => {
    before(() => {
      cy.visit('http://localhost:8080', {
        onBeforeLoad: function (window) {
          window.localStorage.setItem('customers', "[]")
        }
      })
    })

    beforeEach(() => {
      cy.restoreLocalStorage()
    });

    afterEach(() => {
      cy.saveLocalStorage()
    });

    it('can navigate to new page', () => {
      cy.get('[data-cy=create]').click()
      cy.get('button[type="submit"]').should('be.visible')
    })

    it('can create new customer', () => {
      cy.get('[data-cy="form"] input').each(($el, index) => {
        cy.wrap($el).type(`test${index}`)
      })
      cy.get('button[type="submit"]').click().then(() => {
        expect(JSON.parse(localStorage.getItem("customers")).length).to.equal(1)
      })
    })

    it('saves basic customer information', () => {
      expect(JSON.parse(window.localStorage.getItem("customers"))[0].firstname).to.match(/test\d+/)
      expect(JSON.parse(window.localStorage.getItem("customers"))[0].lastname).to.not.equal(/test\d+/)
      expect(JSON.parse(window.localStorage.getItem("customers"))[0].email).to.not.equal(/test\d+/)
    })

    it('shows new customer on home page', () => {
      cy.get('[href="/"]').click()
      cy.contains(JSON.parse(window.localStorage.getItem("customers"))[0].firstname)
      cy.contains(JSON.parse(window.localStorage.getItem("customers"))[0].lastname)
      cy.contains(JSON.parse(window.localStorage.getItem("customers"))[0].email)
    })

    it('shows customer page', () => {
      cy.get('.home [href^="/customers"]').click();
      cy.get('[data-cy="form"] input').each(($el, index) => {
        cy.wrap($el).then($input => {
          expect($input.val()).to.match(/test\d+/)
        })
      })
    })

  })

  describe('delete functionality works', () => {
    before(() => {
      cy.visit('http://localhost:8080')
    })

    it('can delete customer', () => {
      cy.get('[data-cy=create]').click()
      cy.get('[data-cy="form"] input').each(($el, index) => {
        cy.wrap($el).type(`test${index}`)
      })
      cy.get('button[type="submit"]').click().then(() => {
        expect(JSON.parse(localStorage.getItem("customers")).length).to.equal(1)
      })
      cy.get('[href="/"]').click()
      cy.get('.home [href^="/customers"]').click();
      cy.get('[data-cy="del"]').click().then(() => {
        expect(JSON.parse(localStorage.getItem("customers")).length).to.equal(0)
      })
    })

  })

  describe('edit functionality works', () => {
    before(() => {
      cy.visit('http://localhost:8080')
    })

    it('can edit customer', () => {
      cy.get('[data-cy=create]').click()
      cy.get('[data-cy="form"] input').each(($el, index) => {
        cy.wrap($el).type(`test${index}`)
      })
      cy.get('button[type="submit"]').click()
      cy.get('[href="/"]').click()
      cy.get('.home [href^="/customers"]').click();

      cy.get('[data-cy="edit"]').click()
      cy.get('[data-cy="form"] input').each(($el, index) => {
        cy.wrap($el).clear()
        cy.wrap($el).type(`test${index + 1}`)
      })      
      cy.get('button[type="submit"]').click().then(() => {
        cy.get('[href="/"]').click()
        cy.contains('test0').should('not.exist')
      })
    })

  })

  describe('search functionality works', () => {
    before(() => {
      cy.visit('http://localhost:8080')
    })

    it('shows customers matching "test"', () => {
      cy.get('[data-cy=create]').click()
      cy.get('[data-cy="form"] input').each(($el, index) => {
        cy.wrap($el).type(`test${index}`)
      })
      cy.get('button[type="submit"]').click()
      cy.get('[href="/"]').click()

      cy.get('[data-cy=search]').type("test")

      cy.contains('test0')
    })

    it('hides customers not matching "grillkorv"', () => {
      cy.get('[data-cy=create]').click()
      cy.get('[data-cy="form"] input').each(($el, index) => {
        cy.wrap($el).type(`test${index}`)
      })
      cy.get('button[type="submit"]').click()
      cy.get('[href="/"]').click()

      cy.get('[data-cy=search]').type("grillkorv")

      cy.contains('test0').should('not.be.visible')
    })

  })

})
