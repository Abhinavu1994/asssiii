import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import DropdownComponent from '../components/dropdown';
import PieChart from 'react-native-pie-chart';
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryTooltip,
  VictoryLabel,
  Bar,
} from 'victory-native';
// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph,
//   StackedBarChart,
// } from 'react-native-chart-kit';

const data = [
  {Week: 'Week 1', Percentage: '10%', label: '10%'},
  {Week: 'Week 2', Percentage: '20%', label: '20%'},
  {Week: 'Week 3', Percentage: '30%', label: '30%'},
  {Week: 'Week 4', Percentage: '40%', label: '40%'},
  {Week: 'Week 5', Percentage: '50%', label: '50%'},
];

const Insight = () => {
  const widthAndHeight = 180;
  const series = [123, 321, 123];
  const sliceColor = ['#F44336', '#2196F3', '#FF9800'];
  return (
    <SafeAreaView>
      <ScrollView style={{width: '95%', alignSelf: 'center'}}>
        <View
          style={{
            width: '100%',
            margin: 10,
            backgroundColor: '#ffff',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 10,
            // padding: 20,
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              height: 40,
              margin: 10,
              // backgroundColor: 'green',
              justifyContent: 'space-around',
              // alignItems: 'center',
              alignSelf: 'center',
              borderTopEndRadius: 10,
              borderTopStartRadius: 10,
            }}>
            <View>
              <Text
                style={[
                  styles.nameStyle,
                  {
                    color: 'black',
                    lineHeight: 15,
                    fontStyle: 'normal',
                    fontSize: 16,
                    marginTop: 10,
                  },
                ]}>
                Demographics
              </Text>
            </View>
            <View style={{height: 40}}>
              <DropdownComponent />
            </View>

            <TouchableOpacity>
              <Text
                style={[
                  styles.nameStyle,
                  {
                    color: 'gray',
                    lineHeight: 14.63,
                    marginVertical: 10,
                    fontSize: 40,
                  },
                ]}>
                ...
              </Text>
            </TouchableOpacity>
          </View>
          <VictoryChart
            width={400}
            padding={70}
            theme={VictoryTheme.grayscale}
            domainPadding={{x: 20, y: 10}}>
            <VictoryBar
              style={{data: {fill: '#44C5F590'}}}
              labelComponent={
                <VictoryLabel
                  dy={-20}
                  backgroundStyle={{fill: '#44C5F590', opacity: 0.6}}
                  backgroundPadding={{bottom: 5, top: 5}}
                />
              }
              labels={({datum}) => `y: ${datum.y}`}
              data={data}
              x="Week"
              y="Percentage"
              dataComponent={
                <Bar tabIndex={0} ariaLabel={({data}) => `x: ${data.x}`} />
              }
            />
          </VictoryChart>
        </View>
        <View
          style={{
            width: '100%',
            margin: 10,
            // paddingBottom: 20,
            backgroundColor: '#ffff',
            // paddingBottom: 20,
            justifyContent: 'center',
            // alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 10,
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              height: 40,
              margin: 10,
              justifyContent: 'space-around',
              // alignItems: 'center',
              alignSelf: 'center',
              borderTopEndRadius: 10,
              borderTopStartRadius: 10,
            }}>
            <View>
              <Text
                style={[
                  styles.nameStyle,
                  {
                    color: 'black',
                    //   lineHeight: 15,
                    fontStyle: 'normal',
                    fontSize: 16,
                    marginTop: 10,
                  },
                ]}>
                Order
              </Text>
            </View>
            <View style={{height: 40}}>
              <DropdownComponent />
            </View>

            <TouchableOpacity>
              <Text
                style={[
                  styles.nameStyle,
                  {
                    color: 'gray',
                    lineHeight: 14.63,
                    marginVertical: 10,
                    fontSize: 40,
                  },
                ]}>
                ...
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingBottom: 20}}>
            <PieChart
              widthAndHeight={widthAndHeight}
              series={series}
              sliceColor={sliceColor}
              doughnut={true}
              coverRadius={0.7}
              coverFill={'#FFF'}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  innerMainView: {
    width: '100%',
    alignSelf: 'center',
    // margin: 15,
    backgroundColor: 'gray',
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
    lineHeight: 17.07,
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

export default Insight;
