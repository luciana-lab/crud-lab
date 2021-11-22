import React, { Component } from 'react';
// import uuid from 'uuid';

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({ text: event.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    // const newRestaurant = { ...this.state, id: uuid() }
    // this.props.addRestaurant(newRestaurant)
    this.props.addRestaurant(this.state.text)
    this.setState({ text: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Restaurant:</label>
          <input type="text" name="text" value={this.state.text} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
