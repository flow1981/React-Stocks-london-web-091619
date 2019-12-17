import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            <ul>
              {this.props.portfolio.map( (stock, index)=>{
                return (
                  <Stock key={`${stock.id}+${index}`} stock={stock} trade={this.props.sellStock}/>
                )
              })}
          </ul>
          }
      </div>
    );
  }

}

export default PortfolioContainer;
