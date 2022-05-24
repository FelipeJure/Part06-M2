const { INCREMENTO, DECREMENTO, INCREMENTO_IMPAR, INCREMENTO_ASINC } = require('../action-types');

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

const incremento = function (){
  return {type: INCREMENTO}
}

const decremento = function () {
  return {type: DECREMENTO}
}

const incrementoAsinc = function (){
  return { type: INCREMENTO_ASINC}
}

const incrementoImpar = function(){
  return { type: INCREMENTO_IMPAR}
}

module.exports = {
  incremento,
  decremento,
  incrementoImpar,
  incrementoAsinc
}