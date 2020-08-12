import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {styles} from '../theme/styles';
import Password from '../components/Password';
import Footer from '../components/Footer';
export default class Homescreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={{height: '100%'}}>
          <View style={styles.container}>
            <Text style={styles.name}> Welcome To </Text>
            <Text style={styles.name1}>Oasis Grill</Text>
            <View style={{marginTop: hp(4)}}>
              <TextInput
                placeholder="Email"
                placeholderTextColor="#7B7D90"
                style={styles.placeholderstyle}></TextInput>
              <Password />
            </View>

            <Text
              style={{
                textAlign: 'right',
                marginTop: hp(1),
                color: '#1E223E',
                fontSize: hp(2.2),
              }}>
              Forget Password
            </Text>

            <Pressable
              style={styles.buttonStyle}
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>
            <View
              style={{
                flexDirection: 'row',
                marginTop: hp(1),
                justifyContent: 'center',
              }}>
              <Text style={styles.text1}>You don't have an account?</Text>
              <Text style={styles.text2}>Sign Up</Text>
            </View>
          </View>
          <View style={styles.container1}>
            <Footer />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
