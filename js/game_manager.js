function GameManager(size, InputManager, Actuator, ScoreManager) {
  this.size         = size; // Size of the grid
  this.inputManager = new InputManager;
  this.scoreManager = new ScoreManager;
  this.actuator     = new Actuator;

  this.startTiles   = 1;

  this.inputManager.on("move", this.move.bind(this));
  this.inputManager.on("restart", this.restart.bind(this));
  this.inputManager.on("keepPlaying", this.keepPlaying.bind(this));

  this.setup();
}

// Restart the game
GameManager.prototype.restart = function () {
  this.actuator.continue();
  this.setup();
};

// Keep playing after winning
GameManager.prototype.keepPlaying = function () {
  this.keepPlaying = true;
  this.actuator.continue();
};

GameManager.prototype.isGameTerminated = function () {
  if (this.over || (this.won && !this.keepPlaying)) {
    return true;
  } else {
    return false;
  }
};

// Set up the game
GameManager.prototype.setup = function () {
  this.grid        = new Grid(this.size);

  this.score       = 0;
  this.over        = false;
  this.won         = false;
  this.keepPlaying = false;

  // Add the initial tiles
  this.addStartTiles();

  // Update the actuator
  this.actuate();
};

// Set up the initial tiles to start the game with
GameManager.prototype.addStartTiles = function () {
  for (var i = 0; i < this.startTiles; i++) {
    this.addRandomTile();
  }
};

