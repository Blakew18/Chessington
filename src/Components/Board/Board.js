import React from 'react';
import './Board.css';
import Square from '../Square/Square'
import { useStores } from '../RootStoreProvider';
import { observer } from 'mobx-react';

const Board = observer(() => {
    
    const rootStore= useStores();

    return (  
        
        <div className="boardSize"> 
            {rootStore.getBoardState().map(function(subarray,rowNum){
                return subarray.map(function(squareState, colNum){
                    return <Square key={rowNum,colNum} pos={{x:rowNum,y:colNum}} squareState={squareState}/>
                })
            })} 
        </div>
   
   )
})

export default Board;