/*
        Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.

        Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals:

        1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC
        2008 is written as 2000=MM, 8=VIII; or MMVIII
        1666 uses each Roman symbol in descending order: MDCLXVI.
        Input range : 1 <= n < 4000

        In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

        Examples
        to roman:
        2000 -> "MM"
        1666 -> "MDCLXVI"
        86 -> "LXXXVI"
        1 -> "I"

        from roman:
        "MM"      -> 2000
        "MDCLXVI" -> 1666
        "LXXXVI"  ->   86
        "I"       ->    1
        Help
        +--------+-------+
        | Symbol | Value |
        +--------+-------+
        |    M   |  1000 |
        |   CM   |   900 |
        |    D   |   500 |
        |   CD   |   400 |
        |    C   |   100 |
        |   XC   |    90 |
        |    L   |    50 |
        |   XL   |    40 |
        |    X   |    10 |
        |   IX   |     9 |
        |    V   |     5 |
        |   IV   |     4 |
        |    I   |     1 |
        +--------+-------+
*/

class RomanNumerals {
    static toRoman(num) {
     const symbols = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    }
      let romanNumeral = '';
      while (num > 0){
        for (const symbol in symbols){
          if (num - symbols[symbol] >= 0){
            num -= symbols[symbol];
            romanNumeral += symbol;
            break;
          }
        }
      }
      return romanNumeral;
    }
  
    static fromRoman(str) {
      const doubleSymbols = {
        CM: 900,
        CD: 400,
        XC: 90,
        XL: 40,
        IX: 9,
        IV: 4
      }
      const symbols = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
      }
      let num = 0;
      for (const symbol in doubleSymbols){
        if (str.search(symbol) != -1){
          num += doubleSymbols[symbol];
          str = str.replace(symbol, '');
        }
      }
      num += str.split('').map(symbol=>symbols[symbol]).reduce((curr, prev) => curr + prev, 0)
      return num;
    }
  }