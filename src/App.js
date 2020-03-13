import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';



class App extends React.Component {


  unsubscribeFromAuth = null

  componentDidMount(){

    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      // this.setState({ currentUser: user });

      //if userAuth exists receive userAuth object from createUserProfileDocument method in firebase file, if userAuth object does not exist, firebase file will create a new userAuth object
      if (userAuth) {
        //creating userRef from createUserProfileDocument method, passing it the userAuth object
        const userRef = await createUserProfileDocument(userAuth);

        //subscribing to new user data, onSnapshot is a method that returns the snapshot object
        userRef.onSnapshot(snapShot => {

          //creating a new object using snapshot, setting state id and data(); 
            setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            });
    
        });
        
      }
     
        //if userAuth does not exists
      setCurrentUser(userAuth);
     

      // console.log(user);
    });
  }

  componentWillUnmount(){

    //closes firebase auth subscription
    this.unsubscribeFromAuth();
  }



  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}  />
          <Route  path='/shop' component={ShopPage}  />
          <Route  path='/signin' component={SignInAndSignUpPage}  />
        </Switch>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  //dispatch receives an action object that is sent to every root reducer, envoking setCurrentUser with user which will be used as thr payload
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(
  null, 
  mapDispatchToProps
  )(App);
