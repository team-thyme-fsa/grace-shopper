import React from 'react';
import { connect } from 'react-redux';
import { fetchAllPokeballs } from '../store/pokeballs';

import Pokeball from './Pokeball';

const AllPokeballs = (props) => {
  const { fetchAllPokeballs } = props;
  const { products } = props.products;

  React.useEffect(() => {
    fetchAllPokeballs();
  }, []);

  return (
    <div>
      <h2>PokéMart</h2>
      <div className="all-products">
        {products.map((product) => (
          <Pokeball product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.pokeballsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPokeballs: () => dispatch(fetchAllPokeballs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllPokeballs);
