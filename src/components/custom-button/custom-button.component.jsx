import React from 'react';

import './custom-button.styles.scss';

//isGoogleSignIn is a classname based  prop, if true assigns google sign in styling, if not signed in, empty string (default styling) 
 const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`} {...otherProps} >
        {children}
    </button>
 );

 export default CustomButton;