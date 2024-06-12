import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar/SearchBar';
import FilterTypes from '../components/FilterTypes/FilterTypes';
import Highlights from '../components/Highlights/Highlights';
import LocationClose from '../components/LocationClose/LocationClose';
import { anotherApi, api } from 'utils/api';

const Home = () => {
  const [location, setLocation] = useState('Fortaleza, CE');
  const [highlights, setHighlights] = useState([]);
  const [locationClose, setLocationClose] = useState([]);

  // Função para filtrar os endereços baseado na localização
  const filterAddresses = (location, type) => {
    const searchTerm = location.toLowerCase();
    const filter = (highlight) => {
      const addressFields = [
        highlight.endereco.bairro,
        highlight.endereco.cidade,
        highlight.endereco.estado,
      ];
      return addressFields.some((field) =>
        field.toLowerCase().startsWith(searchTerm)
      );
    };
    const apiSearch = type === 'highlights' ? api : anotherApi;
    return apiSearch.filter(filter);
  };

  useEffect(() => {
    // Filtrando os destaques e locais próximos baseado na localização atual
    const filteredHighlights = filterAddresses(location, 'highlights');
    const filterLocationClose = filterAddresses(location, 'locationClose');

    // Atualizando os estados com os resultados filtrados
    setLocationClose(filterLocationClose);
    setHighlights(filteredHighlights);
  }, [location]);

  return (
    <ScrollView style={styles.container}>
      <SearchBar location={location} setLocation={setLocation} />
      <FilterTypes />
      {highlights.length || locationClose.length ? (
        <>
          {highlights.length > 0 && <Highlights highlights={highlights} />}
          {locationClose.length > 0 && <LocationClose locationClose={locationClose} />}
        </>
      ) : (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultsText}>
            Não encontramos imóveis nesta localidade. Por favor, tente outra busca.
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  noResultsText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
});

export default Home;
