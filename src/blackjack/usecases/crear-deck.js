import _ from "underscore";

/**
 * Crea un nuevo deck
 * @param {string[]} tiposDeCarta
 * @param {string[]} tiposEspeciales
 * @returns {string[]} el nuevo deck
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta || tiposDeCarta.length == 0)
    throw new Error("Tipos de carta es un array de string");
  if (!tiposEspeciales || tiposEspeciales.length == 0)
    throw new Error("Tipos especiales es un array de string");

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);
  return deck;
};
