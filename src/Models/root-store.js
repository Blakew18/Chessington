import { types } from 'mobx-state-tree';
import { stringTo2DArray, twoDimArrayToString } from '../Service/service'

export const RootStoreModel = types
  .model('RootStore', {
    boardLayout: types.string,
    whiteMove: types.boolean,
    castlingRight: types.string,
    enPassantAvailible: types.string,
    halfMoves: types.integer,
    fullMoves: types.integer,
  })
  .views((self) => {
    return { 
      getBoardState() {
        return stringTo2DArray(self.boardLayout, 8,8)
      },
      yeeticus() {
        return "YEETYUM"
      },
    }
  }) 
  .actions((self) => {
    return {
      movePiece( newPos, piece, oldPos ) {
        let currentBoard = self.getBoardState()
        currentBoard[newPos.y][newPos.x] = piece
        currentBoard[oldPos.y][oldPos.x] = "."
        self.boardLayout = twoDimArrayToString(currentBoard)
        self.changePlayer()
        self.halfMoves += 1
        if (self.halfMoves % 2 === 0){
          self.fullMoves += 1
        }
      },
      changePlayer() {
        self.whiteMove = !self.whiteMove;
      },
    }
  })  


  export const setupRootStore = async () => {
    const rs = RootStoreModel.create({
      boardLayout: "rnbqkbnrpppppppp................................PPPPPPPPRNBQKBNR", 
      whiteMove: true,
      castlingRight: "KQkq",
      enPassantAvailible: "-",
      halfMoves: 0,
      fullMoves: 0
    })
    return rs
  }
