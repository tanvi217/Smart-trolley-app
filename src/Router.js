import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import PurchasesList from './components/PurchasesList';
import PurchaseCreate from './components/PurchaseCreate';
import PurchaseDetail from './components/PurchaseDetail';
import PurchasePred from './components/PurchasePred';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please login"
            initial
          />
        </Scene>
        <Scene key="main">
          <Scene
            key="purchasesList"
            component={PurchasesList}
            title="Purchases"
          />
          <Scene
            key="purchaseCreate"
            title="Create Purchase"
            component={PurchaseCreate}
          />
          <Scene
            key="purchaseDetail"
            title="Details"
            component={PurchaseDetail}
          />
          <Scene
            key="purchasePred"
            component={PurchasePred}
            title="Purchase Predictions"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
//cd Desktop\Noway\"Semester 6"\IOT\manager
