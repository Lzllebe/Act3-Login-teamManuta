import {  StyleSheet, Text,TouchableOpacity } from 'react-native';
import { RootTabScreenProps } from '../types';
import React, { useState } from 'react';
import ViewWithLoading from '../components/ViewWithLoading';
import { View } from '../components/Themed';
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import HeaderLottie from './HeaderLottie';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const [loading,setLoading]=useState<boolean>(false);
  

  setTimeout(() => {
   setLoading(false)
  }, 5000 );

  return (
    <ViewWithLoading
              loading= {false}
              
      >
     
      <View style= {
        [
          styles.container
        ] }>
      
        <Button
                containerStyle={{
                  width: 200,
                  marginLeft: 250,
                }}
                title="Sign Up"
                type="clear"
                titleStyle={{ color: 'rgba(149, 165, 166)' }}
        />

        
            <Text style={{
              fontWeight: "bold",
              fontSize: 25,
                  color: 'black',
                  paddingTop: 25,
                  marginLeft: 50,
                  marginBottom: 49
            }}>Log In</Text>

      <View style={
        [
          styles.textboxcontainer
        ]
      }>
           <TextInput
            label="Username"
          />
      </View>
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
     <View style = {{
       backgroundColor : '#EEEDDE',
       flexDirection: 'row',
       justifyContent: 'center',
       marginTop: 10
     }}><Button
                title="Log in"
                loading={false}
                loadingProps={{ size: 'small', color: 'white' }}
                buttonStyle={{
                  backgroundColor: 'black',
                  borderRadius: 90,
                }}
                titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                containerStyle={{
               //   marginHorizontal: 50,
                  height: 50,
                  width: 300,
                //  marginVertical: 10,
                }}
                onPress={() => console.log('aye')}
         />
         </View>

        

          <Text style={{
          marginTop: 25,
          fontSize: 15,
          color: 'black',
          textAlign: 'center'
        }}>Or sign in with social account</Text>

         <View style = {{
            backgroundColor : '#EEEDDE',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 30,
            flex: 2
         }}>
           <Button
                title="facebook"
                icon={{
                  name: 'user',
                  type: 'font-awesome',
                  size: 15,
                  color: 'white',
                }}
                iconRight
                iconContainerStyle={{ marginLeft: 10 }}
                titleStyle={{ fontWeight: '700' }}
                buttonStyle={{
                  backgroundColor: '#3b5998',
                  borderColor: 'black',
                  borderWidth: 1,
                  borderRadius: 30,
                }}
                containerStyle={{
                  width: 150,
                  height: 200,
                  
             //     marginHorizontal: 50,
             //     marginVertical: 10,
                    marginRight: 5
                }}
              />
              <Button
                title="Google"
                icon={{
                  name: 'user',
                  type: 'font-awesome',
                  size: 15,
                  color: 'white',
                }}
                iconRight
                iconContainerStyle={{ marginLeft: 10 }}
                titleStyle={{ fontWeight: '700' }}
                buttonStyle={{
                  backgroundColor: '#FF5252',
                  borderColor: 'black',
                  borderWidth: 1,
                  borderRadius: 30,
                }}
                containerStyle={{
                  width: 150,
                  height: 200,
                  
             //     marginHorizontal: 50,
              //    marginVertical: 10,
                    marginRight: 5
                }}
              />
           </View>
                
           <View style ={{
        }}> 
         <TouchableOpacity
        style={styles.button}
       >
        <Text style ={{
          marginTop: 15,
          fontSize: 15,
          textDecorationLine: 'underline',
          color: 'black',
          textAlign: 'center'
        }} >Forgot Password</Text>
         </TouchableOpacity>
          </View>
    
        

  </View>
  </ViewWithLoading>
 );
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
    marginHorizontal: 25,
    marginVertical: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#EEEDDE",
    padding: 10
  },
}
)
    
