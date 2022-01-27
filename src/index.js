module.exports = function towelSort (matrix) {
  if (!matrix) { 
    return []; 
  }else {
    return matrix.map((arr, i) => (i % 2 == 0) ? arr : arr.reverse()).flat();
  }
}
