import Grid from "./grid/grid.js"
import Player from "./player.js"

export default class Game {
    constructor(gameState, gameTime) {
        this.players = this.generatePlayers()
        this.curPlayer = "white"
        this.grid = new Grid(8,8, gameState)
        // this.dead_pieces = []
    }

    generatePlayers(){
        var whitePlayer= new Player(600, "white")
        var blackPlayer= new Player(600, "black")
        return [whitePlayer, blackPlayer]
    }

    countTime(){
        console.log("COUNTING TIME")
    }
}
// function findKingIndex(player, board) {
//     if(player === "white"){
//       return board.indexOf("K");
//     } else {
//       return board.indexOf("k");  
//     }
//   }
//   function getAllThePieces(player, board){
//     let { gameRepresentation, gameHistory,  } = gameInformation;
//     const whitePiecesPositions = [];
//     const blackPiecesPositions = []
//       for (let i = 0; i <= 63; i++) {
//             const cell = board[i];
//             if (cell !== '') {
//               if(cell === cell.toLowerCase()) {
//               blackPiecesPositions.push(i);
//             }  else {
//               whitePiecesPositions.push(i)
//             }
//         }
//       }
//     return player === "black" ? blackPiecesPositions : whitePiecesPositions;
//   }// funguje správně
//   function isKingInCheck(curPlayer, board) {
//     let whiteKingPos = findKingIndex("white", board);
//     let blackKingPos = findKingIndex("black", board);
//     const whitePiecesPositions =  getAllThePieces("white",board);
//     const blackPiecesPositions =  getAllThePieces("black",board);
//     let whiteInCheck = false;
//     let blackInCheck = false;
    
//     for (let piece of whitePiecesPositions) {
//       const pieceType =  getPieceType(board[piece])   
//       const possibleMoves = pieceType.calculatePossibleMoves(piece, findPiecesColor(board[piece]), board)
//       if (possibleMoves.includes(blackKingPos)) {
//         blackInCheck = true;
//       } 
//     } 
//     for (let piece of blackPiecesPositions) { 
//       const pieceType =  getPieceType(board[piece])
//       const possibleMoves = pieceType.calculatePossibleMoves( piece, findPiecesColor(board[piece]), board)
//       if (possibleMoves.includes(whiteKingPos)) {
//         whiteInCheck = true;
//       } 
//     }
//     return {
//       white: whiteInCheck,
//       black: blackInCheck,
//     };
//   }
//   function coordsToIndex(row, col) {
//     return row * 8 + col;
//   }
//   function indexToCoords(index) {
//     const row = Math.floor(index / 8);
//     const col = index % 8;
//     return [row, col];
//   }
//   function isOnSameRow(index1, index2) {
//     return Math.floor((index1) / 8) === Math.floor((index2) / 8);
//   }
//   function isOnSameColumn(index1, index2) {
//     return (index1) % 8 === (index2) % 8;
//   }
//   function isOnSameDiagonal(index1, index2) {
//     return Math.abs(Math.floor((index1 ) / 8) - Math.floor((index2 ) / 8)) === Math.abs((index1) % 8 - (index2) % 8);
//   }