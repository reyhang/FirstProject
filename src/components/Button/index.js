import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {colors, fonts} from "../../constants"


export default function Button({text,onPress}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.button} >
                <Text style={styles.text}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor:colors.lila,
    alignSelf: 'center',
  },
  button: {
      width:"100%",
      justifyContent:"center"
      
  },
  text: {
      fontSize:fonts.f12,
      height:15,
      letterSpacing:1.2,
      fontWeight:"600",
      color:colors.light_grey
  },
});