import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { api } from 'utils/api';
import Card from 'components/Card/Card';
import { Property } from 'types/types';

const Saved = () => {
  const updatedApi = api.map((type: Property, index: number) => {
    
      return { ...type, isFavorited: true };
   
  });

  return (
    <View style={savedStyles.highlightsContainer}>
      <View style={savedStyles.header}>
        <Text style={savedStyles.headerText}>Favoritos</Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        {updatedApi.map((type: Property, index: number) => (
          <Card key={index} data={type} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Saved;

const savedStyles = StyleSheet.create({
  highlightsContainer: {
    marginBottom: 70,
    marginLeft: 10,
    marginRight: 10 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  viewMore: {
    color: '#3185A9',
    fontWeight: 'bold',
  },
});
