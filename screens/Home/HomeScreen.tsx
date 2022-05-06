
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { Fragment, useCallback, useState } from "react";
import { Alert, Platform, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Image, ListItem } from "react-native-elements";

import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "../../components/Themed";
import ViewWithLoading from "../../components/ViewWithLoading";
import { getData, storeData } from "../../database/StoreData";
import { Order } from "../../models/Order";
import { FAB } from "react-native-elements";


export default function HomeScreen() {

  const navigation = useNavigation();
  const [orderList,setOrderList] = useState<Array<Order> | null >(null);
  const [loading, setLoading] = useState <boolean> (false);


  const retrieveData = async () => {
    
    setLoading(true);

    const orders = await getData ('orders');
     
    if (orders) {
      const json = JSON.parse(orders);
      setOrderList(json);
      
    }else {
       setOrderList(null);
    }


    setLoading(false);

  }

  const updateOrder = async () => {
    const jsonValue = JSON.stringify([orderList]);
    await storeData ('orders', jsonValue);
    retrieveData();
  }

  const deleteOrder = (index: number) => {
    if (orderList) {
     
      Alert.alert ("Remove Order/ Cancel Order?", "Are you sure this order has already been served or been canceled?",
      [
         {
           text: "Yes",
           style: "destructive",
           onPress: () => {
             orderList.splice(index, 1);
             updateOrder();
           }
         },
         {
           text:"No",
           style: "default",
           onPress: () => {}
         }
      ])
    }
  }

  useFocusEffect(
    useCallback(() => {
      retrieveData();
    }, [])
  );

    return (
        <SafeAreaView style ={styles.container}>
        <ViewWithLoading loading={loading}>
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
        

              <Text style = {{
             color: 'white',
             fontWeight: 'bold',
             fontSize: 40,
             fontFamily: 'sans-serif-condensed',
             textAlign: 'center',
           
            
           }}>
             Customer Orders
            
           </Text> 
          <View style = {{
             flexDirection: 'row',
             justifyContent: 'flex-end',
             display: 'flex',
            
            
           }}>
           {/* <IconButton style ={{
             alignSelf: 'center'   
             
          }}
           icon="plus"
           color= 'red'
           size={40}
           
           onPress={() => navigation.navigate("OrderNav", {
             screen: "OrderAdd",
         })
           }
         /> */}
           </View> 
          
           
          
        </View>
      
        </View>
        <View style={
          [
             styles.container2
          ]
        }>
          <ScrollView
            contentContainerStyle= {{flexGrow:1 }}
            showsVerticalScrollIndicator={false}
           >
          <View style={
          [
            styles.conradius2
          ]
        }>
          
           {orderList ?
              <Fragment>
                 {orderList.map ((order: Order , index: number) => (
                   <ListItem key={index} bottomDivider
                   onLongPress = {() => {
                      deleteOrder(index);
                   }}
                      onPress = {()=> {
                        navigation.navigate("OrderNav", {
                          screen: "OrderEdit" ,
                          params: { order: order, index: index }
                        })
                      }}
                   >
                    <ListItem.Content>
                      <ListItem.Title>{order.table}</ListItem.Title>
                     <ListItem.Subtitle>{order.prefOrder}</ListItem.Subtitle> 
                   </ListItem.Content>
                   <ListItem.Chevron/>
                   </ListItem>
                 ) )}
              </Fragment> 
              :
              <Text></Text>
          }
            
        </View> 
        </ScrollView>
        
        
       <FAB
          
          icon={{ name: 'add', color: 'white' }}
          color="#f5516a"
          placement="right"
          onPress={() => navigation.navigate("OrderNav", {
            screen: "OrderAdd",
        })
          }
        />
        
        
    
        </View>
        
      
        </ViewWithLoading>
        </SafeAreaView>
    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    container1:{
        flex:0.9,  
         backgroundColor: 'white',

      },
      conradius1:{ //title, icon 
        flex:1,
         backgroundColor: '#191d40',
         borderBottomLeftRadius: 80,
         justifyContent: 'center'
           
      },
    
      container2:{
        flex: 7,
        backgroundColor: '#191d40',
        
      },
      conradius2:{
        flex: 1,
         flexDirection: 'column',
         backgroundColor: 'white',
         borderTopRightRadius: 80,
         paddingTop: 41,
         paddingHorizontal: 15,
         paddingBottom: 15,
      },
              
    }
    )