// File: /src/core/auth/LoginScreen.tsx

import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import { useAuth } from './AuthProvider';

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

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { checkAuthorization } = useAuth();

  const handleLogin = () => {
    // Handle the login with username and password here
  };

  const handleAzureADLogin = () => {
    // Handle the Azure AD login here
    checkAuthorization();
  };

  const handleGoogleLogin = () => {
    // Handle the Google login here
    checkAuthorization();
  };

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
          <Button title="Login" onPress={handleLogin} disabled />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Login with Azure AD" onPress={handleAzureADLogin} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Login with Google" onPress={handleGoogleLogin} disabled />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
