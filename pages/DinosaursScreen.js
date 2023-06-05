import React, { useState } from 'react';
import { TouchableOpacity, View, Image, Text, SafeAreaView, FlatList, StyleSheet, Dimensions, TextInput } from 'react-native';
import Constants from 'expo-constants';
import datasource from '../data/datasource';

const DinosaursScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(datasource.dinossauros);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('CardDino', { item })}>
        <View style={[styles.card, { backgroundColor: item.alimentacao === 'Carnívoro' ? '#CC5A08' : '#3CCF6F' }]}>
          <Text style={styles.title}>{item.nome}</Text>
          <View style={styles.row}>
            <View style={styles.details}>
              <Text style={[styles.food, { backgroundColor: item.alimentacao === 'Carnívoro' ? 'red' : 'green' }]}>
                {item.alimentacao}
              </Text>
              <Text style={styles.local}>{item.local}</Text>
            </View>
            <View style={[styles.circle, { backgroundColor: item.alimentacao === 'Carnívoro' ? '#F56B0A' : '#84DE8F' }]}>
              <Image source={item.imagem} style={styles.img} resizeMode="contain" />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = datasource.dinossauros.filter((item) => item.nome.toLowerCase().includes(query.toLowerCase()));
    setFilteredData(filtered);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Digite o nome do dinossauro"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        numColumns={1}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const { width } = Dimensions.get('window');
const itemWidth = width * 0.9;
const itemHeight = itemWidth * 0.6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    margin: 16,
    paddingLeft: 10,
    paddingRight: 10,
  },
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 60,
  },
  card: {
    width: itemWidth,
    height: itemHeight,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  details: {
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: itemWidth * 0.4,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 20,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginBottom: 8,
  },
  food: {
    color: 'white',
    borderRadius: 10,
    width: 100,
    height: 40,
    alignItems: 'center',
    verticalAlign: 'middle',
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 4,
  },
  local: {
    backgroundColor: '#E61E8F',
    color: 'white',
    borderRadius: 10,
    width: 100,
    height: 40,
    alignItems: 'center',
    verticalAlign: 'middle',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default DinosaursScreen;
