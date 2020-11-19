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
      movePiece( pos ) {
        let currentBoard = self.getBoardState()
        console.log(pos)
        currentBoard[pos.x][pos.y] = "Q"
        self.boardLayout = twoDimArrayToString(currentBoard)
      },
      changePlayer() {
        self.playerMove = !self.playerMove;
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
