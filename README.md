# Knights Travails

## Problem Statement
Given the starting and ending coordinates of the knight's journey, the algorithm calculates the shortest path while adhering to the movement rules of a knight in chess. The knight's basic move involves two steps forward and one step to the side, or one step forward and two steps to the side. The algorithm aims to output a list of lists containing the squares the knight will stop on along the shortest route.

![Knight's Travails board](images/knights_travails_board.gif)

## Rules and Considerations
 - The knight's moves must remain within the boundaries of the 8x8 chessboard.
 - The function should consider all possible moves from each square and determine the shortest path to reach the destination square.
 - Multiple fastest paths may exist, and any valid path adhering to the rules and providing the shortest possible route is acceptable.

## Algorithm Selection
Given the nature of the problem, where the shortest path on a graph needs to be found, an appropriate choice for the algorithm would be Breadth-First Search (BFS). BFS ensures optimal pathfinding and handles potentially infinite series of moves efficiently.
