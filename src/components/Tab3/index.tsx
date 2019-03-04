import { IonButtons, IonContent, IonDatetime, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

export default class Tab3 extends React.Component {
  render() {
    return (<>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="ion-padding about-info">
          <h4>Just a regular title Tab3</h4>

          <IonList lines="none">
            <IonItem>
              <IonIcon name="calendar" slot="start"></IonIcon>
              <IonLabel>Date Picker</IonLabel>
              <IonDatetime displayFormat="MMM DD, YYYY" max="2056" value={null}></IonDatetime>
            </IonItem>

            <IonItem>
              <IonIcon name="pin" slot="start"></IonIcon>
              <IonLabel>Selector</IonLabel>
              <IonSelect>
                <IonSelectOption value="madison" selected>Madison, WI</IonSelectOption>
                <IonSelectOption value="austin">Austin, TX</IonSelectOption>
                <IonSelectOption value="chicago">Chicago, IL</IonSelectOption>
                <IonSelectOption value="seattle">Seattle, WA</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>

          <p>
            Just a regular paragrah passing by
           		 	</p>
        </div>
      </IonContent>
    </>)
  }
}