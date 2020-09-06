import React from 'react';
import { useStores } from '../../RootStoreProvider';
import { observer } from 'mobx-react';

import './Queen.css';
import poncQueen from './icons/poncQueen.svg'
import pocQueen from './icons/pocQueen.svg'

const Queen = observer(() => {
  
  const rootStore= useStores();

  const getColour = (squareState) => {
    switch (true){
      case squareState === "Q":
        return poncQueen
      case squareState === "q":
        return pocQueen
      default:
        return null
    }
  }

  const clickHandler = () => {
    console.log(rootStore.yeeticus())
  }

  return (
    <img src={getColour("Q")} alt={"Q"} className="queen" onClick={clickHandler}/>
  )
});

export default Queen;