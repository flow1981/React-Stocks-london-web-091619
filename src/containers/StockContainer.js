import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Stocks</h2>
        {
          <ul>
            {this.props.stocks.map(stock=>{
              return (
                  <Stock key={stock.id} stock={stock} trade={this.props.buyStock}/>
              )
            })}
          </ul>
        }
      </div>
    );
  }

}

export default StockContainer;
