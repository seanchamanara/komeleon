import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { createStructuredSelector } from 'reselect';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    componentDidMount(){
      const { fetchCollectionsStartAsync } = this.props;
      fetchCollectionsStartAsync();

    }

    render(){
      
      const { match, isFetchingCollections, isCollectionsloaded } = this.props;
   
        
      return (       
        <div className='shop-page'>
            <Route exact path={`${match.path}`} 
                         render={ props => (
                         <CollectionsOverviewWithSpinner 
                          isLoading={isFetchingCollections} {...props} /> )}
            />
            <Route path={`${match.path}/:collectionId`} 
                         render={props => (
                         <CollectionPageWithSpinner 
                          isLoading={!isCollectionsloaded} {...props} />)}
            />
        </div>
        ); 
    }
} 


const mapStateToProps = createStructuredSelector({
  isFetchingCollections: selectIsCollectionFetching,
  isCollectionsloaded: selectIsCollectionsLoaded


})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
