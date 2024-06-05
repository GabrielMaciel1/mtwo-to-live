import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { api } from 'utils/api';
import Card from 'components/Card/Card';
import { Property } from 'types/types';
import { highlightStyles } from './highlightStyles';

const Highlights = () => {
  return (
    <View style={highlightStyles.highlightsContainer}>
      <View style={highlightStyles.header}>
        <Text style={highlightStyles.headerText}>Destaques</Text>
        <Text style={highlightStyles.viewMore}>Ver mais</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {api.map((type: Property, index: number) => (
          <Card key={index} data={type} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Highlights;
