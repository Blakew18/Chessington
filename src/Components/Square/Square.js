import React, { Component } from 'react';
import './Square.css';

class Square extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        
        };
      }
    
    setColour() {
        if (this.props.pos.x % 2 === 0 ){
            if (this.props.pos.y % 2 === 0 ){
                return "White" 
            }else{
                return "Black"
            }
        }else {
            if (this.props.pos.y % 2 === 0 ){
                return "Black" 
            }else{
                return "White"
            }
        }
    }


      render() {
        return (
        <div style={{backgroundColor:this.setColour()}} className="square"> 
            WHY HELLO Square
        </div>
        )
    }
} 

export default Square;