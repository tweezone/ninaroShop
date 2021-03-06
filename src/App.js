import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import {connect} from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import {selectCurrentUser} from './redux/user/user.selector';


import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from "./redux/user/user.action";

class App extends React.Component{
 
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
         
          console.log('good nancy');
         
        });
      }
      setCurrentUser(userAuth);
      //this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    console.log('nancy nancy nancy, app rendered111111!!!!!!!')
    return (
    
      <div className="App">
      <Header />
      <Switch>
   <Route exact path="/" component={HomePage}/>
   <Route path="/shop" component={ShopPage}/>
   <Route exact path='/checkout' component={CheckoutPage}/>
   <Route exact path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
   
   <Route exact path="/signin" render ={
    ()=>
      this.props.currentUser ? (<Redirect to='/'/>)
    : (<SignInAndSignUpPage/>)
  
   }/>
   </Switch>
        
      </div>
      
    );
  }
}

// const mapStateToProps = createStructuredSelector({ 
//   currentUser: selectCurrentUser
// });
const mapStateToProps = (state)=>{
  console.log('app app app app mapstatetoprops');
 return { 
  currentUser: state.user.currentUser
}};
const mapDispatchToProps = (dispatch) =>({
  setCurrentUser: user =>dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
  
