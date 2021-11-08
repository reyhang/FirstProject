import React,{useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import IconComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, fonts} from '../../constants';

export default function Input({
  onChangeText,
  value = '',
  isHidden,
  icon,
  placeHolder = '',
  placeHolderTextColor,
  style,
  color,
}) {

const [showPass, setshowPass] = useState(false)

  return (
    <View style={styles.container}>
      <Icons
        name={icon}
        size={20}
        color={color}
        style={{marginRight: 10, marginTop: 15}}
      />
      <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholder={placeHolder}
        placeholderTextColor={colors.light_grey}
        secureTextEntry={isHidden ? !showPass : false}
        style={styles.input}
      />
      {isHidden && (
        <IconComunity
          name={showPass ? 'eye' : 'eye-off'}
          style={styles.icon}
          onPress={() => setshowPass(pass => !pass)}
          size={25}
          color={showPass? colors.light_pink : colors.light_blue}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#97a1be',
  },
  input: {
    width: 250,
    marginTop: 3,
    fontSize: fonts.f13,
    letterSpacing: 1,
    fontWeight: '600',
  },
  icon:{
      alignSelf:"flex-end",marginRight: 10, marginTop: 15
  }
});
