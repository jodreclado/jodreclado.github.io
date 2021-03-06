// reactjs.org/docs/error-boundaries.html
import React, { Component, ErrorInfo } from 'react';
import { Link, Redirect } from 'react-router-dom';

class ErrorBoundary extends Component {
  public state = {
    redirect: "",
    hasError: false
  };

  public static getDerivedStateFromError() {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  public componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }  
  
  public render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          An error has occurred. <Link to="/">Click here</Link>{" "} 
          to go back to the home page or wait five seconds.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;