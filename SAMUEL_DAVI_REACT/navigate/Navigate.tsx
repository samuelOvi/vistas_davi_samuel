import {NavigationContainer} from '@react-navigation/native';
import React from 'react'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CounterScreen from '../screens/CounterScreen';
import CounterScreen2 from '../screens/CounterScreen2';
import {Provider } from 'react-native-paper';
import { RootStackParamList } from '../types';
import {Provider as PaperProvider,} from 'react-native-paper';

export default function Navigation() {
  return (
    <PaperProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
    </PaperProvider>
  );
}
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
      <Stack.Navigator initialRouteName='Counter'>
          <Stack.Screen name="Counter" component={CounterScreen}  />
          <Stack.Screen name="Counters" component={CounterScreen2} />
      </Stack.Navigator>
  );
}
