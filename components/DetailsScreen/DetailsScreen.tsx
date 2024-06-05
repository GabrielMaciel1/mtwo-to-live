import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

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
            borderRadius: 30,
            marginLeft: 15,
            marginTop: 10,
            paddingHorizontal: 15,
            paddingVertical: 5,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'flex-start',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            {data.imovelType}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 5,
          }}>
          {data.titulo}
        </Text>
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
