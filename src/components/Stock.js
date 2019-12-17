import React from 'react'

const clickHandler =(trade, stock) =>{
  //console.log("clicked")
  trade(stock)

}

const Stock = ({stock, trade}) => {

  return (
  <div onClick={()=>clickHandler(trade, stock)}>

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            stock.name
          }</h5>
        <p className="card-text">{
            stock.price
          }</p>
      </div>
    </div>


  </div>
  )
};

export default Stock
