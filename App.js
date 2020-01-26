import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import { CalendarCard } from './components/CalendarCard';
import {colors} from "./configStyles";
const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{backgroundColor:colors.secondaryBlack}}>
        <View>
          <Text>hello w</Text>
          <CalendarCard />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
