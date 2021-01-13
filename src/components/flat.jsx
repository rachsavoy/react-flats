import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.index);
  }

  render() {
    return(
      <div className={`card${this.props.selected ? 'active' : ''}`} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), regba(0,0,0,0.2)), url('${this.props.flat.imageUrl}')` }}>
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
    )
  }
}
