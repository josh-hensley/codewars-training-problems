function SeriesSum(n) {
    let sum = 0;
    for (i = 1; n > 0; i += 3, n--) {
      sum += (1/i);
    }
    return sum.toFixed(2);
  }