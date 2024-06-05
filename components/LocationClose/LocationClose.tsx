
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { FontAwesome6 } from '@expo/vector-icons';
import { anotherApi } from 'utils/api';

const getImageSource = (id: string) => {
  const imageSources: Record<string, JSX.Element> = {
    '6': <Image source={require('assets/casa6.jpg')} alt='casa6' style={styles.image} />,
    '7': <Image source={require('assets/casa7.jpg')} alt='casa7' style={styles.image} />,
    '8': <Image source={require('assets/casa8.jpg')} alt='casa8' style={styles.image} />,
    '9': <Image source={require('assets/casa9.jpg')} alt='casa9' style={styles.image} />,
    '10': <Image source={require('assets/casa10.jpg')} alt='casa10' style={styles.image} />,
  };
  return imageSources[id];
};

const Card = ({ data }: any) => (
  <View style={styles.card}>
    {getImageSource(data.id)}
    <View style={styles.content}>
      <View style={styles.badgeContainer}>
        <View  style={styles.badge}>
          <Text style={styles.badgeText}>{data.imovelType}</Text>
        </View>
        <Text style={styles.price}>
          {data.tipo === 'Venda' ? `R$ ${data.preco.toLocaleString()}` : `R$ ${data.preco.toLocaleString()} / mês`}
        </Text>
      </View>
      <Text style={styles.title}>{data.titulo}</Text>
      <View style={{flexDirection: 'row', gap: 5, marginBottom: 5, marginTop: 5}}>
      <FontAwesome6 name="location-dot" size={20} />
      <Text>{`${data.endereco.bairro} - ${data.endereco.cidade}`}</Text>
      </View>
    </View>
  </View>
);

const LocationClose = () => (
  <View style={styles.highlightsContainer}>
    <View style={styles.header}>
      <Text style={styles.headerText}>Perto de você</Text>
      <Text style={styles.viewMore}>Ver mais</Text>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {anotherApi.map((type, index) => (
        <Card key={index} data={type} />
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
