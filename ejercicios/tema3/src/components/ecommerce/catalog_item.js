import React, { PropTypes } from 'react';

const CatalogItem = React.createClass({
  propTypes: {
    product: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    }).isRequired,
    onAddToCart: PropTypes.func.isRequired
  },
  handleAddToCart(e){
    //TODO
  },
  render(){
    const p = this.props.product;
    //TODO - usar datos del producto
    return (
      <div className="product row">
        <div className="product-summary col three-fourths">
          <h2 className="product-title">nombre</h2>
          <div className="product-details">
            <div className="product-image col one-fourth">
              <img src="http://placehold.it/64x64" height="64" width="64" />
            </div>
            <div className="product-summary col three-fourths">
              <p>descripción</p>
            </div>
          </div>
        </div>
        <div className="product-add-to-cart col one-fourth">
          <div className="product-price">{ p.price} &euro;</div>
          <div className="add-to-cart">
            <a className="button">Comprar</a>
          </div>
        </div>
      </div>
    )
  }
});

export default CatalogItem;