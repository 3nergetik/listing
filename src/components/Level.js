import React from 'react';
import PropTypes from "prop-types";
import "../App.css";

export default function Level({quantity}) {
    if (quantity > 20) {
        return (
            <p className="item-quantity level-high">{quantity} left</p>
        )
    } else if (quantity > 10) {
        return (<p className="item-quantity level-medium">{quantity} left</p>)

    }
    return (<p className="item-quantity level-low">{quantity} left</p>)
}

Level.propTypes = {
    quantity: PropTypes.number.isRequired
};