import React from 'react';
import {View,TextInput} from 'react-native';
import Icons from "react-native-vector-icons/MaterialIcons"


export default function Input({
  onChangeText,
  value="",
  isHidden,
  icon,
  placeHolder="",
  placeHolderTextColor,
  style,
  color,

}) {
  return (
    <View
     style={{flexDirection:"row",
     paddingBottom:10,
     borderBottomWidth:1,
     borderBottomColor:"#97a1be"}} >
      <Icons name={icon} size={20} color={color}  style={{marginRight:10,marginTop:15}} />
      <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholder={placeHolder}
        placeholderTextColor={placeHolderTextColor}
        secureTextEntry={isHidden? !showPass: false}
      />
    </View>
  );
}
