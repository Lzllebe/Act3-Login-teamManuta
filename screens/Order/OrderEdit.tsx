
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { DataTable, TextInput } from "react-native-paper";
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
    const index = route.params.order;

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

                let orderValue = json[index];
                    orderValue.table = data.table;
                    orderValue.prefOrder = data.prefOrder;


                const jsonValue = JSON.stringify([...json]);
                await storeData ('orders', jsonValue);
            }
        }


    }

    
    return (
        <ViewWithLoading loading={false}>

            
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
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,
    },
}
)
