import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import PurchasesList from './components/PurchasesList';
import PurchaseCreate from './components/PurchaseCreate';
import PurchaseEdit from './components/PurchaseEdit';

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
          <Scene key="purchaseEdit" title="Details" component={PurchaseEdit} />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
//cd Desktop\Noway\"Semester 6"\IOT\manager
