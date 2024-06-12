import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { anotherApi } from 'utils/api';
import Card from 'components/Card/Card';

const LocationClose = () => (
  <View style={styles.highlightsContainer}>
    <View style={styles.header}>
      <Text style={styles.headerText}>Perto de você</Text>
      <Text style={styles.viewMore}>Ver mais</Text>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {anotherApi.map((type, index) => (
        <View key={type.id} style={{ marginRight: 20, width: 250 }}>
          <Card key={index} data={type} />
        </View>
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginRight: 30,
    marginBottom: 20,
    width: 250,
    shadowColor: 'rgb(38, 57, 77)',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 5,
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  badgeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badge: {
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  badgeText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  highlightsContainer: {
    marginBottom: 20,
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

export default LocationClose;
