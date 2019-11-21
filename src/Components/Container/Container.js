import React from 'react';
import Body from '../Body/Body';
import Header from '../Header/Header';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Contact from '../Body/Contact'

const container = () => {
    return(
        <React.Fragment>
            <CssBaseline/>
            <Header/>
            <Container maxWidth="md">
                <Body/>           
            </Container>
            <Contact/>
        </React.Fragment>
    );
}

export default container;