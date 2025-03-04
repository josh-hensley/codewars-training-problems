/*
        Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

        Assumptions:
        A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
        Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
        Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
        Matches should be case-insensitive, and the words in the result should be lowercased.
        Ties may be broken arbitrarily.
        If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
        Examples:
        "In a village of La Mancha, the name of which I have no desire to call to
        mind, there lived not long since one of those gentlemen that keep a lance
        in the lance-rack, an old buckler, a lean hack, and a greyhound for
        coursing. An olla of rather more beef than mutton, a salad on most
        nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
        on Sundays, made away with three-quarters of his income."

        --> ["a", "of", "on"]


        "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"

        --> ["e", "ddd", "aa"]


        "  //wont won't won't"

        --> ["won't", "wont"]
        Bonus points (not really, but just for fun):
        Avoid creating an array whose memory footprint is roughly as big as the input text.
        Avoid sorting the entire array of unique words.
*/

function topThreeWords(text) {
    const words = text.split(' ').map(word=>word.replace(/[^A-Za-z0-9]*/, "").toLowerCase());
    const uniqueWords = {};
    for (const word of words){
      if (uniqueWords[word]){
        uniqueWords[word] += 1;
      }
      else {
        uniqueWords[word] = 1;
      }
    }
    const sortedWords = Object.fromEntries(Object.entries(uniqueWords).sort(([, a], [, b])=>b-a))
    console.log(sortedWords);
    const topThree = []
    for (word in sortedWords){
      topThree.length < 3 && word && topThree.push(word);
    }
    return topThree;
  }

/*
        Write a method that takes a field for well-known board game "Battleship" as an argument and returns true if it has a valid disposition of ships, false otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

        Battleship (also Battleships or Sea Battle) is a guessing game for two players. Each player has a 10x10 grid containing several "ships" and objective is to destroy enemy's forces by targetting individual cells on his field. The ship occupies one or more cells in the grid. Size and number of ships may differ from version to version. In this kata we will use Soviet/Russian version of the game.


        Before the game begins, players set up the board and place the ships accordingly to the following rules:
        There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). Any additional ships are not allowed, as well as missing ships.
        Each ship must be a straight line, except for submarines, which are just single cell.

        The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.

        This is all you need to solve this kata. If you're interested in more information about the game, visit this link.
*/

function validateBattlefield(field) {
    let battleships = 0;
    if (field.map(row=>row.reduce((prev,curr) => prev += curr, 0)).reduce((prev, curr) => prev += curr, 0) != 20) {
      return false;
    }
    for (let y = 0; y < field.length; y++){
      for (let x = 0; x < field[y].length; x++){
        if (field[y][x] && (field[y+1][x+1] || y > 0 ? field[y-1][x+1] : false || x > 0 && y > 0 ? field[y-1][x-1] : false)){
          return false;
        }
        else if (field[y][x] && field[y][x+1]){
          if (field[y+1][x] || y > 0 ? field[y-1][x] : false){
            return false;
          }
        }
        if (field[y][x] && field[y+1][x] && field[y+2][x] && field[y+3][x]){
          battleships += 1;
        }
        if (battleships > 1){
          return false;
        }
      }
    }
    return true;
}  //  Redo this one later!!!!