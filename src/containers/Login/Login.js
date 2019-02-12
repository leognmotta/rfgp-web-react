import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import * as actionCreators from '../../store/actions/index';

class Login extends Component {
  render() {
    return (
      <div>
        <h1> {this.props.auth} </h1>
      </div>
    );
  }
}

//styles
const styles = theme => ({
  root: {
    color: '#ffffff'
  }
});

//redux
const mapStateToProps = state => {
  return {
    auth: state.auth.isLogged
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: () => dispatch(actionCreators.login())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Login));
