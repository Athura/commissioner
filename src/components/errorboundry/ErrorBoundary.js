import React, { Component } from 'react'

 class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });

    // Console log the error, normally we would send to an error logging service.
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong!</h1>
    }
    return this.props.children;
  }
}

export default ErrorBoundary; 