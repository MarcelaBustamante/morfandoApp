import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Slider from '@react-native-community/slider';
import Theme from '../../styles/Theme';
const SliderApp = ({sliderValue, setSliderValue}) => {
  return (
    <View>
      <View style={styles.container}>
        {/*Text to show slider value*/}
        <Text style={styles.text}>
           Rango de busqueda: {sliderValue} km
        </Text>
 
        {/*Slider with max, min, step and initial value*/}
        <Slider

          maximumValue={50}
          minimumValue={0}
          minimumTrackTintColor= {Theme.colors.PRIMARY}
          maximumTrackTintColor= {Theme.colors.SECONDARY}
          step={1}
          value={sliderValue}
          onValueChange={
            (sliderValue) => setSliderValue(sliderValue)
          }
        />
      </View>
    </View>
  );
};
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    width: width * 0.8,
    padding: 20,
    justifyContent: "center"
  },
  text:{
    color: Theme.colors.PRIMARY,
    fontSize: 18
  }
});
 
export default SliderApp;