import React, { Component } from "react";
import PropTypes from "prop-types";

class EditFishForm extends Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    const updatedFish = { ...this.props.fish, [name]: value };
    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          name="name"
          value={this.props.fish.name}
          type="text"
          placeholder="Name"
          onChange={this.handleChange}
        />
        <input
          name="price"
          value={this.props.fish.price}
          type="text"
          placeholder="Price"
          onChange={this.handleChange}
        />
        <select
          name="status"
          value={this.props.fish.status}
          onChange={this.handleChange}
        >
          <option value="available">Fresh</option>
          <option value="unavailable">Sold out</option>
        </select>
        <textarea
          name="desc"
          value={this.props.fish.desc}
          placeholder="Desc"
          onChange={this.handleChange}
        />
        <input
          name="image"
          value={this.props.fish.image}
          type="text"
          placeholder="Image"
          onChange={this.handleChange}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
