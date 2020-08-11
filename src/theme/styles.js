import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import normalize from 'react-native-normalize';

const styles = StyleSheet.create({
  container: {
    marginTop: hp(9),
    // borderWidth: hp(1),
    // borderColor: 'black',
    marginLeft: hp(5),
    marginRight: hp(5),
    height: '68%',
  },
  name: {
    color: '#F7B400',
    fontSize: normalize(22),
    textAlign: 'left',
    fontFamily: 'Sofia Pro Medium',
  },
  name1: {
    color: '#1E223E',
    fontSize: normalize(30),
    textAlign: 'left',
    fontFamily: 'Sofis Pro SemiBold',
    fontWeight: 'bold',
  },
  placeholderstyle: {
    borderRadius: hp(1),
    borderWidth: hp(0.1),
    borderColor: 'black',
    padding: hp(2),
  },
  placeholderstyle2: {
    borderRadius: hp(1),
    borderWidth: hp(0.1),
    borderColor: 'black',
    padding: hp(2),
    marginTop: hp(3),
  },
  container1: {
    height: '32%',
    marginTop: hp(5),
  },
  headerText: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  textBoxContainer: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  textBox: {
    fontSize: 20,
    alignSelf: 'stretch',
    height: 45,
    paddingRight: 45,
    paddingLeft: 8,
    borderWidth: 1,
    paddingVertical: 0,
    borderColor: 'grey',
    borderRadius: 5,
  },
  touachableButton: {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 2,
  },
  buttonImage: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  placeholderstyle1: {
    borderRadius: hp(1),
    borderWidth: hp(0.1),
    borderColor: 'black',
    marginTop: hp(3),
    padding: hp(2),
  },
  buttonStyle: {
    backgroundColor: '#497EF7',
    marginTop: hp(3),
    height: '12%',
    borderRadius: hp(1.5),
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: normalize(18),
  },
  text1: {
    color: '#1E223E',
    fontSize: hp(2.2),
  },
  text2: {
    color: '#F7B400',
    fontSize: hp(2.2),
  },
});

export {styles};
