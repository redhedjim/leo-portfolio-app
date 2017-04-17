import React, { Component } from 'react';
import './App.css';
import MainPage from './pages/mainPage/mainPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { grey900 } from 'material-ui/styles/colors';
injectTapEventPlugin()

/*Set some custom colors on material UI items*/
const muiTheme = getMuiTheme({
  palette: {   
    primary1Color: grey900
  }
});

class App extends Component {
  render() {   
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
        <MainPage />
      </MuiThemeProvider>
    );
  }
}

export default App;
