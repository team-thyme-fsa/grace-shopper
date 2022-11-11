import React from 'react';
import { connect } from 'react-redux';
import { fetchAllProd } from '../store/products';

import Product from './Product';

const AllProducts = (props) => {
  const { fetchAllProd } = props;
  const { products } = props.products;

  React.useEffect(() => {
    fetchAllProd();
  }, []);

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
};

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
