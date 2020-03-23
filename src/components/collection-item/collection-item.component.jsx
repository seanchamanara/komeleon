import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';


const CollectionItem = ( { item, addItem } ) => {

    //destructuring props from item
    const { name, price, imageUrl } = item;
    
    return (
    <div className='collection-item'>
        <div 
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton onClick={()=> addItem(item)} inverted> Add to cart </CustomButton>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    //addItem goes into CollectionItem function above as the addItem function, the function will receive item as a prop and dispatch it into addItem action creater 
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);