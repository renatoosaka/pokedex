describe('Pokemon List', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3000/api/pokemon?limit=20&offset=0', {
      statusCode: 200,
      body: {
        total: 1302,
        next: 'http://localhost:3000/pokemon?limit=20&offset=20',
        data: [
          {
            id: 21,
            name: 'spearow',
            height: 3,
            weight: 20,
            image:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png',
          },
          {
            id: 22,
            name: 'fearow',
            height: 12,
            weight: 380,
            image:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png',
          },
          {
            id: 23,
            name: 'ekans',
            height: 20,
            weight: 69,
            image:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png',
          },
          {
            id: 24,
            name: 'arbok',
            height: 35,
            weight: 650,
            image:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png',
          },
          {
            id: 25,
            name: 'pikachu',
            height: 4,
            weight: 60,
            image:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
          },
          {
            id: 26,
            name: 'raichu',
            height: 8,
            weight: 300,
            image:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png',
          },
          {
            id: 27,
            name: 'sandshrew',
            height: 6,
            weight: 120,
            image:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png',
          },
          {
            id: 28,
            name: 'sandslash',
            height: 10,
            weight: 295,
            image:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png',
          },
          {
            id: 29,
            name: 'nidoran-f',
            height: 4,
            weight: 70,
            image:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png',
          },
          {
            id: 30,
            name: 'nidorina',
            height: 8,
            weight: 200,
            image:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png',
          },
          {
            id: 31,
            name: 'nidoqueen',
            height: 13,
            weight: 600,
            image:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png',
          },
          {
            id: 32,
            name: 'nidoran-m',
            height: 5,
            weight: 90,
            image:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png',
          },
          {
            id: 33,
            name: 'nidorino',
            height: 9,
            weight: 195,
            image:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png',
          },
          {
            id: 34,
            name: 'nidoking',
            height: 14,
            weight: 620,
            image:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png',
          },
          {
            id: 35,
            name: 'clefairy',
            height: 6,
            weight: 75,
            image:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png',
          },
          {
            id: 36,
            name: 'clefable',
            height: 13,
            weight: 400,
            image:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png',
          },
          {
            id: 37,
            name: 'vulpix',
            height: 6,
            weight: 99,
            image:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png',
          },
          {
            id: 38,
            name: 'ninetales',
            height: 11,
            weight: 199,
            image:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png',
          },
          {
            id: 39,
            name: 'jigglypuff',
            height: 5,
            weight: 55,
            image:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png',
          },
          {
            id: 40,
            name: 'wigglytuff',
            height: 10,
            weight: 120,
            image:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png',
          },
        ],
      },
    }).as('getPokemons');
  });

  it('should display a list of pokemons', () => {
    cy.visit('/');

    cy.wait('@getPokemons');

    cy.get('.pokemon-item').should('have.length', 20);
    cy.contains('Spearow').should('exist');
    cy.contains('Fearow').should('exist');
  });
});
