import { types } from 'mobx-state-tree';
import { stringTo2DArray } from '../Service/service'

export const RootStoreModel = types
  .model('RootStore', {
    boardLayout: types.string,
    playerMove: types.string,
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
  });   
  
  



  export const setupRootStore = async () => {
    const rs = RootStoreModel.create({
      boardLayout: "rnbqkbnrpppppppp................................PPPPPPPPRNBQKBNR", 
      playerMove: "W",
      castlingRight: "KQkq",
      enPassantAvailible: "-",
      halfMoves: 0,
      fullMoves: 0
    })
    return rs
  }
