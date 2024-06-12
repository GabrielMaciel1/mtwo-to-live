import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';



import { FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList } from 'navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Details'>;

const Card = ({ data }: { data: any }) => {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    navigation.navigate('Details', { data });
  };

  return (
    <Pressable onPress={handlePress} style={styles.card}>
      <View style={styles.favoriteIconContainer}>
          <MaterialCommunityIcons
            name={data.isFavorited ? 'heart' : 'heart-outline'}
            size={24}
            color={data.isFavorited ? 'red' : 'black'}
          />
        </View>
        <Image source={data.fotos[0]} alt='casa' style={styles.image} />
      <View style={styles.content}>
        <View style={styles.badgeContainer}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{data.imovelType}</Text>
          </View>
          <Text style={styles.price}>
            {data.tipo === 'Venda' ? `R$ ${data.preco.toLocaleString()}` : `R$ ${data.preco.toLocaleString()} / mês`}
          </Text>
        </View>
        <Text style={styles.title}>{data.titulo}</Text>
        <View style={{ flexDirection: 'row', gap: 5, marginBottom: 5, marginTop: 5 }}>
          <FontAwesome6 name="location-dot" size={20} />
          <Text>{`${data.endereco.bairro} - ${data.endereco.cidade}`}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 20,
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
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderColor: '#000',
    borderWidth: 0.5,
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

export default Card;
