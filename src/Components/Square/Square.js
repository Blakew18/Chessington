import React from 'react';
import './Square.css';
import Queen from '../Pieces/Queen/Queen'
import { useStores } from '../RootStoreProvider';
import { observer } from 'mobx-react';

const Square = observer(({ pos=pos, squareState={squareState}}) => {

    const rootStore= useStores(); 
    
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
            case squareState === 'Q' || squareState === 'q':
                return <Queen squareState={squareState}/> ;
            default:
                console.log(`Error loading Square State Square State Value = ${squareState}`)
                return <div>Return Error</div>
        }
    }

        return (
        <div style={{backgroundColor:setColour()}} className="square" > 
            {getPiece(squareState)}
        </div>
        )

});

export default Square;