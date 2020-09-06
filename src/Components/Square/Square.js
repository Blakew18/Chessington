import React, { Component } from 'react';
import './Square.css';
import Queen from '../Pieces/Queen/Queen'


class Square extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        
        };
      }

    setColour() {
        // Sets Colours for Each Square. If Row and Col are both Even OR Row and Col are both Odd then White else Black
        if (this.props.pos.x % 2 === 0 & this.props.pos.y % 2 === 0 || this.props.pos.x % 2 !== 0 & this.props.pos.y % 2 !== 0 ){
            return "White"
        } else {
            return "Gray"
        }
    }

    getPiece(squareState) {
        switch (true) {
            case squareState === 'Q' || squareState === 'q':
                return <Queen squareState={squareState}/> ;
            default:
                return <div>.</div>

        }
    }


    render() {
        return (
        <div style={{backgroundColor:this.setColour()}} className="square" > 
            {this.getPiece(this.props.squareState)}
        </div>
        )
    }
} 

export default Square;