import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import { CalendarCard } from "./components/CalendarCard";
import {ScreenView} from "./components/ScreenView"
import {colors} from "./configStyles";
const App = () => {
  return (
    <ScreenView>
      <CalendarCard>
      <Text>sup w?</Text>

        </CalendarCard>
    </ScreenView>
    // <>
    //   <StatusBar barStyle="light-content" />
    //   <SafeAreaView style={{backgroundColor:colors.secondaryBlack}}>
    //     <View>
    //       <Text>hello w</Text>
    //       <CalendarCard />
    //     </View>
    //   </SafeAreaView>
    // </>
  );
};

export default App;
