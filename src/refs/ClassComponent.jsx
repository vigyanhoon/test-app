import React from 'react';

class ClassComponent extends React.PureComponent {
  // eslint-disable-next-line class-methods-use-this, react/no-unused-class-component-methods
  aMethod() {
    return 'hi';
  }

  render() {
    return <div>I am class component</div>;
  }
}

export default ClassComponent;
