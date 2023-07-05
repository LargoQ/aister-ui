//File: /src/App/tsx
import { ReactElement } from 'react'
import { StyleSheet } from 'react-native'
import 'react-native-gesture-handler'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { Navigation } from './core/navigation/Navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginBottom: 8
  },
  emoji: {
    fontSize: 82,
    marginBottom: 24
  }
})

export default function App(): ReactElement {
  return (
    <SafeAreaProvider>
      <Navigation />
      {/* <SafeAreaView style={styles.container}>{<Navigation />}</SafeAreaView> */}
    </SafeAreaProvider>
  )
}
