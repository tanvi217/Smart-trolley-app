import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import {Container, Header, Left, Body, Right, Title} from 'native-base';

import LoginForm from './components/LoginForm';
import PurchasesList from './components/PurchasesList';
import PurchaseCreate from './components/PurchaseCreate';
import PurchaseDetail from './components/PurchaseDetail';
import PurchasePred from './components/PurchasePred';

const RouterComponent = () => {
  return (
    <Router hideNavBar="true">
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please login"
            initial
            hideNavBar></Scene>
        </Scene>
        <Scene key="main">
          <Scene
            key="purchasesList"
            component={PurchasesList}
            title="Purchases"
            hideNavBar
          />
          <Scene
            key="purchaseCreate"
            title="Create Purchase"
            component={PurchaseCreate}
            hideNavBar
          />
          <Scene
            key="purchaseDetail"
            title="Details"
            component={PurchaseDetail}
            hideNavBar
          />
          <Scene
            key="purchasePred"
            component={PurchasePred}
            title="Purchase Predictions"
            hideNavBar
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
//cd Desktop\Noway\"Semester 6"\IOT\manager
