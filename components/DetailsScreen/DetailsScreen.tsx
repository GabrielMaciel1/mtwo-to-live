import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';

import { FontAwesome, FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';

import { RootStackParamList } from 'navigation';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Carousel from 'components/Carousel/Carousel';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

interface Props {
  route: DetailsScreenRouteProp;
}

const DetailsScreen = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const route = useRoute<DetailsScreenRouteProp>();
  const { data } = route.params || {};
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
      <Carousel images={data.fotos} />
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
            maxWidth: 250
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
      <View style={{ flexDirection: 'row', marginHorizontal: 10, gap: 5 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#000',
          }}>
          {data.tipo === 'Venda'
            ? `R$ ${data.preco.toLocaleString()}`
            : `R$ ${data.preco.toLocaleString()} / mês`}
        </Text>
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
          <Text>{data.quartos} Quartos</Text>
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
          <Text>{data.banheiros} Banheiros</Text>
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
          <Text>{data.area_m2} m²</Text>
        </View>
      </View>
      <View
        style={{
          width: '90%',
          borderBottomColor: '#00000',
          borderWidth: 0.5,
          marginLeft: 20,
          marginTop: 20,
        }}
      />
      <View
        style={{
          width: '90%',
          marginLeft: 20,
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('assets/perfil.jpeg')}
            style={{ height: 60, width: 60, borderRadius: 50 }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Adriano Arnaud</Text>
            <Text style={{ color: '#000' }}>Profisional</Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#D9D9D9',
            borderRadius: 50,
            height: 38,
            width: 38,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <MaterialCommunityIcons name="message-processing" size={20} />
        </View>
      </View>
      <View style={{ width: '80%', marginLeft: 30, marginTop: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Descrição</Text>
        <Text style={{ color: '#7F7E7E' }}>{data.descricao}</Text>
      </View>
      <Text
        style={{ fontWeight: 'bold', fontSize: 15, width: '90%', marginLeft: 20, marginTop: 10 }}>
        Localização
      </Text>
      <View style={{ width: '90%', marginLeft: 20, marginTop: 10, alignItems: 'center' }}>
        <MapView
          style={{ height: 150, width: '100%', marginTop: 5 }}
          provider={PROVIDER_GOOGLE}
          scrollEnabled={false}
          zoomEnabled={false}
          pitchEnabled={false}
          rotateEnabled={false}
          initialRegion={{
            latitude: data.localizacao.latitude,
            longitude: data.localizacao.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}>
          <Marker
            coordinate={{
              latitude: data.localizacao.latitude,
              longitude: data.localizacao.longitude,
            }}
          />
        </MapView>
      </View>
      <Text
        style={{ fontWeight: 'bold', fontSize: 15, width: '90%', marginLeft: 20, marginTop: 10 }}>
        Detalhes
      </Text>
      <View></View>
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
