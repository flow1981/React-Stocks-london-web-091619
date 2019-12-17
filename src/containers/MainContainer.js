import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import { kMaxLength } from 'buffer';

const API_ENDPOINT = 'http://localhost:3000/stocks'

class MainContainer extends Component {

  state = {
    stocks:    [],
    portfolio: [],
    selected:  []
  }

  buyStock = (stock) => {
    console.log("buy", stock.name)
    this.setState({portfolio: [...this.state.portfolio,stock]})
  }

  filterStocks =(type) =>{

    let stocks = [...this.state.stocks] // new variable
    let filtered  = stocks.filter(listedStock => {
      return listedStock.type===type
    })
    this.setState({ selected: filtered})
  }


  passOnSelected=()=>{
   return this.state.selected.length >0  ? this.state.selected: this.state.stocks
  }

  sellStock = (stock) => {
    console.log("sell", stock.name)
    console.log(stock.id)

    let portfolio = [...this.state.portfolio] // new variable
    
    let filtered = portfolio.filter(listedStock => {
      return stock.id!==listedStock.id
    })

    console.log(filtered.length)
    this.setState({portfolio: filtered})
  }

  getStocks = ( ) =>{
    return fetch(API_ENDPOINT)
            .then(response => response.json())
            .then(json => this.setState({stocks: json}))
  }

  componentDidMount() {
    this.getStocks()
  }

  render() {
   const {stocks, selected, portfolio} = this.state
    
    return (
      <div>
        <SearchBar filterStocks={this.filterStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.passOnSelected()} buyStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={portfolio} sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
