import React from 'react';
import './Board.css';
import Square from '../Square/Square'
import { useStores } from '../RootStoreProvider';
import { observer } from 'mobx-react';

const Board = observer(() => {
    
    const rootStore= useStores();

    return (  
        
        <div className="boardSize"> 
            {rootStore.getBoardState().map(function(subarray:Array<string>,rowNum:number){
                return subarray.map(function(squareState:string, colNum:number){
                    return <Square key={(rowNum+1)*(colNum+1)} pos={{x:rowNum,y:colNum}} squareState={squareState}/>
                })
            })} 
        </div>
   
   )
})

export default Board;