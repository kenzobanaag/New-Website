import React from 'react';
import Body from '../Body/Body';
import Header from '../Header/Header';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Contact from '../Body/Contact';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {main: '#003747'},
      secondary: { main: '#335f6b'}
    },
  });

function ContainerFunc () {
    return(
        <React.Fragment>
            <CssBaseline/>
            <MuiThemeProvider theme={theme}>
            <Header/>
            <Container maxWidth="md">
                <Body/>           
            </Container>
            <Contact/>
            </MuiThemeProvider>
        </React.Fragment>
    );
}

export default ContainerFunc;