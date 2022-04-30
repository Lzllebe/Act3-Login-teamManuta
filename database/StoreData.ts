import AsyncStorage from "@react-native-async-storage/async-storage"

export const storeData = async (key: string, values: string) => {
    try {
        return await AsyncStorage.setItem(key, values);
    } catch (e) {
        // error saving --------
    }
};

export const getData = async (key: string ) => {
    try{
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
    }   catch (e) {
        // reading value error --------
    } 
};

export const removeData = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    } catch (e) {
        // walang gagawin-----
    }
};