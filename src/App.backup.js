import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUser, apiRequest } from './actions/userActions';

class App extends Component {

  constructor(props){
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this)
  }

  onUpdateUser(e){
    this.props.onUpdateUser(e.target.value)
  }

  componentDidMount(){
      this.props.onApiRequest();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input onChange={this.onUpdateUser} />
        <h3>{this.props.user}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {

  return {
    products: state.products,
    user: state.user,
    balaUser: `${state.user} ${props.aRandome}`
  }

}

const mapActionsToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest
}

export default connect( mapStateToProps, mapActionsToProps)(App)

// const mapActionsToProps = (dispatch, props) => {
//   console.log(props)
//   return bindActionCreators( {
//     onUpdateUser: updateUser
//   }, dispatch )
// }

// const mergeProps = ( propsFromTheState, propsFromDispatch, ownProps ) => {
//   console.log(propsFromTheState, propsFromDispatch, ownProps)
//   return {};
// }

// export default connect( mapStateToProps, mapActionsToProps, mergeProps )(App);

