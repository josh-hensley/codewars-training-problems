function findNb(m) {
    let n = 1;
    let testVol = 0;
    while (testVol <= m){
      testVol += Math.pow(n, 3);
      if (testVol == m){
        return n;
      }
      n++;
    }
    return -1
  }