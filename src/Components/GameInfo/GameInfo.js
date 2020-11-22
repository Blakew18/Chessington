import React from 'react';
import { useStores } from '../RootStoreProvider';
import { observer } from 'mobx-react';
import { RootStoreModel } from '../../Models/root-store';


const GameInfo = observer(() => {
  
  const rootStore= useStores();
  
  const getPlayerTurn = () =>{
    if(rootStore.whiteMove){
      return <div>White</div>
    }else{
      return <div>Black</div>
    }
  }


  return (
    <div>
      <h3>GAME INFO</h3>
      <div>
        <h5>Player Move: </h5>
        {getPlayerTurn()}
      </div>
      <div>
        <h5>Half Moves: </h5>
        {rootStore.halfMoves}
      </div>      
    <div>
      <h5>Full Moves: </h5>
      {rootStore.fullMoves}
    </div>      
  </div>
  )
});

export default GameInfo;