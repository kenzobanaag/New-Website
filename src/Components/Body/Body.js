import React from 'react';
import About from './About';
import LanguageMenu from './LangMenu';
import Projects from '../Project/Projects';

const body = () => {
    return(
        <React.Fragment>
            <About/>
            <LanguageMenu/>
            <Projects/>
        </React.Fragment>
    );
}

export default body;