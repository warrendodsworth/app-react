import { IonApp, IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Tab1 from '../Tab1';
import Tab2 from '../Tab2';
import Tab3 from '../Tab3';

class Home extends Component {
  render() {
    return (
      <IonApp>
        <IonPage>

          <IonTabs>
            <IonRouterOutlet>
              <Route path="/:tab(tab1)" component={Tab1} exact />
              <Route path="/:tab(tab2)" component={Tab2} exact />
              <Route path="/:tab(tab3)" component={Tab3} exact />
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/tab1">
                <IonIcon name="home" />
                <IonLabel>Tab 1</IonLabel>
              </IonTabButton>
              <IonTabButton tab="settings" href="/tab2">
                <IonIcon name="settings" />
                <IonLabel>Tab 2</IonLabel>
              </IonTabButton>
              <IonTabButton tab="about" href="/tab3">
                <IonIcon name="information-circle" />
                <IonLabel>Tab 3</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonPage>
      </IonApp>
    );
  }
}

export default Home