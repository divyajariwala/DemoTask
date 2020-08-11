import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {styles} from '../theme/styles';
import Bottomtab from '../components/Bottomtab';
export default class Homescreen extends Component {
  render() {
    return (
      <SafeAreaView styles={{flex: 1}}>
        <View style={styles.container}>
       <Text>Hello</Text>
        </View>
        <Bottomtab />
      </SafeAreaView>
    );
  }

}
