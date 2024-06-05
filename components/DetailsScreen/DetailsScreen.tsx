import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';

import { FontAwesome, FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';

import { RootStackParamList } from 'navigation';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

interface Props {
  route: DetailsScreenRouteProp;
}

const DetailsScreen = ({ route }: Props) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const { data } = route.params;
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <View style={styles.backIconContainer}>
          <MaterialCommunityIcons name={'arrow-left'} size={24} color={'black'} />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={styles.favoriteIconContainer}>
          <MaterialCommunityIcons
            name={isFavorited ? 'heart' : 'heart-outline'}
            size={24}
            color={isFavorited ? 'red' : 'black'}
          />
        </View>
      </TouchableWithoutFeedback>
      <Image
        style={{ width: '100%', height: 270, resizeMode: 'contain' }}
        source={require('assets/casa2.jpg')}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          marginTop: 5,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 5,
          }}>
          {data.titulo}
        </Text>
        <View
          style={{
            borderRadius: 50,
            marginLeft: 15,
            marginTop: 10,
            paddingHorizontal: 15,
            paddingVertical: 5,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'flex-start',
            borderColor: '#000000',
            borderWidth: 1,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            {data.imovelType}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 10, gap: 5 }}>
        <FontAwesome6 name="location-dot" size={20} />
        <Text>{`${data.endereco.bairro}, ${data.endereco.cidade}`}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          marginLeft: 20,
          marginTop: 20,
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <View
            style={{
              backgroundColor: '#D9D9D9',
              borderRadius: 50,
              height: 38,
              width: 38,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FontAwesome name="bed" size={20} />
          </View>
          <Text>3 Quartos</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <View
            style={{
              backgroundColor: '#D9D9D9',
              borderRadius: 50,
              height: 38,
              width: 38,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FontAwesome name="bathtub" size={20} />
          </View>
          <Text>3 Banheiros</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <View
            style={{
              backgroundColor: '#D9D9D9',
              borderRadius: 50,
              height: 38,
              width: 38,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <MaterialCommunityIcons name="floor-plan" size={20} />
          </View>
          <Text>192 m²</Text>
        </View>
      </View>
      <View style={{width: '90%', borderBottomColor: '#00000', borderWidth: 0.5, marginLeft: 20, marginTop: 20}}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: '#000',
    marginBottom: 10,
  },
  backIconContainer: {
    backgroundColor: '#fff',
    width: 30,
    height: 30,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: 1,
  },
  favoriteIconContainer: {
    backgroundColor: '#fff',
    width: 30,
    height: 30,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 1,
  },
});

export default DetailsScreen;
