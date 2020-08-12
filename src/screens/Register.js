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
import ConformPass from '../components/ConformPass';
export default class Register extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={{height: '100%'}}>
          <View style={styles.container}>
            <Text style={styles.name}> Sign up to </Text>
            <Text style={styles.name1}>Oasis Grill</Text>
            <View style={{marginTop: hp(4)}}>
              <TextInput
                placeholder="Name"
                placeholderTextColor="#7B7D90"
                style={styles.placeholderstyle}></TextInput>
              <TextInput
                placeholder="Email"
                placeholderTextColor="#7B7D90"
                style={styles.placeholderstyle2}></TextInput>
              <Password />
              <ConformPass />
            </View>

            <Pressable
              style={styles.buttonStyle}
              onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
            <View
              style={{
                flexDirection: 'row',
                marginTop: hp(1),
                justifyContent: 'center',
              }}>
              <Text style={styles.text1}>You have an account?</Text>
              <Text style={styles.text2}> Sign in</Text>
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
