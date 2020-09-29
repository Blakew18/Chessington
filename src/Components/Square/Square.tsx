//NPM Imports
import React from 'react';
import { useStores } from '../RootStoreProvider';
import { observer } from 'mobx-react';

//App Inports
import Queen from '../Pieces/Queen/Queen'
import './Square.css';

//Interfaces For Typeing Objects 
// SquareProps Types the Props, While PosShape types the object "pos" that is inside the Props
interface SquareProps {
pos: PosShape 
squareState: string,
}

interface PosShape {
x: number,
y: number
}

                        // The Props Are Typed With the Above Interfaces
const Square = observer(({ pos, squareState}:SquareProps) => {
    //Props Should recieve Position of Square in X and Y (pos) as well as any piece that is on that square (squareState)

    const setColour = () => {
        // Sets Colours for Each Square. If Row and Col are both Even OR Row and Col are both Odd then White else Black
        if (pos.x % 2 === 0 && pos.y % 2 === 0 || pos.x % 2 !== 0 && pos.y % 2 !== 0 ){
            return "White"
        } else {
            return "Gray"
        }
    }

    const getPiece = (squareState:string) => { 
        // Check piece on each square and renders piece if required
        switch (true) {
            case squareState.toLowerCase() === 'k':
                //return <King squareState={squareState}/> ;
                return <div>King</div>
            //case squareState === 'Q' || squareState === 'q':
            case squareState.toLowerCase() === 'q':
                return <Queen squareState={squareState}/>;
            case squareState.toLowerCase() === 'b':
                //return <Bishop squareState={squareState}/>; 
                return <div>Bishop</div>                   
            case squareState.toLowerCase() === 'n':
                //return <Knight squareState={squareState}/>;
                return <div>Knight</div>          
            case squareState.toLowerCase() === 'r':
                //return <Rook squareState={squareState}/>;
                return <div>Rook</div>  
            case squareState.toLowerCase() === 'p':
                //return <Pawn squareState={squareState}/>;
                return <div>Pawn</div> 
            case squareState === '.':
                return          
        }
    }
        return (
        <div style={{backgroundColor:setColour()}} className="square" > 
            {getPiece(squareState)}
        </div>
        )
});

export default Square;