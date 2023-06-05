import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import dinos from '../assets/icons/triceratops.png';
import home from '../assets/icons/green-house.png';
import choose from '../assets/icons/choose.png';
import news from '../assets/icons/news.png';

const Nav = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navMenu}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.navButton}
      >
        <Image style={styles.icones} source={home} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Dinos')}
        style={styles.navButton}
      >
        <Image style={styles.icones} source={dinos} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Quiz')}
        style={styles.navButton}
      >
        <Image style={styles.icones} source={choose} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('News')}
        style={styles.navButton}
      >
        <Image style={styles.icones} source={news} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  icones: {
    width: 30,
    height: 30
  },
  navMenu: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    position: 'absolute',
    bottom: 0,
  },
  navButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Nav;