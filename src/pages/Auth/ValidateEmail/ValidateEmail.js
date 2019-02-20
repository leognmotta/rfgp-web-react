import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import api from '../../../services/api';

import Spinner from '../../../components/UI/Spinner/Spinner';
import Paper from '../../../components/UI/Paper/Paper';
import { Container } from './styles';

class ValidateEmail extends Component {
  state = {
    succeeded: null,
    message: '',
    update: false,
  };

  async componentDidMount() {
    const { match } = this.props;
    try {
      const confirmEmail = await api.put(`/auth/validate-email/${match.params.token}`);
      this.setState({ succeeded: true, update: true, message: confirmEmail.data.message });
    } catch (error) {
      const errorMessage = error.response.data.message;
      this.setState({ message: errorMessage, update: true });
    }
  }

  render() {
    const { message, succeeded, update } = this.state;

    const loading = (
      <Paper padding="1">
        <Spinner color="#262626" />
      </Paper>
    );

    let element;
    if (!succeeded) {
      element = (
        <Paper bgColor="#d9534f" flexDirection="row" padding="1">
          <FaExclamationCircle color="#fff" size="64" />
          <p style={{ color: '#fff', marginLeft: '20px' }}>{message}</p>
        </Paper>
      );
    } else {
      element = (
        <Paper bgColor="#5cb85c" flexDirection="row" padding="1">
          <FaCheckCircle color="#fff" size="64" />
          <p style={{ color: '#fff', marginLeft: '20px' }}>{message}</p>
        </Paper>
      );
    }

    return <Container>{update ? element : loading}</Container>;
  }
}

export default withRouter(ValidateEmail);

/**
 * Prop types
 */
ValidateEmail.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
};
