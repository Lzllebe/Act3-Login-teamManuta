
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { DataTable, IconButton, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { number } from "yup/lib/locale";
import ViewWithLoading from "../../components/ViewWithLoading";
import { getData, removeData, storeData } from "../../database/StoreData";
import { OrderParamlist } from "../../types";

type IRoute = {
    "params": OrderParamlist['OrderEdit']
}


export default function OrderEdit() {
    
    const route = useRoute<RouteProp<IRoute, "params">>();
    //console.log(route.params.order);
    const order = route.params.order;
    const index = route.params.index;

    const [table, setTable] = useState<string>(order.table);
    const [prefOrder, setprefOrder] = useState<string>(order.prefOrder);
    const navigation = useNavigation();
    


    const submit = async () => {
        const orders = await getData ('orders');
       
        const data = {
            table : table,
            prefOrder: prefOrder,
        }
       
        // await removeData('orders')
        
        if (orders) {
            const json = JSON.parse(orders);
            if (json) {

                json[index] = {...data};

                const jsonValue = JSON.stringify([...json]);
                await storeData ('orders', jsonValue);
            }
        }


    }

    
    return (
        <SafeAreaView style ={styles.container1}>
        <ViewWithLoading loading={false}>

            <IconButton style ={styles.icon}
                icon="arrow-left"
                color='black'
                size={30}
                onPress={() => navigation.navigate("HomeNav", {
                    screen: "Home",
                })
            }
            />
            <View style = {styles.container }>

            <View style ={{
                marginVertical: 10
            }}>
            <TextInput
                label="Table No."
                value={table}
                onChangeText={setTable}
                autoComplete = {false}
            />
            </View>
           
            <View style ={{
                marginVertical: 10
            }}>
                 <TextInput
                label="Order List"
                value={prefOrder}
                onChangeText={setprefOrder}
                autoComplete = {false}
                />
            </View>
           
            <Button
              title= "Edit Order"
              loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor: '#e2546c',
                borderRadius: 5,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
              containerStyle={{
                marginHorizontal: 50,
                height: 50,
                width: 300,
                marginVertical: 10,
                alignSelf: 'center'
              }}
              onPress={submit}
            />

            </View>
        </ViewWithLoading>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    container1: {
        flex: 1,
          
    },
    icon: {
        marginTop: 20
    }
}
)