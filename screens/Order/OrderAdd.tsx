
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { DataTable, IconButton, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import ViewWithLoading from "../../components/ViewWithLoading";
import { getData, removeData, storeData } from "../../database/StoreData";

export default function OrderAdd() {
    const [table, setTable] = useState<string>("");
    const [prefOrder, setprefOrder] = useState<string>("");
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
        <SafeAreaView style ={styles.container1}>
        <ViewWithLoading loading={false}>
            
        <ScrollView
            contentContainerStyle= {{flexGrow:1 }}
            showsVerticalScrollIndicator={false}
           >
            
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
                keyboardType = 'numeric'
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
                multiline
                numberOfLines={10}
                scrollEnabled
                

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
            </ScrollView>
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
