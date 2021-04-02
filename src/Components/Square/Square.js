import React, { useState, useEffect } from 'react';
import './Square.css';
import { useStores } from '../RootStoreProvider';
import { observer } from 'mobx-react';

import Queen from '../Pieces/Queen/Queen';
import Rook from '../Pieces/Rook/Rook';
import Bishop from '../Pieces/Bishop/Bishop';

import { useDrop } from "react-dnd";

const Square = observer(({ pos=pos, squareState={squareState}}) => {

    const rootStore = useStores(); 
    const legalMoves = rootStore.availableLegalMoves()
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ['Q','q','R','r','B','b'],
        canDrop: (monitor) => canMove(),
        drop: (monitor) => {
            rootStore.movePiece(pos, monitor.type, monitor.currentPos)
            rootStore.clearLegalMoves();      
        },  
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
          canDrop: !!monitor.canDrop()
        })
      });

    const canMove = () => {
        let legal = false
        legalMoves.forEach((move) => {
            if (move.x === pos.x && move.y === pos.y){
                console.log("REACHED")
                legal =  true
            }
        })
        return legal
    }
    const setColour = () => { 
        let overLay = false
        if (rootStore.legalMoves.length > 0) {
            
            legalMoves.forEach((move) => {
                if (move.x === pos.x && move.y === pos.y){
                    overLay = true
                }
            })
        }
        if (pos.x % 2 === 0 & pos.y % 2 === 0 || pos.x % 2 !== 0 & pos.y % 2 !== 0 ){
            return overLay ? "#FFA9A4" : "White"
        }
        else {
            return overLay ? "#B75C58" : "Gray"
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
            {getPiece(squareState)}
        </div>
        )

});

export default Square;