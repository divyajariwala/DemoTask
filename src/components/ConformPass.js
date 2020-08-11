import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ImageStore,
} from 'react-native';
import {styles} from '../theme/styles';

export default class ConformPass extends Component {
  constructor(props) {
    super(props);
    this.state = {hidePassword: true};
  }
  setPasswordVisibility = () => {
    this.setState({hidePassword: !this.state.hidePassword});
  };

  render() {
    return (
      <View style={styles.textBoxContainer}>
        <TextInput
          placeholder="Confirm Password"
          underlineColorAndroid="transparent"
          placeholderTextColor="#7B7D90"
          secureTextEntry={this.state.hidePassword}
          style={styles.placeholderstyle1}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.touachableButton}
          onPress={this.setPasswordVisibility}>
          <Image
            source={
              this.state.hidePassword
                ? require('../assets/images/hide.png')
                : require('../assets/images/view.png')
            }
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
