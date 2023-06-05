import { Text, SafeAreaView, TouchableOpacity, View, FlatList, StyleSheet, Dimensions, Image } from "react-native";
import news from '../data/datasource';

const NewsScreen = ({ navigation }) => {
    const allnews = news.news;

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('CardNews', { item })}>
                <View style={styles.containerNews}>
                    <View style={styles.containerImage}>
                        <Image style={styles.image} source={item.image} />
                    </View>
                    <View  style={styles.containerTitle}>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={allnews}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={1}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContainer}
            />
        </SafeAreaView>
    );
}

const { width } = Dimensions.get('window');
const itemWidth = width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center'
    },
    containerNews: {
        width: itemWidth,
        height: 150,
        marginVertical: 5,
        flexDirection: 'row',
        borderBottomWidth: 5,
        borderColor: '#E0DFE1'
    },
    containerTitle:{
        padding: 10,
        borderRadius: 10,
        flexWrap: 'nowrap',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerImage: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%'
    },
    title: {
        color: 'white',
        textAlign: 'justify',
        color: '#3CCF6F'
    },
    listContainer: {
        width: width
    },
    image: {
        width: 150,
        height: 80,
        alignSelf: 'center',
        alignContent: 'center',
        borderRadius: 10
    }
});

export default NewsScreen;
