import React, {Component} from 'react';
import './Board.css';
import Square from '../Square/Square'
class Board extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            boardLayout: [
                ["r","n","b","q","k","b","n","r"],
                ["p","p","p","p","p","p","p","p"],
                [".",".",".",".",".",".",".","."],
                [".",".",".",".",".",".",".","."],
                [".",".",".",".",".",".",".","."],
                [".",".",".",".",".",".",".","."],
                ["P","P","P","P","P","P","P","P"],
                ["R","N","B","Q","K","B","N","R"]
            ],
            playerMove: "W",
            castlingRight: "KQkq",
            enPassantAvailible:"-",
            halfMoves: 0,
            fullMoves: 0,
        };
    }
    

    render() {
 
        return (
        <div className="boardSize"> 
            {this.state.boardLayout.map(function(subarray,rowNum){
                return subarray.map(function(squareState, colNum){
                    return <Square key={rowNum,colNum} pos={{x:rowNum,y:colNum}}/>
                })
            })} 

        </div>
        )
    }
} 

export default Board;