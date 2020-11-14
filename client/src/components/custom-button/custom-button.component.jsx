import React from 'react';

// import './custom-button.styles.scss';

import { CustomButtonContainer } from './custom-button.styles.jsx';

//isGoogleSignIn is a classname based  prop, if true assigns google sign in styling, if not signed in, empty string (default styling) 
 const CustomButton = ({children, ...props }) => (
    <CustomButtonContainer { ...props }>
        {children}
    </CustomButtonContainer>
 );

 export default CustomButton;