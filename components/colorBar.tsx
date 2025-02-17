import { Pressable, TextInput} from 'react-native'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../app/styles/global-styles';


interface Props {
    label: string;
    onChangeText: (numb: number) => void;
}


const ColorBar = ({
    label,
    onChangeText
} : Props) => {

    const [text, setText] = useState(label);
    useEffect(() => {
        setText(label);
      }, [label]); 
    
    
  return (
    <TextInput  testID="color-bar-input" style={globalStyles.input} value={text} onChangeText={(x) => { onChangeText(parseFloat(x))}}/>
  )
}

export default ColorBar