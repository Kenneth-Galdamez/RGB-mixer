import { Pressable} from 'react-native'
import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../app/styles/global-styles';


interface Props {
    label: string;
    onPress: () => void;
}

const CounterButton = ({
    label,
    onPress
} : Props) => {
  return (
    <Pressable 
        style= {globalStyles.button} 
        onPress={( ) => {
          onPress();
        }}

    >
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  )
}

export default CounterButton