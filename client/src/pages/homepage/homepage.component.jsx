import React from 'react';

import Directory from '../../components/directory/directory.component';



import { HomePageContainer, HomePageTitle, HomePageTitleSub } from './homepage.styles';

const Homepage = () => (
    <HomePageContainer>
        <Directory />
        <HomePageTitle>
            <div>"Life's too short to wear boring clothes."</div>
        </HomePageTitle>
        <HomePageTitleSub>
            <div>- Carly Cushnie and Michelle Ochs, Cushnie Et Ochs</div>
            </HomePageTitleSub>
    </HomePageContainer>
);

export default Homepage;