import React from 'react';

class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    console.log('in component did catch');
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    if (hasError) return 'Error';

    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    return children;
  }
}

export default Error;
