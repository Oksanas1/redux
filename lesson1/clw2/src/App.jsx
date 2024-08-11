import React, { Component } from 'react';
import Header from './Header';
import { UserDataContext } from './them-context';

class App extends Component {
  state = {
    name: 'Nikola Tesla',
    avatar_url: 'https://avatars3.githubusercontent.com/u10001'
  }
  render() {
    return (
      <UserDataContext.Provider value={this.state}>
        <div className="page">
          <Header />
        </div>
      </UserDataContext.Provider>
    )
  }
}

export default App;
