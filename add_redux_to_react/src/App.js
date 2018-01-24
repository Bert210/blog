import React, { Component } from 'react';
import DisplayContainer from './containers/DisplayContainer';
import CalButtonContainer from './containers/CalButtonContainer';

import './App.css';

class App extends Component {
  render() {
    const calButtonNodes = '789*456/123+0.-C='.split('').map(n => {
      return <CalButtonContainer key={n} value={n} />
    })

    return (
      <div className="App">
        <DisplayContainer />
        <div className="buttonsContainer">
          {calButtonNodes}
        </div>
      </div>
    );
  }
}

export default App;
