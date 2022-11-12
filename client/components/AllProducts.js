import React from 'react';
import { connect } from 'react-redux';
import { fetchAllProd } from '../store/products';

import Product from './Product';

// TODO(Carina): change to functional component
export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.fetchAllProd();
  }

  render() {
    const { products } = this.props.products;

    return (
      <div>
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProd: () => dispatch(fetchAllProd()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
