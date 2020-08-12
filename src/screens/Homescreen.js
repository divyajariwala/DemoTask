import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Platform,
  Animated,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';

const HEADER_MIN_HEIGHT = 50;
const HEADER_MAX_HEIGHT = 400;
// import {styles} from '../theme/styles';
import Bottomtab from '../components/Bottomtab';
import {TextInput, FlatList} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {NavigationContainer} from '@react-navigation/native';

import normalize from 'react-native-normalize';
import Icon from 'react-native-vector-icons/FontAwesome';
import dish from '../assets/images/dish.png';
export default class Homescreen extends Component {
  constructor() {
    super();

    this.scrollYAnimatedValue = new Animated.Value(0);

    this.array = [];
  }
  componentWillMount() {
    for (var i = 1; i <= 75; i++) {
      this.array.push(i);
    }
  }

  render() {
    const headerHeight = this.scrollYAnimatedValue.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });

    const headerBackgroundColor = this.scrollYAnimatedValue.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: ['white', 'white'],
      extrapolate: 'clamp',
    });
    return (
      // <SafeAreaView styles={{flex: 1}}>
      //   <View style={styles.container}>
      //     <View style={{height: '90%'}}>
      //       <ScrollView
      //         contentContainerStyle={{paddingTop: HEADER_MAX_HEIGHT}}
      //         scrollEventThrottle={16}
      //         onScroll={Animated.event([
      //           {nativeEvent: {contentOffset: {y: this.scrollYAnimatedValue}}},
      //         ])}>
      //         {this.array.map((item, key) => (
      //           <View key={key} style={styles.item}>
      //             <Text style={styles.itemText}>Row No : {item}</Text>
      //           </View>
      //         ))}
      //       </ScrollView>

      //       <Animated.View
      //         style={[
      //           styles.animatedHeaderContainer,
      //           {height: headerHeight, backgroundColor: headerBackgroundColor},
      //         ]}>
      //         <Text style={styles.headerText}>Animated Header</Text>
      //       </Animated.View>
      //     </View>
      //     <View style={{height: '10%'}}>{/* <Bottomtab /> */}</View>
      //   </View>
      // </SafeAreaView>

      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{paddingTop: HEADER_MAX_HEIGHT}}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {y: this.scrollYAnimatedValue}}},
          ])}>
          <View style={{marginLeft: hp(5), marginRight: hp(5)}}>
            <View
              style={{
                flexDirection: 'row',

                justifyContent: 'space-between',
              }}>
              <Text style={{color: '#7B7D90', fontSize: normalize(22)}}>
                Entry Platters
              </Text>
              <Text style={{color: '#497EF7', fontSize: normalize(18)}}>
                View all{' '}
              </Text>
            </View>
            <View style={{marginTop: hp(2)}}>
              <FlatList
                data={[
                  {
                    name: 'Kefta Skewer Platter',
                    image: require('../assets/images/dish.png'),
                  },
                  {
                    name: 'Kefta Skewer Platter',
                    image: require('../assets/images/dish.png'),
                  },
                  {
                    name: 'Kefta Skewer Platter',
                    image: require('../assets/images/dish.png'),
                  },
                  {
                    name: 'Kefta Skewer Platter',
                    image: require('../assets/images/dish.png'),
                  },
                  {
                    name: 'Kefta Skewer Platter',
                    image: require('../assets/images/dish.png'),
                  },
                  {
                    name: 'Kefta Skewer Platter',
                    image: require('../assets/images/dish.png'),
                  },
                ]}
                numColumns={2}
                renderItem={({item}) => {
                  return (
                    <View
                      style={{
                        //  width: '46%',
                        //  height: '30%',
                        flex: 3,
                        margin: 10,
                        backgroundColor: 'white',
                      }}>
                      <Image
                        source={item.image}
                        style={{
                          width: '100%',
                        }}></Image>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: '#1E223E',
                          fontSize: normalize(18),
                        }}>
                        {item.name}
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </ScrollView>

        <Animated.View
          style={[
            styles.animatedHeaderContainer,
            {height: headerHeight, backgroundColor: headerBackgroundColor},
          ]}>
          <View style={styles.container1}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={{color: '#7B7D90', fontSize: normalize(25)}}>
                  Oasis Grill
                </Text>
                <Text
                  style={{
                    color: '#1E223E',
                    fontSize: normalize(27),
                    fontWeight: 'bold',
                  }}>
                  Fresh, Fast, Fabulous
                </Text>
              </View>
              <View>
                <Icon name="bell" size={30}></Icon>
              </View>
            </View>
            <TextInput
              placeholder={'Setach Food  or category'}
              style={styles.placeholderstyle}></TextInput>

            <View
              style={{
                marginTop: hp(2),
                width: '100%',
                height: '25%',
                backgroundColor: '#497EF7',
                borderRadius: hp(1.5),
                //justifyContent: 'center',
                padding: hp(2),
              }}>
              <Text style={{color: '#FFFFFF', fontSize: normalize(19)}}>
                Oasis Grill
              </Text>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: normalize(32),
                  fontWeight: 'bold',
                }}>
                Pickup Order
              </Text>

              <Image
                source={dish}
                style={{
                  width: 125,
                  height: 140,
                  marginTop: -70,
                  marginLeft: 250,
                  //marginRight:30
                }}></Image>
            </View>
            <View>
            <FlatList
              data={[
                {
                  name: 'Entry Platters',
                  image: require('../assets/images/food.png'),
                },
                {image: require('../assets/images/dish1.png')},
                {image: require('../assets/images/dish1.png')},
                {image: require('../assets/images/dish1.png')},
                {image: require('../assets/images/dish1.png')},
              ]}
              renderItem={({item}) => {
                return (
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.item}>{item.name}</Text>
                  </View>
                );
              }}
            />
            </View>
          </View>
        </Animated.View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animatedHeaderContainer: {
    position: 'absolute',
    top: Platform.OS == 'ios' ? 20 : 0,
    left: 0,
    right: 0,
  },
  headerText: {
    color: 'white',
    fontSize: 22,
  },
  item: {
    backgroundColor: '#ff9e80',
    margin: 8,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    color: 'black',
    fontSize: 16,
  },
  container1: {
    marginLeft: hp(5),
    marginRight: hp(5),
    marginTop: hp(3),
  },
  placeholderstyle: {
    borderRadius: hp(1),
    borderWidth: hp(0.1),
    borderColor: 'black',
    padding: hp(2),
    marginTop: hp(2),
  },
});
