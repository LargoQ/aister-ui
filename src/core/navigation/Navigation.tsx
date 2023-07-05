// File: /src/core/navigation/Navigation.tsx
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import { Home } from './home/Home'
import { Test } from './home/Test'

const Drawer = createDrawerNavigator()

function DrawerGroup() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Test" component={Test} />
    </Drawer.Navigator>
  )
}

export const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <DrawerGroup />
    </NavigationContainer>
  )
}

export default Navigation
