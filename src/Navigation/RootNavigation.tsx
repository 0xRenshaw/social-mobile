import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../HomeScreen/HomeScreen';
import CreatePostScreen from '../CreatePostScreen/CreatePostScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const RootNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{title: ''}}
          name={'Home'}
          component={HomeScreen}
        />
        <Stack.Screen
          options={{title: 'Create Post'}}
          name={'PostCreate'}
          component={CreatePostScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