// Adds a tile in a random position
GameManager.prototype.addRandomTile = function () {
  if (this.grid.cellsAvailable()) {
    var value = Math.random() < 0.999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999 ? Math.random() < 0.999999999 ? Math.random() < 0.99999999 ? Math.random() < 0.9999999 ? Math.random() < 0.9999998 ? Math.random() < 0.999999699996999969999699 ? Math.random() < 0.9999995 ? Math.random() < 0.999999 ? Math.random() < 0.999998958333333333333333333 ? Math.random() < 0.99999888888888888888888 ? Math.random() < 0.99999884259259259259259259 ? Math.random() < 0.99999875 ? Math.random() < 0.99999869791666666666666666666 ? Math.random() < 0.999998666666666666666666 ? Math.random() < 0.9999986111111111111111111 ? Math.random() < 0.99999857142857142857142 ? Math.random() < 0.99999851851851851851851 ? Math.random() < 0.9999984375 ? Math.random() < 0.999998333333333333333333 ? Math.random() < 0.999998263888888888888888888 ? Math.random() < 0.999998046875 ? Math.random() < 0.999998 ? Math.random() < 0.99999791666666666666666666 ? Math.random() < 0.99999777777777777777777 ? Math.random() < 0.9999976851851851851851851 ? Math.random() < 0.9999975 ? Math.random() < 0.9999973958333333333333333333 ? Math.random() < 0.999997222222222222222222 ? Math.random() < 0.99999699969996999699969 ? Math.random() < 0.999996875 ? Math.random() < 0.99999666666666666666666 ? Math.random() < 0.99999652777777777777777777 ? Math.random() < 0.99999609375 ? Math.random() < 0.9999958333333333333333333 ? Math.random() < 0.99999555555555555555555 ? Math.random() < 0.999995370370370370370370 ? Math.random() < 0.999995 ? Math.random() < 0.999994791666666666666666666 ? Math.random() < 0.99999444444444444444444 ? Math.random() < 0.99999375 ? Math.random() < 0.99999333333333333333333 ? Math.random() < 0.9999930555555555555555555 ? Math.random() < 0.99999285714285714285714 ? Math.random() < 0.9999921875 ? Math.random() < 0.999991666666666666666666 ? Math.random() < 0.99999074074074074074074 ? Math.random() < 0.99999 ? Math.random() < 0.99998958333333333333333333 ? Math.random() < 0.9999894736842105263157 ? Math.random() < 0.99998809523809523809523 ? Math.random() < 0.9999876543209876543209 ? Math.random() < 0.9999875 ? Math.random() < 0.99998666666666666666666 ? Math.random() < 0.999986111111111111111111 ? Math.random() < 0.9999857142857142857142 ? Math.random() < 0.999984375 ? Math.random() < 0.99998333333333333333333 ? Math.random() < 0.999982142857142857142857 ? Math.random() < 0.9999814814814814814814 ? Math.random() < 0.99998 ? Math.random() < 0.9999791666666666666666666 ? Math.random() < 0.9999761904761904761904 ? Math.random() < 0.999975 ? Math.random() < 0.9999736842105263157894 ? Math.random() < 0.99997222222222222222222 ? Math.random() < 0.9999699699699699699699 ? Math.random() < 0.99996875 ? Math.random() < 0.9999666666666666666666 ? Math.random() < 0.99996428571428571428571 ? Math.random() < 0.9999629629629629629629 ? Math.random() < 0.99996 ? Math.random() < 0.999958333333333333333333 ? Math.random() < 0.99995 ? Math.random() < 0.9999375 ? Math.random() < 0.9999333333333333333333 ? Math.random() < 0.9999259259259259259259 ? Math.random() < 0.99991666666666666666666 ? Math.random() < 0.9999 ? Math.random() < 0.999894736842105263157 ? Math.random() < 0.999875 ? Math.random() < 0.9998666666666666666666 ? Math.random() < 0.9998333333333333333333 ? Math.random() < 0.9998 ? Math.random() < 0.999777777777777777777 ? Math.random() < 0.9997222222222222222222 ? Math.random() < 0.999666666666666666666 ? Math.random() < 0.9996 ? Math.random() < 0.9995 ? Math.random() < 0.999333333333333333333 ? 1 : 17 : 33 : 82 : 18 : 36 : 34 : 50 : 19 : 57 : 70 : 35 : 21 : 79 : 32 : 22 : 38 : 56 : 80 : Math.random() < 0.5 ? 20 : 25 : 83 : 86 : 62 : 40 : 333 : 23 : 47 : Math.random() < 0.5 ? 71 : 72 : 42 : 63 : 73 : 55 : 59 : 24 : 88 : 26 : 45 : Math.random() < 0.5 ? 76 : 77 : 52 : 27 : 84 : 89 : 90 : 91 : 28 : 29 : 39 : 74 : 64 : 75 : 78 : 87 : 58 : 92 : 43 : 81 : 30 : 67 : 68 : 93 : 31 : 3333 : 69 : 53 : 94 : 44 : 51 : 85 : 95 : 60 : 54 : 96 : 61 : 65 : 97 : 66 : 48 : 46 : 98 : 37 : 99 : 100 : -1 : 41 : 33333 : 5000 : 10000 : 0 : 101 : Math.random() < 0.5 ? 161 : 162;
    var tile = new Tile(this.grid.randomAvailableCell(), value);
    
    this.grid.insertTile(tile);
  }
};

// Sends the updated grid to the actuator
GameManager.prototype.actuate = function () {
  if (this.scoreManager.get() < this.score) {
    this.scoreManager.set(this.score);
  }

  this.actuator.actuate(this.grid, {
    score:      this.score,
    over:       this.over,
    won:        this.won,
    bestScore:  this.scoreManager.get(),
    terminated: this.isGameTerminated()
  });

};

// Save all tile positions and remove merger info
GameManager.prototype.prepareTiles = function () {
  this.grid.eachCell(function (x, y, tile) {
    if (tile) {
      tile.mergedFrom = null;
      tile.savePosition();
    }
  });
};

// Move a tile and its representation
GameManager.prototype.moveTile = function (tile, cell) {
  this.grid.cells[tile.x][tile.y] = null;
  this.grid.cells[cell.x][cell.y] = tile;
  tile.updatePosition(cell);
};

