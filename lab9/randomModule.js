function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
function getRandomIntegersArray(length, min, max) {
    const randomIntegersArray = [];
    for (let i = 0; i < length; i++) {
      randomIntegersArray.push(getRandomInt(min, max));
    }
    return randomIntegersArray;
}
  
function getRandomTextFragment(textFragments) {
    const randomIndex = getRandomInt(0, textFragments.length - 1);
    return textFragments[randomIndex];
}

module.exports = {
    getRandomInt,
    getRandomIntegersArray,
    getRandomTextFragment,
  };