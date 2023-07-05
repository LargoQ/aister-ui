// File: /src/core/navigation/Navigation.tsx
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

import { Home } from './home/Home'
import { Test } from './home/Test'

const Drawer = createDrawerNavigator()

function DrawerGroup() {
  const navigation = useNavigation()

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
