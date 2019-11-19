import React from 'react';
import About from './About';
import LanguageMenu from './LangMenu';

const body = () => {
    return(
        <React.Fragment>
            <About/>
            <LanguageMenu/>
        </React.Fragment>
    );
}

export default body;