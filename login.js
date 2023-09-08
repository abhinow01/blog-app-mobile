import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

async function onGoogleButtonPress() {
  try {
    
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
   
    const { idToken } = await GoogleSignin.signIn();

    
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

   
    await auth().signInWithCredential(googleCredential);

    console.log('Signed in with Google!');
  } catch (error) {
    console.error(error);
  }
}

export default function Login() {
  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId: '982587669880-u0nfuqq1rvvk9mri0r4at7urc7nldr36.apps.googleusercontent.com',
    });
  }, []);

  return (
    <View style={styles.container}>
      
      <Button title="Google Sign-In" onPress={onGoogleButtonPress} />
      <StatusBar style="auto" />
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
