import React from "react";
import Card from "./Card";

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  loadStocksFromYahoo() {
    $.ajax({
      url: this.props.yahooUrl,
      jsonp: 'callback',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data.query.results.quote});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  componentDidMount() {
    this.loadStocksFromYahoo();
    setInterval(this.loadStocksFromYahoo, this.props.pollInterval);
  }

  render() {
    var quotes = this.state.data;

    return (
      <div class="card-container">
        {quotes.map(function(quote) {
          if (quote.Name !== null && quote.Ask !== null) {
            return <Card key={quote.symbol} data={quote}  />
          }
        })}
      </div>
    );
  }
}
