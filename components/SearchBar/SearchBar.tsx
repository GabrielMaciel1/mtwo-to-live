import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Ionicons, AntDesign, FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = () => {
  return (
    <View>
      <View style={{justifyContent: 'space-between', width: '89%', flexDirection: 'row', alignItems: 'center', }}>
        <View style={styles.labelAndIcon}>
          <Text style={styles.label}>Localização</Text>
          <AntDesign name={'down'} size={10} style={styles.icon} color={'#000'}/>
          
        </View>
        <MaterialCommunityIcons name={'bell'} size={17} style={styles.icon} color={'#000'}/>
      </View>
      <View style={styles.location}>
        <FontAwesome6 name="location-dot" size={20} color={'#000'}/>
        <Text style={{ fontWeight: 'bold' }}>Fortaleza,CE</Text>
      </View>
      <View style={styles.inputAndIcon}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
         
        />
        <View style={{ alignItems: 'center', width: '10%', marginLeft: 10 }}>
          <Ionicons name={'filter'} size={25} color={'#000'}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputAndIcon: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    gap: 5,
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
    borderRadius: 50,
    width: '80%',
    backgroundColor: '#fff',
    paddingLeft: 20
  },
});

export default SearchBar;
