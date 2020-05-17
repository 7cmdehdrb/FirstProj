import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from "prop-types";

const weatherOptions = {
    Thunderstorm:{
        iconName: "weather-lightning",
        backgroundColor: "#E0FA0B",
        content: "집에서 쉬는게 어때요?"
    },
    Rain: {
        iconName: "weather-rainy",
        backgroundColor: "gray",
        content: "비오는 날에는 파전"
    },
    Snow: {
        iconName: "weather-snowy",
        backgroundColor: "#C8E7FF",
        content: "하얀 눈이 내려요"
    },
    Clear: {
        iconName: "weather-sunny",
        backgroundColor: "#FF607B",
        content: "이런 날은 밖에서!"
    },
    Clouds: {
        iconName: "weather-cloudy",
        backgroundColor: "gray",
        content: "하늘이 꾸물꾸물"
    },
    Mist: {
        iconName: "weather-fog",
        backgroundColor: "gray",
        content: "운전할때 조심하세요!"
    },
    Smoke: {
        iconName: "weather-fog",
        backgroundColor: "gray",
        content: "운전할때 조심하세요!"
    },
    Haze:{
        iconName: "weather-hazy",
        backgroundColor: "#C1E4EC",
        content: "이정도면 나쁘지 않나?"
    },    
    Dust:{
        iconName: "blur",
        backgroundColor: "#FFCD6A",
        content: "중국 극혐 ㅡㅡ"
    },
    Fog:{
        iconName: "weather-fog",
        backgroundColor: "gray",
        content: "운전할때 조심하세요!"
    },
    Sand:{
        iconName: "blur",
        backgroundColor: "#FFCD6A",
        content: "중국 극혐 ㅡㅡ"
    },
    Ash:{
        iconName: "blur",
        backgroundColor: "#FFCD6A",
        content: "중국 극혐 ㅡㅡ"
    },
    Squall:{
        iconName: "weather-hurricane",
        backgroundColor: "#FFC8E9",
        content: "살다가 이걸 보네?"
    },
    Tornado:{
        iconName: "weather-hurricane",
        backgroundColor: "red",
        content: "도망쳐"
    },
}

export default function Weather({temp, condition, location}){

    return(
        <View style={style.container}>
            <StatusBar barStyle="light-content"></StatusBar>
            <LinearGradient
                colors={[weatherOptions[condition].backgroundColor, 'transparent']}
                style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: "150%",
                }}
            />
            <View style={style.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={150} color="white" />
                <Text style={style.temp}>{temp}℃</Text>
            </View>
            <View style={style.halfContainer}>
                <Text style={style.condition}>{condition}</Text>
                <Text style={style.sub}>{weatherOptions[condition].content}</Text>
                <Text style={style.location}>LOCATION: {location}</Text>
            </View>
        </View>
    );

}


Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Dust",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    condition: {
        fontSize: 50,
        color: "#6D6D6D"
    },
    temp: {
        fontSize: 50,
        color: "white"
    },
    sub: {
        fontSize: 20,
        color: "#6D6D6D"
    },
    location: {
        fontSize: 20,
        color: "#6D6D6D",
        marginTop: 50
    }
});