import {  StyleSheet, Text,TouchableOpacity } from 'react-native';
import { RootTabScreenProps } from '../types';
import React, { useState } from 'react';
import ViewWithLoading from '../components/ViewWithLoading';
import { View } from '../components/Themed';
import { Button } from 'react-native-elements';
import HeaderLottie from './HeaderLottie';
import { TextInput } from 'react-native-paper';
import { Image } from 'react-native-elements';


export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {

  const [loading,setLoading]=useState<boolean>(false);
  

  setTimeout(() => {
   setLoading(false)
  }, 5000 );


  return(
    <ViewWithLoading
              loading= {false}
              
      >
    <View style= {
      [
        styles.container
      ] }>
         <View style={
        [
          styles.imagecontainer
        ]
      }>
        <Image source={{uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/274827825_3186164488318482_5132147312115164709_n.png?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeE_NO3cY7M2sPvHjq0u2nhHAgiUoMkbkEICCJSgyRuQQoT7VJEkjjY9pRew4yBNzr4D-DXAQOxnp4z0eBwGAw5v&_nc_ohc=SVbr0bMwmr4AX82CgQx&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKx2MYbJPordnJsOMI-3R3lpLUZw6_Ks3yuryNx580CAg&oe=6255FBAA'}}
         style={{width: 350, height: 60}} />
       </View>

         <View style={
        [
          styles.textboxcontainer
        ]
      }>
           <TextInput
            label="First Name"

       /></View>
        <View style={
        [
          styles.textboxcontainer
        ]
      }>
           <TextInput
            label="Last Name"

       /></View>
       <View style={
        [
          styles.textboxcontainer
        ]
      }>
           <TextInput
            label="Email Address"
       /></View>
       <View style={
        [
          styles.textboxcontainer
        ]  
      }>
          <TextInput
          label="Password"
          secureTextEntry
          right={<TextInput.Icon name="eye" />}
        />
      </View>
      <View style={
        [
          styles.textboxcontainer
        ]  
      }>
          <TextInput
          label="Retype Password"
          secureTextEntry
          right={<TextInput.Icon name="eye" />}
        />
      </View>

        <View style = {{
       backgroundColor : '#EEEDDE',
       flexDirection: 'row',
       justifyContent: 'center',
       marginTop: 5
        }}> 
        <Button
            title="Register"
            buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
            containerStyle={{
              width: 250,
              marginHorizontal: 50,
              marginVertical: 10,
        }} 
     titleStyle={{ color: 'white', marginHorizontal: 20 }}
   />
         </View>

        <View style ={{
        }}> 
         <TouchableOpacity
        style={styles.button}
       >
        <Text style ={{
          fontSize: 15,
          color: '#B80F0A',
          textAlign: 'center'
        }} >I already have an account</Text>
         </TouchableOpacity>
          </View>
    </View>
    </ViewWithLoading>

  )
  
}

  const styles = StyleSheet.create({
    container:{
      flex: 1,
       flexDirection: 'column',
      justifyContent: 'flex-start',
       backgroundColor: '#EEEDDE',
       paddingTop: 10
    },
    textboxcontainer:{
      marginHorizontal: 28,
      marginVertical: 6
    },
    button: {
      alignItems: "center",
      backgroundColor: "#EEEDDE",
      padding: 10
    },
    imagecontainer: {
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: "center",
      backgroundColor: "#EEEDDE",
      marginTop: 25,
      marginBottom: 20,
    },
  }
  );