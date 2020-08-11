import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import facebook from '../assets/images/facebook.png';
import google from '../assets/images/google.png';
export default class Footer extends Component {
  render() {
    return (
      <View
        style={{
          marginLeft: hp(3),
          marginRight: hp(3),
          //marginTop: hp(5),
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center',marginTop: hp(1),}}>
          <Text style={{color: '#8D8F9D'}}> Sign in with</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: hp(4),
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#1C48AF',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              width: '40%',
              height: '200%',
              alignItems: 'center',
              borderRadius: hp(1.5),
            }}>
            <Image source={facebook}></Image>
            <Text style={{color: '#FFFFFF', borderRadius: hp(1.5)}}>
              Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#F9F9F9',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              width: '40%',
              height: '200%',
              alignContent: 'center',
              borderRadius: hp(1.5),
              borderColor: 'black',
              borderWidth: hp(0.1),
              alignItems: 'center',
            }}>
            <Image source={google}></Image>
            <Text>Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
