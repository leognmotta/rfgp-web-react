import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import api from '../../../services/api';

import Paper from '../../../components/UI/Paper/Paper';
import { Container } from './styles';

class ValidateEmail extends Component {
  state = {
    succeeded: false,
    successMessage: '',
    error: '',
  };

  async componentDidMount() {
    const { match } = this.props;
    try {
      const confirmEmail = await api.put(`/auth/validate-email/${match.params.token}`);
      this.setState({ succeeded: true, successMessage: confirmEmail.data.message });
    } catch (error) {
      const errorMessage = error.response.data.message;
      this.setState({ error: errorMessage });
    }
  }

  render() {
    const { succeeded, successMessage, error } = this.state;

    let message = successMessage;
    let color = '#5cb85c';
    let icon = <FaCheckCircle color="#fff" size="64" />;

    if (!succeeded) {
      message = error;
      color = '#d9534f';
      icon = <FaExclamationCircle color="#fff" size="64" />;
    }

    const element = (
      <Paper bgColor={color} flexDirection="row">
        {icon}
        <p style={{ color: '#fff', marginLeft: '20px' }}>{message}</p>
      </Paper>
    );

    return <Container>{element}</Container>;
  }
}

export default withRouter(ValidateEmail);

/**
 * Prop types
 */
ValidateEmail.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
};
