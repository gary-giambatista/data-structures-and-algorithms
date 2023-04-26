//Time Complexity = O(9^2) or O(rows x columns)
//space Complexity = O(9^2) or O(rows x columns)

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rowSet = new Set();
    const colSet = new Set();
    const boxSet = new Set();
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === ".") continue;
            const rowVal = [row, board[row][col]];
            const colVal = [col, board[row][col]];
            const boxVal = [
                [Math.floor(row / 3), Math.floor(col / 3)],
                board[row][col],
            ];
            if (
                rowSet.has(JSON.stringify(rowVal)) ||
                colSet.has(JSON.stringify(colVal)) ||
                boxSet.has(JSON.stringify(boxVal))
            ) {
                return false;
            } else {
                rowSet.add(JSON.stringify(rowVal));
                colSet.add(JSON.stringify(colVal));
                boxSet.add(JSON.stringify(boxVal));
            }
        }
    }
    return true;
};
