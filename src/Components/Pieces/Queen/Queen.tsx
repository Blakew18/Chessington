import React from 'react';
import { useStores } from '../../RootStoreProvider';
import { observer } from 'mobx-react';

import './Queen.css';
import poncQueen from './icons/poncQueen.svg'
import pocQueen from './icons/pocQueen.svg'

interface QueenProps {
  squareState: string
}

const Queen = observer(({squareState}:QueenProps) => {
  
  const rootStore= useStores();

  const getColour = (col:string) => {
    switch (true){
      case col === "Q":
        return poncQueen
      case col === "q":
        return pocQueen
      default:
        return ""
    }
  }

  const clickHandler = () => {
    console.log(rootStore.yeeticus())
  }

  return (
    <img src={getColour(squareState)} alt={"Q"} className="queen" onClick={clickHandler}/>
  )
});

export default Queen;