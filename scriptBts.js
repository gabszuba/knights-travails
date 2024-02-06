//coordinates (x, y)
const moves = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
];

const KnightsTravails = () => {
  //Avoid moves to go off the board.
  const isValid = (x, y) => {
    return 0 <= x && x < 8 && 0 <= y && y < 8;
  };

  const backtrack = (src, dest, prev) => {
    const path = [];

    for (at = dest; path[path.length - 1] !== src; at = prev[at]) {
      path.push(at);
    }

    return path;
  };

  const knightMoves = (src, dest) => {
    const queue = [src];

    if (src[0] === dest[0] && src[1] === dest[1]) {
      return [];
    }

    let seen = new Set();
    seen.add(src.toString()); // Store the initial position as a string in the set
    prev = {};

    while (queue.length > 0) {
      let currentSrc = queue.shift(); // Remove the first element from the queue

      for (let move of moves) {
        let newSrc = [currentSrc[0] + move[0], currentSrc[1] + move[1]];
        let newPosition = newSrc.toString();

        if (isValid(newSrc[0], newSrc[1]) && !seen.has(newPosition)) {
          // Add the valid and unseen position to the queue
          queue.push(newSrc);
          seen.add(newPosition);
          prev[newSrc] = currentSrc;

          // Check if the new position is the destination
          if (newSrc[0] === dest[0] && newSrc[1] === dest[1]) {
            return backtrack(src, dest, prev);
          }
        }
      }
    }
  };

  return {
    knightMoves,
  };
};

const kt = KnightsTravails();
const result = (kt.knightMoves([3, 3], [7, 7]));
console.log(`=> You made it in ${result.length} moves! Here's your path:`)
result.forEach(move => {
  console.log(move)
});