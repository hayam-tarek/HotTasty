import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './page/home';
import Register from './page/register';
import SignIN from './page/signIN';
import Profile from './page/profile';
import GetStart from './page/getStart';
import ForgetPass from './page/forgetPass';
import Index from "./routes/index";

//const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Index />
  );
}
;