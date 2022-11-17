import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchAllProd,
  fetchProd,
  updateProduct,
  createProduct,
  deleteProduct,
} from '../store/products';
import { use } from 'chai';

const AdminPanel = (props) => {
  const {
    products,
    product,
    fetchProds,
    fetchSingleProd,
    updateProd,
    createProd,
    deleteProd,
  } = props;

  // Loads the products to the state
  useEffect(() => {
    fetchProds();
  }, []);

  const [edit_product, setEdit_Product] = useState(1);

  // Update product when the edit_product changes
  useEffect(() => {
    fetchSingleProd(edit_product);
  }, [edit_product]);

  const updateSelection = (event) => {
    setEdit_Product(event.target.value);
  };

  const updateProduct = (event) => {
    const name = event.target.name.value;
    const price = Number(event.target.price.value);
    const description = event.target.description.value;
    const imageUrl = event.target.imageUrl.value;
    const type = event.target.type.value;
    updateProd(edit_product, { name, price, imageUrl, type });
  };

  const createProduct = (event) => {
    const name = event.target.name.value;
    const price = Number(event.target.price.value);
    const description = event.target.description.value;
    const imageUrl = event.target.imageUrl.value;
    const type = event.target.type.value;
    createProd({ name, price, description, imageUrl, type });
  };

  const deleteProductSubmit = () => {
    deleteProd(edit_product);
  };

  return (
    <div>
      <div>
        <label>Select Product to Edit:</label>
        <select name="product-dropdown" onChange={updateSelection}>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <form onSubmit={updateProduct}>
          <label name="name">Name: </label>
          <input name="name" type="name" defaultValue={product.name}></input>
          <label name="price">Price: </label>
          <input
            name="price"
            type="number"
            defaultValue={product.price}
          ></input>
          <label name="description">Description: </label>
          <input name="description" defaultValue={product.description}></input>
          <label name="imageUrl">Image Url:</label>
          <input name="imageUrl" defaultValue={product.imageUrl}></input>
          <label name="type">Type: </label>
          <input name="type" defaultValue={product.type}></input>
          <button type="submit">Update</button>
        </form>
        <button type="submit" onClick={deleteProductSubmit}>
          Delete
        </button>
      </div>
      <div>
        <h1>Create Product</h1>
        <form onSubmit={createProduct}>
          <label name="name">Name: </label>
          <input name="name" type="name"></input>
          <label name="price">Price: </label>
          <input name="price" type="number"></input>
          <label name="description">Description: </label>
          <input name="description"></input>
          <label name="imageUrl">Image Url:</label>
          <input name="imageUrl"></input>
          <label name="type">Type: </label>
          <select name="type">
            <option value="POKEBALL">POKEBALL</option>
            <option value="MEDICINE">MEDICINE</option>
          </select>
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};
const mapState = (state) => {
  return {
    products: state.products.products,
    product: state.products.product,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchProds: () => dispatch(fetchAllProd()),
    fetchSingleProd: (id) => dispatch(fetchProd(id)),
    updateProd: (id, product) => dispatch(updateProduct(id, product)),
    createProd: (product) => dispatch(createProduct(product)),
    deleteProd: (id) => dispatch(deleteProduct(id)),
  };
};

export default connect(mapState, mapDispatch)(AdminPanel);
