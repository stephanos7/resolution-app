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

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text>hello w</Text>
          <CalendarCard />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