// Move tiles on the grid in the specified direction
GameManager.prototype.move = function (direction) {
  // 0: up, 1: right, 2:down, 3: left
  var self = this;

  if (this.isGameTerminated()) return; // Don't do anything if the game's over

  var cell, tile;

  var vector     = this.getVector(direction);
  var traversals = this.buildTraversals(vector);
  var moved      = false;

  // Save the current tile positions and remove merger information
  this.prepareTiles();

  // Traverse the grid in the right direction and move tiles
  traversals.x.forEach(function (x) {
    traversals.y.forEach(function (y) {
      cell = { x: x, y: y };
      tile = self.grid.cellContent(cell);

      if (tile) {
        var positions = self.findFarthestPosition(cell, vector);
        var next      = self.grid.cellContent(positions.next);

        // Only one merger per row traversal?
        if (next && next.value === tile.value && !next.mergedFrom) { 
          var merged = new Tile(positions.next, tile.value * 1);
          merged.mergedFrom = [tile, next];

          self.grid.insertTile(merged);
          self.grid.removeTile(tile);

          // Converge the two tiles' positions
          tile.updatePosition(positions.next);

          // Update the score
          self.score += 1;

          // The mighty 10 tile
          if (merged.value === 10) self.won = true;
          if (merged.value === 110) self.over = true;
        } else {
          self.moveTile(tile, positions.farthest);
        }

        if (!self.positionsEqual(cell, tile)) {
          moved = true; // The tile moved from its original cell!
        }
      }
    });
  });

  if (moved) {
    this.addRandomTile();

    if (!this.movesAvailable()) {
      this.over = true; // Game over!
    }

    this.actuate();
  }
};

// Get the vector representing the chosen direction
GameManager.prototype.getVector = function (direction) {
  // Vectors representing tile movement
  var map = {
    0: { x: 0,  y: -1 }, // up
    1: { x: 1,  y: 0 },  // right
    2: { x: 0,  y: 1 },  // down
    3: { x: -1, y: 0 }   // left
  };

  return map[direction];
};

// Build a list of positions to traverse in the right order
GameManager.prototype.buildTraversals = function (vector) {
  var traversals = { x: [], y: [] };

  for (var pos = 0; pos < this.size; pos++) {
    traversals.x.push(pos);
    traversals.y.push(pos);
  }

  // Always traverse from the farthest cell in the chosen direction
  if (vector.x === 1) traversals.x = traversals.x.reverse();
  if (vector.y === 1) traversals.y = traversals.y.reverse();

  return traversals;
};

GameManager.prototype.findFarthestPosition = function (cell, vector) {
  var previous;

  // Progress towards the vector direction until an obstacle is found
  do {
    previous = cell;
    cell     = { x: previous.x + vector.x, y: previous.y + vector.y };
  } while (this.grid.withinBounds(cell) &&
           this.grid.cellAvailable(cell));

  return {
    farthest: previous,
    next: cell // Used to check if a merge is required
  };
};

GameManager.prototype.movesAvailable = function () {
  return this.grid.cellsAvailable() || this.tileMatchesAvailable();
};

// Check for available matches between tiles (more expensive check)
GameManager.prototype.tileMatchesAvailable = function () {
  var self = this;

  var tile;

  for (var x = 0; x < this.size; x++) {
    for (var y = 0; y < this.size; y++) {
      tile = this.grid.cellContent({ x: x, y: y });

      if (tile) {
        for (var direction = 0; direction < 4; direction++) {
          var vector = self.getVector(direction);
          var cell   = { x: x + vector.x, y: y + vector.y };

          var other  = self.grid.cellContent(cell);

          if (other && other.value === tile.value) {
            return true; // These two tiles can be merged
          }
        }
      }
    }
  }

  return false;
};

GameManager.prototype.positionsEqual = function (first, second) {
  return first.x === second.x && first.y === second.y;
};


