import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}) {

    const logout = async() => {
        await AsyncStorage.removeItem('token')
        navigation.navigate('Login')
    }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
     <Text>Tu es connecter</Text>
     <Button onPress={logout} title="deconnexion"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
