/*
 * @lc app=leetcode id=424 lang=javascript
 *
 * [424] Longest Repeating Character Replacement
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement2 = function (s, k) {
  let res = 0;
  let hashMap = {};
  let leftPointer = 0;

  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    // largo de la ventana actual
    // ambos comienzan en 0 entonces agrego 1
    let currentWindowLength = rightPointer - leftPointer + 1;
    // agrego la primera letra al mapa y cuento la frecuencia
    hashMap[s[rightPointer]] = (hashMap[s[rightPointer]] ?? 0) + 1;

    // tomo cual de mis letras tiene la frecuencia mas alta
    // y lo resto a la longitud de mi ventana.
    // Si es mayor a k, significa que tengo que cambiar mas k elementos
    // entonces muevo el inicio de mi ventana
    // y decremento el caracter que se encuentra en ese puntero
    if (currentWindowLength - Math.max(...Object.values(hashMap)) > k) {
      hashMap[s[leftPointer]] -= 1;
      leftPointer += 1;
    }
    // recalculo el largo de mi ventana ya que
    // l pudo haber cambiado
    currentWindowLength = rightPointer - leftPointer + 1;
    // calculo el largo maximo
    res = Math.max(res, currentWindowLength);
  }
  return res;
};

var characterReplacement = function (s, k) {
  let res = 0;
  let hashMap = {};
  let l = 0;

  for (let r = 0; r < s.length; r++) {
    // calculo mi ventana
    // agrego uno porque sino la ventana seria
    // 0 y al menos hay un caracter
    let currentWindowLength = r - l + 1;

    // agrego mi letra al hashMap
    // definda por el puntero r
    hashMap[s[r]] = (hashMap[s[r]] ?? 0) + 1;

    // si en mi ventana actual, el caracter con mas ocurrencias
    // menos el largo es mayor a k
    // quiere decir que tengo que cambiar mas que k caracteres
    // por ende no cumplo la condicion del problema
    if (currentWindowLength - Math.max(...Object.values(hashMap)) > k) {
      // vamos al mover el puntero de l a la derecha
      // entonces debemos restar la letra en l
      hashMap[s[l]]--;
      l++;
    }

    // recalculamos la ventana, que pudo
    // haber cambiado si la condicion de arriba se cumplio
    // ya que cambia l
    currentWindowLength = r - l + 1;

    // calculamos el maximo
    res = Math.max(res, currentWindowLength);
  }
  return res;
};
// characterReplacement('AABABBA', 1);
// @lc code=end
