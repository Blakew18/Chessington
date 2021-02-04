import React from 'react';
import './Square.css';
import { useStores } from '../RootStoreProvider';
import { observer } from 'mobx-react';

import Queen from '../Pieces/Queen/Queen';
import Rook from '../Pieces/Rook/Rook';
import Bishop from '../Pieces/Bishop/Bishop';

import { queenCanMove } from '../../Service/MoveLogic/queenMoves';
import { rookCanMove } from '../../Service/MoveLogic/rookMoves';
import { bishopCanMove } from '../../Service/MoveLogic/bishopMoves';
import { useDrop } from "react-dnd";

const Square = observer(({ pos=pos, squareState={squareState}}) => {

    const rootStore= useStores(); 

    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ['Q','q','R','r','B','b'],
        canDrop: (monitor) => canMove(pos, monitor.type, monitor.currentPos, rootStore.whiteMove, rootStore.getBoardState()),
        drop: (monitor) => {
            rootStore.movePiece(pos, monitor.type, monitor.currentPos)
            rootStore.clearLegalMoves();      
        },  
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
          canDrop: !!monitor.canDrop()
        })
      });

    const canMove = (pos, type, currentPos, whiteMove, boardState) =>{
        switch (true) {
            case type.toLowerCase() === 'k':
                return false
            case type.toLowerCase() === 'q':
                return queenCanMove(pos, type, currentPos, whiteMove,boardState)
            case type.toLowerCase() === 'b':
                return bishopCanMove(pos, type, currentPos, whiteMove,boardState)
            case type.toLowerCase() === 'n':
                return false
            case type.toLowerCase() === 'r':
                return rookCanMove(pos, type, currentPos, whiteMove,boardState)
            case type.toLowerCase() === 'p':
                return false
            default:
                console.log(`Error Not A Piece being moved = ${squareState}`)
                return false
        }
    }

    const setOverlay = () => {
        console.log("SET OVERLAY")
        if (rootStore.legalMoves.length > 0) {
            return (
                <div>
                    Yeet
                </div>
            )
        }
    }

    const setColour = () => {
        // Sets Colours for Each Square. If Row and Col are both Even OR Row and Col are both Odd then White else Black

        // if (rootStore.legalMoves.length > 0) {
        //     if (rootStore.legalMoves.includes(pos)) {
        //         return "Red"
        //     }
        // }

        if (pos.x % 2 === 0 & pos.y % 2 === 0 || pos.x % 2 !== 0 & pos.y % 2 !== 0 ){
            return "White"
        }
        
        else {
            return "Gray"
        }
    }

    const getPiece = (squareState) => {
        switch (true) {
            case squareState.toLowerCase() === 'k':
                //return <King squareState={squareState} currentPos={pos}/> ;
                return <div>King</div>
            case squareState.toLowerCase() === 'q':
                return <Queen squareState={squareState} currentPos={pos}/>;
            case squareState.toLowerCase() === 'b':
                return <Bishop squareState={squareState} currentPos={pos}/>;                   
            case squareState.toLowerCase() === 'n':
                //return <Knight squareState={squareState} currentPos={pos}/>;
                return <div>Knight</div>          
            case squareState.toLowerCase() === 'r':
                return <Rook squareState={squareState} currentPos={pos}/>;
            case squareState.toLowerCase() === 'p':
                //return <Pawn squareState={squareState} currentPos={pos}/>;
                return <div>Pawn</div> 
            case squareState === '.':
                return          
            default:
                console.log(`Error loading Square State Square State Value = ${squareState}`)
                return <div>Return Error</div>
        }
    }

        return (
        <div style={{backgroundColor:setColour()}} className="square" ref={drop} > 
            {setOverlay()}
            {getPiece(squareState)}
        </div>
        )

});

export default Square;