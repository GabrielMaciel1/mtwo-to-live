import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { AntDesign, FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

interface Suggestion {
  properties: {
    formatted: string;
    place_id: string;
  };
}

const AddressAutocomplete = ({ query, setQuery, setLocation }:any) => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const API_KEY = '1b38d867f26844ec8da11c409d6f1ecd';

  const handleInputChange = async (text: string) => {
    setQuery(text);
    if (text.length >= 2) {
      try {
        const response = await axios.get(`https://api.geoapify.com/v1/geocode/autocomplete`, {
          params: {
            text: text,
            apiKey: API_KEY,
            limit: 3,
            lang: 'pt',
          },
        });
        setSuggestions(response.data.features);
      } catch (error) {
        console.error(error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectSuggestion = (suggestion: Suggestion) => {
    setQuery('');
    setLocation(suggestion.properties.formatted)
    setSuggestions([]);
  };

  const handleBlur = () => {
    setSuggestions([]);
  };

  return (
    <>
      <TextInput
        style={styles.input}
        value={query}
        onChangeText={handleInputChange}
        placeholder="Digite sua localização..."
      />
      {suggestions.length > 0 && (
        <View style={styles.suggestionsContainer}>
          {suggestions.map((suggestion) => (
            <TouchableOpacity
              key={suggestion.properties.place_id}
              style={styles.suggestionItem}
              onPress={() => handleSelectSuggestion(suggestion)}
            >
              <Text>{suggestion.properties.formatted}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </>
  );
};

const SearchBar: React.FC = ({location, setLocation}: any) => {
  const [query, setQuery] = useState<string>('');

  const renderHeader = () => (
    <>
      <View style={{ justifyContent: 'space-between', width: '89%', flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.labelAndIcon}>
          <Text style={styles.label}>Localização</Text>
          <AntDesign name={'down'} size={10} style={styles.icon} color={'#000'} />
        </View>
        <MaterialCommunityIcons name={'bell'} size={17} style={styles.icon} color={'#000'} />
      </View>
      <View style={styles.location}>
        <FontAwesome6 name="location-dot" size={20} color={'#000'} />
        <Text style={{ fontWeight: 'bold' }}>{location}</Text>
      </View>
      <View style={styles.inputAndIcon}>
        <AddressAutocomplete query={query} setQuery={setQuery} setLocation={setLocation}/>
        <View style={{ alignItems: 'center', width: '10%', marginLeft: 10 }}>
          <Ionicons name={'filter'} size={25} color={'#000'} />
        </View>
      </View>
    </>
  );

  return (
    <View>
      {renderHeader()}
    </View>
  );
};

const styles = StyleSheet.create({
  inputAndIcon: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    height: 30,
    gap: 5,
    marginTop: 10,
    position: 'relative',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 10,
  },
  labelAndIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  label: {
    fontSize: 13,
  },
  icon: {
    marginLeft: 5,
  },
  input: {
    width: '80%',
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  autocompleteContainer: {
    position: 'relative',
  },
  suggestionsContainer: {
    width: '80%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    overflow: 'scroll',
    position: 'absolute',
    top: '100%',
    zIndex: 1,
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SearchBar;
