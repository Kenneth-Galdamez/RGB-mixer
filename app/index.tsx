import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from './styles/global-styles'
import CounterButton from '../components/CounterButton'
import {useColor} from '../constants/hooks/useColor'
import ColorBar from '../components/colorBar'

const index = () => {
  
  
  const {
        red,
        blue,
        green,
        trans,
        evalBlue,
        evalGreen,
        evalRed,
        evalTrans,
        manualBlue,
        manualRed,
        manualGreen,
        manualTrans,
        rgb
  } = useColor();

  
  return (
    <View style={globalStyles.colorContainer}>
        <View style={{...globalStyles.canvas,backgroundColor: rgb}}>
          <Text>{rgb}</Text>
        </View>

        <View style={{...globalStyles.row, backgroundColor: "rgba(255,0,0,0.5)"}}>

           <CounterButton label="-" onPress={() => evalRed("-")}/>
           <ColorBar label={red.toString()} onChangeText={manualRed}/>
           <CounterButton label="+" onPress={() =>  evalRed("+")}/>
        </View>

        <View style={{...globalStyles.row, backgroundColor: "rgba(0,255,0,0.5)"}}>

           <CounterButton label="-" onPress={() => evalGreen("-")}/>
           <ColorBar label={green.toString()} onChangeText={manualGreen}/>
           <CounterButton label="+" onPress={() =>  evalGreen("+")}/>
        </View>

        <View style={{...globalStyles.row, backgroundColor: "rgba(0,0,255,0.5)"}}>

           <CounterButton label="-" onPress={() => evalBlue("-")}/>
           <ColorBar label={blue.toString()} onChangeText={manualBlue}/>
           <CounterButton label="+" onPress={() => evalBlue("+")}/>
        </View>

        <View style={{...globalStyles.row, backgroundColor: "rgba(255,255,255,0.2)"}}>

           <CounterButton label="-" onPress={() => evalTrans("-")}/>
           <ColorBar label={trans.toString()} onChangeText={manualTrans}/>
           <CounterButton label="+" onPress={() => evalTrans("+")}/>
        </View>

       
    </View>
  )
}

export default index