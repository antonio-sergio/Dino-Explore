import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, ScrollView, SafeAreaView } from 'react-native';
import Nav from './Nav';

const CardImagem = ({ imagem }) => {
  return <Image source={imagem} style={styles.imagemRegiao} />
}

const ListaImagemRegiao = ({ lista }) => {
  return <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
    {
      lista.map(item => <CardImagem key={item} imagem={item} />)
    }
  </View>
}

const CardDinoScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const colorCard = item.alimentacao === 'Carnívoro' ? '#CC5A08' : '#3CCF6F';
  
  const {
    nome,
    cientifico,
    alimentacao,
    local,
    periodo,
    andar,
    tamanho,
    curiosidade,
    cobertura_corporal,
    predador,
    peso,
    imagem,
    regiao
  } = item;

  return (
    <SafeAreaView contentContainerStyle={styles.container}>
      <ScrollView>
        <View >
          <View style={[styles.card, { backgroundColor: colorCard }]}>
            <Image source={imagem} style={styles.img} resizeMode='contain' />
            <Text style={[styles.title, { backgroundColor: colorCard, color: 'white' }]}>{nome}</Text>
          </View>
          <View >
            <View>
              <Text style={styles.category}>Características Físicas</Text>
              <View style={styles.containerPhysical}>
                <View style={styles.itemPhysical}>
                  <Text style={styles.subtitle}>Andar:</Text>
                  <Text style={styles.info}>{andar}</Text>
                </View>
                <View style={styles.itemPhysical}>
                  <Text style={styles.subtitle}>Comprimento:</Text>
                  <Text style={styles.info}>{tamanho.comprimento}</Text>
                </View>
                <View style={styles.itemPhysical}>
                  <Text style={styles.subtitle}>Altura:</Text>
                  <Text style={styles.info}>{tamanho.altura}</Text>
                </View>
                <View style={styles.itemPhysical}>
                  <Text style={styles.subtitle}>Peso:</Text>
                  <Text style={styles.info}>{peso}</Text>
                </View>
                <View style={styles.itemPhysical}>
                  <Text style={styles.subtitle}>Cobertura Corporal:</Text>
                  <Text style={styles.info}>{cobertura_corporal}</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.category}>Localização e Período</Text>
              <View style={styles.containerLocationAndPeriod} >
                <View style={styles.itemLocationPeriod} >
                  <Text style={styles.subtitle}>Local:</Text>
                  <View style={{ alignItems: "flex-end", textAlign: 'center' }}>
                    <Text style={styles.info}>{local}</Text>
                    <ListaImagemRegiao lista={regiao} />
                  </View>
                </View>
                <View style={styles.itemLocationPeriod} >
                  <Text style={styles.subtitle}>Período:</Text>
                  <Text style={styles.info}>{periodo}</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.category}>Alimentício e Científico</Text>
              <View style={styles.containerScientific} >
                <View style={styles.itemScientific} >
                  <Text style={styles.subtitle}>Alimentação:</Text>
                  <Text style={styles.info}>{alimentacao}</Text>
                </View>
                <View style={styles.itemScientific} >
                  <Text style={styles.subtitle}>Nome Científico:</Text>
                  <Text style={styles.info}>{cientifico}</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.category}>Curiosidades e Comportamento</Text>
              <View style={styles.containerCuriosity} >
                <View style={styles.itemCuriosity}>
                  <Text style={styles.subtitle}>Curiosidade:</Text>
                  <Text style={[styles.info, { flexWrap: 'wrap', height: 100, width: 200, textAlign: "justify" }]}>{curiosidade}</Text>
                </View>

                <View style={styles.itemCuriosity} >
                  <Text style={styles.subtitle}>É predador?</Text>
                  <Text style={[styles.info, { flexWrap: 'wrap', height: 100, width: 200, textAlign: "justify" }]}>{predador}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Nav navigation={navigation} />
    </SafeAreaView>
  );
};

const { width } = Dimensions.get('window');
const itemWidth = width - 32;
const itemHeight = itemWidth;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 8,
  },
  img: {
    width: itemWidth,
    height: itemHeight,
    marginBottom: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    margin: 8,
    color: 'white',
    padding: 10,
    borderRadius: 15,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
  },
  imagemRegiao: {
    width: 100,
    height: 100,
  },
  containerPhysical: {
    justifyContent: "space-between",
    marginBottom: 15
  },
  itemPhysical: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 8
  },
  containerLocationAndPeriod: {
    justifyContent: "space-between",
    marginBottom: 15
  },
  itemLocationPeriod: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 8
  },
  containerScientific: {
    justifyContent: "space-between",
    marginBottom: 15
  },
  itemScientific: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 8
  },
  containerCuriosity: {
    justifyContent: "space-between",
    marginBottom: 15
  },
  itemCuriosity: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 8
  },
  category: {
    marginLeft: 8,
    fontSize: 20,
    marginTop: 10,
    color: "#E61E8F",
    fontWeight: 'bold',
  }
});

export default CardDinoScreen;
