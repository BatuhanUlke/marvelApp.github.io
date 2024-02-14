import React from 'react';
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      console.error('Error caught by ErrorBoundary:', error, errorInfo);
      // Log the error, send it to a logging service, etc.
    }
  
    render() {
      if (this.state.hasError) {
        return <div>Something went wrong.</div>;
      }
      return this.props.children;
    }
  }
  export default ErrorBoundary;