import {  StyleSheet, Text,TouchableOpacity } from 'react-native';
import { RootTabScreenProps } from '../types';
import React, { useState } from 'react';
import ViewWithLoading from '../components/ViewWithLoading';
import { View } from '../components/Themed';
import { TextInput } from 'react-native-paper';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const [loading,setLoading]=useState<boolean>(false);
  

  setTimeout(() => {
   setLoading(false)
  }, 5000 );

  return (
    <ViewWithLoading
              loading= {false}
              
      >
       <View style={
          [
             styles.container1
          ]
        }>
            <View style={
          [
            styles.conradius1
          ]
        }>

      
        </View>
      
        </View>
        <View style={
          [
             styles.container2
          ]
        }>
          <View style={
          [
            styles.conradius2
          ]
        }>
            {/* <TextInput
            label="Email Address"
            autoComplete={false}
            keyboardType={"email-address"}
            mode={"outlined"}
            right={
                <TextInput.Icon
                    name={"email"}
                    color={"blue"}
                />
            }
            autoCapitalize={"none"}
            autoCorrect={false}
        /> */}
      
        </View>
      
        </View>
      
  </ViewWithLoading>
 );
}

const styles = StyleSheet.create({
  container1:{
    flex:1.1,
     flexDirection: 'column',
     backgroundColor: '#191d40',
    
  
  },
  conradius1:{
    flex:1.1,
     flexDirection: 'column',
     backgroundColor: 'white',
     borderBottomRightRadius: 100
  },

  container2:{
    flex: 1.2,
    backgroundColor: 'white',
    
  },
  conradius2:{
    flex:1,
     flexDirection: 'column',
     backgroundColor: '#191d40',
     borderTopLeftRadius: 100
  },
}
)
    
