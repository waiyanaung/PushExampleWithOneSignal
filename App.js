import React, {useEffect} from 'react';
import {
  Text,
  View,
} from 'react-native';


import OneSignal from 'react-native-onesignal';

const App = () => {

    useEffect( () => {

        //OneSignal Init Code
        OneSignal.setLogLevel(6, 0);
        // William's one Signal App Info
        OneSignal.setAppId("65816dca-fcb9-45bf-bed9-649c889dd675");

        let externalUserId = "123456789"; // You will supply the external user id to the OneSignal SDK
        OneSignal.setExternalUserId(externalUserId);

        //Method for handling notifications opened
        OneSignal.setNotificationOpenedHandler(notification => {
            console.log("OneSignal: notification opened:", notification);
        });
        
    },[]);
    
  return (
    <View>
        <Text>Android Push</Text>
    </View>
  );
};

export default App;
