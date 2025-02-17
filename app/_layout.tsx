import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Slot } from 'expo-router';
import { globalStyles } from './styles/global-styles';

const RGB_mixer = () => {
  return (
    <View style={globalStyles.background}>
      
      <Slot/>

      <StatusBar style="auto" />
    </View>
  );
}

export default RGB_mixer;

