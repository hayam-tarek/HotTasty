import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './page/home';
import Register from './page/register';
import SignIN from './page/signIN';
import Welcome from './page/welcome';
import GetStart from './page/getStart';
import ForgetPass from './page/forgetPass';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'dodgerblue',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="GetStart" component={GetStart} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="SignIN" component={SignIN} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="ForgetPass" component={ForgetPass} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
;