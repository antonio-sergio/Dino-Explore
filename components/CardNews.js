import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, ScrollView, SafeAreaView } from 'react-native';
import Nav from './Nav';

const CardNews = ({ route, navigation }) => {
  const { item } = route.params;
  const {
    title,
    subtitle,
    article,
    source,
    image,
  } = item;

  const Paragraph = ({ text }) => {
    return <Text >{'\n\n'}{text}</Text>
  }

  const renderArticle = (article) => {
    const news = String(article).split('/');

    return (
      news.map((item, index) => {
        return <Paragraph key={index} text={item} />
      })
    )
  }

  return (
    <SafeAreaView contentContainerStyle={styles.container}>
      <ScrollView>
        <View >
          <Text style={styles.title}>{title}</Text>
        </View>
        <View >
          <Text style={styles.source}>Fonte: {source}</Text>
        </View>
        <View >
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <Image style={styles.img} source={image} />
        <View style={styles.containerNews}>
          <Text style={styles.article}>{renderArticle(article)}</Text>
        </View>
      </ScrollView>
      <Nav navigation={navigation} />
    </SafeAreaView>
  );
};

const { width } = Dimensions.get('window');
const itemWidth = width;
const itemHeight = itemWidth * 0.6;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  img: {
    width: itemWidth * 0.9,
    height: itemHeight,
    marginBottom: 16,
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    margin: 8,
    color: 'black',
    padding: 10,
    borderRadius: 15,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '300',
    marginHorizontal: 8,
    padding: 10,
  },
  source: {
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: 8,
    padding: 10,
  },
  article: {
    marginHorizontal: 8,
    padding: 10,
    textAlign: 'justify',
  },
  containerNews: {
    marginBottom: 50,
    paddingBottom: 50
  }
});

export default CardNews;
