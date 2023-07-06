//File: /src/App.tsx

import { ReactElement, useEffect } from 'react'
import { StyleSheet, Linking } from 'react-native'
import 'react-native-gesture-handler'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

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

const AppContent: React.FC = () => {
  const { handleAccessToken } = useAuth();

  useEffect(() => {
    const handleOpenURL = (event: { url: string }) => {
      const { url } = event;
      const [, query] = url.split('?');
      const params = new URLSearchParams(query);
      const accessToken = params.get('access_token');
      if (accessToken) {
        handleAccessToken(accessToken);
      }
    };
  
    // Add the event listener
    const handlePopState = (event: PopStateEvent) => {
      handleOpenURL({ url: window.location.href });
    };
    window.addEventListener('popstate', handlePopState);
  
    // Get initial URL
    handleOpenURL({ url: window.location.href });
  
    // Return a cleanup function that removes the event listener
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [handleAccessToken]);
  

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
