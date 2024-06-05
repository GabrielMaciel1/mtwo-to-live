import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar/SearchBar';
import FilterTypes from '../components/FilterTypes/FilterTypes';
import Highlights from '../components/Highlights/Highlights';
import LocationClose from '../components/LocationClose/LocationClose';

const Home = () => {
  return (
    <ScrollView  style={styles.container}>
      <SearchBar />
      <FilterTypes/>
      <Highlights/>
      <LocationClose/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
   marginLeft: 20
  },
});

export default Home;
