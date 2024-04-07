/**
 * Esta función me permite tomar una carta
 * @param {string[]} deck baraja de cartas
 * @returns {string} la carta extraida
 */
export const pedirCarta = (deck) => {
  
  if (!deck || deck.length === 0) throw new Error("No hay cartas en el deck");

  const carta = deck.pop();
  return carta;
};
