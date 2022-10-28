// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import{Header, Icon} from 'semantic-ui-react'


function App() {
  return (
    <div className="App dark">
    <Header as='h1' color='olive' dividing>
    <Icon name='universal access' />
    <Header.Content> Welcome to: Pro-Active</Header.Content>
        <Header.Subheader >
          "Why be REACTive? When it's better to be Proactive!"
        </Header.Subheader>
    </Header>
        <h1>
          <NavBar />
        </h1>
    </div>
  );
}

export default App;
