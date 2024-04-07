

/**
 * retorna el valor de una carta
 * @param {string} carta 
 * @returns {number} el valor de una carta
 */
export const valorCarta = ( carta ) => {

  if ( !carta ) throw new Error('Se debe pasar una carta');
 
  const valor = carta.substring(0, carta.length - 1);
  return ( isNaN( valor ) ) ? 
          ( valor === 'A' ) ? 11 : 10
          : valor * 1;
}
