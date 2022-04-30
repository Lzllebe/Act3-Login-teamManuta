
import React, { useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { DataTable, TextInput } from "react-native-paper";
import ViewWithLoading from "../../components/ViewWithLoading";
import { getData, removeData, storeData } from "../../database/StoreData";

export default function OrderEdit() {
    const [table, setTable] = useState<string>("");
    const [order, setOrder] = useState<string>("");
    
    const submit = async () => {
        const orders = await getData ('orders');
       
        const data = {
            Table : table,
            Order: order,
        }
       
        // await removeData('orders')
        
        if (orders) {
            const json = JSON.parse(orders);
            if (json) {
                const jsonValue = JSON.stringify([...json, data]);
                await storeData ('orders', jsonValue);
            }
        }else{
             //Order null value
              

            const jsonValue = JSON.stringify([data]);

             await storeData ('orders', jsonValue);
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
                value={order}
                onChangeText={setOrder}
                autoComplete = {false}
                />
            </View>
           
            <Button
              title= "Add Order"
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
