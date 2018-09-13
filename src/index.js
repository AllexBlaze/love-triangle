/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let length = preferences.length;
  let SpichCounter = 0;

  for (let i = 0; i < length; i++) {
    if(preferences[i] == i+1) continue;
    if(preferences[preferences[preferences[i] - 1] - 1] === i + 1) SpichCounter++;
  }
  return SpichCounter / 3;
};
