import React from 'react';
import { connect } from 'react-redux';
import { fetchAllMed } from '../store/medicine';

import Medicine from './Medicine';

const AllMedicine = (props) => {
  const { fetchAllMed } = props;
  const { products } = props.products;
  // console.log('>>> props is', props);
  // console.log('>>> products is', products);
  // console.log('>>> props.products is', props.products);
  // console.log('fetchAllMed is', fetchAllMed);

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
  // console.log('>>> state is', state);
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllMed: () => dispatch(fetchAllMed()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllMedicine);
