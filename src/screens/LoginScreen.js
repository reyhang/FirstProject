import React, {useState} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../components/Button';
import CheckBox from '../components/CheckBox';
import Input from '../components/Input';
import {colors, fonts, images} from '../constants';
import DeviceInfo from "react-native-device-info" 

export default function LoginScreen() {

  const [pageData, setPageData] = useState({
    username: '',
    password: '',
  });

  const onChangeText = (key, value) => {
    setPageData(page => ({...page, [key]: value}));
  };

  const [rememberMe, setrememberMe] = useState(false);

  const handleRememberMe = () => {
    void setrememberMe(remember => !remember);

  };

  const versionNumber = DeviceInfo.getVersion();

  return (
    <ScrollView style={styles.conntainer}>
      <View style={styles.innerContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={images.login}
            style={styles.logo1}
            resizeMethod="scale"
            resizeMode="contain"
          />
          <Image
            source={images.login_people}
            style={styles.logo2}
            resizeMethod="scale"
            resizeMode="contain"
          />
        </View>
        <View >
          <Input
            onChangeText={text => onChangeText('username', text)}
            placeHolder="User Name"
            value={pageData.username}
            icon={'mail-outline'}
            color={colors.light_pink}
            
          />
       
          <Input
            onChangeText={text => onChangeText('password', text)}
            placeHolder="Password"
            value={pageData.password}
            icon={'lock-outline'}
            color={colors.light_blue}
            isHidden={true}
          />
          <View style={styles.rememberMeContainer}>
            <CheckBox
              onChangeState={() => handleRememberMe()}
              checked={rememberMe}
              checkedColor={colors.light_grey}
            />
            <Text style={styles.rememberMeText}>Remember Me</Text>
            </View>
            <View >
              <Button
                onPress={() => alert('Giriş Yap Tetiklendi')}
                text={'Sign In'}
              />
          </View>
        </View>
      </View>
      <View style={styles.versionNumberContainer}>
        <Text style={styles.versionNumberText}>{versionNumber}</Text> 

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  conntainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  innerContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  logo1: {
    marginTop: 25,
    width: 180,
    height: 90,
    alignSelf: 'center',
    tintColor: colors.light_pink,
  },
  logo2: {
    marginBottom: 25,
    width: 100,
    height: 50,
    alignSelf: 'center',
    tintColor: colors.light_blue,
  },
  logoContainer: {marginBottom: 25, alignItems: 'center'},
  rememberMeContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    fontSize: fonts.f12,
    fontWeight: '500',
    color: colors.light_grey,
    marginLeft:5
  },
  versionNumberText: {
    fontSize: fonts.f12,
    color:colors.light_grey,
  },
  versionNumberContainer:{
    paddingTop:90,
    paddingBottom:10,
    alignItems:"center",
    width:"100%"

  }
});
