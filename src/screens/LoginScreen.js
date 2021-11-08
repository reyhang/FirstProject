import React, {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../components/Button';
import Input from '../components/input/index';
import {colors, images} from '../constants';

export default function LoginScreen() {
  const [pageData, setPageData] = useState({
    username: '',
    password: '',
  });

  const onChangeText = (key, value) => {
    console.log('onchange', key, value);
    setPageData(page => ({...page, [key]: value}));
  };

  return (
    <ScrollView style={{backgroundColor: colors.white}}>
      <View style={{backgroundColor: colors.backgroundColor}}>
        <Image
          source={images.login}
          style={{width: 200, height: 100, alignSelf: 'center'}}
          resizeMethod="scale"
          resizeMode="contain"
        />
        <Image
          source={images.login_people}
          style={{width: 80, height: 60, alignSelf: 'center'}}
          resizeMethod="scale"
          resizeMode="contain"
        />
        <View style={{marginVertical: 15}}>
          <Input
            onChangeText={text => onChangeText('username', text)}
            placeHolder="User Name"
            value={pageData.username}
            icon={'mail-outline'}
            color={colors.light_pink}
          />
        </View>
        <View style={{marginVertical: 15}}>
          <Input
            onChangeText={text => onChangeText('password', text)}
            placeHolder="Password"
            value={pageData.password}
            icon={'lock-outline'}
            color={colors.light_blue}
          />
          <View style={{marginVertical: 15}}>
            <Button
              onPress={() => alert('Giriş Yap Tetiklendi')}
              text={'Sign In'}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  conntainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
