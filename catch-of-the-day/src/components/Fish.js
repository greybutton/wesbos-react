import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";

const Fish = props => {
  const isAvailable = props.details.status === "available";
  const handleClick = () => {
    props.addToOrder(props.index);
  };
  return (
    <li className="menu-fish">
      <img src={props.details.image} alt={props.details.name} />
      <h3 className="fish-name">
        {props.details.name}
        <span className="price">{formatPrice(props.details.price)}</span>
      </h3>
      <p>{props.details.desc}</p>
      <button disabled={!isAvailable} onClick={handleClick}>
        {isAvailable ? "Add to order" : "Sold out!"}
      </button>
    </li>
  );
};

Fish.propTypes = {
  details: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    status: PropTypes.string,
    price: PropTypes.number
  }),
  addToOrder: PropTypes.func
};

export default Fish;
