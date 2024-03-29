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
import HotDrinkScreen from '../page/items/HotDrinkScreen';
import burger from '../page/items/burger';
import colddrink from '../page/items/colddrink';
import Pizza from '../page/items/Pizza';
import cookies from '../page/items/cookies';
import Logo from '../page/Logo';
import items from '../page/items';
import pizzac from '../page/pizzac';
import burgers from '../page/burgers';


// import Signin from '../page/signIN';
// import SignUp from '../page/register';
// import Forget from '../page/Forget';
// import GoogleInfo from '../page/GoogleInfo';
const Stack = createNativeStackNavigator();

const index = () => {

  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Logo"
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
        <Stack.Screen name="Logo" component={Logo}
          options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="SignIN" component={SignIN} />
        <Stack.Screen name="Card" component={Card}  />
        <Stack.Screen name="HotDrinkScreen" component={HotDrinkScreen}  />
        <Stack.Screen name="burger" component={burger}  />
        <Stack.Screen name="colddrink" component={colddrink}  />
        <Stack.Screen name="items" component={items}  />
        <Stack.Screen name="cookies" component={cookies}  />
        <Stack.Screen name="Pizza" component={Pizza}  />
        <Stack.Screen name="pizzac" component={pizzac}  />
        <Stack.Screen name="burgers" component={burgers}  />
        <Stack.Screen name="Profile" component={Profile}  />
        <Stack.Screen name="ForgetPass" component={ForgetPass} />
        {/* <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Forget" component={Forget} />
        <Stack.Screen name="GoogleInfo" component={GoogleInfo} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default index;
;