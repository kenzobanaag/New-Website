import React from 'react';
import Body from '../Body/Body';
import Header from '../Header/Header';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const container = () => {
    return(
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="md">
                <Header/>
                <Body/>
            </Container>
        </React.Fragment>
    );
}

export default container;