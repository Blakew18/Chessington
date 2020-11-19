import React from 'react';
import './Square.css';
import Queen from '../Pieces/Queen/Queen'
import { useStores } from '../RootStoreProvider';
import { observer } from 'mobx-react';

import { useDrop } from "react-dnd";

const Square = observer(({ pos=pos, squareState={squareState}}) => {

    const rootStore= useStores(); 
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: "Q",
        canDrop: () => canMove(),
        drop: () => rootStore.movePiece(pos),
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
          canDrop: !!monitor.canDrop()
        })
      });

    const canMove = () =>{
        return true
    }

    const setColour = () => {
        // Sets Colours for Each Square. If Row and Col are both Even OR Row and Col are both Odd then White else Black
        if (pos.x % 2 === 0 & pos.y % 2 === 0 || pos.x % 2 !== 0 & pos.y % 2 !== 0 ){
            return "White"
        } else {
            return "Gray"
        }
    }

    const getPiece = (squareState) => {
        switch (true) {
            case squareState === 'K' || squareState === 'k':
                //return <King squareState={squareState}/> ;
                return <div>King</div>
            case squareState === 'Q' || squareState === 'q':
                
                return <Queen squareState={squareState}/>;
            case squareState === 'B' || squareState === 'b':
                //return <Bishop squareState={squareState}/>; 
                return <div>Bishop</div>                   
            case squareState === 'N' || squareState === 'n':
                //return <Knight squareState={squareState}/>;
                return <div>Knight</div>          
            case squareState === 'R' || squareState === 'r':
                //return <Rook squareState={squareState}/>;
                return <div>Rook</div>  
            case squareState === 'P' || squareState === 'p':
                //return <Pawn squareState={squareState}/>;
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