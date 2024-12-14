import { StyleSheet} from 'react-native';
import * as Font from 'expo-font';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import MainStack from './navigate'


const fonts = () => Font.loadAsync({
  'mtBold': require('./assets/fonts/Montserrat-Bold.ttf'),
  'mtLight': require('./assets/fonts/Montserrat-Light.ttf'),
});

export default function App() {
  const [font, setFont] = useState(false);


  if(font) {
    return (
      <MainStack></MainStack>
    );
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({

});
