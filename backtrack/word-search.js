/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
    const rows = board.length;
    const cols = board[0].length;
    
    
    function depthFirstSearch(row, col, i){
        // Define Base cases;
        
        //if all the words are encountered so far that means the i = length of the word
        // that means the word is found;
        if(i >= word.length ) return true;
        
        // base case two 
        // row or col boundery chacke or clready visted gricd
        
        if(
            row < 0 || 
            col < 0 || 
            row >= rows || 
            col >= cols || 
            word[i] !== board[row][col]
        ) return false;
        
        // If the code reached here that means the ith char of the word is at postion (row, col)
        // So lets add the crid in the list of visted noded for the current starting point of searching the word
        // Make Depth first  Search for each adjacent grid of the current grid or postion  4 adjacents so 
        // we will have for branch outs of four recursive calls
        const char = board[row][col];
        board[row][col] = "#";
        
        // Since a grid have a maximum of 4 adjacents found by adding and the following array to the row and col
        const adjacents = [[0, -1], [0, 1], [-1, 0], [1, 0]]
        for(let k = 0; k < 4; k++){
            const [r, c] = adjacents[k]
            if(depthFirstSearch(row + r, col + c, i + 1))
                return true; 
        }
        // Backtrack or remove the grid fromt the list of all visted nodes
        board[row][col] = char;
    }
    
    for(let row = 0; row < rows; row++){
        for(let col = 0; col < cols; col++){
            // check if the word exists starting from this point
            // deapth first search all posible adjacent postions or characters
            // row and col represents the starting postion and 0 is a wod char
            if( depthFirstSearch(row, col, 0)) return true;
        }
    }
    return false;
};


const board1 = [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]]
const word1 = "ABCCED";


const board2 = [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]];
const word2 = "ABCB";





console.time('backtrack');
console.log(exist(board2, word2));
console.timeEnd('backtrack')