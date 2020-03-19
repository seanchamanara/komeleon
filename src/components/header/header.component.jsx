import React from 'react';
import { Link } from 'react-router-dom';

//"connect" is a higher order function, connecting to redux
import { connect } from 'react-redux';



import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';


//currentUser de-structured from auth object
const Header = ( { currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            
            {
                currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                  )  :  (
                <Link className='option' to='/signin'>SIGN IN</Link>
                  )}
            <CartIcon />
        </div>
        {
            hidden ? null : 
            <CartDropdown />
       
        }
    </div>
);


//here state is reffering to the root reducer
const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
});
export default connect(mapStateToProps)(Header);