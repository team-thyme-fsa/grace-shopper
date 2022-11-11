import React from 'react';
import { connect } from 'react-redux';
import { fetchAllProd } from '../store/products';

import Product from './Product';

// TODO(Carina): change to functional component
export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.fetchAllProd();
  }
}
