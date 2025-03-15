function findMultiples(integer, limit) {
    let multiples = []
    for (let i = 1; i <= limit/integer; i++){
      multiples.push(i * integer)
    }
    return multiples;
  }