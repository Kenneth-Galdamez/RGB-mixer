import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

export const useColor = () => {
    const [red, setRed] = useState(255);
    const [green, setGreen] = useState(255);
    const [trans, setTrans] = useState(1);
    const [blue, setBlue] = useState(255);
    const [rgb, setRGB] = useState(`rgba(255, 255, 255, 1)`)

    const evalRed = (val = "+") => {
        var tempRed = red;
        if (val == "+" && red < 255) {
            tempRed = red + 1;
            setRed(tempRed);
        }
        if (val == "-" && red > 0) {
            tempRed = red - 1;
            setRed(tempRed);
        }
    };
    


    const evalGreen = (val = "+") => {
        var tempGreen = green;
        if (val == "+" && green < 255) {
            tempGreen = green + 1;
            setGreen(tempGreen);
        }
        if (val == "-" && green > 0) {
            tempGreen = green - 1;
            setGreen(tempGreen);
        }
    };
    
    const evalBlue = (val = "+") => {
        var tempBlue = blue;
        if (val == "+" && blue < 255) {
            tempBlue = blue + 1;
            setBlue(tempBlue);
        }
        if (val == "-" && blue > 0) {
            tempBlue = blue - 1;
            setBlue(tempBlue);
        }
    };
    
    const evalTrans = (val = "+") => {
        var tempTrans = trans;
        if (val == "+" && trans < 1) {
            tempTrans = trans + 0.01;
            setTrans(tempTrans);
        }
        if (val == "-" && trans > 0) {
            tempTrans = trans - 0.01;
            setTrans(tempTrans);
        }
    };

    const manualRed = (val = 255) => {
        if (val<=255 && val>=0){
            setRed(val);
        }
    }

    const manualGreen = (val = 255) => {
        if (val<=255 && val>=0){
            setGreen(val);
        }
    }
    
    const manualBlue = (val = 255) => {
        if (val<=255 && val>=0){
            setBlue(val);
        }
    }

    const manualTrans = (val = 255) => {
        if (val<=1 && val>=0){
            setTrans(val);
        }
    }

    useEffect(()=>{
        setRGB(`rgba(${red}, ${green}, ${blue}, ${trans})`)
    }, [red,green,blue,trans])

    return{
        red,
        green,
        trans,
        blue,
        evalBlue,
        evalGreen,
        evalRed,
        evalTrans,
        manualBlue,
        manualGreen,
        manualRed,
        manualTrans,
        rgb
    }   
}