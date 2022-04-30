import { FontAwesome } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { Fragment, useCallback, useState } from "react";
import { Alert, Platform, StyleSheet, View } from "react-native";
import { ListItem } from "react-native-elements";
import { fonts } from "react-native-elements/dist/config";
import { color } from "react-native-elements/dist/helpers";
import { IconButton } from "react-native-paper";
import { white } from "react-native-paper/lib/typescript/styles/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { number } from "yup";
import { Text } from "../../components/Themed";
import ViewWithLoading from "../../components/ViewWithLoading";
import { getData, storeData } from "../../database/StoreData";
import { Order } from "../../models/Order";

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
             fontSize: 30,
             fontFamily: 'sans-serif-condensed',
             paddingTop: 5,
             alignSelf: 'center',
           }}>
             Orders
           </Text>
          
           
           
          
           <IconButton style ={{
             alignSelf: 'flex-end',
           }}
            icon="plus"
            color= 'white'
            size={45}
            onPress={() => navigation.navigate("OrderNav", {
              screen: "OrderAdd",
          })
            }
          />
          
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
        flex:1,
         flexDirection: 'column',
         backgroundColor: 'white',
        
      
      },
      conradius1:{ //title, icon 
        flex:1,
         flexDirection: 'column',
         backgroundColor: '#191d40',
         borderBottomLeftRadius: 80,
           
      },
    
      container2:{
        flex: 5,
        backgroundColor: '#191d40',
        
      },
      conradius2:{
        flex: 1,
         flexDirection: 'column',
         backgroundColor: 'white',
         borderTopRightRadius: 80,
         paddingTop: 80,
         paddingHorizontal: 10,
      },
              
    }
    )