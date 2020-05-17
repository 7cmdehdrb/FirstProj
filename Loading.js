import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading(){
    return(
    <View style={style.container}>
        <StatusBar barStyle="light-content"></StatusBar>
        <Text style={style.text}>Loading Weather...</Text>
    </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingLeft: 50,
        paddingBottom: 50,
        backgroundColor: "#FBFFAE"
    },
    text: {
        fontSize: 20
    }
});