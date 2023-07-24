/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import Counter from './src/components/Counter';


function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
       <View>
          <Counter />
       </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 container : {
  flex: 1,
  justifyContent: "center"
 }
});

export default App;
