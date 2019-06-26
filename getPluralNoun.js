const getPluralNoun = (count, nounArr) => {
  let absCount = Math.abs(count);
  absCount %= 100;

  if (absCount >= 5 && absCount <= 20) {
    return nounArr[2];
  }
  absCount %= 10;
  if (absCount === 1) {
    return nounArr[0];
  }
  if (absCount >= 2 && absCount <= 4) {
    return nounArr[1];
  }
  return nounArr[2];
};

export default getPluralNoun;
