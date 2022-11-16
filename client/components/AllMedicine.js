import React from 'react';
import { connect } from 'react-redux';
import { fetchAllMed } from '../store/medicine';

import Medicine from './Medicine';

const AllMedicine = (props) => {
  const { fetchAllMed } = props;
  const { products } = props.products;

  React.useEffect(() => {
    fetchAllMed();
  }, []);

  return (
    <div>
      <h2>PokéMart</h2>
      <div className="all-products">
        {products.map((product) => (
          <Medicine product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.medicinesReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllMed: () => dispatch(fetchAllMed()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllMedicine);
