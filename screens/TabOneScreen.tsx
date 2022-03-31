import {  ScrollView, StyleSheet, Text,TouchableOpacity } from 'react-native';
import { RootTabScreenProps } from '../types';
import React, { Fragment, useState } from 'react';
import ViewWithLoading from '../components/ViewWithLoading';
import { View } from '../components/Themed';
import { Button, ListItem } from 'react-native-elements';
import HeaderLottie2 from './HeaderLottie2';
import { TextInput } from 'react-native-paper';
import { Image } from 'react-native-elements';
import { Formik } from 'formik';
import * as yup from "yup";

export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {
  

  const [loading,setLoading]=useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  

  const registerSchema = yup.object({
    email: yup.string().required('Email address is required')
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/,
            'Invalid email address'),
    firstname: yup.string().required('First Name is required'),
    lastname: yup.string().required('Last Name is required'),
    password: yup.string().required('Password is required'),
    retypepassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
                    
});

      

  setTimeout(() => {
   setLoading(false)
  }, 5000 );
  
  return(
    <ViewWithLoading
              loading= {false}
              
      >
    <ScrollView
      contentContainerStyle= {{flexGrow:1 }}
      showsVerticalScrollIndicator={false}
    >

<View style= {
      [
        styles.container
      ] }>
         <Formik
                initialValues={{
                    firstname:'',
                    lastname: '',
                    email: '',
                    password: '',
                    retypepassword: ''
                }}
                onSubmit={(values, actions) => {
                  console.log(values);
                  actions.resetForm();
                }}
                validationSchema={registerSchema}
            >
                {({ handleChange, handleSubmit, values, touched, errors }) => (
                  <Fragment>
                      <View style={
        [
          styles.lottiecontainer
        ]
      }>
        <HeaderLottie2/>
       </View>

         <View style={
        [
          styles.textboxcontainer
        ]
      }>
           <TextInput
            label="First Name"
            autoComplete={false}
            value={values.firstname}
            onChangeText={handleChange('firstname')}
            mode={"outlined"}
            
            autoCapitalize={"none"}
            autoCorrect={false}
            autoFocus={true}
            error={errors.firstname ? true : false}
        />
        {errors.firstname &&
            <Text>
                {errors.firstname}
            </Text>
        }

       </View>
        <View style={
        [
          styles.textboxcontainer
        ]
      }>
           <TextInput
             label="Last Name"
             autoComplete={false}
             value={values.lastname}
             onChangeText={handleChange('lastname')}
             mode={"outlined"}
             
             autoCapitalize={"none"}
             autoCorrect={false}
             autoFocus={true}
             error={errors.lastname ? true : false}
         />
         {errors.lastname &&
             <Text>
                 {errors.lastname}
             </Text>
         }

        </View>
       <View style={
        [
          styles.textboxcontainer
        ]
      }>
           <TextInput
            label="Email Address"
            autoComplete={false}
        
            value={values.email}
            onChangeText={handleChange('email')}
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
            autoFocus={true}
            error={errors.email ? true : false}
        />
        {errors.email &&
            <Text>
                {errors.email}
            </Text>
        }
       </View>
       <View style={
        [
          styles.textboxcontainer
        ]  
      }>
          <TextInput
          label="Password"
          autoComplete={false}
            value={values.password}
            onChangeText={handleChange('password')}
            mode={"outlined"}
              right={
                    <TextInput.Icon
                      name={visible ? "eye" : "eye-off"}
                      onPress={() => {
                                       setVisible(!visible);
                                     }}
                                       color={"black"}
                                  />
                                }
                                secureTextEntry={!visible}
                                error={errors.password ? true : false}
                            />
                            {errors.password &&
                                <Text>
                                    {errors.password}
                                </Text>
                            }
      </View>
      <View style={
        [
          styles.textboxcontainer
        ]  
      }>
          <TextInput
          label="Retype Password"
          autoComplete={false}
            value={values.retypepassword}
            onChangeText={handleChange('retypepassword')}
            mode={"outlined"}
              right={
                    <TextInput.Icon
                      name={visible ? "eye" : "eye-off"}
                      onPress={() => {
                                       setVisible(!visible);
                                     }}
                                       color={"black"}
                                  />
                                }
                                secureTextEntry={!visible}
                                error={errors.retypepassword ? true : false}
                            />
                            {errors.retypepassword &&
                                <Text>
                                    {errors.retypepassword}
                                </Text>
                            }
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
            onPress={() => {
              handleSubmit();
              }}
            loading={loading}
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
                  </Fragment>
                     
                )}
            </Formik>
    </View>

    </ScrollView>
    </ViewWithLoading>

  )
  
}

  const styles = StyleSheet.create({
    container:{
      flex: 1,
       flexDirection: 'column',
      justifyContent: 'flex-start',
       backgroundColor: '#EEEDDE',
    },
    textboxcontainer:{
      marginHorizontal: 28,
      marginVertical: 6,
      backgroundColor: "#EEEDDE",
    },
    button: {
      alignItems: "center",
      backgroundColor: "#EEEDDE",
      padding: 10
    },
    lottiecontainer: {
       alignItems: 'center',
       flexDirection: 'row',
       justifyContent: 'center',
       backgroundColor: '#EEEDDE',
       marginBottom: 145

    },
  }
  );

function handleLogin(email: string, password: string) {
  throw new Error('Function not implemented.');
}

