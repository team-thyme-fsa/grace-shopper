import React from 'react';
import { connect } from 'react-redux';

const AdminPannel = (props) => {
  return (
    <div>
      <p>Admin</p>
    </div>
  );
};
const mapState = (state) => {};

const mapDispatch = (state) => {};

export default connect(mapState, mapDispatch)(AdminPannel);
