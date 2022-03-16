import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, StyleProp, TextStyle, ViewStyle } from "react-native";
import { Button } from "react-native-elements";



interface IProps {
    title?: string;
    titleStyle?: StyleProp<TextStyle>;
    buttonStyle?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    onPress?: () => void;
    icon?: any;
    iconStyle?: StyleProp<ViewStyle>;
    iconPosition?: any;
    disabled?: boolean;
    loading?: boolean;
}

export default function NativeElementButton(props: IProps) {
    const navigation = useNavigation();

    const [loading, setLoading] = useState(false);


    return (
        <Button
            title={props.title}
            titleStyle={[styles.titleStyle, props.titleStyle]}
            buttonStyle={[styles.buttonStyle, props.buttonStyle]}
            containerStyle={[styles.containerStyle, props.containerStyle]}
            onPress={props.onPress}
            icon={props.icon}
            iconPosition={props.iconPosition}
            iconContainerStyle={props.iconStyle}
            disabled={props.disabled}
            loading={props.loading}
            loadingProps={{ color: 'black' }}
        />
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 0
    },
    containerStyle: {
        width: '100%',
        shadowColor: "#000",
        borderRadius: 100,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    buttonStyle: {
        paddingVertical: 10,
        borderRadius: 100,
    },
    titleStyle: {
        fontSize: 14
    }
});