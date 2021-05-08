import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div
        data-testid="404-error"
        className="PageNotFound"
      >
        <h1>404</h1>
        Página não encontrada
      </div>
    );
  }
}

export default NotFound;
