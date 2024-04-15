import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Header from './src/components/Header';
import {COLORS, DEVICE_WIDTH, moderateScale} from './src/utils/theme';
import PageComponent from './src/components/PageComponent';

const App = () => {

  const [search, setSearch] = useState('');

  useEffect(() => {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('#00000000');
    StatusBar.setBarStyle('light-content');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header search={search} setSearch={setSearch} onSearchClose={() => setSearch('')} />
      <View style={[styles.container, {flexDirection: 'row'}]}>
          <PageComponent searchText={search} />
          <PageComponent searchText={search} />
          <PageComponent searchText={search} />
        </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  navImageStyle: {
    width: '100%',
    height: moderateScale(80),
    position: 'absolute',
    zIndex: 1000,
    top: -10,
    // backgroundColor:'red'
  },
});
