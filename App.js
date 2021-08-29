import React, { useState } from 'react';
import { styles } from './styles/style';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import MainStack from './navigation'



const fonts = () => Font.loadAsync({
  'MstBold': require('./assets/fonts/Montserrat-Bold.ttf'),
  'MstLight': require('./assets/fonts/Montserrat-Light.ttf')
})

const App = () => {

  const [font, setFont] = useState(false)

  if (font) {

    return (
      <MainStack />
    )
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn}
      />
    )
  }
}


export default App;