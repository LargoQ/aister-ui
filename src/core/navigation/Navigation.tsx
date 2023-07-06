// File: /src/core/navigation/Navigation.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'

import { Settings } from './home/Settings'
import { Home } from './home/Home'
import ChatsScreen from '../../modules/chats/screens/ChatsScreen'
import { useAuth } from '../auth/AuthProvider'
import LoginScreen from '../auth/LoginScreen'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const { checkAuthorization } = useAuth();

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ flex: 1, justifyContent: 'space-between' }}
    >
      <View>
        <DrawerItem
          label="Home"
          focused={props.state.index === 0}
          onPress={() => props.navigation.navigate('Home')}
        />
        <DrawerItem
          label="Chat"
          focused={props.state.index === 1}
          onPress={() => props.navigation.navigate('Chat')}
        />
      </View>
      <View>
        <DrawerItem
          label="Settings"
          focused={props.state.index === 2}
          onPress={() => props.navigation.navigate('Settings')}
        />
        <DrawerItem
         label="Log Out"
          onPress={checkAuthorization}
        />
      </View>
    </DrawerContentScrollView>
  )
}

function DrawerGroup() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Chat" component={ChatsScreen} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  )
}

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  )
}

export const Navigation: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerGroup /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default Navigation
