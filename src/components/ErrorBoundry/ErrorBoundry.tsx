import { Component } from 'react';
import { ErrorIndicator } from '..';

export default class ErrorBoundry extends Component {
  state = {
    hasError: false,
    error: ''
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator error={this.state.error} />;
    }

    return this.props.children;
  }
}
