import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';


import {
    CollectionItemContainer,
    BackgroundImage,
    CollectionFooterContainer,
    AddButton,
    NameContainer,
    PriceContainer
    } from './collection-item.styles';


const CollectionItem = ( { item, addItem } ) => {

    //destructuring props from item
    const { name, price, imageUrl } = item;
    
    return (
    <CollectionItemContainer>
        <BackgroundImage className='image' imageUrl={imageUrl}/>
        <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={()=> addItem(item)} inverted> Add to cart </AddButton>
    </CollectionItemContainer>


)};

const mapDispatchToProps = dispatch => ({
    //addItem goes into CollectionItem function above as the addItem function, the function will receive item as a prop and dispatch it into addItem action creater 
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);