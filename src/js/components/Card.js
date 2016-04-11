import React from "react";

export default class Card extends React.Component {
  render() {
    var price = parseFloat(this.props.data.Ask).toFixed(2);
    return (
      <div class="stock-card">
        <div class="company">
          <span class="company-name">{this.props.data.Name}</span>
          <span class="up-down"></span>
        </div>
        <div class="stock-price">
          <div class="price">{price}</div>
          <div class="stock-details">
            <span class="change">{this.props.data.Change}</span>
            <span class="change-precent">({this.props.data.ChangeinPercent})</span>
          </div>
        </div>
        <div class="high-low">
          <div class="low">
            <span class="low-text">low</span>
            <span class="low-number">{this.props.data.DaysLow}</span>
          </div>
          <div class="high">
            <span class="high-text">high</span>
            <span class="high-number">{this.props.data.DaysHigh}</span>
          </div>
        </div>
      </div>
    );
  }
}
