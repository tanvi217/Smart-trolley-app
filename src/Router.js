import React from 'react';
import {Scene, Router} from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import PurchasesList from './components/PurchasesList';
import PurchaseDetail from './components/PurchaseDetail';
import PurchasePred from './components/PurchasePred';
import MainScreen from './components/MainScreen';
import Discounts from './components/Discounts';

const RouterComponent = () => {
  return (
    <Router navigationBarStyle={{backgroundColor: '#3F51B5'}}>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Welcome back!"
            initial></Scene>
        </Scene>
        <Scene key="main">
          <Scene
            key="mainScreen"
            component={MainScreen}
            title="Smart Trolley"
          />
          <Scene
            key="purchasesList"
            component={PurchasesList}
            title="Purchases"
          />
          <Scene
            key="purchaseDetail"
            title="Purchase Details"
            component={PurchaseDetail}
          />
          <Scene
            key="purchasePred"
            component={PurchasePred}
            title="Sales Predictions"
          />
          <Scene key="offers" component={Discounts} title="Offers" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
