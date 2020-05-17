import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Loading from "./Loading";
import Weather from "./Weather";
import axios from "axios";
import * as Location from 'expo-location';

const API_KEY = "a13834fcf50e767fb0c83fa16fadd8d9";

export default class extends React.Component{

  state = {
    isLoading : true
  };

  getWeather = async(latitude, longitude) => {
    const { data: { main: { temp }, weather, name } } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp: temp,
      location: name
    });
  }

  getLocation = async() => {
    try {

      await Location.requestPermissionsAsync();
      const { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
      await this.getWeather(latitude, longitude);

    } catch (error) {
      console.log("ERR")
      Alert.alert("Permission Required!");
    }
  }
  
  componentDidMount(){
    this.getLocation();
  }

  render(){

    const { isLoading, temp, condition, location } = this.state;
    return isLoading ? <Loading></Loading> : <Weather temp={Math.round(temp)} condition={condition} location={location}></Weather>;

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
