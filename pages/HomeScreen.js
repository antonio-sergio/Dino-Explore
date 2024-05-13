import React from 'react';
import { View, StyleSheet, Image, Dimensions, Text, ScrollView, SafeAreaView, TouchableOpacity, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import banner from '../assets/banner.jpg';
const { width } = Dimensions.get('window');

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerGreeting}>
            <Text style={styles.greeting}>Descubra o mundo Jurássico</Text>
          </View>
          <View style={styles.containerBanner}>
            <Image style={styles.banner} source={banner} />
          </View>
          <Text style={styles.subtitle}>Recomendação de Vídeo</Text>
          <View style={styles.containerVideo}>
            {Platform.OS === "web" ? (
              <iframe src="https://www.youtube.com/embed/8N2Ia94Zf5g" height={'100%'} width={'100%'} />

            ) : (
              <WebView
                style={{ width: '100%', height: 300 }}
                source={{ uri: 'https://www.youtube.com/embed/8N2Ia94Zf5g' }}
                allowsFullscreenVideo={true}
                mediaPlaybackRequiresUserAction={false}
              />)
            }

          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Memes')} style={styles.navButton}>
            <Text style={styles.btnMeme}>Divirta-se com os Memes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    marginBottom: 30,
    paddingBottom: 30
  },
  containerGreeting: {
    width: width,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  greeting: {
    width: width,
    marginHorizontal: 8,
    color: '#299E3F',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  containerBanner: {
    width: width * 0.9,
    height: width * 0.6,
    justifyContent: 'center',
    marginVertical: 15
  },
  banner: {
    width: width * 0.9,
    height: width * .6,
    borderRadius: 10
  },
  containerVideo: {
    width: width * 0.9,
    height: width * 0.6,
    marginVertical: 15,
  },
  subtitle: {
    fontSize: 20,
    borderTopWidth: 2,
    borderColor: '#299E3F',
    width: width * 0.9,
    fontWeight: '500',
    paddingTop: 10
  },
  btnMeme: {
    fontSize: 20,
    backgroundColor: '#299E3F',
    color: 'white',
    padding: 5,
    marginBottom: 10,
    borderRadius: 10
  }
});

export default HomeScreen;
