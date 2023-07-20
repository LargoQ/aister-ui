import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { makeRedirectUri, useAuthRequest, useAutoDiscovery } from 'expo-auth-session';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

type RootStackParamList = {
  Login: undefined;
  Main: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  formContainer: {
    width: '100%',
    maxWidth: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default function LoginScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Endpoint
  const discovery = useAutoDiscovery('https://login.microsoftonline.com/70514cbd-d710-4b5a-870c-53d63417ad68/v2.0');
  
  // Request
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '053a7c24-9c21-424f-8c7a-9473157872c9',
      scopes: ['openid', 'profile', 'email', 'offline_access'],
      redirectUri: makeRedirectUri({
        scheme: 'test1'
      }),
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      navigation.navigate('Main');
    }
  }, [response, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={() => {}} disabled />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            disabled={!request}
            title="Login with Azure AD"
            onPress={() => {
              promptAsync();
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Login with Google" onPress={() => {}} disabled />
        </View>
      </View>
    </View>
  );
}
