import React, {useState} from 'react';
import Insight from '../screens/Insight';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';

const Main = props => {
  const [insight, setInsight] = useState(true);
  const [client, setClient] = useState(false);
  const [team, setTeam] = useState(false);
  const [name, setName] = useState('Neharika Singh');
  const [city, setCity] = useState('Delhi');
  const [country, setCountry] = useState('India');
  const [Id, setId] = useState('12345678');
  const navigation = () => {};
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        <View style={styles.innerMainView}>
          <View
            style={{
              height: 40,
              width: '95%',
              justifyContent: 'flex-end',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={{marginLeft: 20, alignSelf: 'auto'}}>
              <MaterialCommunityIcons
                name="format-list-bulleted"
                color={'black'}
                size={30}
              />
            </TouchableOpacity>
            {/* <Image
              style={{height: 30, width: 30, marginRight: 10}}
              source={require('../../src/Images/Stockimage.png')}></Image> */}
          </View>
          <View style={styles.HeaderView}>
            <Image
              style={styles.image}
              source={require('../../src/Images/Stockimage.png')}></Image>
          </View>

          <View
            style={{
              marginTop: '1%',
              alignSelf: 'center',
              width: '95%',
              alignItems: 'center',
            }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.nameStyle}>
                {name} {Id}
              </Text>
              <View
                style={{
                  alignSelf: 'center',
                  height: 3,
                  width: 100,
                  backgroundColor: '#44C5F530',
                }}></View>
              <Text
                style={[
                  styles.nameStyle,
                  {
                    color: 'black',
                    lineHeight: 15,
                    marginVertical: 0,
                    fontSize: 16,
                    marginBottom: 10,
                    marginTop: 10,
                  },
                ]}>
                {city} {country}
              </Text>
            </View>
          </View>
        </View>
        <View style={{width: '100%', backgroundColor: '#44C5F530'}}>
          <View
            style={{
              width: '85%',
              marginLeft: 25,
              height: 50,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              // marginTop: 10,
              // backgroundColor: '#44C5F530',
            }}>
            <TouchableOpacity
              onPress={() => {
                setInsight(true), setClient(false), setTeam(false);
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Poppins-SemiBold',
                  color: insight ? '#44C5F5' : '#50565F',
                }}>
                Insight
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setClient(true), setInsight(false), setTeam(false);
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Poppins-Medium',
                  color: client ? '#44C5F5' : '#50565F',
                }}>
                Client
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setTeam(true), setInsight(false), setClient(false);
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Poppins-Medium',
                  color: team ? '#44C5F5' : '#50565F',
                }}>
                Team
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {insight ? (
          <ScrollView>
            <Insight />
          </ScrollView>
        ) : client ? (
          <Text
            style={{
              fontSize: 16,
              width: '87%',
              alignSelf: 'center',
              lineHeight: 23,
              color: '#50565F',
              fontFamily: 'Poppins-Regular',
            }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </Text>
        ) : team ? (
          <View></View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
  },
  innerMainView: {
    width: '100%',
    alignSelf: 'center',
    // margin: 15,
    backgroundColor: '#C0C0C0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    alignSelf: 'center',
    height: 95,
    width: 95,
    borderRadius: 47,
    resizeMode: 'contain',
  },
  HeaderView: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    // backgroundColor: 'green',
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'white',
  },
  HeadingText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17.07,
    fontFamily: 'Montserrat-Medium',
    color: 'black',
  },
  nameStyle: {
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'italic',
    lineHeight: 18,
    fontFamily: 'Montserrat-Regular',
    color: 'black',
    marginVertical: 10,
  },
  profileIcon: {
    height: 75,
    width: 75,
  },
  editIcon: {
    // position: 'absolute',
    height: 13,
    width: 13,
  },
  EditButton: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: '#EEEAF3',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  LogoutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LogoutIcon: {
    width: 18,
    height: 14,
  },
  percentBox: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EEEAF3',
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: '5%',
  },
  starGroup: {
    height: 31,
    width: 27,
    position: 'absolute',
    top: -15,
  },
  arrowStyle: {
    height: 32,
    width: 32,
  },
  UnderOverStyleText: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 17.07,
    fontFamily: 'Montserrat-Regular',
    color: 'black',
  },
  percentTextStyle: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 29.26,
    fontFamily: 'Montserrat-Medium',
    color: 'black',
    marginLeft: 15,
  },
  TopTabButton: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TabText: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 17.07,
    fontFamily: 'Montserrat-Medium',
    color: 'black',
  },
  imageStyle: {
    height: 60,
    width: 60,
  },
  //kjk
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    flexDirection: 'row',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 17.07,
    fontFamily: 'Montserrat-Medium',
    color: 'black',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    fontFamily: 'Montserrat-Medium',
    color: 'black',
    width: '90%',
  },
  tabText: {
    fontFamily: 'SFProText-Medium',
    fontSize: 14,
    textTransform: 'none',
  },
});
