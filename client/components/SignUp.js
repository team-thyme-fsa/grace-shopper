// import React from 'react';
// import { connect } from 'react-redux';
// import { Signup } from './Login';

// const SignUp = () => {
//   return (
//     <div className="Auth-form-container">
//       <form className="Auth-form" onSubmit={handleSubmit} name={name}>
//         <div className="Auth-form-content">
//           <h3 className="Auth-form-title">Log In</h3>
//           <div className="text-center">
//             Not registered yet?{' '}
//             <span className="link-primary" onClick={changeAuthMode}>
//               Sign Up
//             </span>
//           </div>
//           <div className="form-group mt-3">
//             <label>Email</label>
//             <input
//               name="email"
//               type="email"
//               className="form-control mt-1"
//               placeholder="Enter email"
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label>Password</label>
//             <input
//               name="password"
//               type="password"
//               className="form-control mt-1"
//               placeholder="Enter password"
//             />
//           </div>
//           <div className="d-grid gap-2 mt-3">
//             <button type="submit" className="loginbtn">
//               Submit
//             </button>
//           </div>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//         </div>
//         {error && error.response && <div> {error.response.data} </div>}
//       </form>
//     </div>
//   );
// };

// export default SignUp;
