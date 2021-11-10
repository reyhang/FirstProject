import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {userLogout} from '../redux/system/actions';
import {colors, fonts} from '../constants';
import Button from '../components/Button';

export default function HomeScreen() {
  const dispatch = useDispatch();

  return (
    <View>
      <Text style={styles.text}> WELCOME </Text>
      <View>
        <Button onPress={() => dispatch(userLogout())} text={'Logout'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

    text: {
        fontWeight:"bold",
        fontSize:fonts.f20,
        letterSpacing:2,
        color:colors.light_grey,
        alignSelf:"center",
        margin:150
    },
  });
