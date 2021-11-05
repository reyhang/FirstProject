import React from 'react'
import { View, Image, Text, Platform, StatusBar,KeyboardAvoidingView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from "../constants"

export default function LoginScreen () {
    return (
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
        <SafeAreaView
          style={{
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
          }}>
          <ScrollView>
              <View>
              <Image 
                 source={images.hello}
                 style={{width:300, height:100,alignSelf:"flex-end"}}
                 resizeMethod="scale"
                 resizeMode="contain"

                 />
                   <Image 
                 source={images.login}
                 style={{width:200, height:100,alignSelf:"center"}}
                 resizeMethod="scale"
                 resizeMode="contain"

                 />
                
              </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
}