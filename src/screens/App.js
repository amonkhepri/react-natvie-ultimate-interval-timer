/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View} from 'react-native';
import Button from '../components/Button';
import imagePlay from '../assets/images/play.png';
import {Colors, LearnMoreLinks} from 'react-native/Libraries/NewAppScreen';



const App: () => React$Node = () => {
  const [sets, setSets, setPlaceholder] = React.useState(setPlaceholder);
  const [workTime, setWorkTime, workPlaceholder] = React.useState(workPlaceholder);
  const [restTime, setRestTime, restPlaceholder] = React.useState(restPlaceholder);
  const [intervals, setIntervals, intervalPlaceholder] = React.useState(intervalPlaceholder);
  const [restBetweenTime, setRestBetweenTime, restBetweenSetsPlaceholder] = React.useState(restBetweenSetsPlaceholder);

  return  (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>SETS</Text>
              <TextInput
                  style={styles.sectionDescription}
                  placeholder="4"
                  onChangeText={text =>setSets(text)}
                  placeholderTextColor={Colors.primary}
                  value={sets}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>WORK</Text>
              <TextInput
                  style={styles.sectionDescription}
                  placeholder="1:30"
                  placeholderTextColor={Colors.primary}
                  onChangeText={text =>setWorkTime(text)}
                  value={workTime}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>REST</Text>
              <TextInput
                  style={styles.sectionDescription}
                  placeholder="0:10"
                  placeholderTextColor={Colors.primary}
                  onChangeText={text =>setRestTime(text)}
                  value={restTime}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>INTERVALS PER SET</Text>
              <TextInput
                  style={styles.sectionDescription}
                  placeholder="4"
                  placeholderTextColor={Colors.primary}
                  onChangeText={text => setIntervals(text)}
                  value={intervals}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>REST BETWEEN SETS</Text>
              <TextInput
                  style={styles.sectionDescription}
                  placeholder="0:30"
                  placeholderTextColor={Colors.primary}
                  onChangeText={text =>setRestBetweenTime(text)}
                  value={restBetweenTime}
              />
            </View>
            <Button icon={}
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.dark,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 24,
    fontWeight: '400',
    color: Colors.primary,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
