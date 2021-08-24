import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import * as Font  from 'expo-font'
import AppLoading from 'expo-app-loading';
import drawerNavigator from "./routes/drawer";

//add fonts tu trong assets/fonts
const getFonts = () => Font.loadAsync({
    'nunito-regular' : require ('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold' : require ('./assets/fonts/Nunito-Bold.ttf')
  });


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if(fontsLoaded){
    return (
      drawerNavigator() 
    );
  } else {
    return (
    <AppLoading
      startAsync={getFonts}
      onFinish={() => setFontsLoaded(true)}
      onError={console.warn}
    />
    )
  }



 
}

