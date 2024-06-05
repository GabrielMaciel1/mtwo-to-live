import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialIcons, Foundation, FontAwesome5 } from '@expo/vector-icons';

const types = [
    {
      id: 1,
      icon: <Ionicons name="home" size={24} color="black" />,
      label: 'Casa',
    },
    {
      id: 2,
      icon: <MaterialIcons name="apartment" size={24} color="black" />,
      label: 'Apartamento',
    },
    {
      id: 3,
      icon: <Ionicons name="calendar" size={24} color="black" />,
      label: 'Temporada',
    },
    {
      id: 5,
      icon: <Foundation name="trees" size={24} color="black" />,
      label: 'Sítios e Fazendas',
    },
    {
      id: 6,
      icon: <FontAwesome5 name="store" size={24} color="black" />,
      label: 'Comércio e Indústria',
    },
  ];

const FilterTypes = () => {
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {types.map((type) => (
        <View key={type.id} style={styles.item}>
          {type.icon}
          <Text>{type.label}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    marginTop: 10
  },
  item: {
    borderWidth: 1,
    borderColor: '#CECECE',
    borderRadius: 15,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 110
  },
});

export default FilterTypes;
