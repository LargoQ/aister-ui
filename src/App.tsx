//File: /src/App.tsx

import * as React from 'react';
import { ReactElement, useEffect } from 'react'
import { StyleSheet, Linking } from 'react-native'
import 'react-native-gesture-handler'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import * as WebBrowser from 'expo-web-browser';

import Navigation from './core/navigation/Navigation'
import { AuthProvider, useAuth } from './core/auth/AuthProvider'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start' // align items to the start of the main axis (horizontal axis)
  },
  text: {
    marginBottom: 8
  },
  emoji: {
    fontSize: 82,
    marginBottom: 24
  }
})

WebBrowser.maybeCompleteAuthSession();

const AppContent: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
}

export default function App(): ReactElement {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </SafeAreaProvider>
  )
}
