import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
  // Grand Parent
  <View style={{
    flex: 1,
     flexDirection: 'column',
   justifyContent: 'flex-start',
     backgroundColor: '#EEEDDE',
     paddingTop: 30
  }}>
        <Text style={{
          fontSize: 15,
              color: 'gray',
              marginLeft: 270,
          }}>Sign Up</Text>

        <Text style={{
          fontWeight: "bold",
          fontSize: 25,
              color: 'black',
              paddingTop: 25,
              marginLeft: 50,
              marginBottom: 10
        }}>Log In</Text>

      <View style= {{
        backgroundColor: '#EEEDDE',
          height: '7%',
          width: '90%',
          borderRadius: 15,  
          marginLeft: 20
      }}></View>

        <Text style={{
        color: 'gray',
        paddingTop: 10,
        marginLeft: 50,
        fontWeight:'900'
      }}>USERNAME</Text>

        <View style={{
          backgroundColor: '#EEEDDE',
          borderBottomWidth: 1,
          height: '7%',
          width: '90%',
          borderRadius: 15, 
          marginBottom: 10,
          marginLeft: 20
      }}></View>

        <Text style={{
          color: 'gray',
          paddingTop: 10,
          marginLeft: 50,
        fontWeight:'900'
        }}>PASSWORD</Text>

        <View style= {{
        backgroundColor: '#EEEDDE',
        borderBottomWidth: 1,
          height: '7%',
          width: '90%',
          borderRadius: 15,  
          marginLeft: 20
      }}></View>

        <View style= {{
          backgroundColor: 'black',
          height: '8%',
          width: '90%',
          borderRadius: 100,
          marginTop: 20,
          marginLeft: 18,
          alignItems:'center',
          justifyContent: 'center',
      }}><Text style={{
        fontSize: 18,
        fontWeight:'900',
        color:'white'
        }}>Login</Text>
        </View>

        <Text style={{
          marginTop: 15,
          fontSize: 15,
          textDecorationLine: 'underline',
          color: 'black',
          textAlign: 'center'
        }}>Forgot Password</Text>

        <Text style={{
          marginTop: 25,
          fontSize: 15,
          color: 'black',
          textAlign: 'center'
        }}>Or sign up with social account</Text>

       <View style= {{
              //Code for FB Button and Google Button Design (Batang ina with kambal kids)
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              backgroundColor: '#EEEDDE',
              width: '100%',
              height: '100%',
              marginTop: 25,
              paddingRight: 20,
              paddingLeft:2
            }}>
                    <View style= {{
                      // Facebook Button Circle (child 1 ni batang ina)
                        backgroundColor: '#EEEDDE',
                        borderTopWidth: 1,
                        borderBottomWidth: 1,
                        borderLeftWidth: 1,
                        borderRightWidth: 1,
                        height: '9%',
                        width: '43%',
                        borderRadius: 100,
                        alignItems:'center',
                        justifyContent: 'center',
                    }}> 
                            <Text style={{
                              //Text FB code (apo)
                                color: 'black',
                                fontSize: 15, 
                                fontWeight:'900'
                            }}>Facebook</Text>
                    </View>
      
                    <View style= {{
                      // Google Button Circle (child 2 ni batang ina)
                        backgroundColor: '#EEEDDE',
                        borderTopWidth: 1,
                        borderBottomWidth: 1,
                        borderLeftWidth: 1,
                        borderRightWidth: 1,
                        height: '9%',
                        width: '43%',
                        borderRadius: 100,
                        alignItems:'center',
                        justifyContent: 'center',
                    }}>     
                            <Text style={{
                              //Text Google code (apo)
                                color: 'black',
                                fontSize: 15,
                                fontWeight:'900'
                            }}>Google</Text>
                    </View>
        </View>

    </View>
 );
}

 
     
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
