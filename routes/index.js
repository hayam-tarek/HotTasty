import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../page/home';
import Register from '../page/register';
import SignIN from '../page/signIN';
import Profile from '../page/profile';
import GetStart from '../page/getStart';
import ForgetPass from '../page/forgetPass';
import Card from '../page/Card';
const Stack = createNativeStackNavigator();

const index = () => {

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
        <Stack.Screen name="Card" component={Card} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ForgetPass" component={ForgetPass} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default index;
;